<template>
    <div>
        
        <header class=" shadow-sm bg-white">
            <nav class="container mx-4 p-4">
                <NuxtLink to="/Products" class="font-bold">Mazz-Merch Products</NuxtLink>               
            </nav>            
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/About">About</NuxtLink></li>
                <li><NuxtLink to="/Products">Products</NuxtLink></li>
            </ul>
        </footer>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .router-link-exact-active{
    color: #12b488
  }
</style>