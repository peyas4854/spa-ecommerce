<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4> Product Create</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" v-model="form.name"
                                           aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="number" class="form-control" id="price" v-model="form.price">
                                </div>

                                <div class="mb-3">
                                    <label for="image" class="form-label">Image</label>
                                    <input type="file" class="form-control" id='image' v-on:change="onImageChange">


                                </div>

                                <div class="mv-3">
                                    <img :src="form.image" class="img-thumbnail" alt="" v-if="form.image"
                                         style="width: 200px;height: 200px">

                                </div>

                                <div class="mb-3">
                                    <label for="price" class="form-label">Description</label>
                                    <textarea class="form-control" v-model="form.description"></textarea>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-success me-2" @click="save">Save</button>
                                    <button type="button" class="btn btn-warning" @click="reset">Reset</button>
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
import SweetAlert from "@/service/sweetalert";

export default {
    name   : "create.vue",
    data   : () => ({
        form: {},
    }),
    methods: {
        onImageChange(e) {
            // let vm             = this;
            let fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = e => {
                this.form.image = e.target.result;
            };

        },
        save() {
            console.log('form', this.form);
            ApiService.post('/product', this.form).then((res) => {
                // this.$router.push({name: "dashboard"});
                console.log('res', res.data);
                console.log('router', this.$router);
                SweetAlert.success(res.data.message)
                this.$router.push({name: "product"});
            }).catch((error) => {

            })

        },
        reset() {
            this.form = {}
        },

    }

}
</script>


