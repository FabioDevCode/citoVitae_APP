<script setup>
import { Input, Button } from 'flowbite-vue'
import { ref } from 'vue'

const pseudo = ref('');
const email = ref('');
const password = ref('');
const password_bis = ref('');

async function submit() {
    const call = await fetch('http://localhost:3030/api/user/signup', {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            pseudo: pseudo.value,
            email: email.value,
            password: password.value,
            password_bis: password_bis.value
        })
    });
    const resp = await call.json();

    console.log(resp);
}

</script>

<template>
    <form @submit.prevent id="signup_form">
        <Input v-model="pseudo" label="Pseudo" placeholder="choisissez un pseudo" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="email" label="Email" placeholder="votre email" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="password" label="Mot de passe" type="password" placeholder="mot de passe" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="password_bis" label="Vérification : mot de passe" type="password" placeholder="encore votre mot de passe" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Button @click="submit()" class="button" color="green" size="lg">S'inscrire</Button>
    </form>
</template>

<style scoped>
#signup_form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: white;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #35605A;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.button {
    background-color: #35605A;
    margin: 0 auto;
}
</style>