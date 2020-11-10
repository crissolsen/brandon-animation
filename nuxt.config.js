export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Brandon Barwise | Animation Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Brandon Barwise is a 3D animator who creates models and scenes. He lives in Belgium and does animation freelancing."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "https://res.cloudinary.com/dvwsiufhl/image/upload/v1605014354/BrandonAnimation/favicon_tb0uwn.ico"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-cookie-control"
  ],

  cookies: {
  necessary: [
    {
      //if multilanguage
      name: {
        en: 'Default Cookies'
      },
      //else
      name:  'Default Cookies',
      //if multilanguage
      description: {
        en:  'Used for cookie control.'
      },
      //else
      description:  'Used for cookie control.',
      cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
    }
  ],
},

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
