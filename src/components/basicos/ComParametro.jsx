import react from "react"

export default function ComParametro(props) {
    //console.log(props)//Exibe os valores da variavel no F12
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{props.curso}</h2>
            <h3>Sr(a). {props.nome} tirou nota <strong>{props.nota}</strong></h3>
            <h3>{status}</h3>
        </div>
    )
}