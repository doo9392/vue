<template>
	<ul :class="$style.sns">
		<li>
			<a target="_blank" href="mailto:hackish@hanmail.net">To Mail</a>
		</li>
		<li>
			<a target="_blank" href="https://open.kakao.com/me/hongweb">Kakao Talk</a>
		</li>
		<li>
			<a target="_blank" href="https://www.instagram.com/ssseongjun/">Instagram</a>
		</li>
	</ul>
</template>

<script>
	export default {
		name : 'Sns'
	}
</script>

<style module>
	.sns {overflow:hidden; float:left; margin-left:30px;}
	.sns>li {float:left; line-height:35px; margin-right:20px; padding-right:20px; position:relative; letter-spacing:1.5px;}
	.sns>li>a {color:#fff; font-size:15px;}
	.sns>li>a:hover {text-decoration:underline;}
	.sns>li:after {content:""; position:absolute; display:block; height:18px; width:1px; background-color:#fff; right:0; top:50%; transform:translateY(-50%);}
	.sns>li:last-child {margin-right:0; padding-right:0;}
	.sns>li:last-child:after {display:none;}
</style>
