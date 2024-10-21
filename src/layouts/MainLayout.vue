<template>
  <q-layout view="lHh Lpr lFf" :class="theme">
    <!-- HEADER -->
    <q-header elevated>
      <q-toolbar :class="theme">
        <q-btn flat dense round :icon="(dialog == true) ? 'close' : 'menu'" aria-label="Menu"
          @click="dialog = !dialog" />

        <q-toolbar-title>
          <a href="/">
            <img v-if="theme == 'light'" src="images/logolebedev.png" height="40" style="padding-top: 8px" />
            <img v-else src="images/darklebedev.png" height="40" style="padding-top: 8px" />
          </a>
        </q-toolbar-title>

        <q-toolbar-title v-if="$q.platform.is.desktop">
          <q-btn :label="$t('nav.homepage')" size="large" @click="setSectionChoice('homepage')"
            style="margin-inline: 10px" dense flat />
          <q-btn :label="$t('nav.info')" size="large" @click="setSectionChoice('info')"
            style="margin-inline: 10px" dense flat />
          <q-btn :label="$t('nav.ge')" size="large" @click="setSectionChoice('ge')"
            style="margin-inline: 10px" dense flat />
        </q-toolbar-title>

        <q-toolbar-title :class="theme" style="text-align: end; margin-inline: -50px; margin-right: 20px">

          <q-btn flat style="margin-inline: 0px; padding-inline: 0px">
            <q-list style="width: 70px;">
              <q-select :dark="theme == 'dark'" v-model="locale" :options="localeOptions" dense borderless emit-value
                map-options options-dense style="padding: 10px">
              </q-select>
            </q-list>
          </q-btn>

          <q-btn @click="setTheme()" flat>
            <q-icon v-if="theme == 'light'" name="light_mode" />
            <q-icon v-else name="nightlight_round" />
          </q-btn>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>


    <!-- DIALOG -->
    <q-dialog v-model="dialog" transition-show="rotate" transition-hide="rotate">
      <q-card :class="theme">
        <div class="q-pa-md text-center">

          <q-list>
            <!-- ACTION-LINKS -->
            <q-item v-for="link in menuLinks" :key="link.label" v-bind="link" clickable @click="setSectionChoice(link.label)">
              <q-item-section v-if="link.icon" avatar>
                <q-icon :name="link.icon" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ $t(link.link) }}</q-item-label>
              </q-item-section>
            </q-item>

            <!-- CONTACT-LINKS -->
            <q-item v-for="link in essentialLinks" :key="link.title" v-bind="link" clickable :href="link.link">
              <q-item-section v-if="link.icon" avatar>
                <q-icon :name="link.icon" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ link.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-btn flat outline :label="$t('nav.close')" v-close-popup />
        </div>
      </q-card>
    </q-dialog>


    <!-- PAGE -->
    <q-page-container>
      <router-view />
    </q-page-container>


    <!-- TOOLBAR-FOR-MOBILE -->
    <div v-if="$q.platform.is.mobile" :class="`text-center ${theme}`">
      <div v-if="theme == 'light'" style="margin: 10px">
        <img src="images/logolebedev.png" height="40" style="padding-top: 8px" /><br />
      </div>
      <div v-else style="margin: 10px">
        <img src="images/darklebedev.png" height="40" style="padding-top: 8px" /><br />
      </div>
      <div style="font-size: 16px; margin: 10px">
        <q-icon name="mail" size="24px" /><br />
        <a href="mailto:team@voix.io" :class="theme">team@voix.io</a>
      </div>
      <div style="font-size: 16px; margin: 10px">
        <q-icon name="call" size="24px" /><br />
        <a href="tel:+77273315800" :class="theme">+7 (727) 331 58 00</a>
      </div>
      <div style="font-size: 16px; margin: 10px; margin-bottom: 0px">
        <q-icon name="location_on" size="24px" /><br />
        <a href="https://go.2gis.com/m8u4qg" :class="theme">Kazakhstan, Almaty, 151 Minbayev st, office 35</a>
      </div><br />
    </div>
    <br />


    <!-- TOOLBAR-FOR-DESKTOP -->
    <div v-if="$q.platform.is.desktop" class="q-pa-md" :class="theme">
      <q-separator color="gray" inset spaced />
      <br />
      <div class="row justify-around" style="height: 70px">
        <div v-if="theme == 'light'" class="col-12 col-md-1">
          <img src="images/logolebedev.png" height="40" style="padding-top: 8px" /><br />
        </div>
        <div v-else class="col-12 col-md-1">
          <img src="images/darklebedev.png" height="40" style="padding-top: 8px" /><br />
        </div>
        <div class="col-12 col-md-1">
          <q-icon name="mail" size="24px" /><br />
          <a href="mailto:team@voix.io" :class="theme">team@voix.io</a>
        </div>
        <div class="col-12 col-md-1">
          <q-icon name="call" size="24px" /><br />
          <a href="tel:+77273315800" :class="theme">+7 (727) 331 58 00</a>
        </div>
        <div class="col-12 col-md-1">
          <q-icon name="location_on" size="24px" /><br />
          <a href="https://go.2gis.com/m8u4qg" :class="theme">Kazakhstan, Almaty, 151 Minbayev st, office 35</a>
        </div>
      </div><br /><br />
    </div>
    <br />
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar, useMeta, Cookies } from "quasar";
import { useI18n } from "vue-i18n";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

const metaData = {
  title: 'Voix LLC - Разработка ПО любого уровня сложности на заказ',

  meta: {
    description: { name: 'description', content: 'Полный комплекс услуг по разработке программного обеспечения любого уровня сложности на заказ. Оптимальные бизнес и технологические решения, удовлетворяющие вашим требованиям и заявленному бюджету.' },
    keywords: { name: 'keywords', content: 'Разработка ПО, Разработка Программного обеспечния, Разработка Сайтов, Разработка Web-приложений, ГИС, Интеграция' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
}

export default defineComponent({
  name: "MainLayout",

  setup() {
    const $q = useQuasar();
    const { locale } = useI18n({ useScope: "global" });
    const localeValue = ref(Cookies.get('voix_language') || 'ru');

    const theme = computed(() => baseStore.getTheme);
    const sectionChoice = computed(() => baseStore.getSectionChoice)
    const menuLinks = baseStore.getMenuLinks;
    const linksList = computed(() => baseStore.getLinks());

    useMeta(metaData)

    return {
      essentialLinks: linksList,
      locale,
      localeValue,
      localeOptions: [
        { value: "kz", label: "KZ" },
        { value: "ru", label: "RU" },
        { value: "en-US", label: "EN" },
      ],

      theme,
      sectionChoice,
      menuLinks,
      dialog: ref(false),
    };
  },

  watch: {
    locale(newLocale) {
      this.$i18n.locale = newLocale;
      Cookies.set('voix_language', newLocale, { sameSite: "None", secure: true });
      this.locale = newLocale;
    }
  },

  methods: {
    setTheme() {
      baseStore.setTheme();
    },

    setSectionChoice(sc) {
      baseStore.setSectionChoice(sc)
      setTimeout(10000)
      this.dialog = false
    },
  }
});
</script>

<style>
.light {
  background-color: #FFFFFF;
  color: #000000;
}

.dark {
  background-color: #1e1e1e;
  color: #FFFFFF;
}

.mobile {
  font-size: 16px;
}

.desktop {
  font-size: 20px;
}

.body-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 12px;
  margin: 20px;
}

.image-desktop {
  display: flex;
  max-height: 350px;
}

.about-text-desktop {
  flex: 1;
}

.header-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  margin: 20px;
}

.body-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  margin: 10px;
}

.custom-item {
  margin: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.image-container,
.text-container {
  flex: 1 0 300px;
}

p,
a,
ul,
li,
h1,
h2,
h3,
h4,
h5 {
  font-family: Garamond
}

a {
  text-decoration: none;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
