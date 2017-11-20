<template>
	<span :class="[$style.icSet, 'ic-' + type]"></span>
</template>

<script>
	export default {
		name: 'icon',
		props : ['type']
	}
</script>

<style module>
	.icSet {display:inline-block; background-image:url("/IMG/INSTA/ICON.png"); position:absolute; top:10px; right:0; top:calc(10/1080*100vw); transform:scale(1.8); transform-origin:right;}
</style>
