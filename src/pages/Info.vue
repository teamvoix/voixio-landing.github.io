<template>
  <q-page :class="theme">
    <!-- ABOUT -->
    <section id="about">
      <div class="article-content">
        <div class="image-container" style="max-width: 600px; margin-bottom: 20px">
          <img src="/images/infoborder.jpg" :ratio="16 / 9"
            style="border-radius: 10px; max-width: 100%; height: auto" />
        </div>

        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: 10px">{{ $t('expertise.title') }}</p>
          <p style="font-size: 23px">{{ $t('expertise.text') }}</p>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div :class="`${theme} article-content`"
        style="background-image: url('/images/softwareDevelopment.jpg'); border-radius: 10px">
        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: 10px">{{ $t('softwareDevelopment.title') }}</p>
          <p style="font-size: 23px">{{ $t('softwareDevelopment.text') }}</p>
        </div>
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
});
</script>

<style scoped>
.light {
  background-color: #FFFFFF;
  color: #000000;
}

.dark {
  background-color: #000000;
  color: #FFFFFF;
}

.custom-item {
  margin: 50px;
}

.schedule-card {
  width: 100%;
  max-width: 350px;
  border: 2px solid white;
}

.article-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
  margin: 10px;
}

.image-container,
.text-container {
  flex: 1 0 300px;
}
</style>
