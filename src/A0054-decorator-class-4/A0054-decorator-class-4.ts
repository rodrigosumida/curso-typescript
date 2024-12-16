type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = 'AAAA';
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  }
}

function outroDecorador(target: Constructor) {
  console.log('Outro decorador');
  return target;
}

@outroDecorador // 2
@inverteNomeECor('Valor1', 'Valor2') // 1
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// inverteNomeECor(Animal);

const animal = new Animal('rodrigo', 'verde');
console.log(animal);
