<template>
	<div :class="$style.portfoliolist">
        <ul>
            <li v-for="(c, index) in portfolios">
                <img :src="'/img/port/' + c.img" :alt="c.name">
                <a :href="c.link" target="_blank"></a>
            </li>
        </ul>
	</div>
</template>

<script>
    export default {
        name : 'PortfolioList',
        data : function() {
            return {
				portfolios : {}
            }
        },
        created : function() {
            this.$axios.get('/JSON/PORTFOLIO.json').then((response) => {
                this.portfolios = response.data;
            });
        }
    }
</script>

<style module>
    .portfoliolist {}
    .portfoliolist ul {overflow:hidden; width:800px; margin:0 auto; border:1px solid #e0e3e8; border-right:0; border-bottom:0;}
    .portfoliolist ul>li {width:200px; height:200px; position:relative; float:left; border:1px solid  #e0e3e8; border-left:0; border-top:0; box-sizing:border-box;}
    .portfoliolist ul>li>img {width:60%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); transform-origin:center; transition:transform 0.5s;}
    .portfoliolist ul>li:hover>img {transform:translate(-50%, -50%) scale(1.2);}
    .portfoliolist ul>li>a {position:absolute; left:0; right:0; top:0; bottom:0; z-index:1;}
    .portfoliolist ul>li:nth-child(8n-6),
    .portfoliolist ul>li:nth-child(8n-4),
    .portfoliolist ul>li:nth-child(8n-3),
    .portfoliolist ul>li:nth-child(8n-1) {background-color:#e0e3e8;}
	@media screen and (max-width:800px) {
        .portfoliolist {padding-bottom:6.25vw;}
        .portfoliolist ul {width:90vw;}
        .portfoliolist ul>li {width:30vw; height:30vw;}
        .portfoliolist ul>li:nth-child(8n-6),
        .portfoliolist ul>li:nth-child(8n-4),
        .portfoliolist ul>li:nth-child(8n-3),
        .portfoliolist ul>li:nth-child(8n-1) {background-color:transparent;}
        .portfoliolist ul>li:nth-child(2n-1) {background-color:#e0e3e8;}
	}
</style>

