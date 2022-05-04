// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'
import { mdi } from 'vuetify/lib/iconsets/mdi'
// Vuetify
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    aliases: {
      ...aliases,
      ingredient: 'fa:fas fa-carrot',
      recipe: 'fa:fas fa-kitchen-set',
      ethereum: 'fa:fa-brands fa-ethereum'
    },
    sets: {
      fa,
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        primary: colors.red.accent3,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.green.lighten5,

      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
    options: {
      customProperties: true
    },
  },
})
