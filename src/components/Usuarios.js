import React, { createContext, useContext } from "react";

const UsersContext = createContext({});

const Usuarios = (props) => {
  const { state, dispatch } = useContext(UsersContext);

  const atualizarUsuarios = (listaUsuarios) => {
    setUsuarios(listaUsuarios);
  };

  const getListaUsuarios = () => {
    return usuarios;
  };
};

export default Usuarios;
