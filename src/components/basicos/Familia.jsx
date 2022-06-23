import react, { cloneElement } from "react";
import FamiliaMenbro from './FamiliaMenbro'

export default props => {

    return (
        <div>
            {/*<div>
                <FamiliaMenbro nome="Jurandir" sobrenome={props.sobrenome} />
                <FamiliaMenbro nome="Eliane" {...props} />
                <FamiliaMenbro nome="Marcos" sobrenome="Pereira" />
                <FamiliaMenbro nome="Maria" sobrenome="Pereira123" />
            </div>*/}
            {
                react.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            }
        </div>

    )
}
