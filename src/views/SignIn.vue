<template>
    <div class="sign-in">
        <h1>Sign In</h1>

        <form class="form" action="">
            <div class="form-controll">
                <label for="email">
                  <span>Email</span>
                </label>
                <input tabindex="1" v-model="email" type="email" id="email" name="email" class="input" placeholder="mail@mail.com" required>
            </div>
            <div class="form-controll">
                <label for="password">
                  <span>Senha</span>
                </label>
                <input tabindex="2" v-model="password" type="password" id="password" name="password" class="input" placeholder="**********" required>
            </div>

            <p class="message" v-if="message === 'Authenticated successfully!' ">{{ message }}</p>
            <p class="message-error" v-else>{{ message }}</p>

            <div class="form-controll-btn">
                <button type="reset" class="btn">
                    Clear
                </button>
                <button tabindex="3" @click.prevent="fnSignIn()" class="btn">
                    Sign-in
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const router = useRouter()
const user = useUserStore()

const email = ref("khaleesi@mail.com")
const password = ref("Supermario2012#")

const message = ref("")

const fnSignIn = async () => {
    const result = await user.signIn(email.value,password.value)

    message.value = result

    if(result === "Authenticated successfully!") {
        console.log("Foi .....")
        router.push("/home")
    }
}

onMounted(async () => {
    console.log("owowow")
})

</script>

<style scoped>
.sign-in {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.form {
    background-color: var(--white);
    width: 50%;
    height: 50%;
}

.form-controll {
    display: flex;
    flex-direction: column;

    margin: 20px 0;
}

.form-controll-btn {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.message {
    background-color: var(--white);
    height: 50px;
    font-weight: bold;
    border-radius: 4px;
    color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: center;
}

.message-error {
    background-color: var(--white);
    height: 50px;
    font-weight: bold;
    border-radius: 4px;
    color: var(--danger);

    display: flex;
    align-items: center;
    justify-content: center;
}

</style>