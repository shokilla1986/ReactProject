import { UPDATE_PROFILE, TOOGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  name: null,
  surname: null,
  age: null,
  profession: null,
  phone: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    case TOOGLE_VISIBLE_PROFILE: {
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    }

    default:
      return state;
  }
};
