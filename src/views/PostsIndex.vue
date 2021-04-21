<template>
  <div class="post-index">
      <!-- Banner -->
    <section id="banner">
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
    </section>

  <!-- Section -->
    <section>
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
    </section>

  <!-- Section -->
    <section>
      <header class="major">
        <h2>Cleaning Closet</h2>
      </header>
      <div class="posts">
        <article v-for="post in posts">
          <a v-bind:href="`/posts/${post.id}`" class="image"><img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" /></a>
          <h3>{{post.title}}</h3>
          <p>{{post.content}}</p>
          <ul class="actions">
            <li ><a v-bind:href="`/posts/${post.id}`" class="button">More</a></li>
          </ul>
        </article>
   
      </div>
    </section>
  

    
    <!-- <h1>{{ message }}</h1>
    <div v-for="post in posts">
     <p v-on:click="postShow(post)">{{post.title}}</p>
      <p>{{post.votes}}</p> -->
      <!-- <p><button v-on:click="postShow(post)">More info</button></p> -->
      <!-- <dialog id="post-details">
      <form method="dialog">
        <h2>Post content</h2>
        <p>Title: {{ currentPost.title }}</p>
        <p>Content: {{ currentPost.content }}</p>
        <p>Votes: {{ post.votes }}</p>
        <button>Close</button>
        <router-link v-bind:to="`/posts/${currentPost.id}`"><button>more</button></router-link>

      </form>
    </dialog>
    </div> -->
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