<template>
	<div :class="$style.signPop" v-if="pop">
		<div v-if="type=='up'" :class="$style.signup">
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
		<div v-if="type=='in'">
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
</template>

<script>
	import VueRouter from 'vue-router';
	import EventBus from '../../EventBus';

	export default {
		name: 'SignPop',
		created : function() {
			EventBus.$on('Sign-Pop', this.popOpen);
		},
		data () {
			return {
				pop : false,
				type : '',
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
				}
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
			popOpen : function(type) {
				this.type = type;
				this.pop = true;
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
			}
		}
	}
</script>

<style module>
	.signPop {position:fixed; width:100%; height:100%; background-color:rgba(2,2,2,0.8);}
	.signPop div {width:600px; height:auto; background-color:#fff; border-radius:10px; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); color:#222; padding:20px; box-sizing:border-box;}
	.signPop div>h2 {text-align:center; margin-bottom:20px; padding-bottom:10px; border-bottom:1px solid #222;}
	.signPop div form {width:100%; text-align:center; overflow:hidden;}
	.signPop div form table {text-align:left; width:100%; margin-bottom:10px;}
	.signPop div form table tr th {width:25%; text-align:right; padding-right:15px; font-size:16px;}
	.signPop div form table tr td {padding-bottom:10px;}
	.signPop div form table tr td input {width:100%; border-radius:5px; font-size:16px;}
	.signPop div form table tr td i {color:#f30; font-size:14px;}
	.signPop div.signup form table tr:first-child td input {width:40%;}
	.signPop div.signup form table tr:first-child td span {display:inline-block; width:5%; text-align:center; font-size:20px;}
	.signPop div.signup form table tr:first-child td select {width:53%; border-radius:5px; font-size:16px; float:right;}
	.signPop div form>input.cancel {display:block; width:100%; height:40px; background-color:#fff; box-sizing:border-box; cursor:pointer; line-height:40px; border:1px solid #e0e3e8; border-radius:5px;}
	.signPop div form>input.submit {width:100%; height:40px; background-color:#fff; border:0; cursor:pointer; background-color:#e0e3e8; border-radius:5px; margin-bottom:10px;}
	.signPop div ul {margin-top:20px; padding-top:10px; border-top:1px solid #222;}
	.signPop div ul li {list-style:inside; font-size:16px;}

	@media screen and (max-width:800px) {
		.signPop div {width:90vw; padding:2.5vw;}
		.signPop div>h2 {margin-bottom:1.5vw; padding-bottom:1.5vw;}
		.signPop div form table {text-align:left; width:100%; margin-bottom:1.5vw;}
		.signPop div form table tr th {width:28%; padding-right:1.875vw; font-size:3vw;}
		.signPop div form table tr td {padding-bottom:1.5vw;}
		.signPop div form table tr td input {border-radius:0.8vw; font-size:3vw; height:8vw; line-height:8vw;}
		.signPop div form table tr td i {font-size:2vw;}
		.signPop div.signup form table tr:first-child td input {width:40%;}
		.signPop div.signup form table tr:first-child td span {width:7%; font-size:3vw;}
		.signPop div.signup form table tr:first-child td select {width:50%; border-radius:0.8vw; font-size:3vw; height:8vw; line-height:8vw;}
		.signPop div form>input {height:10vw; border-radius:0.8vw; font-size:3.5vw;}
		.signPop div form>input.cancel {line-height:5vw;}
		.signPop div form>input.submit {margin-bottom:1.5vw;}
		.signPop div ul {margin-top:2.5vw; padding-top:1.5vw; margin-bottom:2vw;}
		.signPop div ul li {font-size:3vw;}
	}
</style>
