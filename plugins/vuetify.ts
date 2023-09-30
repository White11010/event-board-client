import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const mainTheme = {
    dark: false,
    colors: {
      background: '#F5F5F5',
      surface: '#FFFFFF',
      primary: '#83CF86',
      'primary-darken-1': '#3700B3',
      secondary: '#FFB257',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }


  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'mainTheme',
      themes: {
        mainTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})