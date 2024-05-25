try{
const listaDeProdutosDisponiveis = [
    "pao",
    "leite",
    "cafe",
    "laranja",
    "macarrao",
    "sabonete",
    "detergente",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
    return listaDeArgumentos.find(argumento => argumento ===produto);

})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`este produto nos temos: ${produto}`));
 
const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto ===argumento);

})
listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`este produto nos nao temos: ${argumento}`));

listaDeProdutosDisponiveis.sort();
listaDeProdutosDisponiveis.forEach(produto => console.log(`este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('nao foi possivel executar o pedido de compra');
}
