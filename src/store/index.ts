/**文档说明
 * @Description: 封装vuex并配予示例 仅供参考
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/10/18 17:41
 */
import { createStore } from "vuex";
import { edit } from "@store/module/edit";
import { user } from "@store/module/user";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    //同步操作方法
    increment(state, addNumber) {
      state.count = state.count + addNumber;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    //异步操作方法
  },
  modules: {
    //此部分用于导入封装的vuex业务模块
    //总体思想：一个单独的业务模块对应一个store的模块
    //例如如果项目中涉及的业务模块有：用户模块，编辑模块，管理模块，工具包模块，假如每个模块都有需要存储的状态，就可以搞4个module。简单的业务功能一个js文件即可，复杂业务功能的需要建立一个文件夹集中管理。
    //这里用了同名属性的简写 edit:edit => 简写为edit
    edit,
    user,
  },
});
