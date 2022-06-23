import react from "react";
import "./TabelaProdutos.css";
import produtos from './data/produtos';

export default props => {
    const lstProdutos = produtos.map((prod, i) => {
        return (
            <tr key={prod.codigo} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{prod.codigo}</td>
                <td>{prod.descricao}</td>
                <td>{"R$"} {prod.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
                {lstProdutos}
            </thead>
        </table>
    )
}