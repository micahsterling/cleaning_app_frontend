<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="submit()">
      <h2>Edit Post</h2>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="post.title">
      </div>
      <br />
   
       <div class="row gtr-uniform">

        <div class="col-6 col-12-xsmall">
          <input type="text" name="demo-name" id="demo-name" value="" placeholder="Tag" />
        </div>
        <br /> 
        <!-- Break -->
        <div class="col-12">
          <select name="demo-category" id="demo-category">
            <option value="">- Category -</option>
            <option value="1">Kitchen</option>
            <option value="1">Bathroom</option>
            <option value="1">Bedroom</option>
            <option value="1">Living Room</option>
          </select>
        </div>
        <!-- Break -->
        <div class="col-4 col-12-small">
          <input type="radio" id="demo-priority-low" name="demo-priority" checked>
          <label for="demo-priority-low">Low</label>
        </div>
        <div class="col-4 col-12-small">
          <input type="radio" id="demo-priority-normal" name="demo-priority">
          <label for="demo-priority-normal">Normal</label>
        </div>
        <div class="col-4 col-12-small">
          <input type="radio" id="demo-priority-high" name="demo-priority">
          <label for="demo-priority-high">High</label>
        </div>

        <div class="col-12">
          <label>Content:</label> 
          <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" v-model="post.content"></textarea>
        </div>
        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li><input type="submit" value="Save" class="primary" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </div>
      </div>
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
        title: this.post.title,
        content: this.post.content,
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