<template>
	<div :class="$style.header">
		<ul :class="$style.menu">
			<li>
				<router-link :to="{name:'Introduce'}">Introduce</router-link>
			</li>
			<li>
				<router-link :to="{name:'Portfolio'}">Portfolio</router-link>
			</li>
			<li>
				<router-link :to="{name:'QnA'}">QnA</router-link>
			</li>
		</ul>
		<router-link :class="$style.logo" :to="{name:'Home'}">
			<img src="/img/com/logo_white.png" alt="LOGO">
		</router-link>
		<ul :class="$style.sign">
			<li>
				<span v-if="!signCurrent" @click="SignPopOpen('in')">Sign In</span>
				<span v-if="signCurrent">Test</span>
			</li>
			<li>
				<span v-if="!signCurrent" @click="SignPopOpen('up')">Sign Up</span>
				<form v-if="signCurrent" action="/_SIGN/SIGN_OUT.php" method="post">
					<input type="submit" value="Sign Out">
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
								<select name="email_back">
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

	export default {
		name: 'Header',
		data () {
			return {
				pop : false,
				up : true,
				email : '',
				password : '',
				password_check : '',
				nickname : '',
				nicknameList : {},
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
			this.$axios.get('http://hong-web.com/_SIGN/SIGN_API.php').then((response) => {
				this.nicknameList = response.data;
			});

			var Cookie = document.cookie;

			if(Cookie.indexOf('PHPSESSID') === 0) {
				this.signCurrent = true;
			} else {
				this.signCurrent = false;
			}
		},
		watch : {
			email : function(v){
				var KeyCode = /[~!@\#$%^&*\()\-=+'ㄱ-ㅎ]/g;
				var KeyCodeCheck = KeyCode.test(v);

				if(!KeyCodeCheck) {
					if(v == "") {
						this.Error.email.current = true;
					this.Error.email.value = 'e-mail을 입력해주세요.';
					} else {
						this.Error.email.current = false;
					}
				}else{
					this.Error.email.current = true;
					this.Error.email.value = '올바른 형식이 아닙니다.';
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

				if(!KeyCodeCheck) {
					if(v.trim().length >= 4 && v.trim().length <= 10) {
						this.Error.nickname.current = false;
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
	.header {position:fixed; left:0; top:0; background-color:#222; width:100%; height:55px; color:#fff; z-index:10;}
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
	.header .sign>li {float:left; line-height:55px; margin-left:20px; padding-left:20px; position:relative; letter-spacing:1.5px;}
	.header .sign>li>span {color:#fff; font-size:18px; cursor:pointer;}
	.header .sign>li>span:hover {text-decoration:underline;}
	.header .sign>li input {color:#fff; font-size:18px; cursor:pointer;}
	.header .sign>li input:hover {text-decoration:underline;}
	.header .sign>li:after {content:""; position:absolute; display:block; height:18px; width:1px; background-color:#fff; left:0; top:50%; transform:translateY(-50%);}
	.header .sign>li:first-child {margin-left:0; padding-left:0;}
	.header .sign>li:first-child:after {display:none;}

	.header .signPop {position:fixed; width:100%; height:100%; background-color:rgba(2,2,2,0.8);}
	.header .signPop div {width:600px; height:auto; background-color:#fff; border-radius:5%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); color:#222; padding:20px; box-sizing:border-box;}
	.header .signPop div>h2 {text-align:center; margin-bottom:20px; padding-bottom:10px; border-bottom:1px solid #222;}
	.header .signPop div form {width:100%; text-align:center; overflow:hidden;}
	.header .signPop div form table {text-align:left; width:100%; margin-bottom:10px;}
	.header .signPop div form table tr th {width:25%; text-align:right; padding-right:15px;}
	.header .signPop div form table tr td {padding-bottom:10px;}
	.header .signPop div form table tr td input {width:100%; border-radius:5px;}
	.header .signPop div form table tr td i {color:#f30; font-size:12px;}
	.header .signPop div.signup form table tr:first-child td input {width:40%;}
	.header .signPop div.signup form table tr:first-child td span {display:inline-block; width:5%; text-align:center;}
	.header .signPop div.signup form table tr:first-child td select {width:53.2%; border-radius:5px; font-size:15px;}
	.header .signPop div form>input.cancel {display:block; width:100%; height:40px; background-color:#fff; box-sizing:border-box; cursor:pointer; line-height:40px; border:1px solid #e0e3e8; border-radius:5px; margin-bottom:10px;}
	.header .signPop div form>input.submit {width:100%; height:40px; background-color:#fff; border:0; cursor:pointer; background-color:#e0e3e8; border-radius:5px;}
	.header .signPop div ul {margin-top:20px; padding-top:10px; border-top:1px solid #222;}
	.header .signPop div ul li {list-style:inside; font-size:14px;}
</style>
