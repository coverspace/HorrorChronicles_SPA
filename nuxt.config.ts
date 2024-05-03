// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  css: ["assets/css/markdown.css"],
  image: {
    dir: "assets/images",
  },
  app: {
    head: {
      title: "Nuxt3.2.2",
      meta: [{ name: "description", content: "Nuxt3.2.2" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Iceland&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    webBEndURL: process.env.WEB_BEND_URL,
    public: {
      // in case of to share into the public
    },
  },
  // buildDir: "dist",
  ssr: true,
});
