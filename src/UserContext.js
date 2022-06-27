import React from "react";
import { createContext, useState } from "react";


export const UserContext = createContext({ name: '', auth: false });


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', auth: false });

  const userLogin = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };

  const userLogout = () => {
    setUser((user) => ({
      name: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};