<template>
	<div :class="$style.menu">
		<ul>
			<li>
				<router-link :to="{name:'Portfolio'}">Portfolio</router-link>
			</li>
			<li>
				<router-link :to="{name:'Web'}">Web</router-link>
				<ul>
					<li>
						<router-link :to="{name:'Web'}">Html</router-link>
					</li>
					<li>
						<router-link :to="{name:'Web'}">Css</router-link>
					</li>
					<li>
						<router-link :to="{name:'Web'}">jQuery</router-link>
					</li>
					<li>
						<router-link :to="{name:'Web'}">Vue.js</router-link>
					</li>
				</ul>
			</li>
			<li>
				<router-link :to="{name:'Board'}">Board</router-link>
			</li>
			<li>
				<router-link :to="{name:'QnA'}">QnA</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Menu'
	}
</script>

<style module>
	.menu {position:relative; border-bottom:1px solid #ddd;}
	.menu>ul {text-align:center;}
	.menu>ul>li {display:inline-block; margin-right:30px; line-height:30px;}
	.menu>ul>li>a {color:000; font-size:18px;}
	.menu>ul>li a:hover {text-decoration:underline;}
	.menu>ul>li:last-child {margin-right:0; padding-right:0;}
	.menu>ul>li>ul {position:absolute; left:0; right:0; top:31px; background-color:#2f2f2f; overflow:hidden; height:0;  transition:all 0.3s;}
	.menu>ul>li>ul>li {display:inline-block; line-height:35px; margin-left:20px; font-size:16px;}
	.menu>ul>li>ul>li>a {color:#fff;}
	.menu>ul>li>ul>li:first-child {margin-left:0;}
	.menu>ul>li:hover>ul {height:35px;}

	@media screen and (max-width:1400px) {
		.menu>ul>li>ul {display:none;}
	}

	@media screen and (max-width:800px) {
		.menu {display:none;}
	}
</style>
