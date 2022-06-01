import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const addConversationsApi = (roomId) => {
  return db
    .ref("conversations")
    .child(roomId)
    .set({ title: roomId, value: "" });
};
