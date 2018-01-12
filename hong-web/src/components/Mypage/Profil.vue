<template>
    <div :class="$style.Profil" class="Profil">
        <div :class="$style.Member">
            <div :class="$style.thumb">
                <img src="#" alt="이미지 준비중입니다.">
            </div>
            <div :class="$style.info">
                <h5>{{RouteName}}</h5>
                <p>
                    총 게시물 : <span>{{Boards.length}}</span>
                </p>
            </div>
            <div :class="$style.delete" @click="deleteBtn" v-if="RouteName == this.$store.state.profil.name">
                회원 탈퇴
            </div>
        </div>
        <ul>
            <li v-for="(c, index) in Boards" v-if="index <= Count">
                <div :class="$style.info">
                    <span :class="$style.date">
                        {{c.date}}
                    </span>
                </div>
                <BoardDetailThumb :file="c.file" />
            </li>
        </ul>
        <span v-if="Boards.length > 12 && Boards.length >= Count" @click.prevent="MoreCount">+ MORE</span>
    </div>
</template>

<script>
    import BoardDetailThumb from '../Board/BoardDetailThumb';

    export default {
        name : 'Profil',
        data() {
            return {
                Count : 11,
                AllBoards : [],
                AllProfil : [],
                RouteName : this.$store.state.profil.name
            }
        },
        components : {BoardDetailThumb},
        created : function() {
            this.RouteName = this.$route.params.name;

            this.$axios.get('/_BOARD/BOARD_API.php').then((response) => {
                const BorderList = response.data;
                const BorderContent = response.data.map((i) => {
                    return i.content.split('<br>');
                });

                BorderList.map((k, index) => {
                    return k.content = BorderContent[index];
                });

                this.AllBoards = BorderList;
            });

            this.$axios.get('/_SIGN/SIGN_API.php').then((response) => {
                this.AllProfil = response.data;
            });
        },
        watch : {
            '$route' : function(to, from) {
                this.RouteName = to.params.name;
            }
        },
        computed : {
            Boards() {
                var name = this.RouteName;
                var ProfilBorders = this.AllBoards.filter((k) => {
                    return k.name == name;
                });

                return ProfilBorders.reverse();
            },
            ProfilInfo() {
                var Profilname = this.RouteName;
                var Infos = this.AllProfil.filter((k) => {
                    return k.nickname == Profilname;
                });

                if(Infos.length == 1) return Infos[0];
                else return{};
            }
        },
        methods : {
            MoreCount : function() {
                this.Count = this.Count + 11;
            },
            deleteBtn : function() {
                if(confirm('탈퇴하시겠습니까?')) {
                    var DeleteName = this.$store.state.profil.name;
                    var DeleteEmail = this.$store.state.profil.email;
                    var DeletePassword = this.$store.state.profil.password;

                    this.$axios.post('/_SIGN/SIGN_DELETE.php', {name : DeleteName, password : DeletePassword}).then((response) => {
                        console.log(DeleteName, DeletePassword);
                        console.log(response.data);
                    });
                }
            }
        }
    }
</script>

<style module>
    .Profil {width:900px; margin:0 auto; padding-bottom:50px; margin-top:30px;}
    .Profil .Member {padding:50px 0 25px; margin-bottom:25px; border-bottom:1px solid #ddd; overflow:hidden; position:relative;}
    .Profil .Member .thumb {float:left; width:200px; height:200px; border-radius:50%; overflow:hidden;}
    .Profil .Member .thumb>img {display:block; width:100%;}
    .Profil .Member .info {float:left; width:70%; padding-left:20px; box-sizing:border-box;}
    .Profil .Member .delete {position:absolute; right:0; top:0; background-color:#a00; color:#fff; width:30px; height:30px; border-radius:5px;}
    .Profil ul {margin:0 auto; overflow:hidden;}
    .Profil ul>li {float:left; box-sizing:border-box; width:300px; height:300px; margin-bottom:20px;}
    .Profil ul>li .info {overflow:hidden; font-size:18px;}
    .Profil ul>li .info>a {float:left; display:block; line-height:30px;}
    .Profil ul>li .info>.date {float:right; display:block; line-height:30px;}
    .Profil ul>li .content {overflow:hidden; font-size:18px; line-height:23px;}
    .Profil ul>li .content>p {word-break:keep-all;}

    .Profil>span {display:block; line-height:30px; height:30px; border:1px solid #222; border-radius:15px; width:100px; margin:0 auto; margin-top:30px; font-size:16px; box-sizing:border-box; text-align:center;}
	.Profil>span:hover {color:#fff; background-color:#222;}

    @media screen and (max-width:800px) {
        .Profil {width:90vw; padding-bottom:5vw; margin-top:0;}
        .Profil ul {width:100%;}
        .Profil ul>li {margin-bottom:7vw; padding:0; padding-bottom:7vw;}
        .Profil ul>li .info {font-size:4vw; padding:0 4vw;}
        .Profil ul>li .info>a {line-height:4.5vw;}
        .Profil ul>li .info>.date {line-height:4.5vw;}
        .Profil ul>li .content {font-size:4vw; line-height:6vw; padding:0 4vw;}

        .Profil>span {line-height:10vw; height:10vw; border:1px solid #222; border-radius:5vw; width:92vw; margin-top:10vw; font-size:4.5vw;}
	    .Profil>span:hover {color:#222; background-color:#fff;}
    }
</style>