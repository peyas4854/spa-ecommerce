<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 m-auto ">
                <div class="card mt-5">
                    <div class="card-header">
                        <h2 class="text-center"> Register</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="email" class="form-control" id="fullname" aria-describedby="emailHelp" v-model="form.name">
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="form.email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="form.password">
                            </div>

                            <div class="mb-3">
                                <label for="c_password" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="c_password" v-model="form.confirm_password">
                            </div>





                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button">Sign Up</button>
                                </div>

                            <div>
                                <p class="text-center"> Already Have an account? <router-link to="/login" href="">Sign in</router-link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register.vue",
    data(){
        return{
            form:{}
        }
    },
    mounted(){

    },
    methods:{
        login(){

        }
    }

}
</script>
