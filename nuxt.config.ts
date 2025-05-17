import { ThemedColors } from './src/constants/color.constants'

const isDevelopment = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',
  devtools: { enabled: isDevelopment },
  compatibilityDate: '2025-05-15',
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    [
      'vuetify-nuxt-module',
      {
        styles: true,
        autoImport: true,
      },
    ],
  ],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: 'assets/styles/vuetify.scss',
      },
    },
    vuetifyOptions: {
      defaults: {
        global: {
          ripple: true,
        },
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: ThemedColors,
          },
        },
      },
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'erp',
        dir: '~/assets/icons',
      },
    ],
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Hospital ERP',
      short_name: 'Hospital ERP',
      description: 'Hệ thống quản lý kho bệnh viện',
      theme_color: '#ffffff',
      icons: [],
      id: 'hospital-erp',
      start_url: '/',
      display: 'standalone',
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module',
    },
  },
  app: {
    head: {
      title: 'Hospital ERP',
      meta: [
        {
          name: 'description',
          content: 'Hospital ERP - Hệ thống quản lý kho bệnh viện',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  dir: {
    public: '../public',
  },
  components: {
    dirs: [
      {
        path: '~/components',
        global: true,
      },
      {
        path: '~/components/layouts',
        prefix: 'Layout',
        global: true,
      },
      {
        path: '~/components/features',
        prefix: 'Feature',
        global: true,
      },
      {
        path: '~/components/forms',
        prefix: 'Form',
        global: true,
      },
      {
        path: '~/components/common',
        prefix: 'Common',
        global: true,
      },
    ],
  },
  css: ['~/assets/styles/main.scss'],
  typescript: {
    typeCheck: true,
    strict: false,
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/base/_variables.scss" as *;',
        },
      },
    },
    build: { sourcemap: false },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
      strict: false,
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  experimental: { typedPages: true },
  vue: { propsDestructure: true },
  vueuse: { ssrHandlers: true },
  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      wsBaseUrl: process.env.WS_BASE_URL,
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
})
