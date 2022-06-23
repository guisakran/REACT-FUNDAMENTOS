import react from "react";
import "./Card.css"

export default props => {

    const estilo = {
        backgroundColor: props.cor || 'red',
        borderColor: props.cor || 'red'
    }

    return (
        <div className="Card" style={estilo}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}{/*Faz exibir os paramentros dos filhos*/}
            </div>
        </div>
    )
}