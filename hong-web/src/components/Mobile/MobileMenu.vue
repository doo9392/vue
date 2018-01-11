<template>
    <div :class="$style.MobileMenu">
        <ul :class="$style.MenuList" class="MobileUl">
            <li>
                <a :class="{MenuOn:Board}" @click.prevent="MenuClick('Board', 0)">
                    <img src="/img/mobile/board_home.svg" alt="Board" />
                </a>
            </li>
            <li>
                <a :class="{MenuOn:Web}" @click.prevent="MenuClick('Web', 1)">
                    <img src="/img/mobile/web.svg" alt="Web" />
                </a>
            </li>
            <li>
                <a :class="{MenuOn:Insert}" @click.prevent="MenuClick('Insert', 2)">
                    <img src="/img/mobile/insert_board.svg" alt="Insert" />
                </a>
            </li>
            <li>
                <a :class="{MenuOn:Port}" @click.prevent="MenuClick('Port', 3)">
                    <img src="/img/mobile/port.svg" alt="Port" />
                </a>
            </li>
            <li>
                <a :class="{MenuOn:Mypage}" @click.prevent="MenuClick('Mypage', 4)">
                    <img src="/img/mobile/me.svg" alt="Mypage" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import EventBus from '../../EventBus';

    export default {
        name : 'MobileMenu',
        data() {
            return {
                Board : true, Web : false, Insert : false, Port : false, Mypage : false
            };
        },
        methods : {
            MenuClick : function(type) {
                EventBus.$emit('MobileChange', type);

                if(type == 'Board') {
                    this.Board = true;
                    this.Web = false;
                    this.Insert = false;
                    this.Port = false;
                    this.Mypage = false;
                } else if(type == 'Web') {
                    this.Board = false;
                    this.Web = true;
                    this.Insert = false;
                    this.Port = false;
                    this.Mypage = false;
                } else if(type == 'Insert') {
                    this.Board = false;
                    this.Web = false;
                    this.Insert = true;
                    this.Port = false;
                    this.Mypage = false;
                } else if(type == 'Port') {
                    this.Board = false;
                    this.Web = false;
                    this.Insert = false;
                    this.Port = true;
                    this.Mypage = false;
                } else if(type == 'Mypage') {
                    this.Board = false;
                    this.Web = false;
                    this.Insert = false;
                    this.Port = false;
                    this.Mypage = true;
                }
            }
        }
    }
</script>

<style module>
    .MobileMenu {position:fixed; width:100%; bottom:0; background-color:#005944;}
    .MobileMenu .MenuList {overflow:hidden; padding:3vw 0;}
    .MobileMenu .MenuList>li {float:left; width:20%;}
    .MobileMenu .MenuList>li a {display:block; width:10vw; height:10vw; margin:0 auto; color:#fff; border-radius:50%; position:relative; box-sizing:border-box; transition:all 0.3s;}
    .MobileMenu .MenuList>li a>img {display:block; width:60%; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%);}
</style>

<style>
    .MobileUl>li a.MenuOn {box-shadow:0px 0px 20px #00d9a4;}
</style>

