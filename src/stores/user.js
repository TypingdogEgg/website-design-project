import { ref,reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userData = ref({})
  
  function saveUserData(user){
    userData.value = user.data
    localStorage.setItem('token',user.token)
  }

  function removeUserData() {
    userData.value = {}
    localStorage.removeItem('token')
  }


  return { userData, saveUserData, removeUserData }
})
