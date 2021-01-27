import { instance } from "./requries";

export const reqLogin = (username, password) =>
  instance.post("/login", { username, password });
//请求登录

export const reqList = (parentId) =>
  instance.get("manage/category/list", { parentId });

export const reqListUpdate = (categoryId, categoryName) => {
  return instance.post("manage/category/update", { categoryId, categoryName });
}; //箭头函数单行没有大括号默认return ，axios请求返回的是数据要return

export const reqListAdd = (parentId, categoryName) => {
  return instance.post("manage/category/add", { parentId, categoryName });
};
