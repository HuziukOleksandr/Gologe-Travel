import { defineStore } from "pinia";
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  orderByChild,
  query,
  equalTo,
} from "firebase/database";
import {
  getStorage,
  ref as SRef,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { storage } from "@/main";
import { getDatabase } from "firebase/database";
import { getItem } from "@/services/LocaleStorage";
import type UserType from "@/types/user-types.ts";
import ResultType from "@/types/result-user-types";

// TODO добавити обробник помилок
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as UserType,
      userId: getItem("uid") || "",
      errorMsg: "" as any,
      result: {} as ResultType,
    };
  },
  getters: {
    getUser: (state) => state.user,
    getResult: (state) => state.result,
  },
  actions: {
    setUser(value: UserType) {
      this.user = value;
    },
    async setUserProperty(key: keyof UserType, value: any) {
      this.user[key] = value;
    },

    async setUserInDatabase(userId: string) {
      const database = getDatabase();

      const userRef = ref(database, `users/${userId}`);
      try {
        await set(userRef, this.user);
        this.result.set = "Success";
      } catch (error) {
        this.errorMsg = "Error:" + (error as Error).message;
      }
    },

    async getUserInDatabase(userId: string) {
      const database = getDatabase();
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, `users/${userId}`));
        if (snapshot.exists()) {
          const userData = snapshot.val();
          this.result.get = "Succes";
          return userData;
        }
      } catch (error) {
        this.errorMsg = "Error:" + (error as Error).message;
      }
    },

    async getCurrentUser() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${this.userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async updateUserInDatabase() {
      const database = getDatabase();
      const userRef = ref(database, "users");
      const userQuery = query(
        userRef,
        orderByChild("email"),
        equalTo(this.user.email)
      );
      try {
        const snapshot = await get(userQuery);
        if (snapshot.exists()) {
          snapshot.forEach((userSnapshot) => {
            const userKey = userSnapshot.key;
            if (userKey) {
              const userToUpdateRef = ref(database, `users/${userKey}`);
              update(userToUpdateRef, this.user);
              this.result.update = "Success";
            }
          });
        } else {
          this.result.update = "User not found";
        }
      } catch (error) {
        this.errorMsg = "Error:" + (error as Error).message;
      }
    },

    async uploadImageInStorage(file: File) {
      try {
        const storageRef = SRef(
          storage,
          `gs://gologe-72d19/backgrounds/${this.userId}`
        );
        await uploadBytes(storageRef, file); // Завантаження файлу
        const url = await getDownloadURL(storageRef); // Отримуємо URL
        console.log("Файл завантажено:", url);
        return url;
      } catch (error) {}
    },

    async removeUserInDatabase(email: string) {
      const database = getDatabase();
      const userRef = ref(database, "users");
      const userQuery = query(userRef, orderByChild("email"), equalTo(email));
      try {
        const snapshot = await get(userQuery);
        if (snapshot.exists()) {
          snapshot.forEach((userSnapshot) => {
            console.log(userSnapshot);
            const userKey = userSnapshot.key;
            if (userKey) {
              const userToDeleteRef = ref(database, `users/${userKey}`);
              remove(userToDeleteRef);
              this.result.remove = "Succes";
            }
          });
        } else {
          this.result.remove = "User not found";
        }
      } catch (error) {
        this.errorMsg = "Error:" + (error as Error).message;
      }
    },
  },
});
