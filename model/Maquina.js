export class Maquina {
    #status
    constructor(codigo, nome, setor, status) {
        this.codigo = codigo,
        this.nome = nome,
        this.setor = setor,
        this.#status = status
    }
    get ligar(){
        this.#status = true
    }
    get desligar(){
        this.#status = true
    }
}