import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as User
    }
  },
  getters: {

  },
  actions: {
    setUser(value: User) {
      this.user = value;
    },
    setUserProperty(key: keyof User, value: string) {
      this.user[key] = value;
    },
  }
});

interface User {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  birth: string;
}
