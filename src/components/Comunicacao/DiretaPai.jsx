import react from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {

    return (
        <div>
            <strong>(Direta)</strong>
            <DiretaFilho texto="Filho A" numero={50} bool={true} />
            <DiretaFilho texto="Filho B" numero={40} bool={false} />
            <DiretaFilho texto="Filho C" numero={40} bool={false} />
        </div>
    )
}