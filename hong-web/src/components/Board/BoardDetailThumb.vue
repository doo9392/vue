<template>
    <div :class="$style.thumb" class="thumb">
        <img :src="'/DATA/BOARD/'+file" :alt="file" :class="{SmallHeight:HeightCheck}" @load="ImgLoad" />
    </div>
</template>

<script>
    export default {
        name : 'BoardDetailThumb',
        props : ['file'],
        data() {
            return {
                HeightCheck : false
            }
        },
        methods : {
            ImgLoad : function(event) {
                if(event.path[0].height < event.path[1].offsetHeight) {
                    this.HeightCheck = true;
                }
            }
        }
    }
</script>

<style module>
    .thumb {overflow:hidden; width:280px; height:280px; overflow:hidden; margin:0 auto; position:relative;}
    .thumb>img {width:100%; display:block;}

    @media screen and (max-width:800px) {
        .thumb {margin:4vw 0; width:100vw; height:80vw;}
    }
</style>

<style>
    .thumb img.SmallHeight {position:absolute; width:initial; height:100%; left:50%; top:0; transform:translateX(-50%);}
</style>