<script setup lang="ts">
import { ref } from "vue";
import me from "@assets/me.svg";

defineProps<{ msg: string }>();
const count = ref(0);
const goToGitHub = () => {
  window.open("https://github.com/laoer536/");
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div class="me">
    <span>Template made by LiuJie.</span>
    <img :src="me" alt="LiuJie" @click="goToGitHub" />
  </div>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.me {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  height: 80px;

  span,
  img {
    cursor: pointer;
  }
  span {
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
    transition-property: border-bottom-color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.5s;
  }
  span:hover {
    border-bottom: 2px solid black;
  }
}
</style>
