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
									<a href="/posts" class="logo"><strong>Homepage</strong> </a>
									<a href="index.html" class="logo"><strong>Make it Clean</strong> </a>
									<a href="index.html" class="logo"><strong>My Collection</strong> </a>
									<a href="index.html" class="logo"><strong>My Posts</strong> </a>
									
								
								
									<ul class="icons">
										<li v-if="isLoggedIn()"><a href="" class=""><span class="label">{{getUserName()}}</span></a></li>
										<li v-if="!isLoggedIn()"><a href="/signup" class=""><span class="label">Signup</span></a></li>
										<li v-if="!isLoggedIn()"><a href="/login" class=""><span class="label">Login</span></a></li>
										<li v-if="isLoggedIn()"><a href="/logout" class=""><span class="label">Logout</span></a></li>
										<!-- <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li> -->
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
										<li><a href="/posts/new">New Post</a></li>
										<li><a href="#">Adipiscing</a></li>
										<li>
											<span class="opener">Another Submenu</span>
											<ul>
												<li><a href="#">Lorem Dolor</a></li>
												<li><a href="#">Ipsum Adipiscing</a></li>
												<li><a href="#">Tempus Magna</a></li>
												<li><a href="#">Feugiat Veroeros</a></li>
											</ul>
										</li>
										<li><a href="#">Maximus Erat</a></li>
										<li><a href="#">Sapien Mauris</a></li>
										<li><a href="#">Amet Lacinia</a></li>
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
										<li><a href="#" class="button">More</a></li>
									</ul>
								</section>

							<!-- Section -->
								<section>
									<header class="major">
										<h2>Get in touch</h2>
									</header>
									<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
									<ul class="contact">
										<li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
										<li class="icon solid fa-phone">(000) 000-0000</li>
										<li class="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
									</ul>
								</section>

							<!-- Footer -->
								<footer id="footer">
									<p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
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
  created: function () {
    this.categoriesIndex();
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

