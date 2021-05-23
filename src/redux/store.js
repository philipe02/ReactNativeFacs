import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import UsuarioReducer from "./reducers/usuarioReducer";
import IdeiasReducer from "./reducers/ideiasReducer";

const persistUsuarioConfig = {
    key: "user",
    storage: AsyncStorage,
    whitelist: ["usuarios"],
};
const persistIdeiasConfig = {
    key: "ideas",
    storage: AsyncStorage,
    whitelist: ["ideias"],
};

const rootReducer = combineReducers({
    UsuarioReducer: persistReducer(persistUsuarioConfig, UsuarioReducer),
    IdeiasReducer: persistReducer(persistIdeiasConfig, IdeiasReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
