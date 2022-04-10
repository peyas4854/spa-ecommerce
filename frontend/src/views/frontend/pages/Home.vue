<template>
    <div>
        <div class="container">
            <div class="d-flex bd-highlight my-3">
                <div class="my-auto flex-grow-1">
                    <h4> Products List </h4>
                </div>
                <div class="d-flex flex-row-reverse">
                    <button type="button" class="btn btn-success" @click="getProducts()">Search</button>
                    <input type="text" class="search form-control" id="search-box" placeholder="Search"
                           v-model="form.search">
                </div>
            </div>
            <div id="loader" v-if="loader">
                <loader/>
            </div>
            <div class="row" v-else>
                <template v-for="(product,index) in products" :key="index">
                    <ProductCard :product="product"></ProductCard>
                </template>
                <div>
                    <pagination v-if="products.length > 0" :pagination="pagination"
                                @paginate="getProducts()" :offset="5"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ApiService  from "@/service/api.service";
import ProductCard from "@/components/frontend/product-card";
import pagination  from '@/components/Pagination';
import SweetAlert  from "@/service/sweetalert";


export default {
    name: "Home.vue",
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
            loader    : false,

        }
    },
    mounted() {
        this.getProducts();
    },
    components: {
        ProductCard,
        pagination
    },
    methods   : {
        getProducts() {
            this.loader = true;
            let params  = {
                ...this.form,
                page: this.pagination.current_page
            }
            ApiService.get('frontend/products', {params: params}).then((response) => {
                this.products   = response.data.data;
                this.pagination = response.data.meta;
                this.loader     = false;
            }).catch((error) => {
                SweetAlert.error(error.data.message);
            });
        },
    }

}
</script>

<style scoped>

</style>
