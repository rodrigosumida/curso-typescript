function decorador(classPrototype: any, nomeMetodo: string, descriptor: PropertyDescriptor): PropertyDescriptor | any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function(...args: string[]) {
      return args[0].toUpperCase();
    }
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Rodrigo', 'Sumida', 21);
const metodo = pessoa.metodo('Olá, mundo!');
console.log(metodo);
