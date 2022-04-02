<template>
<div>
    <ul class="nav flex-column">
        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link active" aria-current="page" >Dashboard</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/product" class="nav-link" >Product</router-link>
        </li>

    </ul>

</div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped>

</style>
