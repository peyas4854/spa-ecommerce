<template>
    <div>
        <Navbar/>
        <section class="bg-white container mx-auto mt-2">
            <router-view/>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
export default {
    name: "Layout.vue",
    components:{
        Navbar,
        Footer

    }
}
</script>

