<template>
    <div :class="$style.MobileHeader">
		<h1 :class="$style.logo" @click="Navigate">
			<img src="/img/com/logo.png" alt="LOGO">
		</h1>
    </div>
</template>

<script>
    export default {
        name : 'MobileHeader',
        methods : {
            Navigate : function() {
                this.$router.push('/');
            }
        }
    }
</script>

<style module>
    .MobileHeader {position:fixed; width:100%; top:0; z-index:10; background-color:#fff; box-shadow:0 0px 10px #005944;}
	.MobileHeader .logo {display:block; width:26vw; margin:2vw auto; cursor:pointer;}
	.MobileHeader .logo>img {display:block; width:100%;}
</style>
