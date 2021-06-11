import React, {useState} from "react"

//componente utilizado para obter e manipular os dados 
//retorna um objeto e um método de acesso ao objeto
const IdeiaContext = React.createContext ([ {}, () => {}]) 

//concede o acesso ao contexto
const IdeiaProvider = (props) =>  {
    const ideiaInicitial = {
        titulo: "",
        desc: "",
        tema: "Selecione um tema",
        benefMalef: "",
        homeSimNao:false
    }

    const [ideia, setIdeia] = useState(ideiaInicitial)
    return (
        <IdeiaContext.Provider value={[ideia, setIdeia]}>
            {props.children}
        </IdeiaContext.Provider>
    )
}

export {
    IdeiaContext, 
    IdeiaProvider
}