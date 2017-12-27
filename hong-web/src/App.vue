<template>
  <div id="app">
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