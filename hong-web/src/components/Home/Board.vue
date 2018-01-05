<template>
    <div :class="$style.board">
        <div :class="$style.box">
            <p>최신 게시물이 없습니다.</p>
        </div>
        <div :class="$style.techBg" class="ftAS">
            HONG-WEB
        </div>
    </div>
</template>

<script>
    export default {
        name : 'HomeBoard',
    }
</script>

<style module>
	.board {margin:100px 0; text-align:center;}
	.board .box {width:80%; border-top:1px solid #e0e3e8; margin:0 auto; padding:30px 0;}
	.board .box p {font-size:20px;}
	.board .techBg {margin-top:30px; min-height:200px; background-image:url("/img/main/tech_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px;}
	@media screen and (max-width:800px) {
		.board {margin:12.5vw 0;}
		.board .box {width:90vw; padding:3.75vw 0; border-top:0;}
		.board .box p {font-size:4vw;}
		.board .techBg {margin-top:3.75vw; min-height:25vw; line-height:25vw; font-size:3.125vw;}
	}
</style>

