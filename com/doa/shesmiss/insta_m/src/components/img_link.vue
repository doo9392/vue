<template>
	<img :src="'https://scontent-hkg3-1.cdninstagram.com/t51.2885-15/' + img + '.jpg'" @load="imgSize" :class="{resize:resizing}">
</template>

<script>
	export default {
		name: 'img_link',
		props : ['img'],
		data : function(){
			return {
				resizing : false
			}
		},
		methods : {
			imgSize : function(){
				var element = this.$el;
				var img = element;
				var imgH = img.clientHeight;
				
				if(imgH < 292){
					this.resizing = true;
				}
			}
		}
	}
</script>
