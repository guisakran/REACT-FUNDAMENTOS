import react from "react";

export default props => {

    return (
        <div>

            <label htmlFor="qtdeInput">Quantidade de Jogos: </label>
            <input
                id="qtdeJogosInput"
                type="number"
                value={props.qtdeJogos}
                onChange={e => props.quandoDigitarJogos(+e.target.value)}
            />

            <p />

            <label htmlFor="qtdeNumInput">Quantidade de Números: </label>
            <input
                id="qtdeNumInput"
                type="number"
                value={props.qtdeNum}
                onChange={e => props.quandoDigitarNum(+e.target.value)}
            />

            <p />

        </div>
    )
}