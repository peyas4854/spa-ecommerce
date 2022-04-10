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
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item" v-if="!user.name">
                        <router-link to="login" type="button" class="btn btn-primary me-2"
                                     data-bs-toggle="tooltip" data-bs-placement="top" title="Login"
                        ><i class="fa-solid fa-user"></i></router-link>
                    </li>
                    <li class="nav-item" v-if="user.name">
                        <div class="dropdown">
                            <button class="btn btn-info   dropdown-toggle" type="button" id="navbarDropdown"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {{ getCurrentUser.name }}
                            </button>

                            <ul class="dropdown-menu " aria-labelledby="navbarDropdown">

                                <li><a class="dropdown-item " @click="logout()">Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import * as JwtService        from "@/service/jwt.service";
import ApiService             from "@/service/api.service";
import store                  from "@/store";
import SweetAlert             from "@/service/sweetalert";

export default {
    name: "Navbar",

    computed: {
        ...mapGetters(['getCurrentUser']),
        ...mapState(['user']),

    },
    methods: {
        logout() {
            const token = JwtService.getToken();
            if (typeof token != "undefined") {
                ApiService.post('/frontend/logout').then(res => {
                    console.log('res',res)
                    JwtService.destroyToken();
                    store.commit("LOG_OUT", {});
                    SweetAlert.info(res.data.message)
                    this.$router.push({name: "login"});
                }).catch(error => {
                    console.log('error', error);
                })
            }
        }
    }

}
</script>
