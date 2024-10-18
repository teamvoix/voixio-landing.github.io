<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template :class="theme">
  <q-page>
    <!-- EXPERTISE -->
    <section id="about">
      <div :class="`body-content`" style="padding-top: 40px">
        <div style="max-width: 600px; margin-bottom: 30px; margin-inline: 40px">
          <img src="images/expertise.jpg" alt="Фоновое изображение" :ratio="16 / 9"
          :class="`${imageDesktop}`" style="border-radius: 10px; max-width: 100%" />
        </div>

        <div class="text-container" style="max-width: 800px; white-space: pre-wrap">
          <p style="font-size: 40px">{{ $t('expertise.title') }}</p>
          <p :class="`text-container ${aboutTextDesktop}`" style="font-size: 23px">{{ $t('expertise.text') }}</p>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="about" style="margin-bottom: 50px">
      <hr style="margin-inline: 100px; margin-top: 40px" />
      <div class="body-content">

        <div class="row" style="display: flex; flex-wrap: wrap; justify-content: center; white-space: pre-wrap">
          <div v-for="n, index in icons" class="custom-item text-center">
            <q-avatar size="70px" :icon="n.icon" />
            <p style="font-size: 20px; font-weight: bold; margin-top: 15px; margin-bottom: 10px">
              {{ $t(`features.text${index+1}`) }}
            </p>
          </div>
        </div>

      </div>
      <hr style="margin-inline: 100px; margin-bottom: 50px" />
    </section>

    <!-- SOFTWARE-DEVELOPMENT -->
    <section id="about">
      <div class="body-content">
        <div style="max-width: 600px; margin-top: 20px; margin-bottom: 20px; margin-inline: 40px">
          <img src="images/softwareDevelopment.jpg" alt="Фоновое изображение" :ratio="16 / 9"
            style="border-radius: 10px; max-width: 100%" />
        </div>

        <div class="text-container" style="max-width: 800px; white-space: pre-wrap">
          <p style="font-size: 40px; margin-top: 10px; margin-bottom: 30px">{{ $t('softwareDevelopment.title') }}</p>
          <p style="font-size: 21px">{{ $t('softwareDevelopment.text1') }}</p>

          <div style="margin-top: 80px; margin-bottom: 20px">
            <p style="font-size: 23px; font-weight: bolder">{{ $t('softwareDevelopment.text2') }}</p>
            <q-chip v-for="n in 7" square :ripple="false" :class="`${altTheme} ${deviceType}`">
              {{ $t(`softwareDevelopment.chip${n}`) }}
            </q-chip>
          </div>
        </div>
      </div>
    </section>
    <br />

    <!-- COMPETENCY -->
    <section id="competency">
      <h3 class="text-center">{{ $t('competency.title') }}</h3>
      <div class="row justify-center q-gutter-sm">
        <q-card flat bordered class="col-4 col-sm-3 col-md-2" style="border: 2px solid grey; margin: 20px" v-for="n in 6">
          <q-card-section :class="`${theme} text-center row items-center justify-center`" style="padding-bottom: 0px">
            <a :href="links[n - 1]"><img :src="images[n - 1]" style="height: 50px; width: 50px" />
              <p :class="theme">{{ names[n-1] }}</p>
            </a>
          </q-card-section>
        </q-card>
      </div>
    </section>

  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Info",

  setup() {
    const $q = useQuasar();
    const theme = computed(() => baseStore.getTheme)
    const altTheme = computed(() => baseStore.getAltTheme)
    const deviceType = $q.platform.is.desktop ? "desktop" : "mobile";
    const icons = baseStore.getIconsInfo

    return {
      theme,
      altTheme,
      deviceType,
      icons,

      imageDesktop: ref(''),
      aboutTextDesktop: ref(''),
    };
  },

  created() {
    if (this.$q.platform.is.desktop) {
      this.imageDesktop = 'image-desktop'
      this.aboutTextDesktop = 'image-desktop'
    }
  },

  data() {
    return {
      links: [
        'http://nodejs.org/',
        'http://quasar.dev/',
        'http://golang.org/',
        'https://facebook.github.io/react/',
        'http://www.postgresql.org/',
        'https://www.java.com/',
      ],
      images: [
        'images/nodejs.svg',
        'images/quasar.svg',
        'images/golang.svg',
        'images/react.svg',
        'images/posgresql.svg',
        'images/java.svg',
      ],
      names: [
        'NodeJS',
        'Quasar',
        'Golang',
        'ReactJS',
        'PostgreSQL',
        'Java',
      ],
    }
  }
});
</script>
