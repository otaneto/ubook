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
  </div>
</template>

<script>
export default {
  name: 'EmptyContent',
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
  }
</style>
