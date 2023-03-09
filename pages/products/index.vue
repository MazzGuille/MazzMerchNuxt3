<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { title } from 'process';

   useHead({
    title: 'MazzMerch | Products List',
    meta: [
        {name: 'description', content: 'MazzMerch products'}
    ]
   })

    definePageMeta({
        layout: 'products'
    })

    //fetch all the products loop over the products variable
   const { data: products } = await useFetch('https://fakestoreapi.com/products')  

</script>

<style scoped>

</style>