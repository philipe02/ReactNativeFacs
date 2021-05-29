import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import UsuarioReducer from "./Reducers/userReducer";
import IdeiaReducer from "./Reducers/ideiasReducer";

const configUser = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["usuarios"],
};
const configIdeias = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["ideias"],
};

const rootReducer = combineReducers({
    UsuarioReducer: persistReducer(configUser, UsuarioReducer),
    IdeiasReducer: persistReducer(configIdeias, IdeiaReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
