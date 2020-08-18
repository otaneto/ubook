<template>
  <v-dialog v-model="isVisible" width="432px" height="207px" persistent>
    <v-card width="432px">
      <v-card-title>Excluir contato</v-card-title>
      <v-divider />
      <v-card-text class="delete-contact-message">
        <span>
          Deseja realmente excluir o contato?
        </span>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn text class="salmon--text" @click="cancel">Cancelar</v-btn>
        <v-btn
          class="white--text"
          color="salmon"
          rounded
          width="72px"
          @click="deleteContact"
        >
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'DeleteContactModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        telephone: '',
      },
    };
  },
  methods: {
    ...mapMutations(['DELETE_CONTACT']),
    cancel() {
      this.$emit('cancel');
    },
    isEmptyString(value) {
      return value === '';
    },
    deleteContact() {
      this.DELETE_CONTACT(this.contact);
      this.$emit('close');
    },
  },
  computed: {
    ...mapGetters(['selectedContact']),
  },
  watch: {
    selectedContact(val) {
      this.contact = { ...val };
    },
  },
};
</script>

<style lang="scss">
  .delete-contact-message {
    margin-top: 20px;
    margin-bottom: 60px;
  }
</style>
