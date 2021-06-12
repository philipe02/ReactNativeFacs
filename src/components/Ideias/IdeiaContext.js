import React, { useState } from "react";

//componente utilizado para obter e manular os dados
//retorna um objeto e um método de acesso ao objeto
const IdeiaContext = React.createContext([{}, () => {}]);
const IdeiasContext = React.createContext([[], () => {}]);

//concede o acesso ao contexto
const IdeiaProvider = (props) => {
    const ideiaInicitial = {
        userId: null,
        titulo: "",
        desc: "",
        tema: "Selecione um tema",
        benefMalef: "",
        homeSimNao: false,
    };

    const [ideia, setIdeia] = useState(ideiaInicitial);
    const [ideias, setIdeias] = useState([]);
    return (
        <IdeiasContext.Provider value={[ideias, setIdeias]}>
            <IdeiaContext.Provider value={[ideia, setIdeia]}>
                {props.children}
            </IdeiaContext.Provider>
        </IdeiasContext.Provider>
    );
};

export { IdeiaContext, IdeiaProvider, IdeiasContext };
