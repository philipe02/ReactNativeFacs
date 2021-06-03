import { ADD_IDEIA, EXCLUI_IDEIA, EDITA_IDEIA } from "../actions/ideiasActions";

const initialState = {
    ideias: [],
};

const actions = {
    ADD_IDEIA(state, novaIdeia) {
        let listaIdeia = state.ideias;
        try {
            let idNovaIdeia = listaIdeia[listaIdeia.length - 1].id + 1;
            novaIdeia = { id: idNovaIdeia, ...novaIdeia };
            return { ideias: [...listaIdeia, novaIdeia] };
        } catch {
            novaIdeia = { id: 1, ...novaIdeia };
            return { ideias: [...listaIdeia, novaIdeia] };
        }
    },
    EDITA_IDEIA(state, ideiaEditada) {
        let listaIdeias = state.ideias;
        listaIdeias = listaIdeias.map((ideia) =>
            ideia.id === ideiaEditada.id ? ideiaEditada : ideia
        );
        return { ideias: listaIdeias };
    },
    EXCLUI_IDEIA(state, ideiaDeletar) {
        let listaIdeias = state.ideia;
        listaIdeias = listaIdeias.filter(
            (ideia) => ideia.id !== ideiaDeletar.id
        );
        return { ideias: listaIdeias };
    },
};

const IdeiaReducer = (state = initialState, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action.payload) : state;
};

export default IdeiaReducer;
