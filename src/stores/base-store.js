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
    menuLinks: [
      {
        label: "homepage",
        link: "nav.homepage",
        icon: "home",
      },
      {
        label: "info",
        link: "nav.info",
        icon: "info",
      },
      {
        label: "projects",
        link: "nav.projects",
        icon: "tab",
      },
      {
        label: "ge",
        link: "nav.ge",
        icon: "view_timeline",
      },
    ],
    iconsInfo: [
      {
        icon: "preview",
      },
      {
        icon: "how_to_reg",
      },
      {
        icon: "build_circle",
      },
      {
        icon: "dataset_linked",
      },
      {
        icon: "keyboard_command_key",
      },
      {
        icon: "star_rate",
      },
    ],
    iconsGE: [
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
    sectionChoice: "homepage",
  }),
  getters: {
    getTheme() {
      this.theme = Cookies.has("voix_page_theme")
        ? Cookies.get("voix_page_theme")
        : "light";
      return this.theme;
    },
    getAltTheme() {
      this.theme = Cookies.has("voix_page_theme")
        ? Cookies.get("voix_page_theme")
        : "light";
      if (this.theme == 'light') {
        return "dark"
      } else {
        return "light"
      }
    },
    getMenuLinks() {
      return this.menuLinks
    },
    getIconsInfo() {
      return this.iconsInfo
    },
    getIconsGE() {
      return this.iconsGE
    },
    getSectionChoice() {
      return this.sectionChoice
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
      return this.links;
    },
    setSectionChoice(sectionChoice) {
      this.sectionChoice =  sectionChoice
    },
  },
});
