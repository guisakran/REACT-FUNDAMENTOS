import react from "react";

export default function Aleatorio(props) {
    const ValidaNumMax = Number.isInteger(props.max)
    const ValidaNumMin = Number.isInteger(props.min)
    if (ValidaNumMax == false) {
        return (
            <div>
                <p>O parâmetro <strong>{props.max}</strong> não é numérico!</p>
            </div >
        )
    }
    if (ValidaNumMin == false) {
        return (
            <div>
                <p>O parâmetro <strong>{props.min}</strong> não é numérico!</p>
            </div >
        )
    }

    const NumAleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min
    return (
        <div>
            <p>O número aleatório entre <strong>{props.min}</strong> a <strong>{props.max}</strong> é <strong>{NumAleatorio}</strong>.</p>
        </div >
    )
}