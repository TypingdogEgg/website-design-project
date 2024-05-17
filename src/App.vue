<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    // offset: 200,
    duration: 600,
    easing: 'ease-out',
    once:false
    // delay: 100,
  });

  
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="less">
@import '@/assets/css/global.less';

@font-face {
  font-family: 'title-font';
  src: url(./assets/fonts/ZhiMangXing-Regular.ttf);
}

@font-face {
  font-family: 'en-font';
  src: url(./assets/fonts/HooskaiChamferedSquare.ttf);
}
</style>
