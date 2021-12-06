import { App, MessageList, ChatList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  return (
    // <App chats={<ChatList />} messages={<MessageList />} />
    <Routes>
      <Route
        path="/"
        element={
          <App chats={<ChatList />} messages={<h1>Выберите чат ...</h1>} />
        }
      />
      <Route
        path="/:roomId"
        element={<App chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
