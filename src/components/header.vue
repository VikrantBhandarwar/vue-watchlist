<template>
  <div class="container">
    <header class="nav">
      <div class="logo">
        <h1 class="title">WATCHTIME</h1>
      </div>

      <div class="links">
        <ul class="link-items">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/watchlist">Watchlist</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  .links ul {
    list-style: none;
    display: flex;
    li a {
      font-weight: bold;
      color: #2c3e50;
      padding: 0.5rem 1rem;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

@media screen and (max-width: 769px) {
  header {
    display: block;
    .links ul {
      justify-content: center;
    }
    h1 {
      text-align: center;
    }
  }
}

title{
  font-family: sans-serif;
}
</style>
