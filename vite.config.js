import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   //用来配置跨域
  //   host: '127.0.0.1',
  //   port: 5173,
  //   proxy: { // 配置代理
  //     '/api': {
  //       target: 'http://127.0.0.1:3303', //目标url
  //       changeOrigin: true // 支持跨域
  //     }
  //   }
  // },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/css/global.less";',
      },
    },
  },
})
