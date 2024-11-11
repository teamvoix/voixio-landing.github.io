<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template :class="theme">
  <q-page>
    <!-- BODY -->
    <section id="about">
      <div :class="`${theme} body-content`">
        <div style="max-width: 600px; margin-bottom: 20px; margin-inline: 40px">
          <img src="images/ge1.jpg" alt="Фоновое изображение" :ratio="16 / 9" @click="openImage('images/ge1.jpg')"
            :class="`${imageDesktop}`" style="border-radius: 10px; max-width: 100%" />
        </div>


        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: 10px">{{ $t('ge.title1') }}</p>
          <p style="font-size: 23px; margin-top: 25px; margin-bottom: 50px" v-for="n in 3" :key="n">{{ $t(`ge.text1p${n}`) }}</p><br />
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="about">
      <div class="body-content">
        <div style="max-width: 700px; margin-bottom: 40px">
          <img src="images/ge2.png" :ratio="16 / 9" @click="openImage('images/ge2.png')"
            :class="`${imageDesktop}`" style="border-radius: 10px; max-width: 100%" />
        </div>

        <div style="max-width: 800px">
          <p style="font-size: 34px; font-weight: bolder; margin-top: 0px">{{ $t('ge.title2') }}</p>
        </div>

        <div class="row" style="display: flex; flex-wrap: wrap; justify-content: center; white-space: pre-wrap; margin-top: -30px">
          <div v-for="n, index in icons" :key="n" class="custom-item text-center">
            <q-avatar size="170px" :icon="n.icon" />
            <p style="font-size: 22px; font-weight: bold; margin-top: 0px; margin-bottom: 0px">
              {{ $t(`ge.li${index + 1}`) }}
            </p>
          </div>
        </div>

      </div>
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
  name: "GE",

  setup() {
    const $q = useQuasar();
    const theme = computed(() => baseStore.getTheme)
    const icons = baseStore.getIconsGE

    return {
      theme,
      icons,
      imageDesktop: ref(''),

      imageDialog: ref(false),
      selectedImage: ref(''),
    }
  },

  components: {
    ImageDialog,
  },

  methods: {
    async openImage(image) {
      await console.log(image)
      await baseStore.setSelectedImage(image)
      this.imageDialog = true
    },
  },

  created() {
    if (this.$q.platform.is.desktop) {
      this.imageDesktop = 'image-desktop'
      this.aboutTextDesktop = 'image-desktop'
    }
  },
})
</script>
