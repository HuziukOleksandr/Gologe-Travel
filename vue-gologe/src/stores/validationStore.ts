import { defineStore } from 'pinia';

export const useValidationStore = defineStore("validation", {
  actions: {
    Name(value: string) {
      for (let index = 0; index < value.length; index++) {
        const char = value[index];
        if (!/^[a-zA-Zа-яА-Я]$/.test(char)) {
          return {"false": "Must be onle letters"}; 
        }
      }
      return {"true": "Succes"};
    },
    Email(value: string) {

    },
    Password(value: string) {

    },
    Phone(value: string) {

    }
  }
});