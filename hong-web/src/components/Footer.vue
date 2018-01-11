<template>
    <div :class="$style.footer">
        Vue.js <strong>X</strong> Hong-WEB
    </div>
</template>

<script>
    export default {
        name : 'Footer'
    }
</script>

<style module>
    .footer {background-color:#2f2f2f; padding:13px; color:#fff; text-align:center; overflow:hidden; letter-spacing:2px; font-size:15px;}
    .footer>strong {margin:0 5px;}
</style>
