import { MessageStyles } from "./message-styles";
import { deleteMessage } from "../../../store/messages";
// import { useParams } from "react-router";
// import { useDispatch } from "react-redux";
import { format } from "date-fns";
// import { useState } from "react";

export const Message = ({ message, dispatch, roomId }) => {
  let styles = MessageStyles();
  // let visibleButton = false;

  if (message.author === "Bot") {
    styles = styles.Bot;
  } else {
    styles = styles.User;
    // visibleButton = true;
  }

  // let visibleChangeValueMessage = false;

  // const onClickChangeMessage = (e) => {
  //   const id = message.message;
  //   console.log("id", id);
  //   visibleChangeValueMessage = !visibleChangeValueMessage;
  //   // dispatch(formatMessage(message.id, roomId, message.message));
  // };

  return (
    <div className={styles}>
      <div>
        {message.author} : {message.message}
        <p>{format(new Date(message.date), "yyyy-MM-dd HH-mm-ss")}</p>
      </div>
      <button onClick={() => dispatch(deleteMessage(message.id, roomId))}>
        X
      </button>
      {/* {visibleButton && <button onClick={onClickChangeMessage}>format</button>} */}

      {/* {visibleChangeValueMessage && <ChangeMessageValueComp {...message} />} */}
    </div>
  );
};

// const ChangeMessageValueComp = (message) => {
//   const [form, setForm] = useState({ ...message });
//   const changeValue = (e) => {
//     const inputField = e.target.getAttribute("id");
//     setForm({
//       ...form,
//       [inputField]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <input type="text" value={form.message} nChange={changeValue} />
//     </>
//   );
// };
