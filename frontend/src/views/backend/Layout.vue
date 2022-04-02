<template>

    <div class="flex flex-col md:flex-row">
        <Navbar/>
        <div id="wrapper">
            <div class="side-bar">
                <Sidebar/>
            </div>
            <div class="main-contents">
                <router-view/>
            </div>
        </div>
    </div>

</template>

<script>
import Navbar  from "./includes/Navbar";
import Sidebar from "./includes/Sidebar";

export default {
    name      : "Layout.vue",
    components: {
        Navbar, Sidebar

    }
}
</script>

<style scoped lang="scss">

#wrapper {
    display: flex;
    width: 100%;

    .side-bar {
        width: 192px;
        height: 100vh;
        background-color: #2d3748;
        padding-top: 74px;
        position: fixed;

        @media screen and (max-width: 767px) {
            width: 0;
        }
    }

    .main-contents {
        width: 100%;
        height: 100vh;
        margin-left: 200px;
        margin-top: 80px;
    }
}
</style>
