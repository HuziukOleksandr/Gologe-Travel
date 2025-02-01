import { defineStore } from 'pinia';

export const useAnimationStore = defineStore("animation", {
  state: () => {
    return {
      headerIsAnimated: false,
    }
  },
  getters: {
    getHeaderValue: (state) => state.headerIsAnimated,
  },

  actions: {
    setHeaderValue(value: boolean) {
      this.headerIsAnimated = value;
    },

    startAnimation() {
      setTimeout(() => {
        console.log("ADDD");
        
        return "true";
      }, 100)
    }
  }
})