<template>
  <div class="contacts-container">
    <contacts-table v-if="contacts.length" />
    <empty-content v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ContactsTable from '../components/ContactsTable.vue';
import EmptyContent from '../components/EmptyContent.vue';

export default {
  name: 'Contacts',
  components: {
    ContactsTable,
    EmptyContent,
  },
  computed: {
    ...mapGetters(['contacts']),
  },
};
</script>

<style lang="scss">
  .contacts-container {
    height: 100%;
  }
</style>
