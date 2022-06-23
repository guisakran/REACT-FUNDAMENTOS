import react from "react";
import alunos from "./data/alunos";

export default props => {
    
    const lstAlunosLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} {")"} {aluno.nome} {"-->"} {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {lstAlunosLI}
            </ul>
        </div>
    )
}