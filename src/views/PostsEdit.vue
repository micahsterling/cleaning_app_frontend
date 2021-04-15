<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit a recipe</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="post.title">
      </div>
      <div class="form-group">
        <label>Content:</label> 
        <input type="text" class="form-control" v-model="post.content">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
      </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the edit",
      title: "",
      content: "",
      post: {},
      errors: [],
    };
  },
  created: function () {
    console.log("in created");
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
      console.log(response.data);
    });
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        content: this.content,
      };
      axios
        .patch(`/api/posts/${this.$route.params.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = errors.response.data.errors;
        });
    },
  },
};
</script>