import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  return (
    <NavContext.Provider value={{ isNavCollapsed, setNavCollapsed }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  return useContext(NavContext);
};
