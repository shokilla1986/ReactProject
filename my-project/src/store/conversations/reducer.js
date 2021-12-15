import {
  CREATE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  GET_CONVERSATION_START,
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_ERROR,
  ADD_CONVERSATION_START,
  ADD_CONVERSATION_SUCCESS,
  ADD_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversations: [],
  conversationsLoading: false,
  conversationsError: null,

  addConversationLoading: false,
  addConversationError: null,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION_SUCCESS:
    case CREATE_CONVERSATION:
      return {
        ...state,
        addConversationLoading: false,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };

    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.title === action.payload.roomId
            ? { ...conversation, value: action.payload.value }
            : conversation;
        }),
      };

    case GET_CONVERSATION_START:
      return {
        ...state,
        conversationsLoading: true,
        conversationsError: null,
      };

    case GET_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversationsLoading: false,
        conversations: action.payload,
      };

    case GET_CONVERSATION_ERROR:
      return {
        ...state,
        conversationsLoading: false,
        conversationsError: action.payload,
      };
    case ADD_CONVERSATION_START:
      return {
        ...state,
        addConversationLoading: true,
        addConversationError: null,
      };

    // case ADD_CONVERSATION_SUCCESS:
    // return {
    //   ...state,
    //   addConversationLoading: false,
    //   conversations: [
    //     ...state.conversations,
    //     { title: action.payload, value: "" },
    //   ],
    // };

    case ADD_CONVERSATION_ERROR:
      return {
        ...state,
        addConversationLoading: false,
        addConversationError: action.payload,
      };

    default:
      return state;
  }
};
