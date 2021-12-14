import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { profileReducer } from "./profile";
import { getGistsApi, searchGistsByName } from "../api/gists";
import { getConversationsApi } from "../api/conversations";
import { getMessagesApi, sendMessageApi } from "../api/messages";
import thunk from "redux-thunk";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import {
  logger,
  // botSendMessage,
  timeScheduler,
  crashReporter,
  // formatUserMessage,
  // thunk,
} from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["messages", "conversations"],
  whitelist: ["profile"],
};

export const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      crashReporter,
      timeScheduler,
      // formatUserMessage,
      // botSendMessage,
      logger,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByName,
        getConversationsApi,
        getMessagesApi,
        sendMessageApi,
      })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
