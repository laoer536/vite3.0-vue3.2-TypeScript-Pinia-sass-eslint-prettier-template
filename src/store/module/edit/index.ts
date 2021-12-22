//复杂的功能需要创建一个文件夹管理 集中在index.js中
import { audio } from "@store/module/edit/audio";
//以上可见import时会node会自动识别文件夹下的index.js 以上路径相当于@store/module/edit/audio/index   (js后缀已省略)
import { material } from "@store/module/edit/material";

export const edit = {
  state: {
    ...audio.state,
    ...material.state,
  },
  getters: {
    ...audio.getters,
    ...material.getters,
  },
  mutations: {
    ...audio.mutations,
    ...material.mutations,
  },
  actions: {
    ...audio.actions,
    ...material.actions,
  },
};
