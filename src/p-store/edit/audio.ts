import { defineStore } from "pinia";
export const useAudioStore = defineStore("audio", {
  state: () => ({
    audioName: "七里香",
    audioNum: 50,
  }),
  getters: {
    doubleNum(): number {
      return this.audioNum * 2;
    },
  },
  actions: {
    changeNum(age: number) {
      this.audioNum = this.audioNum + age;
    },
  },
});
