import { useState } from "react";
import List from "@mui/material/List";
import { ChatListStyles } from "./chat-list-styles";
import { Chat } from "./chat";
import { Link, useParams } from "react-router-dom";

export const ChatList = () => {
  const styles = ChatListStyles();
  const [chats] = useState(["chat 1", "chat 2", "chat 3"]);
  const { roomId } = useParams();

  return (
    <List component="nav" className={styles.wrapper}>
      {chats.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} />
        </Link>
      ))}
    </List>
  );
};
