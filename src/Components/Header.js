import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const Header = ({word, setWord}) => {
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
      <span className="title">Dictionary</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField 
            className="search"
            id="standard-basic" 
            label="Search a word..." 
            variant="standard" 
            value={word}
            onChange={(e)=>setWord(e.target.value)}
            />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
