<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template :class="theme">
  <q-page>
    <!-- EXPERTISE -->
    <section id="about">
      <div class="article-content" style="padding-top: 20px; display: flex">
        <div class="image-container" style="max-width: 600px; margin-bottom: 20px; margin-inline: 40px">
          <img src="images/expertise.jpg" alt="Фоновое изображение" :ratio="16 / 9"
            style="border-radius: 10px; max-width: 100%; height: auto" />
        </div>

        <div class="text-container" style="flex: 1; max-width: 800px">
          <p style="font-size: 40px">{{ $t('expertise.title') }}</p>
          <p style="font-size: 23px">{{ $t('expertise.text') }}</p>
        </div>
      </div>
    </section>

    <!-- SOFTWARE-DEVELOPMENT -->
    <section id="about">
      <div :class="`article-content`"
        style="background: radial-gradient(circle, #e96228 0%, #dd4a00 100%); border-radius: 10px">
        <div class="text-container" style="max-width: 800px; color: #fff9f0">
          <p style="font-size: 40px">{{ $t('softwareDevelopment.title') }}</p>
          <p style="font-size: 23px">{{ $t('softwareDevelopment.text') }}</p>
        </div>
      </div>
    </section>

    <!-- MOBILE-DEVELOPMENT -->
    <section id="about">
      <div class="article-content">
        <div class="image-container" style="max-width: 600px; margin-top: 20px; margin-inline: 40px">
          <img src="images/mobiledevelopment.jpg" alt="Фоновое изображение" :ratio="16 / 9"
            style="border-radius: 10px; max-width: 100%; height: auto" />
        </div>

        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px">{{ $t('mobileDevelopment.title') }}</p>
          <p style="font-size: 23px">{{ $t('mobileDevelopment.text') }}</p>
        </div>
      </div>
    </section>
    <br />

    <!-- COMPETENCY -->
    <section id="competency">
      <h3 CLASS="text-center">{{ $t('competency.title') }}</h3>
      <div class="row justify-center q-gutter-sm">
        <q-card flat bordered class="col-4 col-sm-3 col-md-2" style="border: 2px solid grey; margin: 20px" v-for="n in 6">
          <q-card-section :class="`${theme} row items-center justify-center`">
            <a :href="links[n - 1]"><img :src="images[n - 1]" style="height: 50px; width: 50px" /></a>
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

    return {
      theme: theme,
    };
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
      ]
    }
  }
});
</script>
