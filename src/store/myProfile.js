import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { MyProfileRepository } from '@/repositories/myProfileRepository'

export const useMyProfileStore = defineStore('myProfile', () => {
    
  const profile = ref()

  const getMyProfile = computed(() => profile.value)

  const myProfile = async () => {
    const result = await MyProfileRepository.getMyProfile()

    profile.value = result
  }

  myProfile()

  return { getMyProfile }
})