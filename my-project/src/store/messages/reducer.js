import { nanoid } from "nanoid";
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {},
  messagesLoading: false,
  messagesError: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] || []),
            { ...action.payload.message, date: new Date(), id: nanoid() },
          ],
        },
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    case GET_MESSAGES_START:
      return {
        ...state,
        messagesLoading: true,
        messagesError: null,
      };

    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.payload,
      };

    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesLoading: false,
        messagesError: action.payload,
      };

    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return { ...state };
    default:
      return state;
  }
  // case FORMAT_MESSAGE:
  //   return {
  //     ...state,
  //     messages: {
  //       ...state.messages,
  //       [action.payload.roomId]: [
  //         ...state.messages[action.payload.roomId],
  //         { ...action.payload.message.value },
  //       ],
  //     },
  //   };
};
