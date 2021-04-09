<template>
  <div class="post-new">

    <form v-on:submit.prevent="submit()"> 
    <h1>Make a New Post</h1>
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
        <label>Content:</label>
        <input type="text" class="form-control" v-model="content">
      </div>
      <br />
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
      message: "Make a new Post!",
      title: "",
      content: "",
      errors: [],
    };
  },
  created: function () {
    console.log("in created...");
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        content: this.content,
        votes: this.votes,
      };
      // make a request to the api
      axios
        .post("/api/posts", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>