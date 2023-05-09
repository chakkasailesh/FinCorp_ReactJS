const validateFiled = (name, value, formData) => {
  switch (name) {
    case "username":
      if (value.length === 0) return "User ID is required";
      else if (value.length < 5)
        return "User ID should be at least 5 characters long";
      break;
    case "password":
      if (value.length === 0) return "Password is required";
      else if (value.length < 5)
        return "Password should be at least 5 characters long";
      break;
    case "phone":
      if (value.length === 0) return "Mobile number is required";
      else if (!/[6,9]{1}\d{9}/.test(value)) return "Invalid mobile number";
      break;
    default:
      return "";
  }
};

export default validateFiled;
