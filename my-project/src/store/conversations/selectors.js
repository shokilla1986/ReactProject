export const conversationsSelector = (state) => {
  return state.conversations.conversations;
};

export const messageValueSelector = (roomId) => (state) => {
  return (
    state.conversations.conversations.find(
      (conversation) => conversation.title === roomId
    )?.value ?? ""
  );
};
