<template>
    <div :class="$style.boardlist">
        <ul>
            <li v-for="(c, index) in Boards" v-if="index <= Count">
                <div :class="$style.info">
                    <router-link :to="'Mypage/'+c.name">
                        {{c.name}}
                    </router-link>
                    <span :class="$style.date">
                        {{c.date}}
                    </span>
                </div>
                <BoardDetailThumb :file="c.file" />
                <div :class="$style.content">
                    <p v-for="(l, index) in c.content">
                        {{l}}
                    </p>
                </div>
            </li>
        </ul>
        <span v-if="Boards.length > 12 && Boards.length >= Count" @click.prevent="MoreCount">+ MORE</span>
    </div>
</template>

<script>
    import BoardDetailThumb from './BoardDetailThumb';

    export default {
        name : 'BoardList',
        components : {
            BoardDetailThumb
        },
        data() {
            return {
                Boards : [],
                Count : 11
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

                this.Boards = BorderList.reverse();
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
    .boardlist {width:800px; margin:0 auto; overflow:hidden; padding-bottom:50px; margin-top:30px;}
    .boardlist ul {width:80%; margin:0 auto;}
    .boardlist ul>li {margin-bottom:15px; padding:15px; border-bottom:1px solid #eee; box-sizing:border-box;}
    .boardlist ul>li:last-child {border-bottom:0; padding-bottom:0;}
    .boardlist ul>li .info {overflow:hidden; font-size:18px;}
    .boardlist ul>li .info>a {float:left; display:block; line-height:30px;}
    .boardlist ul>li .info>.date {float:right; display:block; line-height:30px;}
    .boardlist ul>li .content {overflow:hidden; font-size:18px; line-height:23px;}
    .boardlist ul>li .content>p {word-break:keep-all;}

    .boardlist>span {display:block; line-height:30px; height:30px; border:1px solid #222; border-radius:15px; width:100px; margin:0 auto; margin-top:30px; font-size:16px; box-sizing:border-box; text-align:center;}
	.boardlist>span:hover {color:#fff; background-color:#222;}

    @media screen and (max-width:800px) {
        .boardlist {width:100vw; padding:5vw 0 7vw; margin-top:0;}
        .boardlist ul {width:100%;}
        .boardlist ul>li {margin-bottom:7vw; padding:0; padding-bottom:7vw;}
        .boardlist ul>li .info {font-size:4vw; padding:0 4vw;}
        .boardlist ul>li .info>a {line-height:4.5vw;}
        .boardlist ul>li .info>.date {line-height:4.5vw;}
        .boardlist ul>li .content {font-size:4vw; line-height:6vw; padding:0 4vw;}

        .boardlist>span {line-height:10vw; height:10vw; border:1px solid #222; border-radius:5vw; width:92vw; margin-top:10vw; font-size:4.5vw;}
	    .boardlist>span:hover {color:#222; background-color:#fff;}
    }
</style>
