<template>
  <v-dialog v-model="isVisible" width="432px">
    <v-card width="432px">
      <v-card-title>Criar novo contato</v-card-title>
      <v-divider />
      <v-text>
        <v-form class="contact-form">
          <label>
            Nome
            <v-text-field outlined />
          </label>
          <label>
            E-mail
            <v-text-field outlined />
          </label>
          <label>
            Telefone
            <v-text-field outlined />
          </label>
        </v-form>
      </v-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn text class="salmon--text" @click="cancel">Cancelar</v-btn>
        <v-btn color="salmon" rounded width="72px" dark>Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'CreateContactModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: '',
      email: '',
      telephone: '',
    };
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss">
  .contact-form {
    padding: 24px;
  }
</style>
