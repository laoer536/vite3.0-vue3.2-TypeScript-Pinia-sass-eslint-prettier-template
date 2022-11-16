<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// 以下加入Autoimport(unplugin-auto-import/vite)之后便无需再手动导入
// import { useUserStore } from '../store/user'
// import { storeToRefs } from 'pinia'
import HelloWorld from '@components/HelloWorld.vue'
const userStore = useUserStore()
const { userName } = storeToRefs(userStore)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="`Vite + Vue + Mobile + by${userName}`" />
</template>

<style lang="scss" scoped>
.logo {
  height: 6rem;
  padding: 1.5rem;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2rem #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2rem #42b883aa);
}
</style>
