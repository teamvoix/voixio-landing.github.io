<template :class="theme">
  <q-page>
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
    const sectionChoice = computed(() => baseStore.getSectionChoice)

    return {
      theme: theme,
      sectionChoice,
    };
  },

  components: {
    Homepage,
    Info,
    GE,
  },
});
</script>
