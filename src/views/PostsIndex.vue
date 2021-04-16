<template>
  <div class="posts">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
     <p v-on:click="postShow(post)">{{post.title}}</p>
      <p>{{post.votes}}</p>
      <!-- <p><button v-on:click="postShow(post)">More info</button></p> -->
      <dialog id="post-details">
      <form method="dialog">
        <h2>Post content</h2>
        <p>Title: {{ currentPost.title }}</p>
        <p>Content: {{ currentPost.content }}</p>
        <p>Votes: {{ post.votes }}</p>
        <button>Close</button>
        <router-link v-bind:to="`/posts/${currentPost.id}`"><button>more</button></router-link>

      </form>
    </dialog>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Posts!",
      posts: [],
      currentPost: {},
    };
  },
  created: function () {
    console.log("creating");
    this.postsIndex();
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
  },
};
</script>