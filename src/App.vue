<template>
  <v-app>
    <v-app-bar app flat color="white">
      <div
        class="logo-container"
        :class="{'logo-empty-list': !contacts.length}"
      >
        <v-img
          alt="Ubook Logo"
          contain
          src="@/assets/ic-logo.svg"
          transition="scale-transition"
          width="148"
        />
      </div>

      <div class="create-contact-container">
        <create-contact-modal
          v-if="contacts.length"
          :isVisible="isContactModalVisible"
          @open="isContactModalVisible = true"
          @cancel="isContactModalVisible = false"
          @close="isContactModalVisible = false"
        />
      </div>

      <div class="search-container">
        <v-text-field
          class="mb-0"
          placeholder="Buscar"
          append-icon="mdi-magnify"
          flat
          solo-inverted
          hide-details
        />
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="app-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

import CreateContactModal from './components/CreateContactModal.vue';

export default {
  name: 'App',
  components: {
    CreateContactModal,
  },
  data() {
    return {
      isContactModalVisible: false,
    };
  },
  created() {
    this.LOAD_CONTACTS();
  },
  methods: {
    ...mapMutations(['LOAD_CONTACTS']),
  },
  computed: {
    ...mapGetters(['contacts']),
  },
};
</script>

<style lang="scss">
  .app-container {
    height: 100%;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo-empty-list {
    margin-right: 236px;
  }

  .search-container {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .create-contact-container {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 32px;
    margin-left: 60px;
  }
</style>
