<template>
	<div :class="$style.home">
		<Intro />
		<Board />
		<Portfolio />
	</div>
</template>

<script>
	import Intro from './Intro';
	import Board from './Board';
	import Portfolio from './Portfolio';

    export default {
        name : 'Home',
		props : ['signCurrent'],
		components : {Intro, Portfolio, Board}
    }
</script>

<style module>
	.home {position:relative;}
	.home img {display:block; width:100%;}
</style>

