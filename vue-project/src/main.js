import { createApp } from 'vue'
//导入根组件
import App from './App.vue'

import './assets/main.css'
//每个Vue应用通过createApp函数创建一个新的应用实例
//使用应用实例必须在调用了 .mount() 方法后才会渲染出来。
//该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
createApp(App).mount('#app')
//应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。