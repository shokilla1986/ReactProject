import { combineReducers, createStore } from "redux";

import { profileReducer } from "./profile";

export const store = createStore(combineReducers({ profile: profileReducer }));
