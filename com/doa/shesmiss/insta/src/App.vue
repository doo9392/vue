<template>
<div id="insta">
	<list :list="list" :count="count"></list>
	<btn :len="list.length" :count="count"></btn>
	</div>
</template>

<script>
	import list from './components/list.vue';
	import btn from './components/btn.vue';
	import eventBus from './EventBus.js';
	
	export default {
		name: 'App',
		data : function(){
			return {
				list : '',
				count : ''
			}
		},
		components : {list, btn},
		created : function(){
			eventBus.$on('addcount', this.add);
		},
		mounted : function(){
			this.$axios.get('/api/JSON/INSTA.json').then((response) => {
				this.list = response.data.list;
				this.count = response.data.count;
			}).catch((ex) => {
				console.log('ERROR : ', ex);
			});
		},
		methods : {
			add : function(){
				this.count += 9;
			}
		}
	}
</script>

<style>
	#insta img {width:100%; display:block;}
	#insta .resize {position:relative; left:50%; height:100%; width:inherit; transform:translateX(-50%);}
	#insta .ic-video {background-position:-355px 0; height:48px; width:48px;}
	#insta .ic-album {background-position:-355px -100px; height:47px; width:47px;}
</style>
