<template>
	<div id="app" class="ftJF">
		<Header :signCurrent="signCurrent" />
		<router-view :portfolios="portfolios" :signCurrent="signCurrent" :class="$style.container" />
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	name: 'app',
	data : function() {
		return {
			portfolios : {},
			signCurrent : false
		}
	},
	components: {
		Header, Footer
	},

    mounted : function(){
        this.$axios.get('/JSON/PORTFOLIO.json').then((response) => {
            this.portfolios = response.data;
		});
		var Cookie = document.cookie;

		if(Cookie.indexOf('PHPSESSID') != -1) {
			this.signCurrent = true;
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
