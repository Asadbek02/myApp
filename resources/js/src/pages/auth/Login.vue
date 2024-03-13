<script setup>

import Input from "@/components/form_elements/Input.vue";
import Button from "@/components/form_elements/Button.vue";
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <router-link :to="{ name: 'home' }">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            </router-link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">

                <Input inputType="email" inputName="email" labelText="Email address" labelId="email-address" inputAutocomplete="email" />

                <Input inputType="password" inputName="password" labelText="Password" labelId="password" inputAutocomplete="current-password" />

               <Button buttonText="Sign in" buttonType="sign-in" />
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <router-link :to="{ name: 'register' }" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
