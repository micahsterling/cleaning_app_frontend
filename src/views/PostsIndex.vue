<template>
  <div class="post-index">
      <!-- Banner -->
    <section id="banner">
      <div class="content">
        <!-- <header>
          <h1>Cleaning app<br />
          </h1>
          <p>A place for all your cleaning info</p>
        </header>
        <p></p> --> 
      </div>
      <!-- <span class="image object">
        <img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" />
      </span> -->
    </section>

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
  <!-- Section -->

        <p>Search: <input type="text" v-model="searchTerm"></p>
    <section>
      <header class="major">
        <h2>Cleaning Closet</h2>
      </header>
      <div class="posts">
        <article v-if="post.user_id != $parent.getUserId()" v-for="post in filterBy(posts, searchTerm, 'title')">
          <a v-for="image in post.images" v-bind:href="`/posts/${post.id}`" class="image"><img v-bind:src="image.name" alt="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" /></a>
          <a v-if="post.images.length == 0" v-bind:href="`/posts/${post.id}`" class="image"><img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" /></a>
          <h3>{{post.title}}</h3>
          <p>{{post.content}}</p>
          <p>Category: {{post.category && post.category.name}}</p>
            Tags: <a v-for="tag in post.tags"> {{tag.name}},</a>
          <p></p>
            Votes: <p>{{post.votes}}</p>
          <ul class="actions">
            <li ><a v-bind:href="`/posts/${post.id}`" class="button">More</a></li>
          </ul>
        </article>
      </div>
    </section>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to Posts!",
      posts: [],
      categories: [],
      currentPost: {},
      tags: [],
      images: [],
      searchTerm: "",
    };
  },
  created: function () {
    console.log("creating");
    this.postsIndex();
    this.categoriesIndex();
  },
  methods: {
    postsIndex: function () {
      console.log("posts index");
      // posts web request
      axios.get("/api/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
    postShow: function (thePost) {
      console.log("show");
      console.log(thePost);
      this.currentPost = thePost;
      document.querySelector("#post-details").showModal();
    },
    categoriesIndex: function () {
      console.log("category index");
      // posts web request
      axios.get("/api/categories").then((response) => {
        console.log(response.data);
        this.categories = response.data;
      });
    },
  },
};
</script>