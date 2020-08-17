<template>
  <div class="empty-content-container">
    <div class="empty-content-image">
      <v-img
        alt="Conteúdo vazio"
        contain
        src="@/assets/ic-book.svg"
        transition="scale-transition"
        width="237"
      />
    </div>
    <span class="empty-message">Nenhum contato foi criado ainda.</span>
    <create-contact-modal
      :isVisible="isContactModalVisible"
      @open="isContactModalVisible = true"
      @cancel="isContactModalVisible = false"
      @close="isContactModalVisible = false"
    />
  </div>
</template>

<script>
import CreateContactModal from './CreateContactModal.vue';

export default {
  name: 'EmptyContent',
  components: {
    CreateContactModal,
  },
  data() {
    return {
      isContactModalVisible: false,
    };
  },
};
</script>

<style lang="scss">
  .empty-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .empty-content-image {
    margin-top: 96px;
  }

  .empty-message {
    margin-top: 24px;
    font-size: 16px;
    margin-bottom: 24px;
  }
</style>
