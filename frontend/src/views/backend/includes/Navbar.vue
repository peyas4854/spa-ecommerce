<template>
    <div>
        <ul class="nav navbar-dark  justify-content-end p-3 dashboard_navbar">
            <li class="nav-item">
                <div class="dropdown">
                    <button class="btn btn-info  dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        {{ getCurrentUser.name }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item " href="javascript:void(0)" @click="logout()">Logout</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import * as JwtService from "@/service/jwt.service";
import ApiService      from "@/service/api.service";
import SweetAlert      from "@/service/sweetalert";
import { mapGetters }  from "vuex";
import store           from "@/store";

export default {
    name   : "Navbar",
    computed:{
        ...mapGetters(['getCurrentUser']),
    },
    methods: {

        logout() {
            const token = JwtService.getToken();
            if (typeof token != "undefined") {
                ApiService.post('/logout').then(res => {

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

<style scoped>
.dashboard_navbar {
    position: fixed;
    width: 100%;
    background-color: #2d3748;
    z-index: 999;
}
</style>
