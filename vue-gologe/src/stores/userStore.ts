import { defineStore } from 'pinia';
import type  UserType from '@/types/user-types.ts'
import { DatabaseUrl } from '@/constants/Constants';
import axios from 'axios'
// TODO добавити обробник помилок
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as UserType
    }
  },
  getters: {

  },
  actions: {
    setUser(value: UserType) {
      this.user = value;
    },
    setUserProperty(key: keyof UserType, value: string) {
      this.user[key] = value;
    },

    async setUserInDatabase(user: UserType) {
      try {
        return await axios.post(DatabaseUrl, user)
      } catch (error) {
        alert(error);
      }
    },

    async getUserIndatabase(email: string) {
      try {
        const response = await (axios.get(DatabaseUrl));
        const users: { [key: string]: UserType } = response.data;
        const user = Object.values(users).find(user => user.email === email)
        return user;
      } catch (error) {
        alert(error)
      }
    }
  }
});
