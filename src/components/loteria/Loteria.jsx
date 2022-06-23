import react, { useState } from "react";
import Display from "./Display";
import numerosJogo from "./numerosJogo";
import './Loteria'

export default props => {

    const [qtdeNum, setQtdeNum] = useState(6)
    const [qtdeJogos, setQtdeJogos] = useState(1)
    const [numeros, setNumeros] = useState(numerosJogo({ qtdeNum: qtdeNum, qtdeJogos: qtdeJogos }))


    function qtdeDigitadaNum(e) {
        setQtdeNum(e)//e.target.value pega o valor digitado
    }

    function qtdeDigitadaJogos(e) {
        setQtdeJogos(e)//e.target.value pega o valor digitado
    }

    function gerarNumeros() {
        setNumeros(numerosJogo({ qtdeNum: qtdeNum, qtdeJogos: qtdeJogos }))
    }

    const lstNumeros = numeros.map((num) => {
        return (
            <span key={num}>
                {num} {" "}
            </span>
        )
    })


    return (
        <div className="Loteria">
            <Display qtdeNum={qtdeNum} qtdeJogos={qtdeJogos} quandoDigitarNum={qtdeDigitadaNum} quandoDigitarJogos={qtdeDigitadaJogos} />
            {/* <ul style={{ listStyle: 'none' }}>
                <li>
                    {lstNumeros}
                </li>
            </ul>

            <h3>ou pode gerar assim...</h3> */}


            {/* <h2>{numeros.join(" ")}</h2> */}

            <h2>{numeros.map((n) => {
                return (
                    <p key={n}>{n.join(", ")}</p>
                )
            })}</h2>



            <button onClick={gerarNumeros}> Gerar Números </button>
        </div>
    )
}