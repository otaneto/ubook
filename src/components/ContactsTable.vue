<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="contacts"
      :items-per-page="5"
      class="elevation-0 contacts-table"
      no-data-text="Nenhum contato foi criado ainda."
      dense
      hide-default-footer
      disable-pagination
      fixed-header
    >
      <template v-slot:item="{ item }">
        <tr :id="item.id">
          <td>
            <v-avatar size="24px" color="indigo">
              <span class="white--text">
                {{ item.name[0] }}
              </span>
            </v-avatar>
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
              <v-btn icon small>
                <v-img src="@/assets/ic-delete.svg" contain width="16" height="16" />
              </v-btn>
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
    <edit-contact-modal
      :isVisible="isEditModalContactVisible"
      :selectedContact="item"
      @cancel="isEditModalContactVisible = false"
      @close="isEditModalContactVisible = false"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import EditContactModal from './EditContactModal.vue';
import colors from '../constants/colors';

export default {
  name: 'ContactsTable',
  components: {
    EditContactModal,
  },
  data() {
    return {
      headers: [
        {
          text: '',
          align: 'start',
          value: '',
          sortable: false,
        },
        {
          text: 'Contatos',
          align: 'start',
          value: 'name',
        },
        { text: 'E-mail', value: 'email' },
        { text: 'Telefone', value: 'telephone' },
        { text: '', value: '', align: 'end' },
      ],
      isEditModalContactVisible: false,
    };
  },
  methods: {
    ...mapMutations(['SELECT_CONTACT']),
    toggleEditContactModal(contact) {
      this.SELECT_CONTACT(contact);
      this.isEditModalContactVisible = true;
    },
  },
  computed: {
    ...mapGetters(['contacts', 'newContact']),
  },
  watch: {
    newContact(val) {
      if (val.id) {
        console.log(val.id);
        setTimeout(() => {
          document.getElementById(val.id).style.background = colors.veryLightPink;
          this.$vuetify.goTo(`#${val.id}`, { duration: 1000, easing: 'easeInOutCubic' });
        }, 300);
        setTimeout(() => {
          document.getElementById(val.id).style.background = 'white';
        }, 10300);
      }
    },
  },
};
</script>

<style lang="scss">
  .contacts-table {
    border: 1px solid $white-two;
  }
  .v-data-table .v-data-table__wrapper table tbody tr {
    cursor: pointer;
    transition: background .5s ease-in-out;
  }

  .v-data-table .v-data-table__wrapper table tbody tr:hover {
    background: $very-light-pink !important;
  }
  .v-data-table-header .text-start {
    color: #9198af;
    font-weight: normal;
  }
</style>
