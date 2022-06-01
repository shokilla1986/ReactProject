import {
  CREATE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  GET_CONVERSATION_START,
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATION_START,
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATION_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATION_ERROR,
  payload: error,
});
