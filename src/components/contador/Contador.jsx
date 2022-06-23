import react, { useState } from "react";
import Botoes from "./Botoes";
import "./Contador.css"
import Display from "./Display";
import PassoForm from "./PassoForm";

class Contador extends react.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 2,
    }

    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }


    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes
                    incremento={this.incremento}
                    decremento={this.decremento}
                />
            </div>
        )
    }
}

export default Contador