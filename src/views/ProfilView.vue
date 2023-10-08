<script setup>
import { userStore } from '@/stores/user'
import { ref } from 'vue';




</script>

<template>
    <v-app id="inspire">
        <v-navigation-drawer model-value class="pt-4" color="grey-lighten-5" rail >
            <v-avatar v-for="n in 3"
            :key="n"
            :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
            :size="n === 1 ? 36 : 20"
            class="d-block text-center mx-auto mb-9"
            ></v-avatar>
        </v-navigation-drawer>

        <v-main>
            <!--  -->
        </v-main>
    </v-app>
</template>

<style scoped>



</style>