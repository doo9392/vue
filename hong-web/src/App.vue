<template>
  <div id="app" class="ftSK">
    <Header />
    <router-view :class="$style.container" />
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
	components: {
		Header
	}
}
</script>

<style module>
  .container {margin-top:55px;}
</style>

<style>
  .ftSK {font-family: 'Signika', sans-serif;}
  .ftPO {font-family: 'Poiret One', cursive;}
  .ftCD {font-family: 'Cinzel Decorative', cursive;}
  .ftAS {font-family: 'Allerta Stencil', sans-serif;}
  .ftPA {font-family: 'Peddana', serif;}
  .ftMG {font-family: 'Megrim', cursive;}
</style>
