import { App, MessageList, ChatList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { getConversationsFB } from "../store/conversations";
import { getMessagesFB } from "../store/messages";

import { useDispatch } from "react-redux";

export const ChatPage = () => {
  const navigate = useNavigate();
  const didMount = useRef(false);

  // const conversation = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  useEffect(() => {
    if (didMount.current) {
      navigate("/chat");
    } else {
      didMount.current = true;
    }
  }, []);

  useEffect(() => {
    dispatch(getConversationsFB());
    dispatch(getMessagesFB());
  }, [dispatch]);

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
