import react from "react";

export default function Fragmento(props) {
    return (
        <react.Fragment>
            {/*Caso não queira usar <div> pode-se usar <react.Fragment>*/}
            {/*Caso não queira usar <react.Fragment> pode-se usar <> só que esse não da pra usar key*/}
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </react.Fragment>
    )
}