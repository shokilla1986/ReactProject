import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { deleteConversation } from "../../../store/conversations";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export function Chat({ title, selected, handleListItemClick, dispatch }) {
  return (
    <ListItemButton selected={selected} onClick={handleListItemClick}>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
      <button onClick={() => dispatch(deleteConversation(title))}>X</button>
    </ListItemButton>
  );
}
