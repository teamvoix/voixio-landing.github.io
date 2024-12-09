<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template :class="theme">
  <q-page>
    <!-- PROJECTS -->
    <section id="projects">
      <div v-for="p, index in projects" class="text-center">
        <div :class="($q.platform.is.desktop) ? `flex flex-center` : `row text-center`" :align="center" style="padding-top: 40px">
          <div v-if="index%2==0 || $q.platform.is.mobile" :style="($q.platform.is.desktop) ? `max-width: 450px; margin-top: 0px; margin-bottom: 0px; margin-left: 220px; margin-right: -100px` : `max-width: 350px; margin: auto`">
            <img :src="p.image" alt="Фоновое изображение" :ratio="16 / 9" :class="`${imageDesktop}`"
              clickable @click="openImage(p.image)" style="border-radius: 10px; max-width: 100%" />
          </div>

          <div class="text-container" :style="($q.platform.is.desktop) ? 'margin-inline: 0px; white-space: pre-wrap' : 'white-space: pre-wrap'">
            <p :style="($q.platform.is.desktop) ? 'margin-inline: 80px; font-size: 40px' : 'font-size: 40px; margin-top: 5px; margin-bottom: 5px'">{{ p.name }}</p>
            <p :class="`text-container ${aboutTextDesktop}`" :style="($q.platform.is.desktop) ? 'margin-inline: 230px; font-size: 23px' : 'font-size: 23px'">{{ $t(`ourProjects.text${index+1}`) }}</p>
          </div>

          <div v-if="index%2!=0 && !$q.platform.is.mobile" :style="($q.platform.is.desktop) ? `max-width: 450px; margin-top: 0px; margin-bottom: 0px; margin-right: 220px; margin-left: -100px` : `max-width: 350px; margin: auto`">
            <img :src="p.image" alt="Фоновое изображение" :ratio="16 / 9" :class="`${imageDesktop}`"
              clickable @click="openImage(p.image)" style="border-radius: 10px; max-width: 100%" />
          </div>
        </div>

        <p :style="($q.platform.is.desktop) ? 'margin-inline: 100px; margin-top: 80px; margin-bottom: 0px' : 'margin-inline: 50px; margin-top: 20px; margin-bottom: 0px'" />
      </div>
      <p v-if="$q.platform.is.desktop" style="margin-bottom: 380px" />
    </section>


    <!-- IMAGE-DIALOG -->
    <q-dialog v-model="imageDialog" full-width>
      <ImageDialog />
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";

import ImageDialog from 'components/ImageDialog.vue'

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

      imageDialog: ref(false),
      selectedImage: ref(''),
    };
  },

  components: {
    ImageDialog,
  },

  created() {
    if (this.$q.platform.is.desktop) {
      this.imageDesktop = 'image-desktop'
      this.aboutTextDesktop = 'image-desktop'
    }
  },

  methods: {
    async openImage(image) {
      await baseStore.setSelectedImage(image)
      this.imageDialog = true
    },
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
          image: "images/projects/activator.png",
        },
      ],
    }
  }
});
</script>
