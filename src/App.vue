<template>
  <AsideMainLeft v-if="store.getMyUser"/>
  <router-view class="main"/>
  <AsideMainRight v-if="store.getMyUser"/>
</template>

<script setup>
import { useUserStore } from '@/store/user'

import AsideMainLeft from '@/components/AsideMainLeft.vue'
import AsideMainRight from '@/components/AsideMainRight.vue'


const store = useUserStore()

</script>

<style>
#app {
  width: 100%;
  max-width: 1280px;
  height: 100%;
  background-color: var(--white);
  background-color: bisque;

  display: flex;
}

.main {
  flex: 1;
  background-color: aquamarine;
}
</style>
