<script setup>
import { toast } from 'vue3-toastify';
import { useApiStore } from '@/stores/api'
import { Input, Button } from 'flowbite-vue'
import { ref } from 'vue'

const pseudo = ref('');
const email = ref('');
const password = ref('');
const password_bis = ref('');

const valid_pseudo = ref(false);
const pseudo_msg = ref('Pseudo vide.');
const valid_email = ref(false);
const email_msg = ref('Email vide.');

async function checkPseudo() {
    if(pseudo.value.length >= 2) {
        const call = await fetch(useApiStore().baseUrl+'/check/pseudo', {
            headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ pseudo: pseudo.value })
        });

        const resp = await call.json();

        if(!resp?.valid) {
            valid_pseudo.value = false;
            pseudo_msg.value = resp.msg;
            toast.error(resp.msg, {
                position: 'top-left',
                autoClose: 5000,
            });
        } else {
            valid_pseudo.value = true;
            pseudo_msg.value = '';
            toast.success(resp.msg, {
                position: 'top-left',
                autoClose: 5000,
            });
        }
    }
};

async function checkEmail() {
    if(email.value.length > 5) {
        const call = await fetch(useApiStore().baseUrl+'/check/email', {
            headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email: email.value })
        });

        const resp = await call.json();

        if(!resp?.valid) {
            valid_email.value = false;
            email_msg.value = resp.msg;
            toast.error(resp.msg, {
                position: 'top-left',
                autoClose: 5000,
            });
        } else {
            valid_email.value = true;
            email_msg.value = '';
            toast.success(resp.msg, {
                position: 'top-left',
                autoClose: 5000,
            });
        }
    }
};

async function submit() {
    if(!valid_pseudo.value
    || !valid_email.value
    || password.value != password_bis.value
    || password.value.length == 0
    || password_bis.value.length == 0) {

        if(!valid_pseudo.value) {
            toast.error(pseudo_msg.value, {
                position: 'top-left',
                autoClose: 5000,
            });
        }
        if(!valid_email.value) {
            toast.error(email_msg.value, {
                position: 'top-left',
                autoClose: 5000,
            });
        }
        if(password.value != password_bis.value) {
            toast.error('Les mots de passe ne sont pas identiques.', {
                position: 'top-left',
                autoClose: 5000,
            });
        }
        if(password.value.length == 0) {
            toast.error('Le champ "Mot de passe" est vide.', {
                position: 'top-left',
                autoClose: 5000,
            });
        }
        if(password.value.length == 0) {
            toast.error('Le champ "Vérification : mot de passe" est vide.', {
                position: 'top-left',
                autoClose: 5000,
            });
        }

        return false;
    };

    const call = await fetch(useApiStore().baseUrl+'/user/signup', {
        headers: {
            'Accept': 'application/json',
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
};
</script>

<template>
    <form @submit.prevent id="signup_form">
        <Input v-model="pseudo" @focusout.stop="checkPseudo" label="Pseudo" placeholder="choisissez un pseudo" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="email" @focusout.stop="checkEmail" label="Email" placeholder="votre email" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="password" label="Mot de passe" type="password" placeholder="un mot de passe" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Input v-model="password_bis" label="Vérification : mot de passe" type="password" placeholder="encore votre mot de passe" class="focus:ring-green-500 focus:border-green-500" />
        <br>
        <Button @click.stop="submit()" class="button" color="green" size="lg">S'inscrire</Button>
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