import react from "react";

export default props => {
    const isPar = props.numero % 2 === 0//Se o resto da divisão por 2 for iqual a 0 então é par, retorna true
    return (
        <div>
            {
                isPar
                    ?
                    <span>{props.numero} é Par</span>
                    :
                    <span>{props.numero} é Ímpar</span>
            }
        </div>
    )
}