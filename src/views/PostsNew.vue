<template>
  <div class="post-new">
  <!-- Section -->
    <!-- <section>
      <header class="major">
        <h2>Erat lacinia</h2>
      </header>
      <div class="features">
        <article>
          <span class="icon fa-gem"></span>
          <div class="content">
            <h3>Portitor ullamcorper</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
      </div>
    </section> -->
  <!-- Form -->
    <h3>Make a New Post</h3>

    <form method="post" action="#" v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
     <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" >
        </div>
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
          <option  value=""> Category </option>
        <select v-model="post.category_id" name="demo-category" id="demo-category">
          <option v-for="category in categories" v-bind:value="category.id">{{category.name}}</option>
        </select>
      </div>
        <!-- Break -->
        <!-- <div class="col-4 col-12-small">
          <input type="radio" id="demo-priority-low" name="demo-priority" checked>
          <label for="demo-priority-low">Low</label>
        </div>
        <!-- Break -->
        <div class="col-12">
          <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" v-model="content"></textarea>
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
      message: "Make a new Post!",
      title: "",
      content: "",
      post: {},
      errors: [],
      categories: [],
      tags: [],
      tagsObjects: [],
      tag_strings: [],
    };
  },
  created: function () {
    console.log("in created...");
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
        title: this.title,
        content: this.content,
        votes: this.votes,
        category_id: this.post.category_id,
        tag_ids: this.tagsObjects.filter(
          (tag) => this.tag_strings.indexOf(tag.name) >= 0
        ),
        user_id: parseInt(localStorage.getItem("user_id"))
      };
      console.log('parmas',params);
      // make a request to the api
      axios
        .post("/api/posts", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/myposts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>