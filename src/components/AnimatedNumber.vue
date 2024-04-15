<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';

const props = defineProps({
  targetNumber: Number,
  duration: {
    type: Number,
    default: 1000
  }
});

const currentNumber = ref(0);
const formattedNumber = computed(() => {
  return currentNumber.value.toLocaleString('en-US');
});
watch(() => props.targetNumber, (newValue, oldValue) => {
  animateNumber(oldValue, newValue);
});

onMounted(() => {
  animateNumber(0, props.targetNumber);
});

function animateNumber(startValue, endValue) {
  const difference = endValue - startValue;
  const stepTime = Math.abs(Math.floor(props.duration / difference));

  let currentStep = 0;
  const timer = setInterval(() => {
    currentStep += 1;
    currentNumber.value = startValue + currentStep;
    if (currentNumber.value >= endValue) {
      clearInterval(timer);
    }
  }, stepTime);
}
</script>

<template>
  <div class="animated-number">
    {{ formattedNumber }}
    <span>+</span>
  </div>
</template>

<style scoped lang="less">
.animated-number {
  font-size: 36px;
  font-weight: bold;
  
  span {
    font-weight: bold;
    font-size: 18px;
    padding-left: -10px;
  }
}
</style>