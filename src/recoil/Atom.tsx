import { atom } from "recoil";

export const pickedDateState = atom<string>({
  key: "pickedDateState",
  default: new Date(Date.now() + 3240 * 10000).toISOString().split("T")[0], // 기본값 설정
});

export const toDoArr = atom<{ idx: number; content: string }[]>({
  key: "toDoArr",
  default: [],
});
