<template>
	<div id="app" class="ftJF">
		<!-- <Header  /> -->
		<router-view :class="$style.container" />
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Constant from './Constant';

export default {
	name: 'app',
	data : function() {
		return {
			signCurrent : false
		}
	},
	components: {
		Header, Footer
	},
	computed : {
		sign() {
			return this.$store.state.sign;
		}
	},
    mounted : function(){
		console.log(window.outerWidth)
		if(window.sessionStorage.length !== 0) {
			this.signCurrent = true;

			this.$store.commit(Constant.SIGN_FETCH, this.signCurrent);
		} else {
			this.signCurrent = false;
		}
    }
}
</script>

<style module>
	.container {margin-top:55px;}

	@media screen and (max-width:800px) {
		.container {margin-top:13vw;}
	}
</style>

<style>
	@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);
	@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

	.ftJF {font-family: 'Josefin Sans','Nanum Gothic', sans-serif;}
	.ftSK {font-family: 'Signika', sans-serif;}
	.ftPO {font-family: 'Poiret One', cursive;}
	.ftCD {font-family: 'Cinzel Decorative', cursive;}
	.ftAS {font-family: 'Allerta Stencil', sans-serif;}
	.ftPA {font-family: 'Peddana','Nanum Gothic', serif;}
	.ftMG {font-family: 'Megrim', cursive;}
	.ftNPS {font-family: 'Nanum Pen Script', sans-serif;}
</style>
