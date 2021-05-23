import { ADD_IDEIA, EXCLUI_IDEIA, EDITA_IDEIA } from "../actions/ideiasActions";

const initialState = {
    ideias: [],
};

const actions = {
    ADD_IDEIA(state, novaIdeia) {
        let listaIdeias = state.ideias;
        try {
            let idNovaIdeia = listaIdeias[listaIdeias.length - 1].id + 1;
            novaIdeia = {
                id: idNovaIdeia,
                userId: usuarioAtual.id,
                ...novaIdeia,
            };
            return { ideias: [...listaIdeias, novaIdeia] };
        } catch {
            novaIdeia = { id: 1, userId: usuarioAtual.id, ...novaIdeia };
            return { ideias: [...listaIdeias, novaIdeia] };
        }
    },
    EDITA_IDEIA(state, usuarioEditado) {
        let listaUsuarios = state.usuarios;
        listaUsuarios = listaUsuarios.map((user) =>
            user.key === usuarioEditado.key ? usuarioEditado : user
        );
        return state.usuarioAtual.key === usuarioEditado.key
            ? { usuarioAtual: usuarioEditado, usuarios: listaUsuarios }
            : { ...state, usuarios: listaUsuarios };
    },
    EXCLUI_IDEIA(state, usuarioDeletar) {
        let listaUsuarios = state.usuarios;
        listaUsuarios = listaUsuarios.filter(
            (user) => user.key !== usuarioDeletar.key
        );
        return { ...state, usuarios: listaUsuarios };
    },
};

const IdeiasReducer = (state = initialState, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action.payload) : state;
};

export default IdeiasReducer;
