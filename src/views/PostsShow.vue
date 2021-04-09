<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <p><b>id:</b> {{post.id}}</p>
    <p><b>title:</b> {{post.title}}</p>
    <p><b>content:</b> {{post.content}}</p>
    <p><b>votes:</b> {{post.votes}}</p>
    <br />
    <!-- <router-link v-bind:to="/posts/${this.$route.params.id}/edit">Edit Posts</router-link> -->
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
      post: {},
    };
  },
  created: function () {
    // get data about an individual recipe from rails
    // params[:id]
    // console.log(this.$route.params.id);
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {},
};
</script>