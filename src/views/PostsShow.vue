<template>
  <div class="posts-show">

		<!-- Banner -->
			<section id="banner">
				<div class="content">
					<header>
						<h2>{{post.title}}</h2>
					</header>
					<p>{{post.content}}</p>
					<p>{{post.user_id}}</p>
					<p>Category: {{post.category && post.category.name}}</p>
					Tags: <a v-for="tag in post.tags">  {{tag.name}},</a>
					<p></p>
					<div v-if="post.user_id != $parent.getUserId()">
						<ul class="actions"> 
							<li><a href="#" class="button big">Votes {{post.votes}}</a></li>
						</ul>
					</div>
					<div v-else="post.user_id == $parent.getUserId()">
						<ul class="actions">
							<li><a v-bind:href="`/posts/${post.id}/edit`" class="button big">Edit</a></li>
							<li><a v-on:click="deletepost()" class="button big">Delete </a></li>
							<br />
						</ul>
					</div>
				</div>
					<a v-for="image in post.images" v-bind:href="`/posts/${post.id}`" class="image"><img v-bind:src="image.name" alt="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" /></a>
					<a v-if="post.images.length == 0" v-bind:href="`/posts/${post.id}`" class="image"><img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" /></a>
			</section>
				<header class="major">
					<h2>Recomended Products</h2>
				</header>
				<div  v-for="product in post.products"  class="box alt">
					<div class="row gtr-50 gtr-uniform">
						<div class="col-4"><span class="image fit"><img v-bind:src="product.image" alt="" />	{{product.name}}</span></div>
					</div>
				</div>

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
			<section>
				<header class="major">
					<h2>Similar Posts</h2>
				</header>
				<div class="posts">
						<article v-for="post in filterBy(posts, post.category.name, 'category')">
						<a v-for="image in post.images" v-bind:href="`/posts/${post.id}`" class="image"><img v-bind:src="image.name" alt="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" /></a>
						<a v-if="post.images.length == 0" v-bind:href="`/posts/${post.id}`" class="image"><img src="https://andchristina.com/wp-content/uploads/2020/08/cleaning-caddy-1024x757.jpg" alt="" /></a>
						<h3>{{post.title}}</h3>
						<p>{{post.content}}</p>
						<p>Category: {{post.category && post.category.name}}</p>
							Tags: <a v-for="tag in post.tags"> {{tag.name}},</a>
							
						<p></p>
						<ul class="actions">
							<li ><a v-bind:href="`/posts/${post.id}`" class="button">More</a></li>
						</ul>
					</article>
      	</div>
			</section>
   
    <br />
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
      message: "",
      post: {},
      category: [],
      tags: [],
      posts: [],
      products: [],
    };
  },
  created: function () {
    // get data about an individual post from rails
    // params[:id]
    // console.log(this.$route.params.id);
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
    axios.get(`/api/categories/`).then((response) => {
      console.log(response.data);
      this.category = response.data;
    });
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      console.log("posts index");
      // posts web request
      axios.get("/api/posts/").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>