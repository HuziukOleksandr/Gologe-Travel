import { defineStore } from 'pinia';

export const useAnimationStore = defineStore("animation", {
  state: () => {
    return {
      headerIsAnimated: false,
      quickSearchIsAnimated: false,
      previewTextIsAnimated: false,
      tripsIsAnimated: false,
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
        this.headerIsAnimated = true;
        this.quickSearchIsAnimated = true;
        this.previewTextIsAnimated = true;
      }, 1000)
    },
    tripsAnimation() {
      setTimeout(() => {
        this.tripsIsAnimated = true;
      }, 100)
    }
  }
})