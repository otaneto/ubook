import Vue from 'vue';
import Vuex from 'vuex';
import orderBy from 'lodash.orderby';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
    newContact: {},
    selectedContact: {},
  },
  mutations: {
    LOAD_CONTACTS(state) {
      let contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts = orderBy(contacts, ['name'], ['asc']);
      Object.assign(state, { contacts: contacts || [] });
    },
    CREATE_CONTACT(state, payload) {
      let contacts = [...state.contacts, payload];
      contacts = orderBy(contacts, ['name'], ['asc']);
      Object.assign(state, { contacts });
      Object.assign(state, { newContact: { ...payload } });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    EDIT_CONTACT(state, payload) {
      const filteredContacts = state.contacts.filter((item) => item.id !== payload.id);
      let contacts = [...filteredContacts, { ...payload }];
      contacts = orderBy(contacts, ['name'], ['asc']);
      Object.assign(state, { contacts });
      Object.assign(state, { newContact: { ...payload } });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    SELECT_CONTACT(state, payload) {
      Object.assign(state, { selectedContact: { ...payload } });
    },
    DELETE_CONTACT(state, payload) {
      const filteredContacts = state.contacts.filter((item) => item.id !== payload.id);
      const contacts = orderBy(filteredContacts, ['name'], ['asc']);
      Object.assign(state, { contacts });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
  getters: {
    contacts: (state) => state.contacts,
    newContact: (state) => state.newContact,
    selectedContact: (state) => state.selectedContact,
  },
});
