import React from "react";
import { ThemeConfigOptions } from "./types";
import { themeDefaults } from "./constants";

export const ThemeContext = React.createContext<ThemeConfigOptions>(
  themeDefaults
);

export const ThemeContextProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={themeDefaults}>
      {children}
    </ThemeContext.Provider>
  );
};
