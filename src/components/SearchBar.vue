<template>
  <div class="search-container">
    <v-text-field
      v-model="query"
      class="mb-0"
      placeholder="Buscar..."
      append-icon="mdi-magnify"
      flat
      solo
      hide-details
      dense
      background-color="pale-lilac"
      @keypress="searchContact"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    ...mapMutations(['LOAD_CONTACTS', 'FILTER_CONTACTS']),
    searchContact(query) {
      this.FILTER_CONTACTS(query);
    },
  },
  watch: {
    query(val) {
      this.searchContact(val);
    },
  },
};
</script>
