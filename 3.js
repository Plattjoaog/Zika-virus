const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],


    imprimirResumo: function (carrinho) {
        let qtdTotalItens = 0;
        let precoTotalItens = 0;

        for (const produto of carrinho.produtos) {
            qtdTotalItens += produto.qtd;
            precoTotalItens += produto.qtd * produto.precoUnit;

        }
        let precoTotalItensTexto = `${precoTotalItens / 100}`;

        console.log(`Cliente: João Gabriel `);
        console.log(`Total de itens: ${qtdTotalItens} itens`)
        console.log(`Total a pagar: R$ ${precoTotalItens}`);

    }

}

function addProdutoAoCarrinho(carrinho, produto) {
    let indiceProdutoExistente = -1;

    for (let i = 0; i < Array.length; i++) {
        if (carrinho.produtos[i].id === produto.id) {
            indiceProdutoExistente = i;
            break;
        }
    }
    if (indiceProdutoExistente === -1) {
        carrinho.produtos[carrinho.produtos.length] = produto;
    } else {
        carrinho.produtos[indiceProdutoExistente].qtd += produto.qtd;
    }
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}


addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo(carrinho);