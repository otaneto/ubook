import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contacts: [],
    contactsFound: [],
    newContact: {},
    selectedContact: {},
  },
  getters: {
    contacts: (state) => state.contacts,
    contactsFound: (state) => state.contactsFound,
    newContact: (state) => state.newContact,
    selectedContact: (state) => state.selectedContact,
  },
});

export default store;
