<template>
  <div>
    <div v-if="movie.Title" class="movie-card">
      <div>
        <img :src="movie.Poster" alt="Movie Poster" class="poster" />
      </div>
      <div class="movie-data">
        <h2>{{ movie.Title }}</h2>
        <p class="year">{{ movie.Year }}</p>
        <p class="plot">
          {{ movie.Plot }}
          <a :href="'https://www.imdb.com/title/' + movie.imdbID"
            >Read More...</a
          >
        </p>
        <ActionButtons v-on:add-watchlist="$emit('add-watchlist')" />
        <div class="ratings" v-if="movie.Ratings">
          <div
            class="rating"
            v-for="rating in movie.Ratings"
            v-bind:key="rating.source"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
              v-if="rating.Source === 'Internet Movie Database'"
              alt="IMDb Logo"
            />
            <img
              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_mvugqulj/def_height/55/def_width/200/version/100011/type/1"
              v-if="rating.Source === 'Rotten Tomatoes'"
              alt="Rotten Tomatoes Logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Metacritic_logo.svg/726px-Metacritic_logo.svg.png"
              v-if="rating.Source === 'Metacritic'"
              alt="Metacritic Logo"
            />

            {{ rating.Value }}
          </div>
        </div>

        <div class="tags">
          <span v-for="tag in movie.Tags" v-bind:key="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButtons from './action-buttons';
export default {
  name: 'MovieCard',
  props: ['movie'],
  components: {
    ActionButtons,
  },
};
</script>

<style lang="scss">
.movie-card {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  .poster {
    border-radius: 5px;
    margin-top: 2rem;
  }
  .movie-data {
    h2 {
      font-size: 3rem;
    }
    .year {
      text-align: right;
    }
    .plot {
      padding: 1rem 0;
    }
    .ratings {
      display: flex;
      padding: 1rem 0;
      align-items: flex-end;
      justify-content: space-between;
      .rating {
        text-align: center;
        img {
          max-width: 120px;
          margin-bottom: 1rem;
        }
        &:first-child {
          img {
            max-width: 90px;
          }
        }
      }
    }

    .tags {
      span {
        padding: 0.2rem 0.3rem;
        font-size: 1rem;
        background: #24b47f27;
        margin-right: 1rem;
        border-radius: 5px;
        border: 2px solid #24b47e;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .movie-card {
    padding: 1rem 0;
    grid-template-columns: 1fr;
    .poster {
      display: block;
      margin: 0 auto;
    }
    .movie-data {
      h2 {
        text-align: center;
      }
    }
  }
}
</style>
