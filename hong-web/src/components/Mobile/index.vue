<template>
    <div :class="$style.mobileHome">
        <MobileHeader />
        <ul :class="$style.view">
            <li>
                <BoardInsert :class="$style.com" />
            </li>
            <li>
                <Portfolo :class="$style.com" />
            </li>
        </ul>
        <div :class="$style.menu">
            <MobileMenu />
        </div>
    </div>
</template>

<script>
    import MobileHeader from './MobileHeader';
    import BoardInsert from '../Board/Insert';
    import Portfolo from '../Portfolio';
    import MobileMenu from './MobileMenu';

    export default {
        name : 'Mobile',
        components : {
            MobileHeader, BoardInsert, Portfolo, MobileMenu
        }
    }
</script>

<style module>
    .mobileHome {height:100vh; overflow:hidden;}
    .mobileHome .view {overflow:hidden; width:200%; padding-top:9vw;}
    .mobileHome .view>li {float:left; width:50%;}
    .mobileHome .menu {}
</style>
