<template>
    <div>

        <header class=" shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Mazz-Merch</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/About">About</NuxtLink></li>
                    <li><NuxtLink to="/Products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>            
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .router-link-exact-active{
    color: #12b488
  }
</style>