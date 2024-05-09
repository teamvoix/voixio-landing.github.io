import { defineStore } from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    theme: "light",
  }),
  getters: {
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    setTheme() {
      if (this.theme == "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
});
