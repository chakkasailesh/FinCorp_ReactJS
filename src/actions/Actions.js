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

const signupValidate = (data) => {
  return (dispatch) => {
    console.log(data);
    let user = {
      userID: data.username,
      mobile: data.phone,
      password: data.password,
    };
    axios.get("http://localhost:4000/members").then((res) => {
      let value = res.data;
      let result = value.find(
        (val) => val.userID === data.username && val.password === data.password
      );
      if (result) {
        alert("user already exists");
      } else {
        axios
          .post("http://localhost:4000/members", user)
          .then((res) => dispatch(login(true)))
          .catch((res) => dispatch(login(false)));
      }
    });
  };
};
export { login, loginValidate, logout, signupValidate };
