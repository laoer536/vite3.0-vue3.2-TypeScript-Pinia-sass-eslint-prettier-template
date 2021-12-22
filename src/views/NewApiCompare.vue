<script setup lang="ts">
/**文档说明
 * @Description: 这个页面并没有展示在项目中 您可以改变地址栏地址进入 测试vue3.2的一些功能
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/12/22 22:06
 */
import TestPropsEmit from "@components/TestPropsEmit.vue";

import { ref, onMounted } from "vue";

const msg = ref("hello world");

const handleChange = (params: string) => {
  console.log(params);
};

const propsEmitRef = ref();

onMounted(() => {
  console.log(propsEmitRef.value.child);

  console.log(propsEmitRef.value.childNode());
});
</script>

<template>
  <TestPropsEmit
    ref="propsEmitRef"
    :msg="msg"
    @on-change="handleChange"
  ></TestPropsEmit>
</template>
