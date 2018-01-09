<template>
    <div :class="$style.MobileMenu">
        <ul :class="$style.MenuList">
            <li>
                <a href="#">
                    <img src="/img/mobile/board_home.svg" alt="Board" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/img/mobile/web.svg" alt="Web" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/img/mobile/insert_board.svg" alt="Insert" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/img/mobile/port.svg" alt="Port" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/img/mobile/me.svg" alt="Mypage" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : 'MobileMenu'
    }
</script>

<style module>
    .MobileMenu {position:fixed; width:100%; bottom:0; background-color:#2f2f2f;}
    .MobileMenu .MenuList {overflow:hidden; padding:2vw 0;}
    .MobileMenu .MenuList>li {float:left; width:20%;}
    .MobileMenu .MenuList>li a {display:block; width:40%; margin:0 auto; color:#fff;}
    .MobileMenu .MenuList>li a>img {display:block; width:100%;}
</style>
