/**文档说明
 * @Description: 该模板是基于vite官方提供的vue-ts模板进一步封装得到的基础模板 囊括了项目的基础需要
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2022/1/26 0:27
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
