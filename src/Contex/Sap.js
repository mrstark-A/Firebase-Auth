import React, { useState } from "react";
import Functioncontex from "./Functioncontex";

// create a context  or we can say that global props we can use in any component.
export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((Theme) => Theme !== Theme);
  }
  return (
    <>
      {/* here we wrap our component into the provider inside this provider all component get access of the context its children also get the access to. */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Functioncontex />
      </ThemeContext.Provider>
    </>
  );
}
