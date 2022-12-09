import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { UserRepository } from '@/repositories/userRepository'

export const useUserStore = defineStore('user', () => {
    
  const user = ref()

  const getMyUser = computed(() => user.value)

  if(localStorage.getItem("token") && localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"))
  }


  async function signIn(email, password) {
    const result = await UserRepository.signIn(email, password)

    if(result.msg) {
      const myUser = await UserRepository.getMyUser(result.token)
      user.value = myUser
      localStorage.setItem("user", JSON.stringify(myUser, null, 2))
      localStorage.setItem("token", result.token)
      return result.msg
    }

    user.value = ""
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    return result
  }


  async function signOut() {
    user.value = ""
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  return { getMyUser, signIn, signOut }
})