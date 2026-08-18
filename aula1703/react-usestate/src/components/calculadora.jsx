import { useState } from "react";

export default function Calculadora (){
    const[n1, setN1] = useState(0);
    const[n2, setN2] = useState(0);
    const[resultado, setResultado] = useState(0);

    function somaar (e){
        e.preventDefault(); //não recarregar a página
        setResultado(Number(n1)+Number(n2));
        return resultado;
    }
}