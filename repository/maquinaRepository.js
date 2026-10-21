const maquinas = [];

function cadastrarMaquina(objeto) {
    maquinas.push(objeto)
}
function listarMaquina() {
    for(let i = 0; i < maquinas.length; i++) {
        console.log(`Numero da maquina: ${i+1} / Nome: ${maquinas[i]}`)
    }
}
function buscarPorIndiceMaquina(indice) {
    for(let indice = 0; indice < maquinas.length; i ++) {
        console.log(`Indice procurado: ${indice}`)
    }
}
function atualizarMaquina(indice, objeto){
    for(let i = 0; i < maquinas.length; i++) {
        maquinas[i] = objeto
        console.log(maquinas[i])
    }
}
function excluirMaquina(indice) {

}