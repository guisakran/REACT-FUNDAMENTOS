import react from "react";

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (60 - 18)) + 18
    const gerarBool = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={e => props.quandoClicar('Pessoa X', gerarIdade, gerarBool)}>Fornecer Informações</button>
        </div>
    )
}