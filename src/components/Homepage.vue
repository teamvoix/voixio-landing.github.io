<template :class="theme">
  <q-page>
    <!-- ABOUT -->
    <section id="about">
      <div :class="`body-content`" style="padding-top: 40px">
        <div style="max-width: 600px; margin-bottom: 30px; margin-inline: 10px">
          <img src="images/about.jpg" alt="Фоновое изображение" :ratio="16 / 9"
          :class="`${imageDesktop}`" style="border-radius: 10px; max-width: 100%" />
        </div>

        <div class="text-container" style="max-width: 800px; margin-top: 0px">
          <p style="font-size: 40px">{{ $t('about.title') }}</p>
          <p :class="`text-container ${aboutTextDesktop}`" style="font-size: 23px">{{ $t('about.text') }}</p>
        </div>
      </div>
    </section>


    <!-- LIST -->
    <section id="list">
      <hr style="margin-inline: 100px; margin-top: 40px" />
      <div class="row" style="display: flex; flex-wrap: wrap; justify-content: center">
        <div class="custom-item text-center" v-for="n in 3" :key="n">
          <q-avatar size="170px" :icon="$t(`list.icon${n}`)" />
          <p style="font-size: 30px; font-weight: bold; margin-top: 0px; margin-bottom: 20px">
            {{ $t(`list.title${n}`) }}
          </p>
          <p style="font-size: 20px; white-space: pre-line">
            {{ $t(`list.text${n}`) }}
          </p>
        </div>
      </div>
      <hr style="margin-inline: 100px; margin-bottom: 100px" />
    </section>


    <!-- ENROLL -->
    <section id="enroll">
      <div class="q-md row d-flex justify-center" style="margin: auto; max-width: 1100px; margin-top: 20px">
        <div class="q-md col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center" style="padding: 10px">
          <q-card dark class="my-card">
            <q-img src="images/feedback.jpg" alt="Фоновое изображение" :ratio="16 / 12">
              <div class="absolute-center" style="background: rgba(33, 33, 33, 0.8)">
                <p style="font-size: large; font-weight: bold">
                  {{ $t("content.title") }}
                </p>
                <p style="font-size: large">{{ $t("content.text") }}</p>

                <p style="font-size: medium; font-weight: bold; text-shadow: 1px rgb(35, 35, 35)">
                  <q-btn outline rounded color="white" @click="enrollDialog = true" :label="$t('content.show')" />
                </p>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>


    <!-- ENROLL-DIALOG -->
    <q-dialog v-model="enrollDialog">
      <q-card :class="theme">
        <div class="text-center">

          <q-card-section style="font-size: 30px">
            {{ $t("dialog.title") }}
          </q-card-section>

          <div class="q-pa-md row items-start q-gutter-md">
            <q-form @submit="submitForm" class="q-gutter-md" style="max-width: 600px; margin: 0 auto">

              <q-input v-model="name" :dark="theme=='dark'" square filled type="text" :label="$t('dialog.name')" outlined />
              <q-input v-model="phone" :dark="theme=='dark'" square filled type="tel" mask="+#-(###)-###-##-##" :label="$t('dialog.phone')" outlined />
              <q-input v-model="text" :dark="theme=='dark'" square filled type="textarea" :label="$t('dialog.text')" outlined />

              <q-btn type="submit" :label="$t('dialog.button')" size="large" class="q-mt-md"
                style="background-color: #000000; color: #ffffff" dense flat />
            </q-form>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar, Notify } from "quasar";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Homepage",

  setup() {
    const $q = useQuasar()
    const theme = computed(() => baseStore.getTheme)

    return {
      slide: ref(1),
      autoplay: ref(true),
      isFullHeight: ref(),

      enrollDialog: ref(false),
      name: ref(''),
      phone: ref(''),
      text: ref(''),

      theme: theme,

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

  methods: {
    async submitForm() {
      try {
        if (this.name == '' || this.phone == '' || this.text == '') {
          await Notify.create({ message: this.$t('dialog.empty'), position: "center" })
          return;
        }

        const botToken = '6409688318:AAF-CjpBJuT2exP2oZQ7r4cUHyR6orIaiD0';
        const chatId = '@voixfeedbacks';
        const text = `Пользователь ${this.name} с номером ${this.phone} оставил заявку. Текст: ${this.text}.`

        await this.$api.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: text,
        });

        this.name = '';
        this.phone = '';
        this.text = '';
        await Notify.create({ message: this.$t('dialog.sent'), position: "center" })
      } catch (error) {
        Notify.create({ message: `${error.message}`, position: "center" })
        throw error;
      }
    },
  }
});
</script>
