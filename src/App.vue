<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { Suspense } from "vue"; //async setup() 必须与 Suspense 组合使用，Suspense 目前还是处于实验阶段的特性。顶层await的组件必须用这个包裹才搞得到事 否则页面空白
/**组件说明
 *@component Suspense
 *@for Vue3.2
 *@Description: Suspense 组件为Vue3的一个新特性，简化异步请求UI的处理逻辑。 提供了两个插槽 default和 fallback  default插槽用于放置我们的异步组件 fallback插槽用于放置我们的Loading效果 目前是实验性
 *@date 2021/11/27 21:39
 */
</script>

<template>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  /*避免子元素宽高为100%的时候影响到父元素的宽高 此时子元素宽高100%仅代表父元素content部分的宽高*/
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
