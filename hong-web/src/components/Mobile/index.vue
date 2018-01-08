<template>
    <div :class="$style.mobileHome">
        <div :class="$style.view">
            <Home :class="$style.com" />
            <Portfolo :class="$style.com" />
        </div>
        <div :class="$style.menu">
            <MobileMenu />
        </div>
    </div>
</template>

<script>
    import Home from '../Home';
    import Portfolo from '../Portfolio';
    import MobileMenu from './MobileMenu';

    export default {
        name : 'Mobile',
        components : {
            Home, Portfolo, MobileMenu
        }
    }
</script>

<style module>
    .mobileHome {}
    .mobileHome .view {overflow:hidden; width:500%;}
    .mobileHome .view>.com {float:left; width:20%;}
    .mobileHome .menu {}
</style>
