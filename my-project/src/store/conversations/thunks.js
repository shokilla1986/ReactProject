import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  addConversationsStart,
  addConversationsSuccess,
  addConversationsError,
} from "./action";

export const getConversationsFB = () => async (dispatch, _, api) => {
  const conversations = [];
  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const addConversationFB = (roomId) => async (dispatch, _, api) => {
  try {
    dispatch(addConversationsStart());
    await api.addConversationsApi(roomId);

    dispatch(addConversationsSuccess(roomId));
  } catch (error) {
    dispatch(addConversationsError(error));
  }
};
