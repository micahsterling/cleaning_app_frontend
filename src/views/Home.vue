<template>
  <div class="home">
    <h1>{{ message }} {{getUserName()}}</h1>
    <div v-if="!isLoggedIn()">
      <h3>Login to make a post</h3>
      <!-- <p>User id: {{getUserId()}}</p>
      <p>User name: {{getUserName()}}</p> -->
      
      <p>{{ posts.title }}</p>

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
      message: "Welcome to The Cleaning Place",
      posts: [],
    };
  },
  created: function () {
    console.log("creating");
    this.postsIndex();
  },
  methods: {
    isLoggedIn: function () {
      console.log("is logged in");
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
    getUserName: function () {
      return localStorage.getItem("name");
    },

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