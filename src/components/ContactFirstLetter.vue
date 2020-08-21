<template>
  <v-avatar
    v-if="showContactFirstLetter"
    :size="size"
    :color="generateRandomColor"
  >
    <span class="white--text text-uppercase">
      {{ contact.name[0] }}
    </span>
  </v-avatar>
</template>

<script>
import { mapGetters } from 'vuex';
import colors from 'vuetify/lib/util/colors';

export default {
  name: 'ContactFirstLetter',
  props: {
    contact: {
      default: () => ({}),
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['contactsFound']),
    showContactFirstLetter() {
      const contacts = this.contactsFound;
      const contactIdx = contacts.findIndex((item) => item.id === this.contact.id);

      if (!contacts[contactIdx].name) return false;
      const contactFirstLetter = contacts[contactIdx].name[0];
      const previousContactFirstLetter = (contactIdx > 0) && contacts[contactIdx - 1].name[0];
      if (!previousContactFirstLetter) return true;
      return contactFirstLetter !== '' && contactFirstLetter.toLowerCase()
        !== previousContactFirstLetter.toLowerCase();
    },
    generateRandomColor() {
      // Get random color from Vuetify colors package
      let colorNames = Object.keys(colors);
      colorNames = colorNames.filter((color) => color !== 'shades');
      let colorNamePosition = Math.floor(
        Math.random() * (0 - Math.floor(colorNames.length - 1)),
      ) + 0;
      colorNamePosition = Math.abs(colorNamePosition);
      const randomColor = colorNames[colorNamePosition];

      // Get randomColorVariation from Vuetify colors package
      let colorVariations = Object.keys(colors[randomColor]);
      colorVariations = colorVariations.filter((variation) => !variation.startsWith('lighten')
      && !variation.startsWith('accent') && !variation.startsWith('white')
      && !variation.startsWith('transparent'));

      let colorVariationPosition = Math.floor(
        Math.random() * (0 - Math.floor(colorVariations.length - 1)),
      ) + 0;
      colorVariationPosition = Math.abs(colorVariationPosition);

      const randomColorVariation = colorVariations[colorVariationPosition];

      return colors[randomColor][randomColorVariation];
    },
    size() {
      if (this.$vuetify.breakpoint.xs) return '32px';

      return '24px';
    },
  },
};
</script>
