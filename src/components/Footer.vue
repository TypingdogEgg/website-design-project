<script setup>

</script>

<template>
    <div class="footer">
        <div class="inner">
            <div class="col logo"></div>
            <ul class="col">
                <li class="row">123</li>
                <li class="row">123</li>
                <li class="row">123</li>
            </ul>
            <ul class="col">
                <li class="row">234</li>
                <li class="row">234</li>
                <li class="row">234</li>
            </ul>
            <ul class="col">
                <li class="row">345</li>
                <li class="row">345</li>
                <li class="row">345</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
.footer {
    height: 500px;
    background-color: #003e7d;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
        width: 80%;
        display: flex;
        justify-content: space-between;

        .col {
            width: 22%;
            height: 400px;
            /* background-color: #fff; */

            li{
                background-color: #fff;
                margin-top: 20px;
                width: 100%;
                height: 50px;
            }
        }
    }
}
</style>