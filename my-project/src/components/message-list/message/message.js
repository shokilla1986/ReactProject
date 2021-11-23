import { MessageStyles } from "./message-styles";

export const Message = ({ message }) => {
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
      </div>

      {/* <div>{}</div> */}
    </div>
  );
};
