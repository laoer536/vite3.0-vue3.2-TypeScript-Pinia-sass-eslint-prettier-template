<script setup lang="ts">
/**文档说明
 * @Description: 这个页面并没有展示在项目中 您可以改变地址栏地址进入 测试vue3.2的一些功能
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/12/22 22:06
 */
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
let color = ref<string>("#42b983");
interface VuexBoxStyle {
  height: string;
  borderRadios: string;
}
const vuexBoxStyle = reactive<VuexBoxStyle>({
  height: "100vh",
  borderRadios: "3px",
});
// const emit = defineEmits(["sqq"]);
const store = useStore();

// console.log("emit", emit);
console.log("store", store);
// console.log("props", props);

//顶层await 会使setup 变成async声明的异步 在被引用时需要结合vue提供的Suspense组件包裹使用
/*const res = await getToken({
  loginKey: "18780592427",
  clientId: "caaca235-fc8f-4a5c-9cbf-8553782f4599",
}).catch((e) => {
  console.log(e);
});*/
let count = computed(() => store.state.count);
let userName = computed(() => store.state.user.userName);
const handleIncrement = (addNumber: number) => {
  store.commit("increment", addNumber);
};
const handleDecrement = () => {
  store.commit("decrement");
};

const changeVuexBoxStyle = () => {
  color.value = "red";
  vuexBoxStyle.borderRadios = "20px";
};

const changeName = () => {
  store.commit("changeName");
};
</script>

<template>
  <div class="about">
    <!--    <my-nav-bar></my-nav-bar>  使用注册的组件-->
    <h1>This is an about page</h1>
    <div class="vuex">
      <p>Vuex4.0使用示例</p>
      <p>{{ count }}</p>
      <p>
        <button @click="handleIncrement(5)">一次增加5</button>
        <br />
        <br />
        <button @click="handleDecrement">减少</button>
        <br />
        <br />
        <span>使用的vuex封装的module中的数据（user.js）：{{ userName }} </span>
        <button @click="changeName">改变名字为英文</button>
        <button @click="changeVuexBoxStyle">点击改变VueX-box的样式</button>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  .vuex {
    //以下CSS变量注入 使用v-bind
    background-color: v-bind(color); //vue3.2新特性
    height: v-bind("vuexBoxStyle.height"); //vue3.2新特性
    border-radius: v-bind("vuexBoxStyle.borderRadios");
  }
}
</style>
