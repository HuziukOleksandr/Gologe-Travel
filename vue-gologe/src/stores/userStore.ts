import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userList: [] as User[]
    }
  },
  getters: {
    getUser() {
      return {}
    }
  },
  actions: {
    addUser(value: User) {
      this.userList.push(value)
    },
  }
})

interface User {
  firstName: string,
  lastName: string,
  age: number
}