import { MessageStyles } from "./message-styles";
import { deleteMessage } from "../../../store/messages";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

export const Message = ({ message }) => {
  let styles = MessageStyles();
  if (message.author === "Bot") {
    styles = styles.Bot;
  } else {
    styles = styles.User;
  }

  const { roomId } = useParams();
  const dispatch = useDispatch();

  const handleDeleteMessage = (e) => {
    const id = message.id;
    dispatch(deleteMessage(id, roomId));
  };

  return (
    <div className={styles}>
      <div>
        {message.author} : {message.message}
        <p>{format(message.date, "yyyy-MM-dd HH-mm-ss")}</p>
      </div>
      <button onClick={handleDeleteMessage}>X</button>
    </div>
  );
};
