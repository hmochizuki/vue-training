import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})


createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
