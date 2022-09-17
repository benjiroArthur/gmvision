import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    breakpoint:{
        scrollBarWidth: 16,
        thresholds: {
            xs: 600,
            sm: 960,
            md: 1280,
            lg: 1920,
        },
    },
    icons: {
        iconfont: 'mdiSvg' || 'mdi' || 'mdiSvg' || 'md',
        values: {}
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: "#0b1af8",
                gray: "#f2f2f2",
                secondary: "#424242",
                accent: "#6e6f71",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            }
        }
    },
})
