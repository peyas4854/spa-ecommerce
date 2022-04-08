<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex bd-highlight mb-3">
                            <h2> Product List </h2>
                            <router-link :to="{ name:'productCreate'}" class="btn btn-primary ms-auto">Add Create
                            </router-link>
                        </div>
                    </div>
                    <div id="loader" v-if="loader">
                        <loader/>
                    </div>
                    <div class="card-body" v-else>
                        <div class="from-group d-flex flex-row-reverse">
                            <button type="button" class="btn btn-success" @click="getProducts()">Search</button>
                            <input type="text" class="search form-control" id="search-box" placeholder="Search"
                                   v-model="form.search">

                        </div>
                        <table class="table table-striped product-table">
                            <thead>
                            <tr>
                                <th scope="col">Sl <i class="fad fa-laugh-wink"></i></th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="products.length">
                                <tr v-for="(product,index) in products " :key="index">
                                    <th scope="row"> {{ ++index }}</th>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>
                                        <img class="product-image " :src="product.image"/>
                                    </td>
                                    <td>
                                        <div class="d-grid gap-2 d-md-block">
                                            <router-link :to="{name:'productEdit',params:{id: product.id}}" class="btn btn-primary m-1" type="button">Edit</router-link>
                                            <button class="btn btn-danger" type="button" >Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="5" class="text-center fs-2">
                                        No data Found!
                                    </td>
                                </tr>
                            </template>

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
            loader    : true,
        }
    },
    components: {
        pagination,
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
                this.loader     = false;
            }).catch((error) => {
                console.log('error', error)
            });
        },
        destroy(id) {
            console.log('id',id);
        },
    }
}
</script>


