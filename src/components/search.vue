<template>
  <div class="search">
    <form @submit="handleSubmit">
      <input
        type="text"
        v-model="searchText"
        name="search"
        id="search"
        placeholder="Search Your Movies..."
      />
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  Name: 'Search',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit('search-movie', this.searchText);
      this.searchText = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  form {
    max-width: 440px;
    margin: 0 auto;
    padding: 2rem 0;
    input {
      width: 80%;
      border: 2px solid #2f2f2f;
      border-radius: 5px 0 0 5px;
      padding: 0.3rem 0.5rem;
    }
    button {
      width: 20%;
      text-align: center;
      border-radius: 0 5px 5px 0;
      border: 2px solid #2f2f2f;
      border-left: none;
      background: #2d88ff;
      color: #fff;
      padding: 0.3rem 0.5rem;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 576px) {
  .search {
    form {
      input {
        width: 70%;
      }
      button {
        width: 30%;
      }
    }
  }
}
</style>
