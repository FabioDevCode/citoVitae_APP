<script setup>
import SignupForm from '@/components/SignupForm.vue';
import Loginform from '@/components/LoginForm.vue';
import image from '@/assets/images/cito_vitae_white.svg';
import { Button } from 'flowbite-vue';
import { ref } from 'vue';
import { userStore } from '@/stores/user'

userStore().token = '';
const toggle = ref(false);

function moveWelcome() {
    document.querySelector('#welcome').classList.toggle('login');
    setTimeout(()=>{
        toggle.value = !toggle.value;
    }, 250);
}
</script>

<template>
    <div id="home-container">
        <div id="welcome" class="">
            <img :src="image" alt="Logo Cito Vitae blanc">

            <h1>
                Bienvenue sur c<span>i</span>t<span class="right">o</span> v<span>i</span>t<span>a</span>e !
            </h1>

            <div class="welcome-text" v-if="!toggle">
                <p>Ton <b>mot de passe</b> doit :</p>
                <ul>
                    <li>- faire au minimum <b>12</b> caractères</li>
                    <li>- au maximum <b>100</b> caractères</li>
                    <li>
                        - contenir 
                        <b>1</b> majuscule, 
                        <b>1</b> minuscule, 
                        <b>1</b> chiffre et 
                        <b>1</b> caractère spécial
                    </li>
                </ul>
            </div>
            <div class="welcome-text" v-if="toggle">
                <p>Ravie de vous revoir ici !</p>
                <p>Phrase captivante et motivante</p>
                <p>Qui tiens sur trois lignes</p>
                <p>Pas vraiment comme celle-ci.</p>
            </div>

            <Button v-if="!toggle" @click="moveWelcome()" color="light" size="lg" loading-position="suffix">
                Se connecter
                <template #suffix>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                </template>
            </Button>

            <Button v-if="toggle" @click="moveWelcome()" color="light" size="lg" loading-position="prefix">
                S'inscrie
                <template #prefix>
                    <svg class="w-5 h-5" fill="currentColor" style="transform: rotate(180deg);" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                </template>
            </Button>
        </div>

        <div class="container_form">
            <SignupForm v-if="!toggle" />
        </div>

        <div class="container_form">
            <Loginform v-if="toggle" />
        </div>
    </div>
</template>

<style scoped>
#home-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    background: white;
    background-image: url('../assets/images/sprinkle_gren.svg');
    background-size: 1100px;
    background-repeat: repeat;
    background-position: center;
}

.container_form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40%;
    margin: auto 2.5%;
}

#welcome {
    position: absolute;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 55%;
    color: whitesmoke;
    background-color: #35605A;
    transition: left 300ms ease-in-out;
    left: 45vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    rgba(0, 0, 0, 0.12) 0px -12px 30px, 
    rgba(0, 0, 0, 0.12) 0px 4px 6px, 
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#welcome img {
    height: 7vw;
    margin-bottom: 15px;
}

#welcome h1 {
    height: 60px;
    display: inline-block;
    display: flex;
    font-size: 3.6em;
    font-size: 3vw;
    font-weight: 600;
    margin: 35px auto 50px auto;
}
#welcome h1 span {
    display: inline-block;
    margin-top: -0.6vw;
}
#welcome h1 span.right {
    margin-right: 10px;
}
#welcome .welcome-text {
    display: inline-block;
    width: 60%;
    line-height: 1.8em;
    margin-bottom: 120px;
}


.login {
    left: 0vw !important;
}

</style>