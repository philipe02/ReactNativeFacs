export const ADD_IDEIA = "ADD_IDEIA";
export const EDITA_IDEIA = "EDITA_IDEIA";
export const EXCLUI_IDEIA = "EXCLUI_IDEIA";

export const criarIdeiaAction = (novaIdeia) => (dispatch) => {
    dispatch({
        type: ADD_IDEIA,
        payload: novaIdeia,
    });
};
export const editarIdeiaAction = (ideiaEditada) => (dispatch) => {
    dispatch({
        type: EDITA_IDEIA,
        payload: ideiaEditada,
    });
};
export const excluirIdeiaAction = (ideiaDeletar) => (dispatch) => {
    dispatch({
        type: EXCLUI_IDEIA,
        payload: ideiaDeletar,
    });
};
