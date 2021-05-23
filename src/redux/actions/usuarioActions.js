export const ADD_USUARIO = "ADD_USUARIO";
export const USUARIO_LOGADO = "USUARIO_LOGADO";
export const EDITA_USUARIO = "EDITA_USUARIO";
export const EXCLUI_USUARIO = "EXCLUI_USUARIO";

export const logarUsuarioAction = (usuarioLogin) => (dispatch) => {
    dispatch({
        type: USUARIO_LOGADO,
        payload: usuarioLogin,
    });
};
export const cadastrarUsuarioAction = (usuarioNovo) => (dispatch) => {
    dispatch({
        type: ADD_USUARIO,
        payload: usuarioNovo,
    });
};
export const editarUsuarioAction = (usuarioEditado) => (dispatch) => {
    dispatch({
        type: EDITA_USUARIO,
        payload: usuarioEditado,
    });
};
export const excluirUsuarioAction = (usuarioDeletar) => (dispatch) => {
    dispatch({
        type: EXCLUI_USUARIO,
        payload: usuarioDeletar,
    });
};
