<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/p-store/user";
const userStore = useUserStore();
const { userName, age, doubleAge } = storeToRefs(userStore);
const inputAge = ref<number>(age.value);
function changeAge() {
  console.log(inputAge.value);
  userStore.changeAge(inputAge.value);
}

function resetStore() {
  userStore.$reset();
  inputAge.value = age.value;
}
</script>

<template>
  <div>获取姓名：{{ userName }}</div>
  <div>获取当前年龄：{{ age }}</div>
  <div>获取当前年龄的两倍：{{ doubleAge }}</div>
  <input v-model.number="inputAge" type="text" />
  <button @click="changeAge">点击修改年龄</button>
  <br />
  <button @click="resetStore">点击初始化store</button>
</template>

<style lang="less" scoped></style>
