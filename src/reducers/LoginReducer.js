const LoginReducer = (state = { isAuthed: false }, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthed: action.isAuthenticated,
    };
  } else if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthed: false,
    };
  }
  return state;
};
export default LoginReducer;
