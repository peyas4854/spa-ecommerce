<template>
    <div class="col-md-4">
        <div class="card mb-2" id="product-card">
            <router-link :to="{name:'ProductDetail',params:{id: product.id}}">
                <div class="card-body text-center">
                    <img
                        :src="product.image" v-if="product.image !=null"
                        class="card-product-image" alt="">

                    <img v-else
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvqSCx7xcaN-TMoOANaAI82JhDjct3UCIfsPGonu4otCtZOYpSNXn15jcpzQ8A0wcpoQ&usqp=CAU"
                         class="card-product-image" alt="Image not found">
                </div>
                <div class="card-body">
                    <p class="card-title text-center">{{ product.name }}</p>
                    <p class="card-title text-center">{{ $filters.currencyTK(product.price) }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name : "product-card",
    props: {
        product: {
            type    : Object,
            required: false
        },
    }
}
</script>

<style lang="scss" scoped>
//.card-product-image {
//    width: 200px;
//    height: 200px;
//}
#product-card {
    img {
        width: 200px;
        height: 200px;
    }
    a{
        text-decoration: none;
        color:black;

        :hover{
            color: #1f1d1d;
        }
    }


}
</style>


