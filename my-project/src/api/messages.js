import { db } from "./firebase";
import { nanoid } from "nanoid";

export const getMessagesApi = () => db.ref("messages").get();

export const sendMessageApi = (roomId, message) =>
  db
    .ref("messages")
    .child(roomId)
    .push({ id: nanoid(), ...message });
