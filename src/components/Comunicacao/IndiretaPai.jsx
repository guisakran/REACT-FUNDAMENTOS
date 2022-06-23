import react, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [texto, setTexto] = useState('Não informado')
    const [numero, setNumero] = useState(0)
    const [bool, setBool] = useState(false)

    function fornecerInformacao(vTexto, vNumero, vBool) {
        //console.log(texto, numero, bool)
        setTexto(vTexto)
        setNumero(vNumero)
        setBool(vBool)
    }

    return (
        <div>
            <strong>(Indireta)</strong>
            <br />
            <div>Pai</div>
            <span>{texto} </span>
            <span>{numero} </span>
            <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
            <br />
            <IndiretaFilho quandoClicar={fornecerInformacao} />
        </div>
    )
}