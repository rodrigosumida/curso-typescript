export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Aluno' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Pessoa' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Rodrigo', 'Sumida', 21, '000.000.000-00');
const aluno = new Aluno('Rodrigo', 'Sumida', 21, '000.000.000-00');
const cliente = new Cliente('Rodrigo', 'Sumida', 21, '000.000.000-00');

console.log(pessoa.getNomeCompleto(), aluno.getNomeCompleto(), cliente.getNomeCompleto());
