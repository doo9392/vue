<template>
    <div :class="$style.MobileMenuBox">
		<div :class="[$style.mobileBtn, mobileBtnOn()]" @click="btnOn">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div :class="[$style.mobildMenu, mobileMenuOn()]">
			<div :class="$style.MenuWrap">
				<div :class="$style.top">
					<div :class="$style.thumb">
						<img :src="'/img' + profil.img" :alt="profil.name">
					</div>
				</div>
				<div :class="$style.mid">
					<ul :class="$style.list">
						<li>
							<span @click="Navigate('Portfolio')">Portfolio</span>
						</li>
						<li>
							<span @click="Navigate('Board')">Board</span>
						</li>
						<li>
							<span @click="Navigate('QnA')">QnA</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import VueRouter from 'vue-router';

    export default {
        name: 'MobileMenu',
        data () {
            return {
                mobile : {
                    MenuOn : false,
                    BtnOn : false
                },
				profil : {
					name : '',
					email : '',
					img : '/com/no_img.png'
				}
            }
		},
		computed : {
			profil() {
				return this.$store.state.profil;
			}
		},
		mounted () {
			// console.log('this.$store.state.profil', this.$store.state.profil);
			// console.log('this.profil', this.profil);
		},
        methods : {
            mobileBtnOn : function() {
                return {mobileBtnOn : this.mobile.BtnOn};
            },
            mobileMenuOn : function() {
                return {mobileMenuOn : this.mobile.MenuOn};
            },
            btnOn : function() {
                this.mobile.BtnOn = !this.mobile.BtnOn;
                this.mobile.MenuOn = !this.mobile.MenuOn;
            },
			Navigate(component, event) {
				event.preventDefault();

                this.mobile.BtnOn = !this.mobile.BtnOn;
				this.mobile.MenuOn = !this.mobile.MenuOn;

				this.$router.push({name : component});
			}
        }
	}
</script>

<style module>
	.mobileBtn {display:none;}
	.mobildMenu {display:none;}

	@media screen and (max-width:800px) {
		.mobileBtn {display:block; position:absolute; left:5vw; top:50%; transform:translateY(-50%); border:2px solid #fff; width:8vw; height:8vw; border-radius:1vw; box-sizing:border-box; z-index:1;}
		.mobileBtn span {width:70%; height:13%; background-color:#fff; position:absolute; left:50%; transform-origin:center; transition:all 0.3s;}
		.mobileBtn span:nth-child(1) {top:50%; transform:translate(-50%, -270%);}
		.mobileBtn span:nth-child(2) {top:50%; transform:translate(-50%, -50%);}
		.mobileBtn span:nth-child(3) {top:50%; transform:translate(-50%, 170%);}

		.mobildMenu {position:fixed; display:block; left:-100%; top:0; width:100%; height:100%; transition:left 0.3s; padding-top:12.5vw; box-sizing:border-box;}
		.mobildMenu .MenuWrap {background-color:#222; height:100%; overflowY:}
		.mobildMenu .MenuWrap .top {width:80%; margin:0 auto; padding:10vw 0; border-bottom:1px solid #e0e3e8;}
		.mobildMenu .MenuWrap .top .thumb {width:45%; border-radius:50%; overflow:hidden; border:1px solid #e0e3e8; margin-bottom:5vw; margin:0 auto; background-color:#fff;}
		.mobildMenu .MenuWrap .top .thumb>img {display:block; width:100%;}
		.mobildMenu .MenuWrap .mid {padding:10vw; box-sizing:border-box;}
		.mobildMenu .MenuWrap .mid .list {}
		.mobildMenu .MenuWrap .mid .list>li {font-size:5vw; margin-bottom:8vw;}
		.mobildMenu .MenuWrap .mid .list>li:last-child {margin-bottom:0;}
		.mobildMenu .MenuWrap .mid .list>li>a {color:#fff;}
	}
</style>

<style>
	.mobileBtnOn span:nth-child(1) {transform:translate(-50%, -50%) rotate(135deg) !important;}
	.mobileBtnOn span:nth-child(2) {width:0;}
	.mobileBtnOn span:nth-child(3) {transform:translate(-50%, -50%) rotate(-135deg) !important;}

	.mobileMenuOn {left:0 !important;}
</style>