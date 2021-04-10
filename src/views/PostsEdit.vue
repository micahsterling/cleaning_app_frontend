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
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>content:</label> 
        <input type="text" class="form-control" v-model="content">
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
      errors: [],
    };
  },
  created: function () {
    console.log("in created");
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.post = response.data;
      this.title = response.data.title;
      this.content = response.data.content;
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