import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
    newContact: {},
    selectedContact: {},
  },
  mutations: {
    LOAD_CONTACTS(state) {
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      Object.assign(state, { contacts: contacts || [] });
    },
    CREATE_CONTACT(state, payload) {
      Object.assign(state, { contacts: [...state.contacts, payload] });
      Object.assign(state, { newContact: { ...payload } });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    EDIT_CONTACT(state, payload) {
      const filteredContacts = state.contacts.filter((item) => item.id !== payload.id);
      Object.assign(state, { contacts: [...filteredContacts, { ...payload }] });
      Object.assign(state, { newContact: { ...payload } });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    SELECT_CONTACT(state, payload) {
      Object.assign(state, { selectedContact: { ...payload } });
    },
  },
  getters: {
    contacts: (state) => state.contacts,
    newContact: (state) => state.newContact,
    selectedContact: (state) => state.selectedContact,
  },
});
