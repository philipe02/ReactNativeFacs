import React, { useState } from 'react';
const ContextMetodologia = React.createContext([{}, () => {}]);

const ProviderMetodologia = (props) => {
    const metodologiaInitial = {
        title : false,
        area: false,
        description: false,
        definition: false,
        objective: false,
        references: false
    }

    const [metodologia, setMetodologia] = useState(metodologiaInitial);
    return(
            <ContextMetodologia.Provider value={[metodologia, setMetodologia]}>
                { props.children }
            </ContextMetodologia.Provider>
    )
}

export { ContextMetodologia, ProviderMetodologia }
