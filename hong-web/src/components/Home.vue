<template>
  <div :class="$style.home">
      <div :class="$style.intro">
        <img src="/img/main/intro.jpg" alt="">
      </div>
      <div :class="$style.tech">

      </div>
      <div :class="$style.MainPort">

      </div>
      <div :class="$style.contact">
        <img src="/img/main/contact_bg.jpg" alt="">
      </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name : 'Home',
        data : function() {
            return {

            }
        },
        mounted : function(){

        }
    }
</script>

<style module>
    .home {font-size:20px;}
</style>

