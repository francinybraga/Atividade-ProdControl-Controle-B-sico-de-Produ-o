export class Maquina {
    #status;
    constructor(codigo, nome, setor, status) {
        this.codigo = codigo;
        this.nome = nome;
        this.setor = setor;
        this.#status = "Desligado";
    }
    get status(){
        return  this.#status
    }
    ligar(status){
        this.#status = "Ligado";
    }
    desligar(status){
        this.#status = "Desligado";
    }
}