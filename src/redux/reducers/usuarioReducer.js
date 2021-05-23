import {
    ADD_USUARIO,
    EXCLUI_USUARIO,
    EDITA_USUARIO,
    USUARIO_LOGADO,
} from "../actions/usuarioActions";

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
            let idNovoUsuario = listaUsuarios[listaUsuarios.length - 1].id + 1;
            usuarioNovo = { id: idNovoUsuario, ...usuarioNovo };
            return { ...state, usuarios: [...listaUsuarios, usuarioNovo] };
        } catch {
            usuarioNovo = { id: 1, ...usuarioNovo };
            return { ...state, usuarios: [...listaUsuarios, usuarioNovo] };
        }
    },
    EDITA_USUARIO(state, usuarioEditado) {
        let listaUsuarios = state.usuarios;
        listaUsuarios = listaUsuarios.map((user) =>
            user.id === usuarioEditado.id ? usuarioEditado : user
        );
        return state.usuarioAtual.id === usuarioEditado.id
            ? { usuarioAtual: usuarioEditado, usuarios: listaUsuarios }
            : { ...state, usuarios: listaUsuarios };
    },
    EXCLUI_USUARIO(state, usuarioDeletar) {
        let listaUsuarios = state.usuarios;
        listaUsuarios = listaUsuarios.filter(
            (user) => user.id !== usuarioDeletar.id
        );
        return { ...state, usuarios: listaUsuarios };
    },
};

const UsuarioReducer = (state = initialState, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action.payload) : state;
};

export default UsuarioReducer;
