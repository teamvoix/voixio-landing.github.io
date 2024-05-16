import { boot } from "quasar/wrappers";
import { Cookies } from "quasar";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";

export default boot(({ app }) => {
  /*
  const i18n = createI18n({
    locale: "ru",
    globalInjection: true,
    messages,
  });
  */

  const i18n = new createI18n({
    locale: Cookies.get("voix_language") || "ru",
    globalInjection: true,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
