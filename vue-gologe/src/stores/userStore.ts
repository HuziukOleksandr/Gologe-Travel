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
      const database = getDatabase();
      const dbRef = ref(database);
      try {
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
      const database = getDatabase();
      const dbRef = ref(database, "users");
      const userQuery = query(dbRef, orderByChild("email"), equalTo(email));
      try {
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
      const database = getDatabase();
      const userRef = ref(database, "users");
      const userQuery = query(userRef, orderByChild("email"), equalTo(this.user.email));
      try {
        // Отримуємо знімок даних користувачів, що відповідають email
        const snapshot = await get(userQuery);
    
        if (snapshot.exists()) {
          // Проходимо по знайдених записах та оновлюємо їх
          snapshot.forEach((userSnapshot) => {
            const userKey = userSnapshot.key; // Отримуємо ключ вузла користувача
            if (userKey) {
              const userToUpdateRef = ref(database, `users/${userKey}`);
              update(userToUpdateRef, this.user); // Оновлюємо дані
            }
          });
          console.log("Дані користувача успішно оновлено");
        } else {
          console.log("Користувача не знайдено");
        }
      } catch (error) {
        console.error("Помилка оновлення даних:", (error as Error).message);
      }
    },

    async removeUserInDatabase(email: string) {
      const database = getDatabase();
      const userRef = ref(database, "users");
      const userQuery = query(userRef, orderByChild("email"), equalTo(email))
      try {
        const snapshot = await get(userQuery);
        if(snapshot.exists()) {
          snapshot.forEach((userSnapshot) => {
            console.log(userSnapshot)
            const userKey = userSnapshot.key;
            if(userKey) {
              const userToDeleteRef = ref(database, `users/${userKey}`);
              remove(userToDeleteRef);
            }
          });
        }  else {
          this.errorMsg = "Користувача не знайдено"
        }
      } catch (error) {
        this.errorMsg = (error as Error).message;
      }
    }
  }
});
