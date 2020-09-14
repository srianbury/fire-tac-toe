import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const AuthenticationContext = createContext();
const AuthenticationProviderContainer = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(username) {
    setUser({
      username,
      id: uuidv4()
    });
  }

  return (
    <AuthenticationProviderView user={user} login={login}>
      {children}
    </AuthenticationProviderView>
  );
};

const AuthenticationProviderView = ({ user, login, children }) => (
  <AuthenticationContext.Provider
    value={{
      user,
      login
    }}
  >
    {children}
  </AuthenticationContext.Provider>
);

export default AuthenticationContext;
export { AuthenticationProviderContainer as AuthenticationProvider };
