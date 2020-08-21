<template>
  <div class="contacts-container">
    <contacts-table v-if="contacts.length && $vuetify.breakpoint.smAndUp" />
    <div class="d-flex flex-column" v-else-if="contacts.length && $vuetify.breakpoint.xs">
      <search-bar class="mobile-search-bar" />
      <contacts-cards class="contact-cards" />
      <create-contact-modal
        :isVisible="isContactModalVisible"
        @open="isContactModalVisible = true"
        @cancel="isContactModalVisible = false"
        @close="isContactModalVisible = false"
      />
    </div>
    <empty-content v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SearchBar from '../components/SearchBar.vue';
import ContactsCards from '../components/ContactsCards/ContactsCards.vue';
import ContactsTable from '../components/ContactsTable/ContactsTable.vue';
import CreateContactModal from '../components/CreateContactModal.vue';
import EmptyContent from '../components/EmptyContent.vue';

export default {
  name: 'Contacts',
  data() {
    return {
      isContactModalVisible: false,
    };
  },
  components: {
    ContactsCards,
    ContactsTable,
    CreateContactModal,
    EmptyContent,
    SearchBar,
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
  .contact-cards {
    margin-top: 80px;
    margin-bottom: 60px;
  }
  .mobile-search-bar {
    position: fixed;
    z-index: 2;
    background: white;
    width: 90%;
    height: 60px;
  }
</style>
