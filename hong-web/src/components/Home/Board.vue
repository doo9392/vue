<template>
    <div :class="$style.board">
        <div :class="$style.box">
            <p v-if="Boards.length===0">최신 게시물이 없습니다.</p>
            <ul :class="$style.bordList">
                <li v-for="(c, index) in Boards" v-if="index <= 8">
                    <BoardDetailThumb :file="c.file" />
                    <div :class="$style.info">
                        <router-link :to="'Mypage/'+c.name">
                            {{c.name}}
                        </router-link>
                        <span :class="$style.date">
                            {{c.date}}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <router-link :to="{name:'Board'}" v-if="Boards.length > 9">+ MORE</router-link>
    </div>
</template>

<script>
    import BoardDetailThumb from '../Board/BoardDetailThumb';

    export default {
        name : 'HomeBoard',
        components : {
            BoardDetailThumb
        },
        data() {
            return {
                Boards : []
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
        }
    }
</script>

<style module>
	.board {margin:50px 0; text-align:center;}
	.board .box {width:1200px; border-top:1px solid #e0e3e8; margin:0 auto; padding:30px 0;}
	.board .box p {font-size:20px;}
	.board .box .bordList {overflow:hidden;}
	.board .box .bordList>li {float:left; width:400px; box-sizing:border-box;}
	.board .box .bordList>li .info {overflow:hidden;}
	.board .box .bordList>li .info>a {float:left; display:block;}
	.board .box .bordList>li .info>span {float:right; display:block;}

	.board>a {display:inline-block; line-height:30px; height:30px; border:1px solid #222; border-radius:15px; width:100px; margin-top:30px; font-size:16px; box-sizing:border-box;}
	.board>a:hover {color:#fff; background-color:#222;}
	@media screen and (max-width:800px) {
		.board {margin:12.5vw 0;}
		.board .box {width:90vw; padding:3.75vw 0; border-top:0;}
		.board .box p {font-size:4vw;}
	}
</style>

