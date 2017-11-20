<template>
	<div :class="$style.moreBtn" @click="addCount" v-if="count < len">
		{{MORE}}
	</div>
</template>

<script>
	import eventBus from '../EventBus.js';
	
	export default {
		name: 'btn',
		props : ['len', 'count'],
		data : function(){
			return {
				MORE : '+ MORE'
			}
		},
		methods : {
			addCount : function(){
				eventBus.$emit('addcount');
			}
		}
	}
</script>

<style module>
	.moreBtn {line-height:124px; line-height:calc(124/1080*100vw); border:3px solid #000; font-size:2.25rem; font-size:calc(36/1080*100vw); text-align:center; margin:50px 0 100px; margin:calc(50/1080*100vw) 0 calc(100/1080*100vw);}
</style>
