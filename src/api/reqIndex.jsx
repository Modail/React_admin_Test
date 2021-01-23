import { instance } from "./requries";

export const reqLogin = (username, password) =>
  instance.post("/login", { username, password });
//请求登录

export const reqList = (parentId) => {
  instance.get("manage/category/list", { parentId });
};
