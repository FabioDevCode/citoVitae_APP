// import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', () => {
    const baseUrl = 'http://localhost:3030/api';

    return { baseUrl }
});