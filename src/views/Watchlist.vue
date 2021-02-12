<template>
  <div class="watchlist">
    <h1 v-if="watchlist.length === 0">No Movies Found!</h1>
    <ListItem
      v-for="movie in watchlist"
      v-bind:key="movie.imdbID"
      v-bind:movie="movie"
      v-on:mark-watched="handleToggle"
      v-on:delete-movie="handleDelete"
    />
  </div>
</template>

<script>
import ListItem from '../components/list-item';
export default {
  name: 'Watchlist',
  props: ['watchlist'],
  components: { ListItem },
  methods: {
    handleToggle(id) {
      this.$emit('mark-watched', id);
    },
    handleDelete(id) {
      this.$emit('delete-movie', id);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
