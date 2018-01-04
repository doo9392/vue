<template>
	<div :class="$style.home">
		<div :class="$style.tech">
			<img src="/img/main/intro.jpg" alt="">
			<div :class="$style.techbox">
				<h1>HONG-WEB</h1>
				<ul>
					<li v-for="(c, index) in TechAry">
						<p>{{c.name}}</p>
						<span v-for="(l, index) in c.details">{{l}}</span>
					</li>
        		</ul>
			</div>
		</div>
		<div :class="$style.board">
			<div :class="$style.box">
				<p>최신 게시물이 없습니다.</p>
			</div>
        	<div :class="$style.techBg" class="ftAS">
				HONG-WEB
        	</div>
     	</div>
    	<div :class="$style.MainPort">
        	<ul>
            	<li v-for="(c, index) in portfolios" v-if="index < 8">
                	<img :src="'/img/port/' + c.img" :alt="c.name">
                	<a :href="c.link" target="_blank"></a>
            	</li>
        	</ul>
			<router-link :to="{name:'Portfolio'}">+ MORE</router-link>
    	</div>
    	<div :class="$style.contact" v-if="false">
			<img src="/img/main/contact_bg.jpg" alt="">
			<div>
				<h2>Contact</h2>
				<form action="/_CONTACT/CONTACT.php" method="post">
					<table>
						<tr>
							<input type="text" name="title">
						</tr>
						<tr>
							<input type="text" name="content">
						</tr>
						<tr>
							<input type="text" name="img">
						</tr>
						<tr>
							<input type="submit">
						</tr>
					</table>
				</form>
			</div>
			<!-- <p>
				<span>준비중입니다.</span>
			</p> -->
    	</div>
	</div>
</template>

<script>
    export default {
        name : 'Home',
		props : ['portfolios', 'signCurrent'],
        data : function() {
            return {
                TechAry : [
                    {name : "CSS", details : ["CSS3", "SCSS"]},
                    {name : "HTML", details : ["HTML5"]},
                    {name : "JavaScript", details : ["jQuery", "Vue.js", "React.js"]}
				],
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
	.home {position:relative;}
	.home img {display:block; width:100%;}

    .tech {position:relative; max-height:100vh; overflow:hidden; text-align:center;}
    .tech .techbox {position:absolute; left:0; top:50%; transform:translateY(-50%); width:100%; overflow:hidden; background-color:rgba(255,255,255,0.7);}
    .tech .techbox h1 {margin-top:30px;}
    .tech .techbox ul {max-width:800px; margin:0 auto; overflow:hidden; padding:30px; box-sizing:border-box;}
    .tech .techbox ul li {float:left; width:33.333%; box-sizing:border-box; color:#222; margin-bottom:100px; position:relative;}
    .tech .techbox ul li p {line-height:125px; width:125px; border-radius:50%; background-color:#e0e3e8; margin:0 auto; cursor:pointer;}
    .tech .techbox ul li span {display:block; width:70px; height:70px; line-height:70px; border-radius:50%; background-color:#e0e3e8; margin:0 auto; position:absolute; top:105%; transform-origin:center; transform:scale(0); transition:transform 0.3s;}
    .tech .techbox ul li:nth-child(1) span:nth-child(2) {left:10%;}
    .tech .techbox ul li:nth-child(1) span:nth-child(3) {right:10%;}
    .tech .techbox ul li:nth-child(2) span:nth-child(2) {left:50%; margin-left:-35px;}
    .tech .techbox ul li:nth-child(3) span:nth-child(2) {left:0;}
    .tech .techbox ul li:nth-child(3) span:nth-child(3) {left:50%; margin-left:-35px;}
    .tech .techbox ul li:nth-child(3) span:nth-child(4) {right:0;}
    .tech .techbox ul li:hover span {transform:scale(1);}

	.board {margin:100px 0; text-align:center;}
	.board .box {width:90%; border-top:1px solid #e0e3e8; margin:0 auto; padding:30px 0;}
	.board .box p {font-size:20px;}
	.board .techBg {margin-top:30px; min-height:200px; background-image:url("/img/main/tech_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px;}

    .MainPort {position:relative; text-align:center; margin:100px 0; margin-bottom:50px;}
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

	.contact {position:relative; max-height:100vh; overflow:hidden;}
	.contact>div {position:absolute; z-index:1; width:100%; height:100%; left:0; top:0; padding-top:55px; box-sizing:border-box;}
	.contact>div>h2 {font-size:35px; text-align:center; line-height:50px; margin-bottom:50px;}
	.contact>div form {width:50%; height:80%; background-color:rgba(255,255,255,0.7); margin:0 auto; border-radius:20px;}
	.contact>div table {width:100%; height:100%;}

	.contact>p {position:absolute; z-index:3; width:100%; height:100%; left:0; top:0; background-color:rgba(0,0,0,0.7);}
	.contact>p>span {font-size:35px; position:absolute; display:block; left:50%; top:50%; transform:translate(-50%, -50%); color:#fff;}

	@media screen and (max-width:800px) {
		.tech {display:none;}
		.tech .techbox h1 {margin-top:3.75vw;}
		.tech .techbox ul {padding:0;}
		.tech .techbox ul li {margin-bottom:12.5vw;}
		.tech .techbox ul li p {line-height:20vw; width:20vw;}
		.tech .techbox ul li span {display:block; width:8.75vw; height:8.75vw; line-height:8.75vw;}

		.board {margin:12.5vw 0;}
		.board .box {width:90vw; padding:3.75vw 0; border-top:0;}
		.board .box p {font-size:4vw;}
		.board .techBg {margin-top:3.75vw; min-height:25vw; line-height:25vw; font-size:3.125vw;}

		.MainPort {margin:12.5vw 0;}
		.MainPort ul {width:90vw;}
		.MainPort ul>li {width:22.5vw; height:22.5vw;}
		.MainPort ul>li>img {width:60%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); transform-origin:center; transition:transform 0.5s;}
		.MainPort ul>li:hover>img {transform:translate(-50%, -50%) scale(1.2);}
		.MainPort ul>li>a {position:absolute; left:0; right:0; top:0; bottom:0; z-index:1;}
		.MainPort ul>li:nth-child(2),
		.MainPort ul>li:nth-child(4),
		.MainPort ul>li:nth-child(5),
		.MainPort ul>li:nth-child(7) {background-color:#e0e3e8;}

		.contact {display:none;}
	}
</style>

