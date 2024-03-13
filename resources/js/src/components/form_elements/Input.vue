<script setup>
import {defineProps} from "vue";

const props = defineProps({
    labelText: String,
    inputType: String,
    inputName: String,
    labelId: String,
    inputPlaceholder: String,
    inputAutocomplete: String
});
</script>

<template>
    <div>
        <label :for="labelId" class="block text-sm font-medium leading-6 text-gray-900">{{labelText}}</label>
        <div class="mt-2">
            <input :id="labelId" :name="inputName" :type="inputType" :placeholder="inputPlaceholder" :autocomplete="inputAutocomplete" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<style scoped>

</style>
