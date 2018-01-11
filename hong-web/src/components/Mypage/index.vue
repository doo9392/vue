<template>
    <div :class="$style.Mypage">
        <MyBorderList :CurrentProfil="CurrentProfil" />
    </div>
</template>

<script>
    import MyBorderList from './MyBorderList';

    export default {
        name : 'Mypage',
        data() {
            return {
                CurrentProfil : {
                    email : '',
                    name : '',
                    password : ''
                }
            }
        },
        components : {
            MyBorderList
        },
        mounted : function() {
            const RouterName = this.$route.params.name;

			this.$axios.get('/_SIGN/SIGN_API.php').then((response) => {
                const Profil = response.data.filter((k) => {
                    return k.name == this.RouterName.name;
                });
            console.log(Profil);
            });
            // const SignName = this.$store.state.profil.name;

            // if(RouterName == SignName) {
            //     this.CurrentProfil.email = this.$store.state.profil.email;
            //     this.CurrentProfil.name = this.$store.state.profil.name;
            //     this.CurrentProfil.password = this.$store.state.profil.password;
            // }
        }
    }
</script>

<style module>
    @media screen and (max-width:800px) {
        .Mypage {padding:11vw 0; font-size:10vw; text-align:center;}
    }
</style>
