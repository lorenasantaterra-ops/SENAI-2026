import { Children, createContext, useState } from "react";

export const contextoTema = createContext(null);

export function TemaProvedor({children0}){
    const[tema, setTema] = useState('light');

    function mudaTema(){
        setTema((prev) => (prev == 'light' ? 'dark' : 'light'))
    }

    const valor = { tema, mudaTema };
    return(
        <contextoTema.Provider value={valor}>
            {children}
        </contextoTema.Provider>
    )
}