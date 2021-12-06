import { SEND_MESSAGE, DELETE_MESSAGE, FORMAT_MESSAGE } from "./types";

export const sendMessage = (message, roomId, delay = 500) => {
  return {
    type: SEND_MESSAGE,
    payload: { message, roomId },
    meta: {
      delay,
    },
  };
};

export const deleteMessage = (messageId, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { messageId, roomId },
});

export const formatMessage = (messageId, roomId, messageValue) => ({
  type: FORMAT_MESSAGE,
  payload: { messageId, roomId, messageValue },
});
