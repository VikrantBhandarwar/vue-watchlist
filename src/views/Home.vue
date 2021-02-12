<template>
  <div>
    <Search v-on:search-movie="getMovie" />
    <MovieCard v-bind:movie="movieData" v-on:add-watchlist="addWatchlist" />
  </div>
</template>

<script>
import MovieCard from '../components/moviecard';
import Search from '../components/search';
import fetchMovie from '../utils/fetch-movie';

export default {
  name: 'Home',
  components: {
    MovieCard,
    Search,
  },
  props: ['movieDetails', 'test'],
  data() {
    return {
      movieData: null,
    };
  },
  methods: {
    async getMovie(title) {
      this.movieData = await fetchMovie(title);
    },
    addWatchlist() {
      this.$emit('add-watchlist', this.movieData);
    },
  },

  async created() {
    this.getMovie('avengers');
  },
};
</script>

<style></style>
