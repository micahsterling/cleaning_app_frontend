<template>
  <div class="home">
    <h1>{{ message }} {{getUserName()}}</h1>
    <div v-if="!isLoggedIn()">
      <h3>Login to make a post</h3>
      <!-- <p>User id: {{getUserId()}}</p>
      <p>User name: {{getUserName()}}</p> -->      
    </div>
          <!-- Banner -->
    <section id="banner">
      <div class="content">
        <header>
          <h2>A place for all your cleaning info</h2>
        </header>
        <p>The cleaning place is your go to destination for all cleaning related info. Need to know how to clean your toilet? We've got that information! Need to know what products to use on a cast iron pan? Let us help you. Check out the cleaning closet to browse posts by other users sharing their own best tips and tricks. See something you like? Add it to your collection! </p> 
        <!-- <ul class="actions">
          <li><a href="#" class="button big">Learn More</a></li>
        </ul> -->
      </div>
      <span class="image object">
        <img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" />
      </span>
    </section>
    <p>{{ posts.title }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to The Cleaning Place",
      posts: [],
    };
  },
  created: function () {
    console.log("creating");
    this.postsIndex();
  },
  methods: {
    isLoggedIn: function () {
      console.log("is logged in");
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
    getUserName: function () {
      return localStorage.getItem("name");
    },

    postsIndex: function () {
      console.log("posts index");
      // posts web request
      axios.get("/api/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>