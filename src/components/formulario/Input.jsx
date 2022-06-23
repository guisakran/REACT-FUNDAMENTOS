import react, { useState } from "react";
import "./Input.css"

export default props => {
    const [valor, setValor] = useState('Inicial')

    function mudaValorDigitar(e) {
        setValor(e.target.value)//e.target.value pega o valor digitado
        //console.log(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }} />
            <input type="text" value={valor} onChange={mudaValorDigitar} />{/*Colocar onChange Componente controlado*/}
            <input type="text" value={valor} readOnly />{/*Colocar readOnly qnd o valor não for dinâmico*/}
            <input type="text" value={undefined} />{/*Colocar undefined Componente não controlado*/}
        </div>
    )
}