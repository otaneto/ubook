<template>
  <v-avatar
    v-if="showContactFirstLetter"
    :size="size"
    :color="contact.color"
  >
    <span class="white--text text-uppercase">
      {{ contact.name[0] }}
    </span>
  </v-avatar>
</template>

<script>
import { mapGetters } from 'vuex';

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
    size() {
      if (this.$vuetify.breakpoint.xs) return '32px';

      return '24px';
    },
  },
};
</script>
