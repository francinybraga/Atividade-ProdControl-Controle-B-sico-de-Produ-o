export class Operador {
    #status
    constructor(matricula, nome, funcao, turno, status) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
        this.turno = turno;
        this.#status = "Ativo" 
    }
    ativar(status) {
        this.#status = "Ativo"
    }
    desativar(status) {
        this.#status = "Inativo"
    }
    
}