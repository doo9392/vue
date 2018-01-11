<template>
    <div :class="$style.MyBorderList" class="MyBorderList">
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
        name : 'MyBorderList',
        props : ['CurrentProfil'],
        components : {
            BoardDetailThumb
        },
        data() {
            return {
                Boards : [],
                Count : 11,
                HeightCheck : false
            }
        },
        created : function() {
            this.$axios.get('/_BOARD/BOARD_API.php').then((response) => {
                const BorderList = response.data;
                const BorderContent = response.data.map((i) => {
                    return i.content.split('<br>');
                });

                BorderList.map((k, index) => {
                    return k.content = BorderContent[index];
                });

                const ProfilBorders = BorderList.filter((k) => {
                    return k.name == this.CurrentProfil.name && k.email == this.CurrentProfil.email
                });

                this.Boards = ProfilBorders.reverse();
            });
        },
        methods : {
            MoreCount : function() {
                this.Count = this.Count + 11;
            }
        }
    }
</script>

<style module>
    .MyBorderList {width:1200px; margin:0 auto; padding-bottom:50px; margin-top:30px;}
    .MyBorderList ul {margin:0 auto; overflow:hidden;}
    .MyBorderList ul>li {float:left; box-sizing:border-box; width:300px; height:300px; margin-bottom:20px;}
    .MyBorderList ul>li .info {overflow:hidden; font-size:18px;}
    .MyBorderList ul>li .info>a {float:left; display:block; line-height:30px;}
    .MyBorderList ul>li .info>.date {float:right; display:block; line-height:30px;}
    .MyBorderList ul>li .content {overflow:hidden; font-size:18px; line-height:23px;}
    .MyBorderList ul>li .content>p {word-break:keep-all;}

    .MyBorderList>span {display:block; line-height:30px; height:30px; border:1px solid #222; border-radius:15px; width:100px; margin:0 auto; margin-top:30px; font-size:16px; box-sizing:border-box; text-align:center;}
	.MyBorderList>span:hover {color:#fff; background-color:#222;}

    @media screen and (max-width:800px) {
        .MyBorderList {width:90vw; padding-bottom:5vw; margin-top:0;}
        .MyBorderList ul {width:100%;}
        .MyBorderList ul>li {margin-bottom:7vw; padding:0; padding-bottom:7vw;}
        .MyBorderList ul>li .info {font-size:4vw; padding:0 4vw;}
        .MyBorderList ul>li .info>a {line-height:4.5vw;}
        .MyBorderList ul>li .info>.date {line-height:4.5vw;}
        .MyBorderList ul>li .content {font-size:4vw; line-height:6vw; padding:0 4vw;}

        .MyBorderList>span {line-height:10vw; height:10vw; border:1px solid #222; border-radius:5vw; width:92vw; margin-top:10vw; font-size:4.5vw;}
	    .MyBorderList>span:hover {color:#222; background-color:#fff;}
    }
</style>

