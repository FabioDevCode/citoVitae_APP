import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => {
        return {
            token: ref('')
        }
    },
    persist: true
});