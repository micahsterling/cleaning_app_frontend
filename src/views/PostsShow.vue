<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <p><b>id:</b> {{posts.id}}</p>
    <p><b>title:</b> {{posts.title}}</p>
    <p><b>content:</b> {{posts.content}}</p>
    <p><b>votes:</b> {{posts.votes}}</p>
    <br />
    <router-link v-bind:to="/posts/${this.$route.params.id}/edit">Edit Posts</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      posts: {},
    };
  },
  created: function () {
    // get data about an individual recipe from rails
    // params[:id]
    console.log(this.$route.params.id);
    axios.get(`/api/post/${this.$route.params.id}`).then((respons) => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
  methods: {},
};
</script>