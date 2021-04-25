import client from "./client";

const login = async ({ email, password }) => {
  const result = await client.post("/login", { email, password });
  console.log(result);
  return result;
};
const register = async (userInfo) => {
  const result = await client.post("/users", userInfo);

  return result;
};
export default {
  login,
  register,
};
