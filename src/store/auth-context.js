import React from "react";

const AuthContext = React.createContext({
  auth: null,
  login: () => {},
  logout: () => {},
});


export default AuthContext;