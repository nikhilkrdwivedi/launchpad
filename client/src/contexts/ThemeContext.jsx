/**
 * @author nikhilkrdwivedi
 * 
 * 
 */
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const body = document.body;
    // const body = document.getElementById('root');

    
    console.log({body, isDarkMode})
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    // const body = document.getElementById('root');
    // console.log({body, isDarkMode})
    // if (isDarkMode) {
    //   body.classList.add("dark");
    // } else {
    //   body.classList.remove("dark");
    // }
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
