import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import List from "@mui/material/List";
import { ChatListStyles } from "./chat-list-styles";
import { Chat } from "./chat";
import {
  conversationsSelector,
  createConversation,
  addConversationFB,
} from "../../store/conversations";

export const ChatList = () => {
  const styles = ChatListStyles();
  const conversations = useSelector(conversationsSelector);
  const { roomId } = useParams();

  const dispatch = useDispatch();

  const addChat = () => {
    const chatName = prompt("Введите название чата");
    const isValidChat = !conversations.find(
      (conversation) => conversation.title === chatName
    );
    if (chatName && isValidChat) {
      // dispatch(createConversation(chatName));
      dispatch(addConversationFB(chatName));
    } else {
      alert("Такой чат уже существует! Выберите другое название");
    }
  };

  return (
    <List component="nav" className={styles.wrapper}>
      {conversations.map((chat) => (
        <Link key={chat.title} to={`/chat/${chat.title}`}>
          <Chat
            title={chat.title}
            selected={chat.title === roomId}
            dispatch={dispatch}
          />
        </Link>
      ))}

      <button onClick={addChat}>addChat</button>
    </List>
  );
};
