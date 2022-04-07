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


</style>
