import client from "./client";

const postUser = (user: any) => client.post("/user", user);

const getUser = (user: any) =>
  client.get("/users", {
    id: user,
  });

export default { postUser, getUser };
