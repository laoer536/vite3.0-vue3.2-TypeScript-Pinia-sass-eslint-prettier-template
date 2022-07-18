<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
const baseUrl = import.meta.env.VITE_API_BASE_URL
</script>

<template>
  <div class="home">
    <h1>{{ msg }}----{{ baseUrl }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code>
        to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
      , the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: aqua;
  .read-the-docs {
    color: #888;
  }
}
</style>
