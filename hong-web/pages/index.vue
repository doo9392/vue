<template>
	<section :class="$style.container">
		<Header />
	</section>
</template>

<script>
	import Header from '../components/Header.vue'
</script>

<style module>
	.container {min-height:100vh; display:flex; justify-content:center; align-items:center; text-align:center;}
</style>
