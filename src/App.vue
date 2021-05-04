<template>
  <div id="app">
    		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
								<header id="header">
									<!-- <div class="col-3 col-6-small">
										
									</div> -->
									<a href="/" class="logo"><strong>Homepage</strong> </a>
									<a href="/posts" class="logo"><strong>Cleaning Closet </strong> </a>
									<a href="index.html" class="logo"><strong>My Collection</strong> </a>
									<a href="/myposts" class="logo" v-if="isLoggedIn()"><strong>My Posts</strong> </a>
									
								
								
									<ul class="icons">
										<li v-if="isLoggedIn()"><a href="" class=""><span class="label">{{getUserName()}}</span></a></li>
										<li v-if="!isLoggedIn()"><a href="/signup" class=""><span class="label">Signup</span></a></li>
										<li v-if="!isLoggedIn()"><a href="/login" class=""><span class="label">Login</span></a></li>
										<li v-if="isLoggedIn()"><a href="/logout" class=""><span class="label">Logout</span></a></li>
									</ul>

								</header>



                <router-view />
						</div>
					</div>

				<!-- Sidebar -->
					<div id="sidebar"  v-bind:class="{inactive: inactive}">
						<a href="#sidebar" v-on:click="inactive = !inactive" class="toggle">Toggle</a>
						<div class="inner">

							<!-- Search -->
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" v-model="search" placeholder="Search" />
										<div v-for="post in filteredPosts">

										</div>
									</form>
								</section>

							<!-- Menu -->
								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="/posts">Homepage</a></li>
										<li><a href="generic.html">Generic</a></li>
										<li><a href="elements.html">Elements</a></li>
										<li><a href="#" >Kitchen</a></li>
										<li><a href="#">Living Room</a></li>
										<li><a href="#">Bedroom</a></li>
										<li><a href="#">Bathroom</a></li>
										<li><a href="#">Laundry</a></li>
										<li v-if="isLoggedIn()"><a href="/posts/new" >New Post</a></li>
										<li>
											<span class="opener " v-on:click="active = !active" v-bind:class="{active: active}">Categories</span>
											<ul>
												<!-- <li><option v-for="category in categories" >{{category.name}}</option></li> -->
												<li><a href="#" >Kitchen</a></li>
												<li><a href="#">Living Room</a></li>
												<li><a href="#">Bedroom</a></li>
												<li><a href="#">Bathroom</a></li>
												<li><a href="#">Laundry</a></li>
											</ul>
										</li>
									</ul>
								</nav>

							<!-- Section -->
								<section>
									<header class="major">
										<h2>Ante interdum</h2>
									</header>
									<div class="mini-posts">
										<article>
											<a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic08.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic09.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
									</div>
									<ul class="actions">
										<!-- <li><a href="#" class="button">More</a></li> -->
									</ul>
								</section>

							<!-- Section -->


							<!-- Footer -->
								<footer id="footer">
									<p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a><a href=""></a>.</p>
								</footer>

						</div>
					</div>

			</div>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      search: "",
      active: false,
      inactive: false,
      // categories: [],
    };
  },
  methods: {
    toggle: function () {
      this.active = !this.active;
    },
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
    isLoggedIn: function () {
      console.log("logged in");
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

