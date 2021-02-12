<template>
  <div>
    <div class="watched-item" v-if="movie" :class="{ watched: movie.watched }">
      <div class="image">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <p>
        {{ movie.Title }}
      </p>
      <p>
        {{ movie.Year }}
      </p>

      <p>
        <a :href="'https://www.imdb.com/title/' + movie.imdbID">Read More</a>
      </p>
      <div class="buttons">
        <button class="toggle" @click="$emit('mark-watched', movie.imdbID)">
          {{ movie.watched ? 'Move to Watchlist' : 'Mark as Watched' }}
        </button>
        <button class="delete" @click="$emit('delete-movie', movie.imdbID)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['movie'],
};
</script>

<style lang="scss">
.watched-item {
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  .image {
    max-width: 60px;
    img {
      border-radius: 3px;
    }
  }
  button {
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 0.3rem 0.5rem;
  }
  .delete {
    background: #d5333e;
  }
  .toggle {
    background: #2d88ff;
    margin-right: 1rem;
  }
}
.watched {
  filter: grayscale(1);
}

@media screen and (max-width: 576px) {
  .watched-item {
    display: block;
    text-align: center;
    .image {
      max-width: 150px;
      margin: 0 auto;
      img {
        border-radius: 3px;
        display: block;
      }
    }
    .buttons {
      padding: 1rem;
    }
  }
}
</style>
