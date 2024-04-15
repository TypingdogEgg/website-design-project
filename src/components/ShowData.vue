<script setup>
import { ref } from 'vue';
import AnimatedNumber from './AnimatedNumber.vue';
import { Space } from 'ant-design-vue';

const dataItems = ref([
    { number: 888, description: '平方米' },
    { number: 999, description: '辆' },
    { number: 1500, description: '家' },
    { number: 1000, description: '人' },
]);

</script>

<template>
    <div class="show-data">
        <div class="data-center">
            <div v-for="(item, index) in dataItems" :key="index" class="data-item">
                <AnimatedNumber :target-number="item.number" />
                <span class="description">{{ item.description }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.show-data {
    height: 200px;
    display: flex;
    justify-content: center;
    .data-center{
        display: flex;
    justify-content: center;
    align-items: center;
        height: 100%;
        width: 1200px;
        .data-item {
        text-align: center;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .description {
        margin-left: 0.5rem;
    }
    }
    
}
</style>