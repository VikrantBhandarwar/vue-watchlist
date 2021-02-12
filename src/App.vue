<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view
        v-on:add-watchlist="addWatchlist"
        v-bind:watchlist="watchlist"
        v-on:mark-watched="handleToggle"
        v-on:delete-movie="handleDelete"
      />
    </div>
  </div>
</template>
<script>
import Header from './components/header';
import { saveData, getData } from './utils/handle-data';
import './styles/app.scss';
export default {
  components: {
    Header,
  },
  data() {
    return {
      watchlist: [],
    };
  },
  methods: {
    addWatchlist(movieData) {
      const exist = this.watchlist.findIndex(
        item => item.imdbID === movieData.imdbID
      );
      if (exist !== -1) return null;
      this.watchlist = [...this.watchlist, movieData];
      saveData(this.watchlist);
    },

    handleToggle(id) {
      console.log(id);
      this.watchlist = this.watchlist.map(movie =>
        movie.imdbID === id ? { ...movie, watched: !movie.watched } : movie
      );
      saveData(this.watchlist);
    },
    handleDelete(id) {
      this.watchlist = this.watchlist.filter(movie => movie.imdbID !== id);
      saveData(this.watchlist);
    },
  },
  created() {
    this.watchlist = getData() || [];
  },
};
</script>
<style></style>
