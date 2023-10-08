<script setup>
import { useApiStore } from '@/stores/api'
import { userStore } from '@/stores/user'
import { Input, Button } from 'flowbite-vue'
import { ref } from 'vue'

const pseudo = ref('');
const password = ref('');

async function login() {
    const call = await fetch(useApiStore().baseUrl+'/user/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            pseudo: pseudo.value,
            password: password.value,
        })
    })

    const resp = await call.json();
    if(resp.token.length) {
        userStore().token = resp.token;
    }
    window.location = '/profil';
}
</script>

<template>
    <form @submit.prevent id="login_form">
        <Input v-model="pseudo" size="" label="Pseudo" placeholder="votre pseudo" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="password" type="password" label="Mot de passe" placeholder="votre mot de passe" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Button @click="login()" class="button" color="green" size="lg">Se connecter</Button>
    </form>
</template>

<style>
#login_form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: white;
    width: 100%;
    /* margin: auto 50px; */
    padding: 16px;
    border-radius: 8px;
    border: 1px solid rgb(53, 96, 90);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.button {
    background-color: #35605A;
    margin: 0 auto;
}
</style>