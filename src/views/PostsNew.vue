<template>
  <div class="post-new">
      <!-- Banner -->
    <!-- <section id="banner">
      <div class="content">
        <header>
          <h1>Cleaning app<br />
          </h1>
          <p>A place for all your cleaning info</p>
        </header>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
        <ul class="actions">
          <li><a href="#" class="button big">Learn More</a></li>
        </ul>
      </div>
      <span class="image object">
        <img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" />
      </span>
    </section> -->

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
        <article>
          <span class="icon solid fa-paper-plane"></span>
          <div class="content">
            <h3>Sapien veroeros</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-rocket"></span>
          <div class="content">
            <h3>Quam lorem ipsum</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-signal"></span>
          <div class="content">
            <h3>Sed magna finibus</h3>
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
          <input type="text" name="title" id="title" value="" placeholder="Title" v-model="title"/>
        </div>
        <div class="col-6 col-12-xsmall">
          <input type="text" name="demo-name" id="demo-name" value="" placeholder="Tag" />
        </div>
        <br /> 
        <!-- Break -->
         <div class="col-12">
            <option  value=""> Category </option>
          <select v-model="category_id" name="demo-category" id="demo-category">
            <option v-for="category in categories" v-bind:value="category.id">{{category.name}}</option>
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
        <!-- Break -->
        <!-- <div class="col-6 col-12-small">
          <input type="checkbox" id="demo-copy" name="demo-copy">
          <label for="demo-copy">Email me a copy</label>
        </div>
        <div class="col-6 col-12-small">
          <input type="checkbox" id="demo-human" name="demo-human" checked>
          <label for="demo-human">I am a human</label>
        </div> -->
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
      category: [],
      tag: [],
    };
  },
  created: function () {
    console.log("in created...");
    axios.get(`/api/categories/`).then((response) => {
      console.log("categories");
      console.log(response.data);
      this.categories = response.data;
    });
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        content: this.content,
        votes: this.votes,
        category_id: this.category_id,
        tag_ids: this.tag_ids,
      };
      axios.get(`/api/categories/`).then((response) => {
        console.log("categories");
        console.log(response.data);
        this.categories = response.data;
      });
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