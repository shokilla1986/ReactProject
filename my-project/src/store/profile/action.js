import { UPDATE_PROFILE, TOOGLE_VISIBLE_PROFILE } from "./types";

export const toggleVisibleProfile = () => {
  return { type: TOOGLE_VISIBLE_PROFILE };
};

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile };
};
