import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { Cookies } from "quasar";

export const useBaseStore = defineStore("base", {
  state: () => ({
    theme: "light",
    links: [
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
      {
        title: "Almaty, 151 Minbayev st, office 35",
        icon: "location_on",
        link: "https://go.2gis.com/m8u4qg",
      },
    ],
    icons: [
      {
        icon: "scale",
      },
      {
        icon: "table_rows",
      },
      {
        icon: "view_timeline",
      },
      {
        icon: "hourglass_top",
      },
      {
        icon: "payments",
      },
      {
        icon: "public",
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
    getIcons() {
      return this.icons
    }
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
      return this.links;
    },
  },
});
