import Vue from 'vue';
import Vuex from 'vuex';
import orderBy from 'lodash.orderby';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
    contactsFound: [],
    newContact: {},
    selectedContact: {},
  },
  mutations: {
    LOAD_CONTACTS(state) {
      let contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts = orderBy(contacts, ['name'], ['asc']);
      Object.assign(state, { contacts: contacts || [] });
      Object.assign(state, { contactsFound: contacts || [] });
    },
    CREATE_CONTACT(state, payload) {
      let contacts = [...state.contacts, payload];
      contacts = orderBy(contacts, (['name']), ['asc']);
      contacts = orderBy(contacts, (['name']), ['asc']);
      Object.assign(state, { contacts, contactsFound: [...contacts], newContact: { ...payload } });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    EDIT_CONTACT(state, payload) {
      const filteredContacts = state.contacts.filter((item) => item.id !== payload.id);
      let contacts = [...filteredContacts, { ...payload }];
      contacts = orderBy(contacts, (['name']), ['asc']);
      Object.assign(state, { contacts, contactsFound: [...contacts], newContact: { ...payload } });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    SELECT_CONTACT(state, payload) {
      Object.assign(state, { selectedContact: { ...payload } });
    },
    DELETE_CONTACT(state, payload) {
      const filteredContacts = state.contacts.filter((item) => item.id !== payload.id);
      const contacts = orderBy(filteredContacts, (['name']), ['asc']);
      Object.assign(state, { contacts, contactsFound: [...contacts] });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    FILTER_CONTACTS(state, payload) {
      const { contacts } = state;
      const filteredContacts = contacts.filter((item) => {
        const lowerCaseName = item.name.toLowerCase();
        return lowerCaseName.indexOf(payload) !== -1;
      });
      Object.assign(state, { contactsFound: [...filteredContacts] });
    },
  },
  getters: {
    contacts: (state) => state.contacts,
    contactsFound: (state) => state.contactsFound,
    newContact: (state) => state.newContact,
    selectedContact: (state) => state.selectedContact,
  },
});
