<template>
    <ul :class="$style.sign">
        <li>
            <span v-if="!signCurrent" @click.prevent="SignPopOpen('in')">Sign in</span>
            <router-link v-if="signCurrent" :to="'Mypage/'+nickname">{{nickname}}</router-link>
        </li>
        <li>
            <span v-if="!signCurrent" @click.prevent="SignPopOpen('up')">Sign up</span>
            <form v-if="signCurrent" action="/_SIGN/SIGN_OUT.php" method="post">
                <input type="submit" value="Sign out">
            </form>
        </li>
    </ul>
</template>

<script>
	import VueRouter from 'vue-router';
    import EventBus from '../../EventBus';

	export default {
		name: 'SignMenu',
		props : ['signCurrent'],
		data () {
			return {
				nickname : ''
			}
		},
		mounted : function() {
			this.nickname = this.$store.state.profil.name;
		},
		methods : {
			Navigate(component) {
				this.$router.push({name : component});
			},
			SignPopOpen : function(type) {
				EventBus.$emit('Sign-Pop', type);
			}
		}
	}
</script>

<style module>
	.sign {float:right; overflow:hidden; margin-right:30px;}
	.sign>li {float:left; line-height:40px; margin-left:20px; padding-left:20px; position:relative; letter-spacing:1.5px; font-size:15px;}
	.sign>li>span {color:#fff; cursor:pointer;}
	.sign>li>span:hover {text-decoration:underline;}
	.sign>li form {display:block;}
	.sign>li input {color:#fff; cursor:pointer; background-color:transparent; border:0;}
	.sign>li input:hover {text-decoration:underline;}
	.sign>li>a {color:#fff; cursor:pointer; background-color:transparent; border:0;}
	.sign>li>a:hover {text-decoration:underline;}
	.sign>li:before {content:""; position:absolute; display:block; height:18px; width:1.1px; background-color:#fff; left:0; top:50%; transform:translateY(-50%);}
	.sign>li:first-child {margin-left:0; padding-left:0;}
	.sign>li:first-child:before {display:none;}
</style>
