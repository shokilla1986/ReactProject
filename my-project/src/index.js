import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, ChatList, Header } from "./components";
import { indexStyles } from "./index-styles";
import "./style.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008600",
    },
  },
});

const App = () => {
  const styles = indexStyles();
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <ChatList />
        <MessageList />
      </div>
    </>
  );
};

// const styles = indexStyles();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
