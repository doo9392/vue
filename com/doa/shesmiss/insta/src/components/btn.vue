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
	.moreBtn {font-family:'Century Gothic'; width:120px; height:30px; margin:0 auto; margin-top:30px; background-color:#000; color:#fff; line-height:30px; cursor:pointer; font-size:14px; margin-bottom:55px; text-align:center;}
</style>
