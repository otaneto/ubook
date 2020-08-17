<template>
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
        <td>{{ item.name || 'Não informado' }}</td>
        <td>{{ item.email || 'Não informado' }}</td>
        <td>{{ item.telephone || 'Não informado' }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';
import colors from '../constants/colors';

export default {
  name: 'ContactsTable',
  data() {
    return {
      headers: [
        {
          text: 'Contatos',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'E-mail', value: 'email' },
        { text: 'Telefone', value: 'telephone' },
      ],
    };
  },
  computed: {
    ...mapGetters(['contacts', 'newContact']),
  },
  watch: {
    newContact(val) {
      if (val.id) {
        setTimeout(() => {
          this.$vuetify.goTo(`#${val.id}`, { duration: 1000, easing: 'easeInOutCubic' });
          document.getElementById(val.id).style.background = colors.veryLightPink;
        }, 1);
        setTimeout(() => {
          document.getElementById(val.id).style.background = 'white';
        }, 10001);
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
