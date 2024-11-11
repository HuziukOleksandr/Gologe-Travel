import { defineStore } from 'pinia';
import { ref, set, get, update, remove, child, orderByChild, query, equalTo} from 'firebase/database';
import { getDatabase } from 'firebase/database';
import type  UserType from '@/types/user-types.ts'

// TODO добавити обробник помилок
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as UserType,
      errorMsg: '' as any,
    }
  },
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(value: UserType) {
      this.user = value;
    },
    async setUserProperty(key: keyof UserType, value: string) {
      this.user[key] = value;
    },

    async setUserInDatabase(userId: string) {
      const database = getDatabase();
      const userRef = ref(database, `users/${userId}`); 
      try {
        await set(userRef, this.user);
      } catch (error) {
        this.errorMsg = (error as Error).message;
      }
    },

    async getUserInDatabase(userId: string) {
      try {
        const database = getDatabase();
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, `users/${userId}`));

        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log(userData);
        }
      } catch (error) {
        this.errorMsg = (error as Error).message;
      }
    },
    async getUserByEmail(email: string) {
      try {
        const database = getDatabase();
        const dbRef = ref(database, "users");
        const userQuery = query(dbRef, orderByChild("email"), equalTo(email));
        const snapshot = await get(userQuery);
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            this.user = childSnapshot.val();
          });
        }
      } catch (error) {
        this.errorMsg = (error as Error).message;
      }
    },

    async updateUserInDatabase() {

    },

    async removeUserInDatabase() {
      
    }
  
  }
});
