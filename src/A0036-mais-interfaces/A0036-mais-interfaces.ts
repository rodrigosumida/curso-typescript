interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Sumida',
  enderecos: ['Av. Brasil']
};

console.log(pessoa);

export default {}
