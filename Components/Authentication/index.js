import React, { useState, createContext } from "react";

const AuthenticationContext = createContext();
const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(username) {
    setUser({
      username,
      id: "TODO"
    });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        login
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
export { AuthenticationProvider };
