<template>
  <v-app>
    <v-app-bar
      :class="{'d-flex justify-center': $vuetify.breakpoint.xs}"
      app
      flat
      color="white"
    >
      <div
        class="logo-container"
        :class="{
          'logo-empty-list': !contacts.length && $vuetify.breakpoint.smAndUp,
          'd-flex justify-center': $vuetify.breakpoint.xs,
        }"
      >
        <v-img
          alt="Ubook Logo"
          contain
          src="@/assets/ic-logo.svg"
          transition="scale-transition"
          width="148"
        />
      </div>

      <div
        class="create-contact-container"
        v-if="contacts.length && $vuetify.breakpoint.smAndUp"
      >
        <create-contact-modal
          :isVisible="isContactModalVisible"
          @open="isContactModalVisible = true"
          @cancel="isContactModalVisible = false"
          @close="isContactModalVisible = false"
        />
      </div>

      <search-bar v-if="$vuetify.breakpoint.smAndUp"/>
    </v-app-bar>

    <v-main>
      <v-container
        fluid
        class="app-container px-4"
        :class="{'pt-0': $vuetify.breakpoint.xs}"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import SearchBar from './components/SearchBar.vue';
import CreateContactModal from './components/CreateContactModal.vue';

export default {
  name: 'App',
  components: {
    CreateContactModal,
    SearchBar,
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
    width: 100%;
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
    height: 32px;
  }

  .create-contact-container {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 32px;
    margin-left: 60px;
  }
</style>
