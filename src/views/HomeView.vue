<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const router = useRouter()
const user = useUserStore()

if(!user.getMyUser || !localStorage.getItem("user") || !localStorage.getItem("token")) {
  router.push("/")
}

</script>
