<template>
    <div :class="$style.Mypage">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name : 'Mypage'
    }
</script>

<style module>
    @media screen and (max-width:800px) {
        .Mypage {padding:11vw 0; font-size:10vw; text-align:center;}
    }
</style>
