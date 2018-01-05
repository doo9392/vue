<template>
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
</template>

<script>
    export default {
        name : 'HomeIntro',
        data : function() {
            return {
                TechAry : [
                    {name : "CSS", details : ["CSS3", "SCSS"]},
                    {name : "HTML", details : ["HTML5"]},
                    {name : "JavaScript", details : ["jQuery", "Vue.js", "React.js"]}
				]
            }
		}
    }
</script>

<style module>
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

	@media screen and (max-width:800px) {
		.tech {display:none;}
		.tech .techbox h1 {margin-top:3.75vw;}
		.tech .techbox ul {padding:0;}
		.tech .techbox ul li {margin-bottom:12.5vw;}
		.tech .techbox ul li p {line-height:20vw; width:20vw;}
		.tech .techbox ul li span {display:block; width:8.75vw; height:8.75vw; line-height:8.75vw;}
	}
</style>

