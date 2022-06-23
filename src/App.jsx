import react from "react";
import './App.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia"
import FamiliaMenbro from "./components/basicos/FamiliaMenbro";
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/Comunicacao/DiretaPai";
import IndiretaPai from "./components/Comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Loteria from "./components/loteria/Loteria";


const MenuNomeNegrito = <strong>Guilherme</strong>

export default () => {
    return (
        <div className="App">
            Olá {MenuNomeNegrito} ;P

            <div className="Cards">

                <Card titulo="#12 - Loteria" cor="#F2CC39">
                    <Loteria qtde={6} />
                </Card>

                <Card titulo="#11 - Contador" cor="#C2B8AD">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#10 - Componente Controlado (Input)" cor="#A3CDD9">
                    <Input />
                </Card>

                <Card titulo="#9 - Comunicação de Dados" cor="#7D6B7D">
                    <DiretaPai />
                    <br />
                    <IndiretaPai />
                </Card>

                <Card titulo="#8 - Condicionar Par ou Ímpar" cor="#F2CC39">
                    <ParOuImpar numero={20} />
                    <ParOuImpar numero={11} />
                    <br />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <br />
                    <UsuarioInfo usuario={{ email: 'fer@gmail.com' }} />
                </Card>

                <Card titulo="#7 - Repetição Produtos (TABELA)" cor="#506AD4">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#6 - Repetição Alunos (LI)" cor="#C2B8AD">
                    <ListaAlunos />
                </Card>

                <Card titulo="#5 - Componente com Filho" cor="#A3CDD9">
                    {/*<Familia sobrenome='Pereira'/>*/}
                    <Familia sobrenome="Pereira">
                        <FamiliaMenbro nome="Eliane" />
                        <FamiliaMenbro nome="Maria" />
                        <FamiliaMenbro nome="Daniel" />
                        <FamiliaMenbro nome="Jurandir" />
                    </Familia>
                </Card>

                <Card titulo="#4 - Desafio Aleatório" cor="#7D6B7D">
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#3 - Fragmento" cor="#F2CC39">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Com Parâmetro" cor="#506AD4">
                    <ComParametro
                        nome='Pedro'
                        curso='Ciência da Computação'
                        nota={7.0}
                    />
                </Card>

                <Card titulo="#1 - Primeiro Componente" cor="#C2B8AD">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}