import { UPDATE_PROFILE } from "./types";

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile };
};
