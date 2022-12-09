<template>
  <aside class="aside-main-left">
    <div class="myProfileInfo">
      <div v-if="profile.getMyProfile" class="card">
        <header  class="h-profile">
          <div class="front-cover">
            <img :src="profile.getMyProfile.img_frontCover" alt="Imagem de Capa">
          </div>
          <div class="img-profile">
            <img :src="profile.getMyProfile.img_profile" alt="Imagem do Usuário">
          </div>
        </header>
        <main class="m-profile">
          <div class="m-name">
            <h3>{{ user.getMyUser.name }}</h3>
            <p>@{{ user.getMyUser.nickname }}</p>
          </div>
          <div class="m-message-status">
            <p>{{ profile.getMyProfile.messagem_status}}</p>
          </div>
          <div class=""></div>
        </main>
      </div>
    </div>

    <nav class="nav" aria-label="navigation">
      <router-link class="nav-link" to="/home">
        <i class="ai-home-alt1"></i>
        <span>Home</span>
      </router-link>
      <router-link class="nav-link" to="/about">
        <i class="ai-info"></i>
        <span>About</span>
      </router-link>
    </nav>

    <nav class="nav nav-bottom" aria-label="sign-out">
      <a @click="signOut" class="nav-link">
        <i class="ai-sign-out"></i>
        <span>Sair</span>
      </a>
    </nav>

  </aside>
</template>

<script setup>

import { useMyProfileStore } from '@/store/myProfile'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const router =  useRouter()

const user =  useUserStore()
const profile = useMyProfileStore()

const signOut = () => {
  user.signOut()
  router.push("/")
}


</script>

<style scoped>
.aside-main-left {
  position: relative;
  min-width: 260px;
  max-width: 260px;
  background-color: var(--white-light);
}

.nav {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.nav-bottom {
  position: absolute;
  left: 0;
  bottom: 40px;
}

.nav-link {
  text-decoration: none;
  color: var(--dark);
  font-size: 1.4em;
  margin: 8px 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
}

.nav-link span {
  margin-left: 10px;
}

.nav-link i {
  margin-left: 10px;
  font-size: 1.6em;
}

.nav-link.router-link-exact-active {
  color: var(--primary);
}

.myProfileInfo {
  width: 100%;
}

.card {
  width: 100%;
}

.h-profile {
  position: relative;
  margin-bottom: 50px;
}

.front-cover {
  width: 100%;
  height: 100px;
  overflow: hidden;
}


.front-cover img {
  width: 100%;
  height: 200px;
}

.img-profile {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50px);

  width: 100px;
  height: 100px;

  border: solid 2px var(--white);
  border-radius: 14px;

  overflow: hidden;
}

.img-profile img{
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.m-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.m-name {
  text-align: center;
  margin-bottom: 14px;
}

.m-name p {
  font-size: 12px;
  opacity: .8;
}

.m-message-status {
  text-align: center;
  font-size: 12px;
  margin: 0 14px;
}

@media screen and (max-width: 600px) {
  .aside-main-left {
    min-width: 50px;
    max-width: 50px;
  }
}
</style>