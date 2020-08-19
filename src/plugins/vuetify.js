import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from '../constants/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        'light-yellowish-green': colors.lightYellowishGreen,
        salmon: colors.salmon,
        'cloudy-blue': colors.cloudyBlue,
        'blue-grey': colors.blueGrey,
        'very-light-pink': colors.veryLightPink,
        'white-two': colors.whiteTwo,
        'pale-lilac': colors.paleLilac,
      },
    },
    options: {
      customProperties: true,
    },
  },
});
