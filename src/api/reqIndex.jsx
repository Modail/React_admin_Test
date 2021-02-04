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

export const reqProduct = (pageNum, pageSize) => {
  return instance.get("manage/product/list", { pageNum, pageSize });
};

export const reqRoles = () => {
  return instance.get("/manage/role/list");
};

export const reqAddroles = (roleName) => {
  return instance.post("manage/role/add", { roleName });
};
