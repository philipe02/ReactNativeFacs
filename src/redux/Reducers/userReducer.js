import {
    ADD_USUARIO,
    EXCLUI_USUARIO,
    EDITA_USUARIO,
    USUARIO_LOGADO,
} from "../Actions/userActions";

const initialState = {
    usuarioAtual: {},
    usuarios: [],
};

const actions = {
    USUARIO_LOGADO(state, usuarioLogin) {
        return { ...state, usuarioAtual: usuarioLogin };
    },
    ADD_USUARIO(state, usuarioNovo) {
        let listaUsuarios = state.usuarios;
        try {
            let keyNovoUsuario =
                listaUsuarios[listaUsuarios.length - 1].key + 1;
            usuarioNovo = { key: keyNovoUsuario, ...usuarioNovo };
            return { ...state, usuarios: [...listaUsuarios, usuarioNovo] };
        } catch {
            usuarioNovo = { key: 1, ...usuarioNovo };
            return { ...state, usuarios: [...listaUsuarios, usuarioNovo] };
        }
    },
    EDITA_USUARIO(state, usuarioEditado) {
        let listaUsuarios = state.usuarios;
        listaUsuarios = listaUsuarios.map((user) =>
            user.key === usuarioEditado.key ? usuarioEditado : user
        );
        return state.usuarioAtual.key === usuarioEditado.key
            ? { usuarioAtual: usuarioEditado, usuarios: listaUsuarios }
            : { ...state, usuarios: listaUsuarios };
    },
    EXCLUI_USUARIO(state, usuarioDeletar) {
        let listaUsuarios = state.usuarios;
        listaUsuarios = listaUsuarios.filter(
            (user) => user.key !== usuarioDeletar.key
        );
        return { ...state, usuarios: listaUsuarios };
    },
};

const UsuarioReducer = (state = initialState, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action.payload) : state;
};

export default UsuarioReducer;
