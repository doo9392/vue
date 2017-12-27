<template>
    <div :class="$style.NotFound">
        <p>
            존재하지 않는 페이지입니다.<br>
            This page does not exist.
        </p>
        <router-link :to="{name:'Home'}">Go back to the home page</router-link>
    </div>
</template>

<script>
    export default {
        name : 'NotFound'
    }
</script>

<style module>
    .NotFound {text-align:center;}
    .NotFound p {font-size:35px; line-height:70px; margin:150px 0 100px;}
    .NotFound a {font-size:20px;}
    .NotFound a:hover {text-decoration:underline;}
</style>
