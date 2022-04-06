<template>
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card ">
                        <div class="card-body">
                            <h5 class="card-title">Product list </h5>
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">Sl <i class="fad fa-laugh-wink"></i></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="products.length">

                                    <tr v-for="(product,index) in products " :key="index">
                                        <th scope="row"> {{ ++index }}</th>
                                        <td>{{ product.name }}</td>
                                        <td>{{ product.price }}</td>
                                        <td>
                                            <img class="form-img img-thumbnail w-100" :src="product.image"/>
                                        </td>
                                        <td>
                                            <div class="d-grid gap-2 d-md-block">
                                                <button class="btn btn-primary m-1" type="button">Edit</button>
                                                <button class="btn btn-danger" type="button">Delete</button>
                                            </div>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                                <div>
                                    <pagination v-if="products.length > 0" :pagination="pagination"
                                                @paginate="getProducts()" :offset="5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/service/api.service';
import pagination from '@/components/Pagination';

export default {
    name: "index",
    data() {
        return {
            products  : [],
            pagination: {
                current_page: 1,
            },
            form      : {
                per_page: 10,
                search  : '',
            },

        }
    },
    components: {
        pagination
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            let params = {
                ...this.form,
                page: this.pagination.current_page
            }
            ApiService.get('/product', {params: params}).then((response) => {
                this.products   = response.data.data;
                this.pagination = response.data.meta;
            }).catch((error) => {
                console.log('error',error)
            });

        }
    }
}
</script>
