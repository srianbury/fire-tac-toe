import React, { useState, createContext } from "react";

const AuthenticationContext = createContext();
const AuthenticationProviderContainer = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(username) {
    setUser({
      username,
      id: "TODO"
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
