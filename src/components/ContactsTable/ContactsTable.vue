<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="contactsFound"
      :items-per-page="5"
      class="elevation-0 contacts-table"
      no-data-text="Nenhum contato foi encontrado."
      dense
      hide-default-footer
      disable-pagination
      fixed-header
      calculate-widths
    >
      <template v-slot:item="{ item }">
        <tr :key="item.id" :id="item.id" class="contact-row">
          <td class="contact-first-letter">
            <contact-first-letter :contact="item" />
          </td>
          <td>{{ item.name || 'Não informado' }}</td>
          <td>{{ item.email || 'Não informado' }}</td>
          <td>{{ item.telephone || 'Não informado' }}</td>
          <td>
            <div class="d-flex justify-end align-center">
              <v-btn
                class="mr-3"
                icon
                small
                @click="toggleEditContactModal(item)"
              >
                <v-img contain src="@/assets/ic-edit.svg" width="16px" height="16px" />
              </v-btn>
              <v-btn icon small @click="toggleDeleteModal(item)">
                <v-img src="@/assets/ic-delete.svg" contain width="16" height="16" />
              </v-btn>
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
    <edit-contact-modal
      :isVisible="isEditModalContactVisible"
      @cancel="isEditModalContactVisible = false"
      @close="isEditModalContactVisible = false"
    />
    <delete-contact-modal
      :isVisible="isDeleteContactModalVisible"
      @cancel="isDeleteContactModalVisible = false"
      @close="isDeleteContactModalVisible = false"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import ContactFirstLetter from '../ContactFirstLetter.vue';
import DeleteContactModal from '../DeleteContactModal.vue';
import EditContactModal from '../EditContactModal.vue';

import headers from './contacts-table-headers';
import colors from '../../constants/colors';

export default {
  name: 'ContactsTable',
  components: {
    ContactFirstLetter,
    DeleteContactModal,
    EditContactModal,
  },
  created() {
    if (Object.keys(this.newContact).length > 0) {
      this.highlightNewContact(this.newContact);
    }
  },
  data() {
    return {
      headers,
      isEditModalContactVisible: false,
      isDeleteContactModalVisible: false,
    };
  },
  methods: {
    ...mapMutations(['SELECT_CONTACT']),
    toggleEditContactModal(contact) {
      this.SELECT_CONTACT(contact);
      this.isEditModalContactVisible = true;
    },
    toggleDeleteModal(contact) {
      this.SELECT_CONTACT(contact);
      this.isDeleteContactModalVisible = true;
    },
    highlightNewContact(contact) {
      if (contact.id) {
        setTimeout(() => {
          document.getElementById(contact.id).style.background = colors.veryLightPink;
          this.$vuetify.goTo(`#${contact.id}`, { duration: 1000, easing: 'easeInOutCubic' });
        }, 500);
        setTimeout(() => {
          document.getElementById(contact.id).style.background = 'white';
        }, 10500);
      }
    },
  },
  computed: {
    ...mapGetters(['contactsFound', 'newContact']),
  },
  watch: {
    newContact(val) {
      this.highlightNewContact(val);
    },
  },
};
</script>

<style lang="scss">
  .contacts-table {
    border: 1px solid $white-two;
  }
  .v-data-table .v-data-table__wrapper table tbody .contact-row {
    cursor: pointer;
    transition: background .2s ease-in-out;
  }

  .v-data-table .v-data-table__wrapper table tbody .contact-row:hover {
    background: $very-light-pink !important;
  }
  .v-data-table-header .text-start {
    color: #9198af;
    font-weight: normal;
  }

  .contact-first-letter {
    width: 24px;
    padding-left: 8px !important;
    padding-right: 0 !important;
    margin-right: -16px !important;
  }
</style>
