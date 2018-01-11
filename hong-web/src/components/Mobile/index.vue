<template>
    <div :class="$style.mobileHome">
        <SignPop :MobilePop="true" />
        <MobileHeader />
        <ul :class="[$style.view, {Board:Board, Web:Web, Insert:Insert, Portfolio:Portfolio, Mypage:My}]">
            <li>
                <BoardList />
            </li>
            <li>
                <Web />
            </li>
            <li>
                <BoardInsert />
            </li>
            <li>
                <Portfolo />
            </li>
            <li>
                <Mypage />
            </li>
        </ul>
        <MobileMenu />
    </div>
</template>

<script>
    import EventBus from '../../EventBus';

    import SignPop from '../Header/SignPop';
    import MobileHeader from './MobileHeader';

    import BoardList from '../Board/BoardList';
    import Web from '../Web';
    import BoardInsert from '../Board/Insert';
    import Portfolo from '../Portfolio';
    import Mypage from '../Mypage';

    import MobileMenu from './MobileMenu';

    export default {
        name : 'Mobile',
        data() {
            return {
                Board : true,
                Web : false,
                Insert : false,
                Portfolio : false,
                My : false
            }
        },
        components : {
            SignPop, MobileHeader, BoardList, Web, BoardInsert, Portfolo, Mypage, MobileMenu
        },
        created : function() {
            EventBus.$on('MobileChange', this.MobileChange);
        },
        methods : {
            MobileChange : function(v) {
                if(v == 'Board') {
                    this.Board = true;
                    this.Web = false;
                    this.Insert = false;
                    this.Portfolio = false;
                    this.My = false;
                } else if(v == 'Web') {
                    this.Board = false;
                    this.Web = true;
                    this.Insert = false;
                    this.Portfolio = false;
                    this.My = false;
                } else if(v == 'Insert') {
                    this.Board = false;
                    this.Web = false;
                    this.Insert = true;
                    this.Portfolio = false;
                    this.My = false;
                } else if(v == 'Port') {
                    this.Board = false;
                    this.Web = false;
                    this.Insert = false;
                    this.Portfolio = true;
                    this.My = false;
                } else if(v == 'Mypage') {
                    this.Board = false;
                    this.Web = false;
                    this.Insert = false;
                    this.Portfolio = false;
                    this.My = true;
                }
            }
        }
    }
</script>

<style module>
    .mobileHome {height:100%;}
    .mobileHome .view {height:100%; width:500%; padding:12vw 0 16vw; box-sizing:border-box; position:relative; transition:left 0.2s;}
    .mobileHome .view>li {float:left; height:100%; width:20%; overflow-y:scroll;}
</style>

<style>
    .Board {left:0;}
    .Web {left:-100%;}
    .Insert {left:-200%;}
    .Portfolio {left:-300%;}
    .Mypage {left:-400%;}
</style>
