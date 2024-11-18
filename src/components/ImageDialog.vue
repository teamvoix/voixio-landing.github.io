<template>
  <q-card :class="theme">

    <div :class="`dialog-content`">
      <div :style="($q.platform.is.desktop) ? 'max-width: 60%; margin-bottom: 0px; margin-inline: 10px' : 'max-width: 300px; margin-inline: 10px'">
        <img :class="``" :src="selectedImage" alt="Фоновое изображение" :style="($q.platform.is.desktop) ? 'border-radius: 10px; min-width: 1000px; max-width: 100%' : 'border-radius: 10px; max-width: 100%'" />
      </div>

      <q-btn flat outline :label="$t('nav.close')" v-close-popup />
    </div>

  </q-card>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ImageDialog",

  setup() {
    const $q = useQuasar();
    const theme = computed(() => baseStore.getTheme)
    const selectedImage = computed(() => baseStore.getSelectedImage)
    const deviceType = $q.platform.is.desktop ? "desktop" : "mobile";

    return {
      theme,
      selectedImage,
      deviceType,
    };
  },
});
</script>
