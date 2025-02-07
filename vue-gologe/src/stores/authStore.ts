import { defineStore } from "pinia";
//TODO добавити обробник помилок 
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
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

    },

    async updateUserPassword(currentPassword: string, newPassword: string) {
      console.log("Start");
      
      const auth = getAuth();
      const user = auth.currentUser;
      
      if(user){ 
        console.log(user);
        
        return await updatePassword(user, newPassword).then(() => {
          console.log("Update Password");
          
        }).catch((error) => { console.log(error);
        });
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
