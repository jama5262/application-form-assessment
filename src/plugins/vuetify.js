import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#73BF43',
        secondary: '#5D9937',
        accent: "#D2D2D2"
      },
    },
  },
});
