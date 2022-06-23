function numerosJogo(qtde) {

    const myArray = [];
    const Min = 1
    const Max = 60 + 1

    for (let i = 0; i < qtde; i++) {
        let numero = parseInt(Math.random() * (Max - Min)) + Min

        while (myArray.indexOf(numero) != -1) { // -1 é o indice que não tem resultado depois vem 0, 1, 2, ...
            numero = parseInt(Math.random() * (Max - Min)) + Min
        }

        myArray[i] = numero
    }

    return myArray.sort((n1, n2) => n1 - n2); //Ordena em orde crescente
}

export default props => {
    var myArray = new Array();
    for(let i=0; i < props.qtdeJogos; i++)
    {
        myArray[i] = numerosJogo(props.qtdeNum)
    }

    return myArray
}