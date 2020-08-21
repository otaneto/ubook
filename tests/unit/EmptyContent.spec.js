import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import EmptyContent from '@/components/EmptyContent.vue';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('EmptyContent.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe('when EmptyContent is rendered', () => {
    it('shows EmptyContent message', () => {
      const msg = 'Nenhum contato foi criado ainda.';
      const wrapper = shallowMount(EmptyContent, {
        localVue,
        vuetify,
      });
      expect(wrapper.find('.empty-message').text()).toEqual(msg);
    });
  });
});
