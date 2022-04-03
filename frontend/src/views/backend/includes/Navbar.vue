<template>
<div>
    <ul class="nav navbar-dark  justify-content-end p-3 topnavbar" style="background-color: #2d3748">
        <li class="nav-item">
            <div class="dropdown">
                <button class="btn btn-info  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    User name
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div>
        </li>

    </ul>
</div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
.topnavbar{
    position: fixed;

    background: red;
    width: 100%;
}


</style>
