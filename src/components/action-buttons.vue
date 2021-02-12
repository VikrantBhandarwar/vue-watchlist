<template>
  <div class="action-buttons">
    <button type="button" @click="$emit('add-watchlist')">
      Add to Watchlist
    </button>
  </div>
</template>

<script>
export default {
  name: 'ActionButtons',
};
</script>

<style scoped lang="scss">
.action-buttons {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  button {
    background: #2d88ff;
    border: none;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    &:last-child {
      background: #f0db4f;
      color: #323330;
    }
  }
}
@media screen and (max-width: 576px) {
  .action-buttons {
    display: block;
    button {
      display: block;
      width: 100%;
      text-align: center;
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
