import { defineStore } from "pinia";
//TODO добавити обробник помилок 
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signOut
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {} as Auth,
      isLoggedIn: false,
    };
  },
  getters: {
    getUserEmail: (state) => state.user.email,

    getAuthState: (state) => state.isLoggedIn,
  },
  actions: {
    setAuth(value: Auth) {
      this.user = value;
    },
    setAuthState(value: boolean) {
      this.isLoggedIn = value;
    },
    setAuthField(key: keyof Auth, value: string) {
      this.user[key] = value;
    },
    getAuthField(key: keyof Auth): string {
      return this.user[key];
    },

    async register(email: any, password: any) {
      try {
        return await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        );
      } catch (error) {
        alert(error);
      }
    },
    async login(email: any, password: any) {
      try {
        const auth = getAuth();
        return await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } catch (error) {
        
      }
    },

    async updateUserEmail(newEmail: string){
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          throw new Error("Користувач не залогінений.");
        }
        
        return await updateEmail(user, newEmail)
      } catch (error) {
        
      }
    },

    async updateUserPassword(currentPassword: string, newPassword: string) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
    
        if (!user) {
          throw new Error("Користувач не залогінений.");
        }

        const credential = EmailAuthProvider.credential(user.email!, currentPassword);
        await reauthenticateWithCredential(user, credential);

        await updatePassword(user, newPassword);
      } catch (error: any) {
        
      }
    },

    async handlerSignOut() {
      try {
        let auth = getAuth();
        await signOut(auth);
        this.isLoggedIn = false;
      } catch (error) {
        alert(error);
      }
    },
  },
});

interface Auth {
  email: string;
  password: string;
}
