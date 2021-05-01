<template>
  <div class="posts-show">

		<!-- Banner -->
			<section id="banner">
				<div class="content">
					<header>
						<h2>{{post.title}}</h2>
					</header>
					<p>{{post.content}}</p>
					<p>Category: {{post.category && post.category.name}}</p>
					Tags: <a v-for="tag in post.tags">  {{tag.name}},</a>
					<p></p>
					<p>post.user_id: {{ post.user_id }}</p>
					 <p>$parent.getUserId(): {{ $parent.getUserId() }}</p>
					 <ul class="actions">
    <div v-if="post.user_id == $parent.getUserId()">
      <li><a v-bind:href="`/posts/${post.id}/edit`" class="button big">Edit</a></li>
      <li><a v-bind:href="`/posts/${post.id}/edit`" class="button big">Delete </a></li>
      <br />
      <!-- <button v-on:click="deletepost()">Delete the post</button> -->
    </div>
					</ul>
					 <ul class="actions"> 
						<li><a v-bind:href="`/posts/${post.id}/edit`" class="button big">Edit</a></li>
						<li><a href="#" class="button big">Votes {{post.votes}}</a></li>
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
					<h2>Ipsum sed dolor</h2>
				</header>
				<div class="posts">
					<article>
						<a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
						<h3>Interdum aenean</h3>
						<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
						<ul class="actions">
							<li><a href="#" class="button">More</a></li>
						</ul>
					</article>
					<article>
						<a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
						<h3>Nulla amet dolore</h3>
						<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
						<ul class="actions">
							<li><a href="#" class="button">More</a></li>
						</ul>
					</article>
					<article>
						<a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
						<h3>Tempus ullamcorper</h3>
						<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
						<ul class="actions">
							<li><a href="#" class="button">More</a></li>
						</ul>
					</article>
					<article>
						<a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
						<h3>Sed etiam facilis</h3>
						<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
						<ul class="actions">
							<li><a href="#" class="button">More</a></li>
						</ul>
					</article>
					<article>
						<a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
						<h3>Feugiat lorem aenean</h3>
						<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
						<ul class="actions">
							<li><a href="#" class="button">More</a></li>
						</ul>
					</article>
					<article>
						<a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
						<h3>Amet varius aliquam</h3>
						<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
						<ul class="actions">
							<li><a href="#" class="button">More</a></li>
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
export default {
  data: function () {
    return {
      message: "",
      post: {},
      category: [],
      tags: [],
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
  },
  methods: {},
};
</script>