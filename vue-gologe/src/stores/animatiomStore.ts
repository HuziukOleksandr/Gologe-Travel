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
    fromUpToDawn(start: any, end: any) {
      setTimeout(() => {
        return 'true';
        
      }, 100)
    }
  }
})