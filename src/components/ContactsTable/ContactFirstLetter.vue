<template>
  <v-avatar v-if="showContactFirstLetter()" size="24px" color="indigo" >
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
    ...mapGetters(['contacts']),
  },
  methods: {
    showContactFirstLetter() {
      const contactIdx = this.contacts.findIndex((item) => item.id === this.contact.id);
      if (!this.contacts[contactIdx].name) return false;
      const contactFirstLetter = this.contacts[contactIdx].name[0];
      const previousContactFirstLetter = (contactIdx > 0) && this.contacts[contactIdx - 1].name[0];
      if (!previousContactFirstLetter) return true;
      return contactFirstLetter !== '' && contactFirstLetter.toLowerCase()
        !== previousContactFirstLetter.toLowerCase();
    },
  },
};
</script>
