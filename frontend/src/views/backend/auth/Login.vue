<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 m-auto ">
                    <div class="card mt-5">
                        <div class="card-header">
                            <h2 class="text-center"> Login</h2>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                           v-model="form.email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" v-model="form.password">
                                </div>
                                <div class="mb-3 form-check">
                                    <div class="d-flex bd-highlight">
                                        <div class=" flex-grow-1 bd-highlight">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                        </div>
                                        <div class=" bd-highlight">
                                            <router-link to="/login" href="">Forgot Your Password?</router-link>
                                        </div>

                                    </div>
                                </div>

                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button" @click="login()">Sign In</button>
                                </div>
                                <div>
                                    <p class="text-center"> Don't Have an account?
                                        <router-link to="/register">Sign Up</router-link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ApiService from "@/service/api.service";
import JwtService from "@/service/jwt.service";
import SweetAlert from "@/service/sweetalert";
import store      from "@/store";

export default {
    name: "Login.vue",
    data() {
        return {
            form: {}
        }
    },
    methods: {
        login() {
            ApiService.post('/login', this.form).then((res) => {
                console.log('res', res.data);
                JwtService.saveToken(res.data.access_token);
                localStorage.setItem("expires_at", res.data.expires_at);
                ApiService.init();
                store.commit("REDIRECT_AFTER_LOGIN", res.data.user);
                SweetAlert.success(res.data.message);
            }).catch((errors) => {
                SweetAlert.error(errors.response.data.message);
                console.log('error', errors.response.data.message);
            });
        }
    }
}
</script>

