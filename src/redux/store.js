import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import UsuarioReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["usuarios"],
};

const rootReducer = combineReducers({
  UsuarioReducer: persistReducer(persistConfig, UsuarioReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
