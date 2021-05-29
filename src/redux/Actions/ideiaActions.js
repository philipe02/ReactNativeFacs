export const ADD_IDEIA = "ADD_IDEIA";
export const EDITA_IDEIA = "EDITA_IDEIA";
export const EXCLUI_IDEIA = "EXCLUI_IDEIA";

export const ideiaCriada = (novaIdeia) => (dispatch) => {
    dispatch({
        type: ADD_IDEIA,
        payload: novaIdeia,
    });
};
export const ideiaEditada = (ideiaEditada) => (dispatch) => {
    dispatch({
        type: EDITA_IDEIA,
        payload: ideiaEditada,
    });
};
export const ideiaExcluida = (ideiaDeletar) => (dispatch) => {
    dispatch({
        type: EXCLUI_IDEIA,
        payload: ideiaDeletar,
    });
};
