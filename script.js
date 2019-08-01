function abrirAlert(nome){
    alert(nome);
}

function receberNome(callback){
    let nome = "Roger"
    callback(nome);
}
receberNome(abrirAlert);