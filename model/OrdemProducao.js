export class OrdemProducao {
    #status
    constructor(numero, produto, quantidade, prazo, status) {
    this.numero = numero;
    this.produto = produto;
    this. quantidade = quantidade;
    this.prazo = prazo;
    this.#status = "Pendente";
    }
    get status() {
        return this.#status = status
    }
    iniciar(status) {
        this.#status = "Producao"
    }
    concluir(status) {
        this.#status = "Concluido"
    }

}