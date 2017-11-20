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
	.cont {padding-top:88px; width:909px; margin:0 auto; overflow:hidden;}
	.element {float:left; overflow:hidden; width:293px; height:293px; margin-right:15px; margin-bottom:15px; vertical-align:top;}
	.element:nth-child(3n) {margin-right:0;}
	.element:last-child {margin-right:0;}
	.insta_id {display:block; position:relative; height:100%;}
</style>
