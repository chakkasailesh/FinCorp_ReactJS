import axios from "axios";

const login = (isAuthenticated) => {
  return {
    type: "LOGIN",
    isAuthenticated,
  };
};

const logout = (isAuthenticated) => {
  return {
    type: "LOGOUT",
    isAuthenticated,
  };
};

const loginValidate = (data) => {
  return (dispatch) => {
    axios.get("http://localhost:4000/members").then((res) => {
      let value = res.data;
      let result = value.find(
        (val) => val.userID === data.username && val.password === data.password
      );
      if (result) {
        dispatch(login(true));
      } else {
        dispatch(login(false));
      }
    });
  };
};

export { login, loginValidate, logout };
