<template>
    <div :class="$style.MainPort">
        <div :class="$style.techBg" class="ftAS">
            HONG-WEB
        </div>
        <ul>
            <li v-for="(c, index) in portfolios" v-if="index < 8">
                <img :src="'/img/port/' + c.img" :alt="c.name">
                <a :href="c.link" target="_blank"></a>
            </li>
        </ul>
        <router-link :to="{name:'Portfolio'}">+ MORE</router-link>
    </div>
</template>

<script>
    export default {
        name : 'HomePortfolio',
        data : function() {
            return {
				portfolios : {}
            }
		},
		mounted : function() {
			this.$axios.get('/JSON/PORTFOLIO.json').then((response) => {
				this.portfolios = response.data;
			});
		}
    }
</script>

<style module>
    .MainPort {position:relative; text-align:center; margin:100px 0; margin-bottom:50px;}
	.MainPort .techBg {min-height:200px; background-image:url("/img/main/tech_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px; margin-bottom:30px;}
    .MainPort ul {overflow:hidden; width:800px; margin:0 auto; border:1px solid #e0e3e8;}
    .MainPort ul>li {width:200px; height:200px; position:relative; float:left;}
    .MainPort ul>li>img {width:60%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); transform-origin:center; transition:transform 0.5s;}
    .MainPort ul>li:hover>img {transform:translate(-50%, -50%) scale(1.2);}
    .MainPort ul>li>a {position:absolute; left:0; right:0; top:0; bottom:0; z-index:1;}
    .MainPort ul>li:nth-child(2),
    .MainPort ul>li:nth-child(4),
    .MainPort ul>li:nth-child(5),
	.MainPort ul>li:nth-child(7) {background-color:#e0e3e8;}

	.MainPort>a {display:inline-block; line-height:30px; height:30px; border:1px solid #222; border-radius:15px; width:100px; margin-top:30px; font-size:16px; box-sizing:border-box;}
	.MainPort>a:hover {color:#fff; background-color:#222;}
	@media screen and (max-width:800px) {
		.MainPort {margin:12.5vw 0;}
		.MainPort .techBg {display:none;}
		.MainPort ul {width:90vw;}
		.MainPort ul>li {width:22.5vw; height:22.5vw;}
		.MainPort ul>li>img {width:60%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); transform-origin:center; transition:transform 0.5s;}
		.MainPort ul>li:hover>img {transform:translate(-50%, -50%) scale(1.2);}
		.MainPort ul>li>a {position:absolute; left:0; right:0; top:0; bottom:0; z-index:1;}
		.MainPort ul>li:nth-child(2),
		.MainPort ul>li:nth-child(4),
		.MainPort ul>li:nth-child(5),
		.MainPort ul>li:nth-child(7) {background-color:#e0e3e8;}
	}
</style>
