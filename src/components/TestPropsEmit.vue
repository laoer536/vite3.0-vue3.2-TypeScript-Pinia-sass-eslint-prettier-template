<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: "默认值1",
  },
});

const emit = defineEmits(["on-change"]);

const handleClick = () => {
  emit("on-change", "父组件方法被调用了");
};
const childNode = () => {
  console.log("子组件方法被调用了");
};

//暴露方法给父组件的ref
defineExpose({
  child: "我是暴露的子组件",

  childNode,
});
</script>

<template>
  <p>{{ msg }}</p>

  <p>{{ props.msg }}</p>
  <button @click="handleClick">点击我调用父组件的方法</button>
</template>
