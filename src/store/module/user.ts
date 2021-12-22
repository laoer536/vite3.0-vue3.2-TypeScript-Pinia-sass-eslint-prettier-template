//定义本模块的接口  如果多的话 后续可以抽离为一个Module，然后再导入
interface UserModule {
  userName: string;
}

//简单功能的模块一个文件即可
export const user = {
  state: {
    userName: "LiuJie",
    age: 23,
  },
  mutations: {
    changeName(state: UserModule): void {
      state.userName = "Liujie";
    },
  },
  actions: {},
  getters: {},
};
