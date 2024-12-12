interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Rodrigo',
  sobrenome: 'Sumida',
  idade: 21
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 21
};

const aluno3: PessoaProtocolo = {
  nome: '123',
  sobrenome: '456',
  idade: 21
};

console.log(aluno1, aluno2, aluno3);
