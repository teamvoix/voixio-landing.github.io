<template>
  <q-layout view="lHh Lpr lFf" :class="theme">
    <!-- HEADER -->
    <q-header elevated>
      <q-toolbar style="background-color: #ff851b">
        <q-btn flat dense round icon="menu" aria-label="Menu" style="color: #ffffff" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <a href="/"><img src="/images/logo.png" height="50" style="padding-top: 8px" /></a>
        </q-toolbar-title>

        <q-toolbar-title v-if="$q.platform.is.desktop">
          <q-btn flat dense round :label="$t('nav.about')" href="/info" style="color: #ffffff; font-weight: bolder" />
        </q-toolbar-title>

        <q-toolbar-title style="text-align: end; padding-right: 10px">
          <q-btn @click="setTheme()" flat>
            <q-icon v-if="theme == 'light'" name="light_mode" color="white" />
            <q-icon v-else name="nightlight_round" color="white" />
          </q-btn>

          <q-btn flat>

            <q-list style="width: 80px">
              <q-select dark v-model="locale" :options="localeOptions" dense borderless emit-value map-options
                options-dense style="padding: 10px">
              </q-select>
            </q-list>

          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-not-above bordered
      style="background: linear-gradient(to bottom, #ff851b, #ff851b)">
      <q-list>
        <q-item-label header style="color: #ffffff">
          {{ $t("drawer.title") }}
        </q-item-label>

        <LocalLinks v-if="$q.platform.is.desktop" />
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- TOOLBAR-FOR-MOBILE -->
    <div v-if="$q.platform.is.mobile" :class="`text-center ${theme}`">
      <div style="margin: 10px">
        <img src="/images/logo.png" height="50" style="padding-top: 8px" /><br />
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


    <!-- TOOLBAR-FOR-DESKTOP -->
    <div v-if="$q.platform.is.desktop" class="q-pa-md" :class="theme">
      <q-separator color="gray" inset spaced />
      <br />
      <div class="row justify-around" style="height: 70px">
        <div class="col-12 col-md-1">
          <img src="/images/logo.png" height="50" style="padding-top: 8px" /><br />
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
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import EssentialLink from "components/EssentialLink.vue";
import LocalLinks from "components/LocalLinks.vue";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    LocalLinks,
  },

  setup() {
    const $q = useQuasar();
    const { locale } = useI18n({ useScope: "global" });
    const leftDrawerOpen = ref(false);
    const theme = computed(() => baseStore.getTheme);

    const linksList = [
      {
        title: "Instagram",
        icon: "ion-logo-instagram",
        link: "https://www.instagram.com/quiz.ui/",
      },
      {
        title: "+7 707 191 4724",
        icon: "ion-logo-whatsapp",
        link: "https://wa.me/77071914724",
      },
    ];

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      locale,
      localeOptions: [
        { value: "kz", label: "KZ" },
        { value: "ru", label: "RU" },
        { value: "en-US", label: "EN" },
      ],
      theme,
    };
  },

  methods: {
    async setTheme() {
      await baseStore.setTheme();
    }
  }
});
</script>

<style>
.light {
  background-color: #FFFFFF;
  color: #000000;
}

.dark {
  background-color: #000000;
  color: #FFFFFF;
}
</style>
