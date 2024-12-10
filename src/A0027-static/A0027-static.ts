export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00'

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  static falaOi(): void {
    console.log('OI');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Rodrigo', 'Sumida', 21, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Rodrigo', 'Sumida');

Pessoa.falaOi();

console.log(pessoa);
console.log(pessoa2);
