import {
    ADD_USUARIO,
    EXCLUI_USUARIO,
    EDITA_USUARIO,
    USUARIO_LOGADO,
    CARREGA_USUARIOS,
} from "../actions/usuarioActions";

const initialState = {
    usuarioAtual: {},
    usuarios: [],
};

const actions = {
    USUARIO_LOGADO(state, usuarioLogin) {
        return { ...state, usuarioAtual: usuarioLogin };
    },
    CARREGA_USUARIOS(state, usuarios) {
        return { ...state, usuarios: usuarios };
    },
    ADD_USUARIO(state, usuarioNovo) {
        return { ...state, usuarios: [...state.usuarios, usuarioNovo] };
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
