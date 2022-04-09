<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 m-auto ">
                <div class="card m-5">
                    <div class="card-header">
                        <h2 class="text-center"> Registration</h2>
                    </div>
                    <div class="card-body">
                        <form class="mb-5">
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="email" class="form-control" id="fullname" aria-describedby="emailHelp"
                                       v-model="form.name">
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                       v-model="form.email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="form.password">
                            </div>

                            <div class="mb-3">
                                <label for="c_password" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="c_password"
                                       v-model="form.password_confirmation">
                            </div>


                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" @click="login">Sign Up</button>
                            </div>

                            <div>
                                <p class="text-center"> Already Have an account?
                                    <router-link to="/login" href="">Sign in</router-link>
                                </p>
                            </div>
                        </form>
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
export default {
    name: "Register.vue",
    data() {
        return {
            form: {}
        }
    },
    mounted() {

    },
    methods: {
        login() {
            ApiService.post('/register', this.form).then((res) => {
                console.log('res',res);
                SweetAlert.success(res.data.message);
                this.$router.push({name: "login"});
            }).catch((error) => {
                SweetAlert.error(error.data.message);
            });

        }
    }

}
</script>
