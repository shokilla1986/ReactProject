import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChatPage, ProfilePage } from "./pages";
import { Header } from "./components";

import "./style.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008600",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
