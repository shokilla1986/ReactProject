import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  ChatPage,
  ProfilePage,
  GistsPage,
  LoginPage,
  SingUpPage,
} from "./pages";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { firebaseApp } from "./api/firebase";
import { PersistGate } from "redux-persist/integration/react";

import "./style.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008600",
    },
  },
});

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = session?.email;

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Header session={session} />
              <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute isAuth={isAuth} to="/login">
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/chat/*"
                  element={
                    <PrivateRoute isAuth={isAuth}>
                      <ChatPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/gists"
                  element={
                    <PrivateRoute isAuth={isAuth}>
                      <GistsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute isAuth={isAuth}>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/sing-up"
                  element={
                    <PublicRoute isAuth={isAuth}>
                      <SingUpPage />
                    </PublicRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
