import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
});
export const deleteMessage = (message, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { message, roomId },
});
