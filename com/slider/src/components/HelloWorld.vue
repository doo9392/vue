<template>
  <div class="hello" @touchstart="start" @touchmove="move" @touchend="end">
    <ul>
      <li>slide1</li>
      <li>slide2</li>
      <li>slide3</li>
      <li>slide4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      stx : 0,
      mtx : 0,
      rtx : 0,
      swipe : false
    }
  },
  methods : {
    start : function(event) {
      this.swipe = true;

      $('.hello').find('ul').find('>li').last().prependTo($('.hello').find('ul'));
      $('.hello').find('ul').css({'left' : -$('.hello').width()});
      
      this.stx = event.touches[0].clientX;
    },
    move : function(event) {
      this.mtx = event.touches[0].clientX;
      this.rtx = this.mtx - this.stx;

      if(this.swipe){
        $('.hello').find('ul').css({'left' : this.rtx - $('.hello').width()});
      }
    },
    end : function(event) {
      if(this.swipe){
        if(Math.abs(this.rtx) < 10){
          $('.hello').find('ul').stop().animate({'left' : -$('.hello').width()}, 300, function(){
            console.log('aa')
            $('.hello').find('ul').find('>li').first().appendTo($('.hello').find('ul'));
            $('.hello').find('ul').css({'left' : 0});
          });
        }else{
          if(this.rtx < 0){
            $('.hello').find('ul').stop().animate({'left' : (-2) * $('.hello').width()}, 300, function(){
              for(var i = 0; i <= 1; i++){
                $('.hello').find('ul').find('>li').first().appendTo($('.hello').find('ul'));
              }

              $('.hello').find('ul').css({'left' : 0});
            });
          }else if(this.rtx > 0){
            $('.hello').find('ul').stop().animate({'left' : 0}, 300);
          }
        }

      this.swipe = false;
      this.stx = 0;
      this.mtx = 0;
      this.rtx = 0;
      }
    }
  }
}
</script>

<style>
  .hello {width:50vw; height:50vw; overflow:hidden; border:2px solid #f00; margin:50px auto;}
  ul {list-style:none; overflow:hidden; width:400%; height:100%; position:relative; left:0;}
  ul>li {float:left; width:25%; text-align:center; font-size:25px; height:100%;}
</style>
