import { sendMessage } from "./action";
import { handleChangeMessageValue } from "../conversations";

export const sendMessageWithBot =
  (message, roomId) => async (dispatch, getState) => {
    dispatch(sendMessage(message, roomId));
    dispatch(handleChangeMessageValue("", roomId));

    if (message.author === "User") {
      setTimeout(() => {
        dispatch(
          sendMessage(
            { author: "Bot", message: "Hello bot from thunk" },
            roomId
          )
        );
      }, 500);
    }
  };
