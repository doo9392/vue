<template>
	<div>
		<div class="header">
			<h1 class="headerText">(주)OpenSG</h1>
			<nav>
				<ul>
					<li>
						<router-link :to="{name:'home'}">Home</router-link>
					</li>
					<li>
						<router-link :to="{name:'about'}">About</router-link>
					</li>
					<li>
						<router-link :to="{name:'contacts'}">Contacts</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<div class="container">
			<router-view></router-view>
			<router-view name="info"></router-view>
		</div>
	</div>
</template>

<script>
	import Title from './components/Title.vue';
	import Home from './components/Home.vue';
	import About from './components/About.vue';
	import Contacts from './components/Contacts.vue';
	import ContactByNo from './components/ContactByNo.vue';
	import VueRouter from 'vue-router';

	const router = new VueRouter({
		routes : [
			{path : '/', components : {default : Title, info : Home}},
			{path : '/home', name : 'home', components : {default : Title, info : Home}},
			{path : '/about', name : 'about', components : {default : Title, info : About}},
			{
				path : '/contacts', name : 'contacts', components : {default : Title, info : Contacts},
				children : [
					{path : ':no', name : 'contactbyno', component : ContactByNo}
				]
			}
		]
	});

	export default {
		name : 'app',
		router
	}
</script>

<style>
	@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

	.header {background-color:aqua; padding:10px 0 0 0;}
	.headerText {padding:0 20px;}
	ul {list-style:none; margin:0; padding:0; overflow:hidden; background-color:purple;}
	li {float:left;}
	li a {display:block; color:yellow; text-align:center; padding:14px 16px; text-decoration:none;}
	li a:hover {background-color:aqua; border-left:#000;}
</style>
