<template>
	<div :class="$style.header">
		<div :class="$style.top">
			<Sns />
			<SignMenu :profil="profil" :signCurrent="signCurrent" />
		</div>
		<h1 @click="Navigate()" :class="$style.logo">
			<img src="/img/com/logo.png" alt="LOGO">
		</h1>
		<SignPop :MobilePop="false" />
		<Menu />
		<div :class="$style.bot">
			모바일 최적화 크기입니다. 새로고침을 해주세요.
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import Constant from '../../Constant';
	import EventBus from '../../EventBus';

	import Sns from './Sns';
	import SignMenu from './SignMenu';
	import SignPop from './SignPop';
	import Menu from './Menu';

	export default {
		name: 'Header',
		components : {
			Sns, SignMenu, SignPop, Menu
		},
		data () {
			return {
				up : true,
				signCurrent : false,
			}
		},
		mounted : function() {
			if(this.$store.state.profil.name !== null) {
				this.signCurrent = true;
			} else {
				this.signCurrent = false;
			}

			this.$store.commit((Constant.SIGN_CHECK), {signCurrent : this.signCurrent});
		},
		methods : {
			Navigate(component) {
				this.$router.push({name : 'Home'});
			}
		}
	}
</script>

<style module>
	.header {position:fixed; left:0; top:0; background-color:#fff; width:100%; height:auto; z-index:100;}
	.header .top {overflow:hidden; background-color:#222;}
	.header .logo {display:block; width:150px; margin:10px auto; cursor:pointer;}
	.header .logo img {width:100%; display:block;}

	.header .bot {text-align:center; transition:height 0.3s; overflow:hidden; height:0; line-height:30px;}

	@media screen and (max-width:800px) {
		.header {height:20vw;}
		.header .logo {width:8vw;}
		.header .bot {height:30px;}
	}
</style>
