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
          Tags: 
          <div class="control_wrapper" >
            <ejs-multiselect v-model="tag_strings" id='multiselect' :dataSource='tags' placeholder="Add a Tag" ></ejs-multiselect>
          </div>
        </div>
        <br /> 
        <!-- Break -->
        <div class="col-12">
            Category 
          <select v-model="post.category.id" name="demo-category" id="demo-category">
            <option v-for="category in categories" v-bind:value="category.id">{{category.name}}</option>
          </select>
        </div>
        <!-- Break -->
        <!-- <div class="col-4 col-12-small">
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
        </div> -->

        <div class="col-12">
          <label>Content:</label> 
          <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" v-model="post.content"></textarea>
        </div>
        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li><input href='/myposts' type="submit" value="Save" class="primary" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MultiSelectPlugin);
export default {
  data: function () {
    return {
      message: "Welcome to the edit",
      title: "",
      content: "",
      post: {},
      errors: [],
      categories: [],
      tags: [],
      tag_strings: [],
    };
  },
  created: function () {
    console.log("in created");
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
      console.log(response.data);
    });
    axios.get(`/api/categories/`).then((response) => {
      console.log("categories");
      console.log(response.data);
      this.categories = response.data;
    });
    axios.get(`/api/tags/`).then((response) => {
      console.log("tags");
      console.log(response.data);
      this.tagsObjects = response.data;
      this.tags = response.data.map((tag) => tag.name);
    });
  },
  methods: {
    submit: function () {
      var params = {
        title: this.post.title,
        content: this.post.content,
        category_id: this.post.category.id,
      };
      axios
        .patch(`/api/posts/${this.$route.params.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/myposts");
        })
        .catch((error) => {
          this.errors = errors.response.data.errors;
        });
    },
  },
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>