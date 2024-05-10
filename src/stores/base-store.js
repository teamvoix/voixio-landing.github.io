import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

export const useBaseStore = defineStore("base", {
  state: () => ({
    theme: "light",
    links: [
      {
        title: "",
        icon: "rocket",
        link: "/info",
      },
      {
        title: "+7 (727) 331 58 00",
        icon: "phone",
        link: "tel:+77273315800",
      },
      {
        title: "team@voix.io",
        icon: "mail",
        link: "mailto:team@voix.io",
      },
    ],
  }),
  getters: {
    getTheme() {
      return this.theme;
    },
    getLinks() {
      return this.links;
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
    updateLinks() {
      const { t } = useI18n();
      this.links[0].title = t("nav.info");
      console.log(` hehe ${this.links[0].title}`);
      return this.links;
    },
  },
});
