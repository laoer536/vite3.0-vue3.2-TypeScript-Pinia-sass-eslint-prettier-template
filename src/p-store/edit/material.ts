import { defineStore } from "pinia";
export const useMaterialStore = defineStore("material", {
  state: () => ({
    materialName: "七里香",
    materialNum: 50,
  }),
  getters: {
    doubleNum(): number {
      return this.materialNum * 2;
    },
  },
  actions: {
    changeNum(age: number) {
      this.materialNum = this.materialNum + age;
    },
  },
});
