<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center" style="background-color: #f06714">
    <div>
      <div style="font-size: 30vh">404</div>
      <div class="text-h2" style="opacity:.4">{{ $t("notFound.text") }}</div>
      <q-btn class="q-mt-xl" color="black" text-color="white" unelevated to="/" :label="$t('notFound.homepage')" no-caps />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
