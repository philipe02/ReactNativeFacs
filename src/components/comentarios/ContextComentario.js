import React, { useState } from 'react';
const ContextComentario = React.createContext([{}, () => {}]);

const ProviderComentario = (props) => {
    const comentarioInitial = {
        code: false,
        message: false
    }

    const [comentarios, setComentarios] = useState(comentarioInitial);
    return(
            <ContextComentario.Provider value={[comentarios, setComentarios]}>
                { props.children }
            </ContextComentario.Provider>
    )
}

export { ContextComentario, ProviderComentario }
