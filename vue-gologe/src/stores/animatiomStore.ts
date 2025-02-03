import { defineStore } from 'pinia';

export const useAnimationStore = defineStore("animation", {
  state: () => {
    return {
      headerIsAnimated: false,
      quickSearchIsAnimated: false,
      previewTextIsAnimated: false,
      tripsIsAnimated: false,
      tripsCardsIsAnimated: false,
      cardsIsAnimated: false,
      reviewsIsAnimated: false,
      reviewsCardIsAnimated: false,
      footerIsAnimated: false
    }
  },
  actions: {
    setValue(key: string, value: boolean) {
      if (key in this.$state) {
        (this.$state as any)[key] = value;
      }
    },

    startAnimation(name: string, value: boolean, time: number) {
      setTimeout(() => {
       this.setValue(name, value)
      }, time)
    },
  }
})