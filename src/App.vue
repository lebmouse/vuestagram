<template>
  <div id="app">
    <Navigatoin></Navigatoin>
    <Post :post="postData" v-for="i in 5"></Post>
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import Navigatoin from "./components/Navigation"
// import axios from "axios";
import data from "./post.js";
// import data from "./post.json"
export default {
  name: "app",
  data() {
    return {
      postData: data
    };
  },
  components: {
    Post, Navigatoin
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
