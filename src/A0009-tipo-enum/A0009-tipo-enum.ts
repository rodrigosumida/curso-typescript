enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA
}

console.log(Cores[10]);
console.log(Cores.AZUL);
console.log(Cores.ROSA);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(200);
