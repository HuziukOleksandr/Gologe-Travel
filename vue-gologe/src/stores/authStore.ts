import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("user", {
  state: () => {
    return {
      user: {} as User,
      isLoggedIn: false,
    };
  },
  getters: {
    getUserFormated: (state) => JSON.stringify(state.user, null, 2),
    getUser: (state) => state.user,
    
    getUserName: (state) => state.user.firstName,

    getUserLastName: (state) => state.user.lastName,

    getUserEmail: (state) => state.user.email,

    getAuthState: (state) => state.isLoggedIn,
  },
  actions: {
    setUser(value: User) {
      this.user = value;
    },
    setAuthState(value: boolean) {
      this.isLoggedIn = value;
    },
    setUserField(key: keyof User, value: string) {
      this.user[key] = value;
    },
    getUserField(key: keyof User): string {
      return this.user[key];
    },

    async register() {
      try {
        localStorage.setItem("email", this.user.email);
        localStorage.setItem("name", this.user.firstName);
        localStorage.setItem("lastName", this.user.lastName);
        return await createUserWithEmailAndPassword(
          getAuth(),
          this.user.email,
          this.user.password
        );
      } catch (error) {
        alert(error);
      }
    },
    async login() {
      try {
        const auth = getAuth();
        return await signInWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        );
      } catch (error) {
        alert(error);
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

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
