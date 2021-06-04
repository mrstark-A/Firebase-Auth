import React, { useContext } from "react";
// importing the context
import { ThemeContext } from "./Sap";

export default function Functioncontex() {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div>
      <div style={themeStyle}>Functional Theme</div>
    </div>
  );
}
