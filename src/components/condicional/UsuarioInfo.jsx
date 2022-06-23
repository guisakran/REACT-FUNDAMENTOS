import react from "react";
import If, { Else } from "./If";

export default props => {
    const usuario = props.usuario || {}//Caso não tenha nada na variavel usa nada
    return (
        <div>
            {/*
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <br />
            </If>

            <If teste={usuario && usuario.nome}>
                Passou o <strong>usuario</strong> e o <strong>nome</strong>!
            </If>

            <If teste={usuario && !usuario.nome}>
                Passou <strong>usuario</strong>, mas não passou o <strong>nome</strong>!
            </If>

            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>amigão</strong>!
                </Else>
            </If>
            */}
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>amigão</strong>!
                </Else>
            </If>
        </div>
    )
}