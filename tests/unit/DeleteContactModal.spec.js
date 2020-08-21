import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import DeleteContactModal from '@/components/DeleteContactModal.vue';

import store from '../fixtures/store';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('DeleteContactModal.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe('when DeleteContactModal is rendered', () => {
    it('shows DeleteContactModal with Title', () => {
      const title = 'Excluir contato';
      const wrapper = shallowMount(DeleteContactModal, {
        store,
        localVue,
        vuetify,
      });
      expect(wrapper.find('v-card-title-stub').text()).toMatch(title);
    });
    it('shows DeleteContactModal with Message', () => {
      const msg = 'Deseja realmente excluir o contato?';
      const wrapper = shallowMount(DeleteContactModal, {
        store,
        localVue,
        vuetify,
      });
      expect(wrapper.find('v-card-text-stub').text()).toEqual(msg);
    });
  });
});
