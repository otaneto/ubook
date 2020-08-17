<template>
    <v-data-table
    :headers="headers"
    :items="contacts"
    :items-per-page="5"
    class="elevation-0 contacts-table"
    no-data-text="Nenhum contato foi criado ainda."
    dense
    hide-default-footer
  >
    <template v-slot:item="{ item }">
      <tr :id="item.telephone">
        <td>{{ item.name || 'Não informado' }}</td>
        <td>{{ item.email || 'Não informado' }}</td>
        <td>{{ item.telephone || 'Não informado' }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters(['contacts']),
  },
};
</script>

<style lang="scss">
  .contacts-table {
    border: 1px solid $white-two;
  }
  .v-data-table .v-data-table__wrapper table tbody tr:hover {
    background: $very-light-pink !important;
  }
  .v-data-table-header .text-start {
    color: #9198af;
    font-weight: normal;
  }
</style>
