<template>
	<div :class="$style.cont">
		<div :class="$style.element" v-for="(c, index) in list" v-if="index < count">
			<a :href="'https://www.instagram.com/p/' + c.href" :class="$style.insta_id" target="_blank">
				<img_link :img="c.img"></img_link>
				<icon :type="c.type" v-if="c.type !== ''"></icon>
			</a>
		</div>
	</div>
</template>

<script>
	import img_link from './img_link.vue';
	import icon from './icon.vue';
	
	export default {
		name: 'list',
		props : ['list', 'count'],
		components : {img_link, icon},
	}
</script>

<style module>
	.cont {padding-top:100px; padding-top:calc(100/1080*100vw); margin:0 auto; overflow:hidden;}
	.element {float:left; overflow:hidden; width:313px; width:calc(313/1080*100vw); height:313px; height:calc(313/1080*100vw); margin-right:20px; margin-right:calc(20/1080*100vw); margin-bottom:20px; margin-bottom:calc(20/1080*100vw); vertical-align:top;}
	.element:nth-child(3n) {margin-right:0;}
	.element:last-child {margin-right:0;}
	.insta_id {display:block; position:relative; height:100%;}
</style>
