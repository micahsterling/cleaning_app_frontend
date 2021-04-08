<template>
  <div class="posts">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      {{post.title}}
      {{post.votes}}
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Posts!",
      posts: [],
    };
  },
  created: function () {
    console.log("creating");
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      console.log("posts index");
      // posts web request
      axios.get("/api/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>