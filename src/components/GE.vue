<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template :class="theme">
  <q-page>
    <!-- HEADER -->
    <section id="about" style="padding-top: 20px">
      <div :class="`header-content`"
        style="background: radial-gradient(circle, #e96228 0%, #dd4a00 100%); border-radius: 10px; margin-bottom: 35px">
        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: -20px; color: #fff9f0">{{ $t('ge.header') }}</p>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <section id="about">
      <div :class="`${theme} body-content`">
        <div style="max-width: 600px; margin-bottom: 20px">
          <img src="images/ge1.jpg" alt="Фоновое изображение" :ratio="16 / 9"
            style="border-radius: 10px; max-width: 100%; height: auto" />
        </div>


        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: 10px">{{ $t('ge.title1') }}</p>
          <p style="font-size: 23px" v-for="n in 6" :key="n">{{ $t(`ge.text1p${n}`) }}</p><br />
        </div>

        <div style="max-width: 600px; margin-bottom: 20px">
          <img src="images/ge2.png" alt="Фоновое изображение" :ratio="16 / 9"
            style="border-radius: 10px; max-width: 100%; height: auto" />
        </div>

        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: 10px">{{ $t('ge.title2') }}</p>
          <p style="font-size: 23px">{{ $t('ge.text2') }}</p>
          <ul style="font-size: 23px">
            <li style="margin-bottom: 10px" v-for="i in 7" :key="i">{{ $t(`ge.li${i}`) }}</li>
          </ul>
        </div>
      </div>
    </section>
    <br />

  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "GE",

  setup() {
    const $q = useQuasar();
    const theme = computed(() => baseStore.getTheme)

    return {
      theme: theme,
    };
  },
});
</script>
