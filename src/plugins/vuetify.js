import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from '../constants/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightYellowishGreen,
        secondary: colors.salmon,
      },
    },
  },
});
