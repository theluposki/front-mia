<template>
  <div class="about">
    <h1>This is an about page</h1>
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

<style scoped>
.about {
  background-color: var(--white);
}
</style>