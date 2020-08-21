<template>
  <v-dialog v-model="isVisible" width="432px" persistent>
    <v-card width="432px">
      <v-card-title>Editar contato</v-card-title>
      <v-divider />
      <v-card-text>
        <v-form
          v-model="valid"
          ref="form"
          class="contact-form"
        >
          <label>
            Nome
            <v-text-field v-model.trim="contact.name" outlined dense name="Nome" />
          </label>
          <label>
            E-mail
            <v-text-field v-model.trim="contact.email" outlined dense name="E-mail" />
          </label>
          <label>
            Telefone
            <div class="telephone-field">
              <v-text-field
                v-model="contact.telephone"
                outlined
                dense
                v-mask="telephoneMask"
                name="Telefone"
              />
            </div>
          </label>
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn text class="salmon--text" @click="cancel">Cancelar</v-btn>
        <v-btn
          class="white--text"
          :class="{
            'disable-events': !isFormFilled,
            'salmon lighten-3': !isFormFilled,
            'elevation-0': !isFormFilled,
          }"
          color="salmon"
          rounded
          width="72px"
          @click="editContact"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

import capitalize from '../utils/functions';
import telephoneMask from '../utils/masks';

export default {
  name: 'EditContactModal',
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
      valid: false,
      telephoneMask,
    };
  },
  methods: {
    ...mapMutations(['EDIT_CONTACT']),
    cancel() {
      this.$emit('cancel');
    },
    isEmptyString(value) {
      return value === '';
    },
    editContact() {
      this.EDIT_CONTACT({
        ...this.contact,
        name: capitalize(this.contact.name),
      });
      this.$emit('close');
    },
  },
  computed: {
    ...mapGetters(['selectedContact']),
    isFormFilled() {
      const contactFormValues = Object.values(this.contact);
      if (contactFormValues.every((this.isEmptyString))) {
        return false;
      }
      return true;
    },
  },
  watch: {
    selectedContact(val) {
      this.contact = { ...val };
    },
  },
};
</script>

<style lang="scss">
  .contact-form {
    padding: 24px;
  }

  .telephone-field {
    width: 140px;
  }

  .disable-events {
    pointer-events: none;
  }
</style>
