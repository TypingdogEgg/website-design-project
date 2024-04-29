<script setup>
import {YoutubeOutlined,TwitterOutlined,WeiboOutlined,InstagramOutlined } from '@ant-design/icons-vue';
</script>

<template>
    <div class="footer">
        <div class="inner">
            <div class="col logo">
                <div style="width: 80px;height: 80px;">
                    <img style="width: 80px;" src="../assets/images/logo.png" alt="">
                </div>
                <div class="div" style="padding-top: 10px;">
                    <span class="top" style="float: left;">智博会</span>
                    <span class="under">Smart China</span>
                    <span class="under">Expo</span>
                </div>
                <div class="logo-list">
                    <WeiboOutlined class="icon"></WeiboOutlined>
                    <TwitterOutlined class="icon"></TwitterOutlined>
                    <YoutubeOutlined class="icon"></YoutubeOutlined>
                    <InstagramOutlined class="icon"></InstagramOutlined>
                </div>
            </div>
            <ul class="col">
                <li class="row title">参与其中</li>
                <li class="row">getsmartchina@smartchina.com</li>
                <li class="row title">展览查询</li>
                <li class="row">getsmartchina@smartchina.com</li>
                <li class="row title">成为合作伙伴</li>
                <li class="row">getsmartchina@smartchina.com</li>
            </ul>
            <ul class="col">
                <li class="row title1">获取更多讯息</li>
                <li class="row">展览</li>
                <li class="row">新闻</li>
                <li class="row">线上参展</li>
            </ul>
            <ul class="col">
                <li class="row title1">及时了解最新动态</li>
                <li class="row text">千万不要错过智博会的任何内容</li>
                <li class="row box">订阅实时通信</li>
                <li class="row box">新闻登记</li>
                <li class="row box">媒体中心</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
.footer {
    height: 600px;
    // background-color: #003e7d;
    // background-image: linear-gradient(to top, #000000, #0a31de, #fff);
    background-image:linear-gradient(180deg, #062667 0%, rgba(255,255,255,0) 65%),url('../assets/images/footer.png');
    background-size: cover;
    color: #fff;

    padding: 0 150px;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
        width: 80%;
        display: flex;
        justify-content: space-between;

        .logo {
                height: 100%;
                width: 200px;
                display: flex;
                flex-wrap: wrap;
                align-content: flex-start;
                // flex-direction: column;
        
                .div {
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // justify-content: center;
                }
        
                span {
                    width: 120px;
                    font-style: italic;
                }
        
                .top {
                    font-size: 16px;
        
                }

                .logo-list{
                    // float: left;
                    margin-left: 20px;

                    .icon{
                        cursor: pointer;
                        width: 16px;
                        margin-right: 15px;
                    }
                }
            }

        .col {
            // width: 22%;
            height: 400px;
            // margin-right: 20px;
            /* background-color: #fff; */

            .row{
                color: #fff;
                // margin-top: 20px;
                font-size: 14px;
                width: 100%;
                margin-bottom: 1rem;
            }

            .title{
                font-size: 16px;
                font-weight: 700;

            }

            .title1{
                font-size: 20px;
                font-weight: 700;
            }

            .text{
                font-size: 12px;
            }

            .box{
                border: 1px solid #fff;
                font-weight: 700;
                font-size: 12px;
                padding: 10px 10px;
                text-align: center;
            }
        }
    }
}
</style>