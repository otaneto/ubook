<template>
  <div>
    <template v-for="contact in contactsFound">
      <div :key="contact.id" class="d-flex flex-column align-center">
        <contact-first-letter class="my-4" :contact="contact" />
        <v-card :id="contact.id" class="mb-3" width="300px" outlined>
          <v-card-title>{{ contact.name || 'Sem nome' }}</v-card-title>
          <v-card-text>
            <div class="d-flex flex-column">
              <div>
                <v-icon class="mr-3" color="blue-grey" size="16px">mdi-at</v-icon>
                <span><strong>E-mail:</strong> {{ contact.email || 'Não informado'}}</span>
              </div>
              <div>
                <v-icon class="mr-3" color="blue-grey" size="16px">mdi-phone</v-icon>
                <span><strong>Telefone:</strong> {{ contact.telephone || 'Não informado' }}</span>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <div class="d-flex justify-end">
              <v-btn
                class="mr-3"
                icon
                small
                @click="toggleEditContactModal(contact)"
              >
                <v-img contain src="@/assets/ic-edit.svg" width="16px" height="16px" />
              </v-btn>
              <v-btn icon small @click="toggleDeleteModal(contact)">
                <v-img src="@/assets/ic-delete.svg" contain width="16" height="16" />
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </div>
    </template>
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
    <div v-if="!contactsFound.length" class="text-center">
      Nenhum contato foi encontrado.
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import ContactFirstLetter from '../ContactFirstLetter.vue';
import DeleteContactModal from '../DeleteContactModal.vue';
import EditContactModal from '../EditContactModal.vue';

import colors from '../../constants/colors';

export default {
  name: 'ContactsCards',
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
      isEditModalContactVisible: false,
      isDeleteContactModalVisible: false,
    };
  },
  methods: {
    ...mapMutations(['SELECT_CONTACT', 'CLEAR_NEW_CONTACT']),
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
  beforeDestroy() {
    this.CLEAR_NEW_CONTACT();
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
