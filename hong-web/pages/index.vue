<template>
	<section :class="$style.container">
		<Header />
	</section>
</template>

<script>
	import Header from '~/components/Header.vue'

	export default {
		components: {
			Header
		}
	}
</script>

<style module>
	.container {min-height:100vh; display:flex; justify-content:center; align-items:center; text-align:center;}
</style>
