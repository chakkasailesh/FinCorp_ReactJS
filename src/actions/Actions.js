import axios from "axios";

const login = (isAuthenticated) => {
  return {
    type: "LOGIN",
    isAuthenticated,
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
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

const logoutValidate = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export { login, loginValidate, logout, logoutValidate };
