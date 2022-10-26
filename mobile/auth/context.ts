import React from "react";

enum AuthState {
  Logout,
  Login,
  Setup,
}

const Authenticated = React.createContext({});

export default { Authenticated, AuthState };
