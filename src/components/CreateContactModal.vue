<template>
  <v-dialog v-model="isVisible" width="432px" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="new-contact-button salmon--text"
        rounded
        color="light-yellowish-green"
        :fab="$vuetify.breakpoint.xs"
        :bottom="$vuetify.breakpoint.xs"
        :fixed="$vuetify.breakpoint.xs"
        :right="$vuetify.breakpoint.xs"
        @click.stop="() => $emit('open')"
        v-on="on"
        v-bind="attrs"
      >
        <v-icon>mdi-plus</v-icon>
        <span v-if="$vuetify.breakpoint.smAndUp">
          Criar contato
        </span>
      </v-btn>
    </template>
    <v-card width="432px">
      <v-card-title>Criar novo contato</v-card-title>
      <v-divider />
      <v-card-text>
        <v-form
          v-model="valid"
          ref="form"
          class="contact-form"
          @keypress.enter="saveContact"
          @submit.prevent="saveContact"
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
          @click="saveContact"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapMutations, mapGetters } from 'vuex';

import { capitalize, getContactColor } from '../utils/functions';
import telephoneMask from '../utils/masks';

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
    ...mapMutations(['CREATE_CONTACT']),
    cancel() {
      this.$refs.form.reset();
      this.$emit('cancel');
    },
    isEmptyString(value) {
      return value === '';
    },
    saveContact() {
      this.CREATE_CONTACT({
        ...this.contact,
        id: uuidv4(),
        name: capitalize(this.contact.name),
        color: getContactColor(this.contacts, this.contact),
      });
      this.$refs.form.reset();
      this.$emit('close');
    },
  },
  computed: {
    isFormFilled() {
      const contactFormValues = Object.values(this.contact);
      if (contactFormValues.every((this.isEmptyString))) {
        return false;
      }
      return true;
    },
    ...mapGetters(['contacts']),
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
