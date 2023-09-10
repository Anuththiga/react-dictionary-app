import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff"
        },
        mode: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">Find Word</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField 
            className="search"
            id="standard-basic" 
            label="Search a word..." 
            variant="standard" 
            />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
