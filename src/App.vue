<template>
  <v-app>
    <v-app-bar app flat color="white">
      <div class="logo-container">
        <v-img
          alt="Ubook Logo"
          contain
          src="@/assets/ic-logo.svg"
          transition="scale-transition"
          width="148"
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
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  created() {
    this.LOAD_CONTACTS();
  },
  methods: {
    ...mapMutations(['LOAD_CONTACTS']),
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
    margin-right: 236px;
  }

  .search-container {
    display: flex;
    flex: 1;
    align-items: center;
  }
</style>
