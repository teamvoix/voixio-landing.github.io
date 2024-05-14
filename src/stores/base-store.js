import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { Cookies } from "quasar";

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
        title: "GE",
        icon: "satellite",
        link: "/ge",
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
      this.theme = Cookies.has("voix_page_theme")
        ? Cookies.get("voix_page_theme")
        : "light";
      return this.theme;
    },
  },
  actions: {
    setTheme() {
      if (Cookies.has("voix_page_theme")) {
        const theme = Cookies.get("voix_page_theme");
        if (theme == "light") {
          Cookies.set("voix_page_theme", "dark", {
            sameSite: "None",
            secure: true,
          });
          this.theme = "dark";
        } else {
          Cookies.set("voix_page_theme", "light", {
            sameSite: "None",
            secure: true,
          });
          this.theme = "light";
        }
      } else {
        Cookies.set("voix_page_theme", "dark", {
          sameSite: "None",
          secure: true,
        });
        this.theme = "dark";
      }
    },
    getLinks() {
      const { t } = useI18n();
      this.links[0].title = t("nav.info");
      return this.links;
    },
  },
});
