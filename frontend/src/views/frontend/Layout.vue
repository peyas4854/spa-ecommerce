<template>
    <div>
        <Navbar/>
        <section id="front-main-content">
            <router-view/>

        </section>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";

export default {
    name      : "Layout.vue",
    components: {
        Navbar,
        Footer

    }
}
</script>


