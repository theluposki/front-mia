<template>
  <aside class="aside-main-left">

    <nav class="nav" aria-label="navigation">
      <router-link class="nav-link" to="/">
        <i class="ai-person"></i>
        <span>Login</span>
      </router-link>
      <router-link class="nav-link" to="/home">
        <i class="ai-home-alt1"></i>
        <span>Home</span>
      </router-link>
      <router-link class="nav-link" to="/about">
        <i class="ai-info"></i>
        <span>About</span>
      </router-link>
    </nav>

    <nav class="nav" aria-label="sign-out">
      <a href="#" class="nav-link">
        <i class="ai-sign-out"></i>
        <span>Sair</span>
      </a>
    </nav>

  </aside>
</template>

<style scoped>
.aside-main-left {
  min-width: 260px;
}

.nav {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.nav-link {
  text-decoration: none;
  color: var(--dark);
  font-size: 1.4em;
  margin: 8px 16px;

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

@media screen and (max-width: 600px) {
  .aside-main-left {
    min-width: 50px;
    max-width: 50px;
  }
}
</style>