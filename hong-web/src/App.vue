<template>
	<div id="app" class="ftJF">
		<Header v-if="!mobileCheck" />
		<router-view :class="$style.container" v-if="!mobileCheck" />
		<Footer v-if="!mobileCheck" />
		<Mobile v-if="mobileCheck" />
	</div>
</template>

<script>
import Header from './components/Header';
import Constant from './Constant';
import Footer from './components/Footer'
import Mobile from './components/Mobile'

export default {
	name: 'app',
	data : function() {
		return {
			signCurrent : false,
			mobileCheck : false
		}
	},
	components: {
		Header, Footer, Mobile
	},
    mounted : function(){
		if(window.outerWidth <= 800) {
			this.mobileCheck = true;
		}

		if(window.sessionStorage.length !== 0) {
			this.signCurrent = true;

			this.$store.commit(Constant.SIGN_CHECK, this.signCurrent);
		} else {
			this.signCurrent = false;
		}
    }
}
</script>

<style module>
	.container {margin-top:140px;}
</style>

<style>
	@media screen and (max-width:800px) {
		body {height:100%;}

		#app {height:100%; overflow:hidden;}
	}

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
