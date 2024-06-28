<template :class="theme">
  <q-page>
    <!-- NAVIGATION -->
    <div class="q-md text-center" style="margin-top: 20px">
      <q-btn :label="$t('nav.homepage')" size="large" class="q-mt-md" @click="sectionChoice = 'homepage'"
        :color="(sectionChoice == 'homepage') ? 'secondary' : 'primary'" text-color="white"
        style="padding-inline: 20px; margin-inline: 10px" dense />
      <q-btn :label="$t('nav.info')" size="large" class="q-mt-md" @click="sectionChoice = 'info'"
        :color="(sectionChoice == 'info') ? 'secondary' : 'primary'" text-color="white"
        style="padding-inline: 20px; margin-inline: 10px" dense />
      <q-btn :label="$t('nav.ge')" size="large" class="q-mt-md" @click="sectionChoice = 'ge'"
        :color="(sectionChoice == 'ge') ? 'secondary' : 'primary'" text-color="white"
        style="padding-inline: 20px; margin-inline: 10px" dense />
    </div>

    <!-- HOMEPAGE -->
    <section v-show="sectionChoice == 'homepage'" id="homepage">
      <Homepage />
    </section>

    <!-- INFO -->
    <section v-show="sectionChoice == 'info'" id="info">
      <Info />
    </section>

    <!-- GE -->
    <section v-show="sectionChoice == 'ge'" id="ge">
      <GE />
    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar, Notify } from "quasar";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

import Homepage from 'components/Homepage.vue'
import Info from 'components/Info.vue'
import GE from 'components/GE.vue'


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",

  setup() {
    const $q = useQuasar()
    const theme = computed(() => baseStore.getTheme)

    return {
      theme: theme,
      sectionChoice: ref('homepage'),
    };
  },

  components: {
    Homepage,
    Info,
    GE,
  },
});
</script>
