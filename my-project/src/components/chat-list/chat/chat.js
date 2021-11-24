import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export function Chat({ title, selected, handleListItemClick }) {
  return (
    <ListItemButton selected={selected} onClick={handleListItemClick}>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}
