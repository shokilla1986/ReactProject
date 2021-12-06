import { UPDATE_PROFILE } from "./types";

const initialState = { name: null, surname: null, age: null, profession: null };

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
