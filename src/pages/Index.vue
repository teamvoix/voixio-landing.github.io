<template>
  <q-page :class="theme">
    <!-- ABOUT -->
    <section id="about">
      <div class="article-content">
        <div class="image-container" style="max-width: 600px; margin-bottom: 20px">
          <img src="/images/quiz2.jpeg" :ratio="16 / 9" style="border-radius: 10px; max-width: 100%; height: auto" />
        </div>

        <div class="text-container" style="max-width: 800px">
          <p style="font-size: 40px; margin-top: 10px">{{ $t('about.title') }}</p>
          <p style="font-size: 23px">{{ $t('about.text') }}</p>
        </div>
      </div>
    </section>


    <!-- LIST -->
    <div class="row" style="display: flex; flex-wrap: wrap; justify-content: center">
      <div class="custom-item text-center">
        <q-avatar size="200px" icon="dvr" />
        <p style="font-size: 30px; font-weight: bold; margin-top: 15px; margin-bottom: 10px">
          {{ $t("list.title1") }}
        </p>
        <p style="font-size: 20px; white-space: pre-line">
          {{ $t("list.text1") }}
        </p>
      </div>

      <div class="custom-item text-center">
        <q-avatar size="200px" icon="public" />
        <p style="font-size: 30px; font-weight: bold; margin-top: 15px; margin-bottom: 10px">
          {{ $t("list.title2") }}
        </p>
        <p style="font-size: 20px; white-space: pre-line">
          {{ $t("list.text2") }}
        </p>
      </div>

      <div class="custom-item text-center">
        <q-avatar size="200px" icon="web" />
        <p style="font-size: 30px; font-weight: bold; margin-top: 15px; margin-bottom: 10px">
          {{ $t("list.title3") }}
        </p>
        <p style="font-size: 20px; white-space: pre-line">
          {{ $t("list.text3") }}
        </p>
      </div>
    </div>
    <hr style="margin: 40px; margin-top: 0px" />


    <!-- CONTENT -->
    <!--
    <section id="content">
      <div class="q-md row d-flex justify-center" style="margin: auto; margin-top: 20px">
        <div class="q-md col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center" style="padding: 10px">
          <q-card dark class="my-card">
            <q-img src="/images/quiz2.jpeg" :ratio="16 / 12">
              <div class="absolute-center" style="background: rgba(33, 33, 33, 0.8)">
                <p style="font-size: large; font-weight: bold">
                  {{ $t("content.title2") }}
                </p>
                <p style="font-size: large">{{ $t("content.text2") }}</p>

                <p style="font-size: medium; font-weight: bold; text-shadow: 1px rgb(35, 35, 35)">
                  <q-btn outline rounded color="white" @click="enrollDialog = true" :label="$t('content.show2')" />
                </p>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>
    -->

    <!-- ENROLL-DIALOG -->
    <!--
    <q-dialog v-model="enrollDialog">
      <q-card style="background-color: hsl(278, 67%, 93%)">
        <div class="text-center">

          <q-card-section style="font-size: 30px">
            {{ $t("dialog.title") }}
          </q-card-section>

          <div class="q-pa-md row items-start q-gutter-md">
            <q-form @submit="submitForm" class="q-gutter-md" style="max-width: 600px; margin: 0 auto">
              <q-chip removable v-model="sent" style="background-color: #7300b8; color: white" icon="done">
                {{ $t("dialog.sent") }}
              </q-chip>

              <q-input v-model="name" square filled type="text" :label="$t('dialog.name')" outlined />
              <q-input v-model="phone" square filled type="tel" :label="$t('dialog.phone')" outlined />
              <q-input v-model="wish" square filled type="textarea" :label="$t('dialog.wishes')" outlined />

              <q-btn type="submit" :label="$t('dialog.button')" size="large" class="q-mt-md"
                style="background-color: #7300b8; color: #ffffff" dense flat />
            </q-form>
          </div>
        </div>
      </q-card>
    </q-dialog>
    -->
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";

import { useBaseStore } from "src/stores/base-store.js";
const baseStore = useBaseStore();

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",

  setup() {
    const $q = useQuasar();
    const theme = computed(() => baseStore.getTheme)

    return {
      slide: ref(1),
      autoplay: ref(true),
      isFullHeight: ref(),

      enrollDialog: ref(false),
      name: ref(""),
      phone: ref(""),
      wish: ref(""),
      sent: ref(false),

      theme: theme,
    };
  },

  methods: {
    async submitForm() {
      if (this.name != '' && this.phone != '') {
        try {
          const botToken = '6908149756:AAFB__O0Sywq70T1aUbW30o-kmzucYnFu0Q';
          const chatId = '@quizuifeedbacks';
          const text = `Пользователь ${this.name} с номером ${this.phone} оставил заявку. Пожелания: ${this.wish}.`

          await this.$api.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
          });

          this.name = '';
          this.phone = '';
          this.wish = '';
          this.sent = true;
        } catch (error) {
          console.error("Error posting feedback:", error);
          throw error;
        }
      }
    },
  }
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

.map-frame {
  max-width: 400px;
  margin: 0 auto;
  border-style: solid;
  border-width: 4px 4px 4px 4px;
  border-color: black;
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
