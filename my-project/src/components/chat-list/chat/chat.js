import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { deleteConversation } from "../../../store/conversations";
import { lastMessageSelector } from "../../../store/messages";
import { useSelector } from "react-redux";

import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export function Chat({ title, selected, handleListItemClick, dispatch }) {
  const message = useSelector(lastMessageSelector(title));
  return (
    <ListItem selected={selected} onClick={handleListItemClick}>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
      <h6>{message?.message}</h6>
      {/* <ListItemText primary={message?.message} /> */}
      <button onClick={() => dispatch(deleteConversation(title))}>X</button>
    </ListItem>
  );
}
