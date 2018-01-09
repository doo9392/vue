<template>
    <div :class="$style.boardlist">
        <ul>
            <li v-for="(c, index) in Boards">
                {{c.content}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : 'BoardList',
        data() {
            return {
                Boards : {}
            }
        },
        mounted : function() {
            this.$axios.get('http://www.hong-web.com/_BOARD/BOARD_API.php').then((response) => {
                console.log(response.data);

                this.Boards = response.data;
                console.log(response.data);
            });
        }
    }
</script>

<style module>
    .boardlist {width:800px; margin:0 auto; overflow:hidden; padding-bottom:50px;}
</style>
