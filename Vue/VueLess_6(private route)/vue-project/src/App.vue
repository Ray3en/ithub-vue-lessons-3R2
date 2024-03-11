<script>
import { RouterView, RouterLink } from 'vue-router';
  export default {

  }
</script>

<template>
  <header>
    <ul>
      <router-link to="/public"><li>Public</li></router-link>
      <router-link to="/private"><li>Private</li></router-link>
      <router-link to="/login"><li>Login</li></router-link>
    </ul>
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header{
    padding: 50px;
    background-color: bisque;
  }
  ul{
    display: flex;
    gap: 35px;
    list-style-type: none;
    font-size: 30px;
  }
  a {
    text-decoration: none;
    color: black
  }
  a:hover {
    text-decoration: none;
    font-weight: 600;
  }
  .container{
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
  }
</style>