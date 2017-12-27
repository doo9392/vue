<template>
  <div :class="$style.header">
    <ul :class="$style.menu">
      <li>
        <router-link :to="{name:'Introduce'}">Introduce</router-link>
      </li>
      <li>
        <router-link :to="{name:'Portfolio'}">Portfolio</router-link>
      </li>
      <li>
        <router-link :to="{name:'QnA'}">QnA</router-link>
      </li>
    </ul>
    <router-link :class="$style.logo" :to="{name:'home'}">
      <img src="/img/com/logo_white.png" alt="LOGO">
    </router-link>
  </div>
</template>

<script>
  import VueRouter from 'vue-router';

  export default {
    name: 'Header',
    data () {
      return {
      }
    }
  }
</script>

<style module>
  .header {position:fixed; left:0; top:0; background-color:#222; width:100%; height:55px; color:#fff;}
  .header .logo {display:block; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%);}
  .header .logo img {width:40px; display:block;}
  .header .menu {float:left; overflow:hidden; margin-left:40px;}
  .header .menu>li {float:left; line-height:55px; margin-right:10px; padding-right:10px; position:relative;}
  .header .menu>li>a {color:#fff;}
  .header .menu>li:after {content:""; position:absolute; display:block; height:18px; width:1px; background-color:#fff; right:0; top:50%; transform:translateY(-50%);}
  .header .menu>li:last-child {margin-right:0; padding-right:0;}
  .header .menu>li:last-child:after {display:none;}
</style>
