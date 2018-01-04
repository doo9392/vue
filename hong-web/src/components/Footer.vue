<template>
	<div :class="$style.footer">
		<div>
			<ul>
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
		</div>
	</div>
</template>

<script>
</script>

<style module>
	.footer {background-color:#222; padding:20px 0;}
	.footer>div {padding:0 40px; box-sizing:border-box;}
	.footer>div ul {overflow:hidden; width:400px; margin:0 auto;}
	.footer>div ul li {width:33.333%; text-align:center; float:left; border-right:1px solid #e0e3e8; box-sizing:border-box; font-size:18px;}
	.footer>div ul li:last-child {border:0;}
	.footer>div ul li a {color:#fff;}
	.footer>div ul li a:hover {text-decoration:underline;}

	@media screen and (max-width:800px) {
		.footer {padding:2.5vw 0;}
		.footer>div {padding:0 5vw;}
		.footer>div ul {width:100%;}
		.footer>div ul li {font-size:3vw;}
	}
</style>
