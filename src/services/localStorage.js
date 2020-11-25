import jwt_decode from "jwt-decode";

const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const setToken = (token, role) => {
  localStorage.setItem("ACCESS_TOKEN", token);
  if (role === 1) {
    return localStorage.setItem("ROLE", "ADMIN");
  }
  localStorage.setItem("ROLE", "USER");
};

const clearToken = () => {
  localStorage.clear();
};

const getRole = () => {
  return localStorage.getItem("ROLE") || "GUEST";
};

const getUserProfile = () => {
  let token = getToken();
  if (token) {
    return jwt_decode(token)
  }
  return { id: null }
}

export default {
  getToken,
  setToken,
  clearToken,
  getRole,
  getUserProfile
};
