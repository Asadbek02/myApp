<script setup>

import Navbar from "@/pages/partials/Navbar.vue";
</script>

<template>
    <div class="min-h-full">
        <Navbar/>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <!-- Your content -->
                <router-view />
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>
