import react from "react";

export default props => {

    return (
        <div>
            <button onClick={props.incremento}> + </button>
            <button onClick={props.decremento}> - </button>
        </div>
    )
}