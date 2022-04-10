import { defineStore } from "pinia";
import { useAudioStore } from "@/p-store/edit/audio";
import { useMaterialStore } from "@/p-store/edit/material";

//也可以在对应的函数中定义后访问
const audio = useAudioStore();
const material = useMaterialStore();

export const useEditStore = defineStore("edit", {
  state: () => ({
    total: audio.audioNum + material.materialNum,
  }),
  getters: {
    doubleNum(): number {
      return this.total * 2;
    },
  },
  actions: {
    changeNum(num: number) {
      this.total = this.total + num;
    },
  },
});
