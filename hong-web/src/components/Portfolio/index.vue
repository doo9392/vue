<template>
	<div :class="$style.portfolio">
        <div :class="$style.portfolioBg" class="ftAS">
            HONG-WEB
        </div>
        <PortfolioList />
	</div>
</template>

<script>
    import PortfolioList from './PortfolioList';

    export default {
        name : 'Portfolio',
        components : {
            PortfolioList
        }
    }
</script>

<style module>
    .portfolio {position:relative; padding-bottom:50px;}
	.portfolio .portfolioBg {min-height:200px; background-image:url("/img/main/tech_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px; margin-bottom:50px;}
	@media screen and (max-width:800px) {
		.portfolio .portfolioBg {margin-bottom:3.75vw; min-height:25vw; line-height:25vw; font-size:3.125vw;}
    }
</style>

