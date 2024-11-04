<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template :class="theme">
  <q-page>
    <!-- EXPERTISE -->
    <section id="projects">
      <div v-for="p, index in projects">
        <div :class="($q.platform.is.desktop) ? `flex flex-center` : `row text-center`" :align="(index%2==0) ? 'left' : 'right'" style="padding-top: 40px">
          <div v-if="index%2==0 || $q.platform.is.mobile" style="max-width: 600px; margin-top: 0px; margin-bottom: 0px; margin-inline: 40px">
            <img :src="p.image" alt="Фоновое изображение" :ratio="16 / 9"
            :class="`${imageDesktop}`" style="border-radius: 10px; max-width: 100%" />
          </div>

          <div class="text-container" :style="($q.platform.is.desktop) ? 'max-width: 600px; white-space: pre-wrap;' : 'white-space: pre-wrap;'">
            <p style="font-size: 40px">{{ p.name }}</p>
            <p :class="`text-container ${aboutTextDesktop}`" style="font-size: 23px">{{ $t('expertise.text') }}</p>
          </div>

          <div v-if="index%2!=0 && !$q.platform.is.mobile" style="max-width: 600px; margin-top: 0px; margin-bottom: 0px; margin-inline: 40px">
            <img :src="p.image" alt="Фоновое изображение" :ratio="16 / 9"
            :class="`${imageDesktop}`" style="border-radius: 10px; max-width: 100%" />
          </div>
        </div>

        <hr :style="($q.platform.is.desktop) ? 'margin-inline: 100px; margin-top: 50px; margin-bottom: 0px' : 'margin-inline: 50px; margin-top: 20px; margin-bottom: 0px'" />
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
  name: "Projects",

  setup() {
    const $q = useQuasar();
    const theme = computed(() => baseStore.getTheme)
    const altTheme = computed(() => baseStore.getAltTheme)
    const deviceType = $q.platform.is.desktop ? "desktop" : "mobile";

    return {
      theme,
      altTheme,
      deviceType,

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
      projects: [
        {
          name: "VCIP Lite Maps",
          image: "images/projects/litemaps.png",
        },
        {
          name: "VCIP Switch Tools",
          image: "images/projects/switchtools.png",
        },
        {
          name: "VCIP Activator",
          image: "images/projects/litemaps.png",
        },
      ],
    }
  }
});
</script>
