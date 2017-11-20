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
	.icSet {display:inline-block; background-image:url(/IMG/INSTA/ICON.png); position:absolute; top:3px; right:3px;}
</style>
