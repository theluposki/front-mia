<template>
    <div class="login-main">
        <h1>MIA</h1>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

if(store.getMyUser) {
    router.push("/home")
}


</script>

<style scoped>
.login-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>