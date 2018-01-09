<template>
    <div :class="$style.MobileHeader">
		<h1 :class="$style.logo">
			<img src="/img/com/logo_white_40.png" alt="LOGO">
		</h1>
    </div>
</template>

<script>
    export default {
        name : 'MobileHeader'
    }
</script>

<style module>
    .MobileHeader {position:fixed; width:100%; top:0; z-index:10; background-color:#2f2f2f;}
	.MobileHeader .logo {display:block; width:7vw; margin:2vw auto; cursor:pointer;}
	.MobileHeader .logo>img {display:block; width:100%;}
</style>
