<template>
  <q-item clickable href="javascript:document.getElementById('about').scrollIntoView(true)">
    <q-icon style="color: #ffffff" size="sm" name="question_mark" />

    <q-item-section style="color: #ffffff">
      <q-item-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ $t("nav.about") }}</q-item-label>
    </q-item-section>
  </q-item>

  <!--
  <q-item clickable href="#content">
    <q-icon style="color: #ffffff" size="sm" name="edit_calendar" />

    <q-item-section style="color: #ffffff">
      <q-item-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ $t("nav.content") }}</q-item-label>
    </q-item-section>
  </q-item>
  -->

  <q-item clickable href="javascript:document.getElementById('schedule').scrollIntoView(true);">
    <q-icon style="color: #ffffff" size="sm" name="wysiwyg" />

    <q-item-section style="color: #ffffff">
      <q-item-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ $t("nav.schedule") }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LocalLinks',
})
</script>
