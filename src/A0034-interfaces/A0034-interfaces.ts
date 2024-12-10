interface TipoNome {
  nome: string;
};

interface TipoSobrenome {
  sobrenome: string;
};

interface TipoNomeCompleto {
  nomeCompleto(): string;
};

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string
  ) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Rodrigo', 'Sumida');
console.log(pessoa.nomeCompleto());
