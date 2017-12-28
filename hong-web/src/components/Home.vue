<template>
	<div :class="$style.home">
		<div :class="$style.intro">
			<img src="/img/main/intro.jpg" alt="">
			<div :class="$style.title">
				<h1 class="ftAS">HONG-WEB</h1>
				<p>Front-End Develop</p>
			</div>
		</div>
		<div :class="$style.tech">
			<ul>
				<li v-for="(c, index) in TechAry">
                	<p>{{c.name}}</p>
					<span v-for="(l, index) in c.details">{{l}}</span>
				</li>
        	</ul>
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
    	</div>
    	<div :class="$style.contact">
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
        mounted : function(){
            this.$axios.get('/JSON/PORTFOLIO.json').then((response) => {
                this.portfolios = response.data;
            });
        }
    }
</script>

<style module>
	.home {position:relative;}
    .home img {display:block; width:100%;}

    .intro {position:relative; max-height:100vh; overflow:hidden;}
	.intro .title {position:absolute; background-color:rgba(255,255,255,0.7); height:40%; width:100%; top:50%; transform:translateY(-50%); text-align:center;}
	.intro .title h1 {margin-bottom:10px; font-size:40px; letter-spacing:5px;}
	.intro .title p {font-size:20px;}

    .tech {position:relative; text-align:center;}
    .tech ul {max-width:800px; margin:0 auto; overflow:hidden; padding:150px 100px; box-sizing:border-box;}
    .tech ul li {float:left; width:125px; height:125px; margin-right:100px; box-sizing:border-box; position:relative; background-color:#fff;}
    .tech ul li p {line-height:125px; border-radius:50%; border:1px solid #e0e3e8; box-sizing:border-box;}
    .tech ul li span {display:block; width:80px; height:80px; border:1px solid #e0e3e8; box-sizing:border-box; line-height:80px; position:absolute; border-radius:50%;}
    .tech ul li span:after {content:""; display:block; position:absolute; background-color:#e0e3e8; width:1px; height:150px; transform-origin:center; z-index:-1;}
    .tech ul li:after {content:""; display:block; position:absolute; background-color:#e0e3e8; width:1px; height:150px; transform-origin:center; z-index:-1;}
    .tech ul li:nth-child(1) {margin-top:200px;}
    .tech ul li:nth-child(1) span:nth-child(2) {left:50%; top:50%; transform:translate(-200%, -50%);}
    .tech ul li:nth-child(1) span:nth-child(3) {left:50%; top:50%; transform:translate(-140%, 80%);}
    .tech ul li:nth-child(1) span:nth-child(2):after {left:100%; top:50%; transform:translate(50%, -50%); height:1px; width:10px;}
    .tech ul li:nth-child(1) span:nth-child(3):after {left:90%; top:-2%; transform:translate(-50%, -50%) rotate(35deg); height:12px;}
    .tech ul li:nth-child(1):after {left:118%; top:50%; transform:translateY(-50%); width:280px; height:1px;}
    .tech ul li:nth-child(2) span:nth-child(2) {left:50%; top:50%; transform:translate(-50%, -200%);}
    .tech ul li:nth-child(2) span:nth-child(2):after {left:50%; top:100%; transform:translate(-50%, 50%); height:10px;}
    .tech ul li:nth-child(2):after {left:-35%; top:-15%; transform:rotate(48.2deg); height:350px;}
    .tech ul li:nth-child(3) {margin-right:0; margin-top:200px;}
    .tech ul li:nth-child(3) span:nth-child(2) {left:50%; top:50%; transform:translate(40%, -180%);}
    .tech ul li:nth-child(3) span:nth-child(3) {left:50%; top:50%; transform:translate(100%, -50%);}
    .tech ul li:nth-child(3) span:nth-child(4) {left:50%; top:50%; transform:translate(40%, 80%);}
    .tech ul li:nth-child(3) span:nth-child(2):after {right:80%; bottom:-20%; transform:translate(-50%, -50%) rotate(35deg); height:12px;}
    .tech ul li:nth-child(3) span:nth-child(3):after {right:100%; top:50%; transform:translate(-50%, -50%); height:1px; width:9px;}
    .tech ul li:nth-child(3) span:nth-child(4):after {right:90%; top:-2%; transform:translate(-50%, -50%) rotate(-35deg); height:12px;}
    .tech ul li:nth-child(3):after {left:-40%; top:-170%; transform:rotate(-48.2deg); height:350px;}
	.tech .techBg {min-height:200px; background-image:url("/img/main/tech_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px;}

    .MainPort {position:relative; text-align:center; margin:100px 0;}
    .MainPort ul {overflow:hidden; width:800px; margin:0 auto; border:1px solid #e0e3e8;}
    .MainPort ul>li {width:200px; height:200px; position:relative; float:left;}
    .MainPort ul>li>img {width:60%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); transform-origin:center; transition:transform 0.5s;}
    .MainPort ul>li:hover>img {transform:translate(-50%, -50%) scale(1.2);}
    .MainPort ul>li>a {position:absolute; left:0; right:0; top:0; bottom:0; z-index:1;}
    .MainPort ul>li:nth-child(2),
    .MainPort ul>li:nth-child(4),
    .MainPort ul>li:nth-child(5),
	.MainPort ul>li:nth-child(7) {background-color:#e0e3e8;}

	.contact {position:relative; max-height:100vh; overflow:hidden;}
	.contact>div {position:absolute; z-index:1; width:100%; height:100%; left:0; top:0; padding-top:55px; box-sizing:border-box;}
	.contact>div>h2 {font-size:35px; text-align:center; line-height:50px; margin-bottom:50px;}
	.contact>div form {width:50%; height:80%; background-color:rgba(255,255,255,0.7); margin:0 auto; border-radius:20px;}
	.contact>div table {width:100%; height:100%;}

	.contact>p {position:absolute; z-index:3; width:100%; height:100%; left:0; top:0; background-color:rgba(0,0,0,0.7);}
	.contact>p>span {font-size:35px; position:absolute; display:block; left:50%; top:50%; transform:translate(-50%, -50%); color:#fff;}
</style>

