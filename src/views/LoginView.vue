<template>
    <div class="login">
      <div class="container-login">
        <header class="header-login">
          <router-link class="nav-link" to="sign-in">
            <span>sign-in</span>
          </router-link>
          <router-link class="nav-link" to="sign-up">
            <span>sign-up</span>
          </router-link>
        </header>
        <RouterView class="main-login"/>
      </div>
    </div>
</template>


<style scoped>
.login {
  width: 100%;
  height: 100%;

  background-color: var(--silver);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-login {
  overflow-y: hidden;
  width: 80%;
  height: 80%;

  background-color: var(--white);

  display: flex;
  flex-direction: column;
}

.header-login {
  width: 100%;
  height: 50px;
  min-height: 50px;

  display: flex;
  padding: 0 20px;
  background-color: #f4f4f4;

}

.nav-link {
  text-decoration: none;
  color: var(--dark);
  font-size: 1.2rem;
  font-weight: bold;

  padding: 0 16px;

  display: flex;
  align-items: center;
  border-bottom: solid 2px transparent;
}

.nav-link.router-link-exact-active {
  transition: all ease .4s;
  color: var(--primary);
  border-bottom: solid 2px var(--primary);

}

.main-login {
  flex: 1;
  overflow-y: auto;
  padding: 40px;
}
</style>
