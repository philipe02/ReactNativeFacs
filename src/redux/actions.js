export const ADD_USUARIO = "ADD_USUARIO";
export const USUARIO_LOGADO = "USUARIO_LOGADO";
export const EDITA_USUARIO = "EDITA_USUARIO";
export const EXCLUI_USUARIO = "EXCLUI_USUARIO";

export const logar = (usuarioLogin) => (dispatch) => {
  dispatch({
    type: USUARIO_LOGADO,
    payload: usuarioLogin,
  });
};
export const cadastrar = (usuarioNovo) => (dispatch) => {
  dispatch({
    type: ADD_USUARIO,
    payload: usuarioNovo,
  });
};
export const editar = (usuarioEditado) => (dispatch) => {
  dispatch({
    type: EDITA_USUARIO,
    payload: usuarioEditado,
  });
};
export const excluir = (usuarioDeletar) => (dispatch) => {
  dispatch({
    type: EXCLUI_USUARIO,
    payload: usuarioDeletar,
  });
};
