import { ref,reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  let userData = ref({cs:123})

  function getUserData(){
    userData.value = JSON.parse(localStorage.getItem('userInfo'))
    return userData.value
  }
  
  function saveUserData(user){
    console.log('user',user);
    userData.value = user.data
    localStorage.setItem('token',user.token)
    console.log(user.data);
    localStorage.setItem('userInfo', JSON.stringify(user.data))
  }

  function removeUserData() {
    userData.value = {}
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }


  return { userData, saveUserData, removeUserData,getUserData }
})
