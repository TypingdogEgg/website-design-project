<script setup>
import { ref } from 'vue';
import AnimatedNumber from './AnimatedNumber.vue';
import { Space } from 'ant-design-vue';

const dataItems = ref([
    { number: 70,unit:'个', description: '重点签约项目' },
    { number: 665, unit: '个', description: '参展展商' },
    { number: 1500, unit: '万人次', description: '线上观展人数' },
    { number: 1000, unit: '亿元', description: '成交合同金额' },
]);

</script>

<template>
    <div class="show-data">
        <div class="data-center">
            <div v-for="(item, index) in dataItems" :key="index" class="data-item">
                <AnimatedNumber :unit="item.unit" :target-number="item.number" />
                <span class="description">{{ item.description }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.show-data {
    background-color: #3257bc;
    height: 125px;
    display: flex;
    justify-content: center;
    .data-center{
        display: flex;
    justify-content: center;
    align-items: center;
        height: 100%;
        width: 1200px;
        .data-item {
            color: #fff;
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