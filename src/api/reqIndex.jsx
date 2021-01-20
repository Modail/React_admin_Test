import { instance } from "./requries";

export const reqLogin = (username, password) =>
  instance
    .post("/login", { username, password })
    .then(function (response) {
      window.history.replaceState(
        "http://localhost:3000/login",
        "",
        "http://localhost:3000"
      );
      window.location.reload();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
