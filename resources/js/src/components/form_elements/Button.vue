<script setup>
import {defineProps} from "vue";

const props = defineProps({
   buttonText: String,
   buttonType: String
});
</script>

<template>
    <div>
        <button :type="buttonType" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{buttonText}}</button>
    </div>
</template>

<style scoped>

</style>
