type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'C';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  idade: 21,
  nome: 'aaaa',
  sobrenome: 'bbbb'
};

console.log(pessoa);

export { pessoa };
