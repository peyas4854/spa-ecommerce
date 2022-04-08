<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-4 fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand">Ecommerce</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button type="button" class="btn btn-primary me-2"
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Login"
                        ><i class="fa-solid fa-user"></i></button>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <button class="btn btn-info   dropdown-toggle" type="button" id="navbarDropdown"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                               User name
                            </button>

                            <ul class="dropdown-menu " aria-labelledby="navbarDropdown">

                                <li><a class="dropdown-item " href="javascript:void(0)">Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
