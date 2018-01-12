<template>
	<div :class="$style.home">
		<Intro />
		<Board />
		<Portfolio />
		<Footer />
	</div>
</template>

<script>
	import Intro from './Intro';
	import Board from './Board';
	import Portfolio from './Portfolio';
	import Footer from '../Footer';

    export default {
        name : 'Home',
		components : {Intro, Portfolio, Board, Footer}
    }
</script>

<style module>
	.home {position:relative;}
	.home img {display:block; width:100%;}
</style>

