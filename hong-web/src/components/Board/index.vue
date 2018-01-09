<template>
    <div :class="$style.board">
        <div :class="$style.boardBg" class="ftAS">
            HONG-WEB
        </div>
        <Insert />
        <BoardList />
    </div>
</template>

<script>
    import Insert from './Insert';
    import BoardList from './BoardList';

    export default {
        name : 'Board',
        components : {
            Insert, BoardList
        }
    }
</script>

<style module>
    .board {padding-bottom:50px;}
	.board .boardBg {min-height:200px; background-image:url("/img/board/board_bg.jpg"); background-attachment:fixed; background-size:cover; color:#fff; text-align:center; line-height:200px; font-size:25px; letter-spacing:2px; margin-bottom:50px;}

    @media screen and (max-width:800px) {
		.board .boardBg {margin-bottom:3.75vw; min-height:25vw; line-height:25vw; font-size:3.125vw;}
    }
</style>
