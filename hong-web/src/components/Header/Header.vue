<template>
	<div :class="$style.header">
		<MobildMenu />
		<ul :class="$style.menu">
			<li>
				<router-link :to="{name:'Portfolio'}">Portfolio</router-link>
			</li>
			<li>
				<router-link :to="{name:'Board'}">Board</router-link>
			</li>
			<li>
				<router-link :to="{name:'QnA'}">QnA</router-link>
			</li>
		</ul>
		<h1 @click="Navigate('Home')" :class="$style.logo">
			<img src="/img/com/logo_white_40.png" alt="LOGO">
		</h1>
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
		<div :class="$style.signPop" v-if="pop">
			<div v-if="up" :class="$style.signup">
				<h2>Sign Up</h2>
				<form action="/_SIGN/SIGN_UP.php" method="post" @submit="UpSubmit">
					<table>
						<tr>
							<th>E-mail</th>
							<td>
								<input type="text" v-model="email" name="email">
								<span>@</span>
								<select name="email_back" v-model="email_back">
									<option value="naver.com">naver.com</option>
									<option value="hanmail.net">hanmail.net</option>
								</select>
								<i v-if="Error.email.current">{{Error.email.value}}</i>
							</td>
						</tr>
						<tr>
							<th>Password</th>
							<td>
								<input type="password" v-model="password" name="password">
								<i v-if="Error.password.current">{{Error.password.value}}</i>
							</td>
						</tr>
						<tr>
							<th>Password Check</th>
							<td>
								<input type="password" v-model="password_check" name="password_check">
								<i v-if="Error.password_check.current">{{Error.password_check.value}}</i>
							</td>
						</tr>
						<tr>
							<th>Nickname</th>
							<td>
								<input type="text" v-model="nickname" name="nickname">
								<i v-if="Error.nickname.current">{{Error.nickname.value}}</i>
							</td>
						</tr>
					</table>
					<input type="submit" value="Sign Up" :class="$style.submit"
					v-if="!this.Error.email.current && !this.Error.password.current && !this.Error.password_check.current && !this.Error.nickname.current">
					<input type="reset" @click="SignPopClose()" value="Cancel" :class="$style.cancel">
				</form>
				<ul>
					<li>e-mail은 답변 및 공지 전달에만 사용됩니다.</li>
				</ul>
			</div>
			<div v-if="!up">
				<h2>Sign In</h2>
				<form action="/_SIGN/SIGN_IN.php" method="post">
					<table>
						<tr>
							<th>E-mail</th>
							<td>
								<input type="email" name="email">
							</td>
						</tr>
						<tr>
							<th>Password</th>
							<td>
								<input type="password" name="password">
							</td>
						</tr>
					</table>
					<input type="submit" value="Sign In" :class="$style.submit">
					<input type="reset" @click="SignPopClose()" value="Cancel" :class="$style.cancel">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import VueRouter from 'vue-router';
	import Constant from '../../Constant';

	import MobildMenu from './MobileMenu';

	export default {
		name: 'Header',
		props : ["signCurrent"],
		components : {
			MobildMenu
		},
		data () {
			return {
				pop : false,
				up : true,
				email : '',
				email_back : 'naver.com',
				password : '',
				password_check : '',
				nickname : '',
				nicknameList : [],
				Error : {
					email : {value : 'e-mail을 입력해주세요.', current : true},
					password : {value : '비밀번호를 입력해주세요.', current : true},
					password_check : {value : '비밀번호가 일치하지 않습니다.', current : false},
					nickname : {value : '닉네임을 입력해주세요.', current : true}
				},
				signCurrent : ''
			}
		},
		mounted : function() {
			this.$axios.get('/_SIGN/SIGN_API.php').then((response) => {
				this.nicknameList = response.data;
			});

			if(window.sessionStorage.length !== 0) {
				this.nickname = this.$store.state.profil.name;
			}
		},
		watch : {
			email : function(v){
				var KeyCode = /[~!@\#$%^&*\()\=+'ㄱ-ㅎ]/g;
				var KeyCodeCheck = KeyCode.test(v);

				var overlap = false;
				var back = '@' + this.email_back

				this.email = v.trim();
				this.nicknameList.map(function(i){
					if(i.email == v.trim() + back) {
						overlap = true;
					}
				});

				if(!KeyCodeCheck) {
					if(v.trim() == "") {
						this.Error.email.current = true;
						this.Error.email.value = 'e-mail을 입력해주세요.';
					} else {
						if(v.trim().length >= 5 && v.trim().length <= 20) {
							if(!overlap) {
								this.Error.email.current = false;
							} else {
								this.Error.email.current = true;
								this.Error.email.value = '중복되는 email이 있습니다.';
							}
						} else {
							this.Error.email.current = true;
							this.Error.email.value = '올바른 형식이 아닙니다.';
						}
					}
				}else{
					this.Error.email.current = true;
					this.Error.email.value = '올바른 형식이 아닙니다.';
				}
			},
			email_back : function(v){
				var overlap = false;
				var front = this.email;

				this.email_back = v;
				this.nicknameList.map(function(i){
					if(i.email == front + '@' + v) {
						overlap = true;
					}
				});

				if(front.trim() != "") {
					if(!overlap) {
						this.Error.email.current = false;
					} else {
						this.Error.email.current = true;
						this.Error.email.value = '중복되는 email이 있습니다.';
					}
				} else {
					this.Error.email.current = true;
					this.Error.email.value = 'e-mail을 입력해주세요.';
				}
			},
			password : function(v){
				if(v.trim().length >= 8 && v.trim().length <= 20) {
					this.Error.password.current = false;
					this.Error.password_check.current = true;
				} else if(v.trim().length > 20) {
					this.Error.password.current = true;
					this.Error.password.value = '20자리 이하로 입력하세요.';
				} else {
					this.Error.password.current = true;
					this.Error.password.value = '8자리 이상 입력하세요.';
				}
			},
			password_check : function(v){
				if(v.trim() == this.password) {
					this.Error.password_check.current = false;
				}else{
					this.Error.password_check.current = true;
				}
			},
			nickname : function(v){
				var KeyCode = /[~!@\#$%^&*\()\-=+']/g;
				var KeyCodeCheck = KeyCode.test(v);

				var overlap = false;

				this.nicknameList.map(function(i){
					if(i.nickname == v.trim()) {
						overlap = true;
					}
				});


				if(!KeyCodeCheck) {
					if(v.trim().length >= 4 && v.trim().length <= 10) {
						if(!overlap) {
							this.Error.nickname.current = false;
						} else {
							this.Error.nickname.value = '중복되는 닉네임이 있습니다.';
							this.Error.nickname.current = true;
						}
					} else if (v.trim().length > 10) {
						this.Error.nickname.value = '10자리 이하로 입력하세요.';
						this.Error.nickname.current = true;
					} else {
						this.Error.nickname.value = '4자리 이상 입력하세요.';
						this.Error.nickname.current = true;
					}
				} else {
					this.Error.nickname.current = true;
					this.Error.nickname.value = '올바른 형식이 아닙니다.';
				}
			}
		},
		methods : {
			Navigate(component) {
				this.$router.push({name : component});
			},
			SignPopOpen : function(type) {
				this.pop = true;

				if(type == 'in') {
					this.up = false;
				} else if(type == 'up') {
					this.up = true;
				}
			},
			SignPopClose : function() {
				this.pop = false;
				this.email = '';
				this.password = '';
				this.password_check = '';
				this.nickname = '';
			},
			UpSubmit : function(e) {
				if(!this.Error.email) {
					e.preventDefault();

					alert('e-mail이 잘못됬습니다.');

					e.target[0].focus();
				} else if(!this.Error.password) {
					e.preventDefault();

					alert('비밀번호가 잘못됬습니다.');

					e.target[1].focus();
				} else if(!this.Error.password_check) {
					e.preventDefault();

					alert('비밀번호가 맞지 않습니다.');

					e.target[2].focus();
				} else if(!this.Error.nickname) {
					e.preventDefault();

					alert('닉네임이 잘못됬습니다.');

					e.target[3].focus();
				}
			},
			SignOut : function() {
				window.location = '/_SIGN/SIGN_OUT.php';
			}
		}
	}
</script>

<style module>
	.header {position:fixed; left:0; top:0; background-color:#222; width:100%; height:55px; color:#fff; z-index:100;}
	.header .logo {display:block; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%);}
	.header .logo img {width:40px; display:block;}

	.header .menu {float:left; overflow:hidden; margin-left:40px;}
	.header .menu>li {float:left; line-height:55px; margin-right:20px; padding-right:20px; position:relative; letter-spacing:1.5px;}
	.header .menu>li>a {color:#fff; font-size:18px;}
	.header .menu>li>a:hover {text-decoration:underline;}
	.header .menu>li:after {content:""; position:absolute; display:block; height:18px; width:1px; background-color:#fff; right:0; top:50%; transform:translateY(-50%);}
	.header .menu>li:last-child {margin-right:0; padding-right:0;}
	.header .menu>li:last-child:after {display:none;}

	.header .sign {float:right; overflow:hidden; margin-right:40px;}
	.header .sign>li {float:left; line-height:55px; margin-left:20px; padding-left:20px; position:relative; letter-spacing:1.5px; font-size:18px;}
	.header .sign>li>span {color:#fff; cursor:pointer;}
	.header .sign>li>span:hover {text-decoration:underline;}
	.header .sign>li form {display:block;}
	.header .sign>li input {color:#fff; font-size:18px; cursor:pointer; background-color:transparent; border:0;}
	.header .sign>li input:hover {text-decoration:underline;}
	.header .sign>li>a {color:#fff; font-size:18px; cursor:pointer; background-color:transparent; border:0;}
	.header .sign>li>a:hover {text-decoration:underline;}
	.header .sign>li:before {content:""; position:absolute; display:block; height:18px; width:1px; background-color:#fff; left:0; top:50%; transform:translateY(-50%);}
	.header .sign>li:first-child {margin-left:0; padding-left:0;}
	.header .sign>li:first-child:before {display:none;}

	.header .signPop {position:fixed; width:100%; height:100%; background-color:rgba(2,2,2,0.8);}
	.header .signPop div {width:600px; height:auto; background-color:#fff; border-radius:10px; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); color:#222; padding:20px; box-sizing:border-box;}
	.header .signPop div>h2 {text-align:center; margin-bottom:20px; padding-bottom:10px; border-bottom:1px solid #222;}
	.header .signPop div form {width:100%; text-align:center; overflow:hidden;}
	.header .signPop div form table {text-align:left; width:100%; margin-bottom:10px;}
	.header .signPop div form table tr th {width:25%; text-align:right; padding-right:15px; font-size:16px;}
	.header .signPop div form table tr td {padding-bottom:10px;}
	.header .signPop div form table tr td input {width:100%; border-radius:5px; font-size:16px;}
	.header .signPop div form table tr td i {color:#f30; font-size:14px;}
	.header .signPop div.signup form table tr:first-child td input {width:40%;}
	.header .signPop div.signup form table tr:first-child td span {display:inline-block; width:5%; text-align:center; font-size:20px;}
	.header .signPop div.signup form table tr:first-child td select {width:53%; border-radius:5px; font-size:16px; float:right;}
	.header .signPop div form>input.cancel {display:block; width:100%; height:40px; background-color:#fff; box-sizing:border-box; cursor:pointer; line-height:40px; border:1px solid #e0e3e8; border-radius:5px;}
	.header .signPop div form>input.submit {width:100%; height:40px; background-color:#fff; border:0; cursor:pointer; background-color:#e0e3e8; border-radius:5px; margin-bottom:10px;}
	.header .signPop div ul {margin-top:20px; padding-top:10px; border-top:1px solid #222;}
	.header .signPop div ul li {list-style:inside; font-size:16px;}

	@media screen and (max-width:800px) {
		.header {height:13vw;}
		.header .logo img {width:8vw;}

		.header .menu {display:none;}

		.header .sign {margin-right:5vw;}
		.header .sign>li {line-height:13vw; margin-left:1.5vw; padding-left:2vw; font-size:3.5vw;}
		.header .sign>li>a {font-size:3.5vw;}
		.header .sign>li input {font-size:3.5vw; padding:0;}
		.header .sign>li:after {height:3vw;}

		.header .signPop div {width:90vw; padding:2.5vw;}
		.header .signPop div>h2 {margin-bottom:1.5vw; padding-bottom:1.5vw;}
		.header .signPop div form table {text-align:left; width:100%; margin-bottom:1.5vw;}
		.header .signPop div form table tr th {width:28%; padding-right:1.875vw; font-size:3vw;}
		.header .signPop div form table tr td {padding-bottom:1.5vw;}
		.header .signPop div form table tr td input {border-radius:0.8vw; font-size:3vw; height:8vw; line-height:8vw;}
		.header .signPop div form table tr td i {font-size:2vw;}
		.header .signPop div.signup form table tr:first-child td input {width:40%;}
		.header .signPop div.signup form table tr:first-child td span {width:7%; font-size:3vw;}
		.header .signPop div.signup form table tr:first-child td select {width:50%; border-radius:0.8vw; font-size:3vw; height:8vw; line-height:8vw;}
		.header .signPop div form>input {height:10vw; border-radius:0.8vw; font-size:3.5vw;}
		.header .signPop div form>input.cancel {line-height:5vw;}
		.header .signPop div form>input.submit {margin-bottom:1.5vw;}
		.header .signPop div ul {margin-top:2.5vw; padding-top:1.5vw; margin-bottom:2vw;}
		.header .signPop div ul li {font-size:3vw;}
	}
</style>
