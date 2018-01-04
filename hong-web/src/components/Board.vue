<template>
    <div :class="$style.board">
        <div :class="$style.boardBg" class="ftAS">
            HONG-WEB
        </div>
        <div :class="$style.top">
            <div :class="$style.profil">
                <div :class="$style.profilTop">
                    <div :class="$style.thumb">
                        <img :src="'/img/com/' + profil.img" alt="Profil Image">
                    </div>
                    <div :class="$style.info">
                        <ul>
                            <li>Nickname : {{profil.nickname}}</li>
                            <li>E-mail : {{profil.email}}</li>
                            <li>총 게시물 수 : {{profil.boardCount}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div :class="$style.postArea">
                <form action="/_BOARD/BOARD_POST.php" method="post">
                    <textarea name="content" v-model="content" />
                    <input :class="$style.file" type="file" name="file">
                    <input :class="$style.btn" type="submit" value="등록">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'Board',
        data () {
            return {
                content : '',
                profil : {
                    img : 'no_img.png',
                    nickname : 'aa',
                    email : 'aa',
                    boardCount : '-'
                }
            };
        },
        watch : {
            content : function(v) {
                console.log(v);
            }
        },
        mounted : function() {
            this.profil.nickname = sessionStorage.getItem('nickname');
            this.profil.email = sessionStorage.getItem('email');
        }
    }
</script>

<style module>
    .board {padding-bottom:50px;}
	.board .boardBg {min-height:200px; background-image:url("/img/board/board_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px; margin-bottom:50px;}
    .board>.top {width:1200px; margin:0 auto; overflow:hidden; border-bottom:1px solid #dedede; padding-bottom:50px;}
    .board>.top .profil {width:45%; float:left; padding:10px 10px; box-sizing:border-box;}
    .board>.top .profil .profilTop {overflow:hidden;}
    .board>.top .profil .profilTop .thumb {width:150px; border-radius:50%; float:left; height:150px; overflow:hidden; border:1px solid #222;}
    .board>.top .profil .profilTop .thumb>img {display:block; width:100%;}
    .board>.top .profil .profilTop .info {width:60%; border:1px solid #222; border-radius:5px; padding:15px; box-sizing:border-box; float:right;}
    .board>.top .profil .profilTop .info>ul {}
    .board>.top .profil .profilTop .info>ul>li {margin-bottom:10px;}
    .board>.top .profil .profilTop .info>ul>li:last-child {margin-bottom:0;}
    .board>.top .postArea {width:50%; float:right;}
    .board>.top .postArea>form {width:100%; overflow:hidden;}
    .board>.top .postArea>form>textarea {width:100%; height:100px; border-radius:5px;}
    .board>.top .postArea>form>.file { border:1px solid #222;}
    .board>.top .postArea>form>.btn {width:80px; border-radius:5px; cursor:pointer; margin-top:15px;}

    @media screen and (max-width:800px) {
		.board .boardBg {margin-bottom:3.75vw; min-height:25vw; line-height:25vw; font-size:3.125vw;}
        .board>.top {width:90vw; padding-bottom:6.25vw;}
        .board>.top .profil {display:none;}

        .board>.top .postArea {width:100%; float:none;}
        .board>.top .postArea>form>textarea {height:8vw; border-radius:3vw;}
        .board>.top .postArea>form>.btn {width:100%; border-radius:3vw; margin-top:1.875vw;}
    }
</style>
