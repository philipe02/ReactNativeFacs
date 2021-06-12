import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import UsuarioReducer from "./reducers/usuarioReducer";

const persistUsuarioConfig = {
    key: "user",
    storage: AsyncStorage,
    whitelist: ["usuarios"],
};

const rootReducer = combineReducers({
    UsuarioReducer: persistReducer(persistUsuarioConfig, UsuarioReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
