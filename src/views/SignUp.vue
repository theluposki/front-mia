<template>
    <div class="sign-up">
        <h1>Sign Up</h1>

        <form class="form" action="">
            <div class="form-controll">
                <label for="name">
                  <span>Nome</span>
                </label>
                <input tabindex="1" type="text" id="name" name="name" class="input" placeholder="Super Mario" required>
            </div>
            <div class="form-controll">
                <label for="nickname">
                  <span>Nome de usuário</span>
                </label>
                <input tabindex="2" type="text" id="nickname" name="nickname" class="input" placeholder="supermario" required>
            </div>
            <div class="form-controll">
                <label for="email">
                  <span>Email</span>
                </label>
                <input tabindex="3" type="email" id="email" name="email" class="input" placeholder="mail@mail.com" required>
            </div>
            <div class="form-controll">
                <label for="password">
                  <span>Senha</span>
                </label>
                <input tabindex="4" type="password" id="password" name="password" class="input" placeholder="**********" required>
            </div>
            <div class="form-controll">
                <label for="rePassword">
                  <span>Confirmar senha</span>
                </label>
                <input tabindex="5" type="password" id="rePassword" name="rePassword" class="input" placeholder="**********" required>
            </div>

            <div class="form-controll-btn">
                <button type="reset" class="btn">
                    Clear
                </button>
                <button tabindex="6" type="submit" class="btn">
                    Sign-in
                </button>
            </div>
        </form>
    </div>
</template>


<style scoped>
.sign-up {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.form {
    background-color: var(--white);
    width: 50%;
    height: 90%;
}

.form-controll {
    display: flex;
    flex-direction: column;

    margin: 20px 0;
}

.form-controll-btn {
    display: flex;
    justify-content: space-between;
    margin: 60px 0;
}

</style>