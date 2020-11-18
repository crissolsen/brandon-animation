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
    "nuxt-cookie-control",
    "@nuxtjs/cloudinary"
  ],

  cloudinary: {
    cloudName: "bbarwise",
    apiKey: "832364679756366",
    apiSecret: "i_0I950afZnWdBbO2eNd8qlukbw",
    secure: false,
    useComponent: true
  },

  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: "Default Cookies"
        },
        //else
        name: "Default Cookies",
        //if multilanguage
        description: {
          en: "Used for cookie control."
        },
        //else
        description: "Used for cookie control.",
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name: "Cloudinary",
        //if you don't set identifier, slugified name will be used
        identifier: "cfruid",
        //if multilanguage
        description: {
          en: "Cloudinary is a media cdn"
        },
        //else
        description: "Cloudinary is a media cdn",

        initialState: true,
        src: "https://cloudinary.com",
        async: true,
        cookies: ["_cfruid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
          });
        },
        declined: () => {}
      }
    ],
    text: {
      locale: {
        en: {
          barTitle: "Cookies",
          barDescription:
            'Thank you for visiting. We use cookies to enhance your experience. You can manage these cookies here or click "Accept all" to dismiss this notice'
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
