<template>
    <div :class="$style.Web">
        제작중입니다.
    </div>
</template>

<script>
    export default {
        name : 'Web'
    }
</script>

<style module>
    @media screen and (max-width:800px) {
        .Web {padding:11vw 0; font-size:10vw; text-align:center;}
    }
</style>
