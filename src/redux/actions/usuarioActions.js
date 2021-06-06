export const ADD_USUARIO = "ADD_USUARIO";
export const USUARIO_LOGADO = "USUARIO_LOGADO";
export const EDITA_USUARIO = "EDITA_USUARIO";
export const EXCLUI_USUARIO = "EXCLUI_USUARIO";
export const CARREGA_USUARIOS = "CARREGA_USUARIOS";
import UserService from "../../../services/UserService";

export const logarUsuarioAction = (usuarioLogin) => (dispatch) => {
    dispatch({
        type: USUARIO_LOGADO,
        payload: usuarioLogin,
    });
};
export const carregarUsuariosAction = () => (dispatch) => {
    UserService.getAll()
        .then((res) => {
            dispatch({
                type: CARREGA_USUARIOS,
                payload: res.data,
            });
        })
        .catch(console.log);
};
export const cadastrarUsuarioAction = (usuarioNovo) => (dispatch) => {
    let usuarioNovoJson = JSON.stringify(usuarioNovo);
    console.log(usuarioNovoJson);
    UserService.create(usuarioNovoJson)
        .then((res) => {
            dispatch({
                type: ADD_USUARIO,
                payload: res.data,
            });
        })
        .catch(console.log);
};
export const editarUsuarioAction = (usuarioEditado) => (dispatch) => {
    let usuarioEditadoJson = JSON.stringify(usuarioEditado);
    console.log(usuarioEditadoJson);
    UserService.update(usuarioEditado.id, usuarioEditadoJson)
        .then((res) => {
            dispatch({
                type: EDITA_USUARIO,
                payload: res.data,
            });
        })
        .catch(console.log);
};
export const excluirUsuarioAction = (usuarioDeletar) => (dispatch) => {
    UserService.remove(usuarioDeletar.id)
        .then((res) => {
            dispatch({
                type: EXCLUI_USUARIO,
                payload: res.data,
            });
        })
        .catch(console.log);
};
