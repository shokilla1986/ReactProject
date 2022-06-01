import { MessageStyles } from "./message-styles";
import { deleteMessage } from "../../../store/messages";

import { format } from "date-fns";

export const Message = ({ message, dispatch, roomId }) => {
  let styles = MessageStyles();

  if (message.author === "Bot") {
    styles = styles.Bot;
  } else {
    styles = styles.User;
  }

  return (
    <div className={styles}>
      <div>
        {message.author} : {message.message}
        {/* <p>{format(new Date(message.date), "yyyy-MM-dd HH-mm-ss")}</p> */}
      </div>
      <button onClick={() => dispatch(deleteMessage(message.id, roomId))}>
        X
      </button>
    </div>
  );
};
