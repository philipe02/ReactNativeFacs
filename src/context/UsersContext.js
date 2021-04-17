import React, { createContext, useReducer } from "react";
import Usuarios from "../components/Usuarios";

const initialState = {
  usuarioAtual: {},
  usuarios: [],
};

const UsersContext = createContext({});

const actions = {
  teste: "teste",
  cadastrar(state, usuarioNovo) {
    let listaUsuarios = state.usuarios;
    try {
      let keyNovoUsuario = listaUsuarios[listaUsuarios.length - 1].key + 1;
      usuarioNovo = { key: keyNovoUsuario, ...usuarioNovo };
      return { ...state, usuarios: [...listaUsuarios, usuarioNovo] };
    } catch {
      usuarioNovo = { key: 1, ...usuarioNovo };
      return { ...state, usuarios: [...listaUsuarios, usuarioNovo] };
    }
  },
  editar(state, usuarioEditado) {
    let listaUsuarios = state.usuarios;
    listaUsuarios.map((user) =>
      user.key === usuarioEditado.key ? usuarioEditado : user
    );
    return { ...state, usuarios: listaUsuarios };
  },
  excluir(state, usuarioDeletar) {
    let listaUsuarios = state.usuarios;
    listaUsuarios = listaUsuarios.filter(
      (user) => user.key !== usuarioDeletar.key
    );
    return { ...state, usuarios: listaUsuarios };
  },
};

export const UsersProvider = (props) => {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action.payload) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
