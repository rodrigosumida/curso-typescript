let x = 10;
x = 0b1010;
const y = 10;
// let a: 100 = 100;
let a = 100 as const;

const pessoa = {
  nome: 'Rodrigo' as const,
  sobrenome: 'Sumida'
};

//pessoa.nome = 'asda'

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));

// Module mode
export default 1;
