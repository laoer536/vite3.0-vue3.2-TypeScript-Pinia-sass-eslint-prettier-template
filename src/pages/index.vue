<script setup lang="ts">
import HelloWorld from '@components/HelloWorld.vue'
const userStore = useUserStore()
const { userName } = storeToRefs(userStore)
</script>

<template>
  <div class="index-page">
    <div class="logo-container">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld :msg="`Vite + Vue + Mobile + by${userName}`" />
  </div>
</template>

<style lang="scss" scoped>
.index-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 2em;

  .logo-container {
    display: flex;
    justify-content: center;
    gap: 10em;

    .logo {
      height: 13rem;
      padding: 1.5rem;
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2rem #646cffaa);
    }

    .logo.vue:hover {
      filter: drop-shadow(0 0 2rem #42b883aa);
    }
  }
}
</style>
