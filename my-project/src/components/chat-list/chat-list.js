import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import List from "@mui/material/List";
import { ChatListStyles } from "./chat-list-styles";
import { Chat } from "./chat";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";

export const ChatList = () => {
  const styles = ChatListStyles();
  const conversations = useSelector(conversationsSelector);
  const { roomId } = useParams();

  const dispatch = useDispatch();

  const createChat = () => {
    const chatName = prompt("Введите название чата");
    const isValidChat = !conversations.includes(chatName);
    if (chatName && isValidChat) {
      dispatch(createConversation(chatName));
    } else {
      alert("Такой чат уже существует! Выберите другое название");
    }
  };

  return (
    <List component="nav" className={styles.wrapper}>
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} dispatch={dispatch} />
        </Link>
      ))}

      <button onClick={createChat}>createChat</button>
    </List>
  );
};
