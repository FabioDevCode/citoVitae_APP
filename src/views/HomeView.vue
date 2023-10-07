<script setup>
import SignupForm from '@/components/SignupForm.vue';
import Loginform from '@/components/LoginForm.vue';
import image from '@/assets/images/cito_vitae_logo_long_white.svg';
import { Button } from 'flowbite-vue';
import { ref } from 'vue';

const toggle = ref(false);


function moveWelcome() {
    document.querySelector('#welcome').classList.toggle('login');
    setTimeout(()=>{
        toggle.value = !toggle.value;
    }, 150);
}

</script>

<template>
    <div id="home-container">
        <div id="welcome" class="">
            <h1>
                Bienvenue sur c<span>i</span>t<span class="right">o</span> v<span>i</span>t<span>a</span>e !
            </h1>
            <img :src="image" alt="Logo Cito Vitae blanc">
            <p>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Quo quas, vitae reiciendis 
                repudiandae adipisci possimus quidem a dolorem, 
                quaerat quod nisi molestiae, quisquam doloribus commodi 
                sunt? Eius voluptatibus adipisci accusantium, reprehenderit, 
                autem nulla mollitia deleniti ipsam harum eum ea modi? Neque 
                similique mollitia possimus natus hic, eaque voluptatibus libero nihil 
                deserunt veritatis magni odio ducimus illo quibusdam pariatur adipisci. 
                Consectetur, accusantium dignissimos? Veniam rem maxime animi temporibus 
                fuga veritatis eos sint culpa est non minus assumenda unde, magni atque 
                impedit quo, ullam repellendus deleniti quae! Labore cum odit totam illo. 
                Sapiente ipsam asperiores suscipit ex assumenda velit ipsum molestias recusandae.
            </p>

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
}

#welcome img {
    width: 45%;
    margin: 50px auto;
}

#welcome h1 {
    height: 60px;
    display: inline-block;
    display: flex;
    font-size: 3.6em;
    font-weight: 600;
    margin: 25px auto;
}
#welcome h1 span {
    display: inline-block;
    margin-top: -7px;
}
#welcome h1 span.right {
    margin-right: 10px;
}
#welcome p {
    display: inline-block;
    width: 60%;
    line-height: 1.8em;
    margin-bottom: 100px;
}


.login {
    left: 0vw !important;
}

</style>