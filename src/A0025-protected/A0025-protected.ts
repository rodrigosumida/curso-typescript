export class Empresa {
  /* public */ readonly nome: string;
  protected readonly colaboradores: /* readonly */ Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  /* public */ adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  /* public */ mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Rodrigo', 'Sumida');
const colaborador2 = new Colaborador('Lionel', 'Messi');
const colaborador3 = new Colaborador('Alexandre', 'Borba');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
//empresa1.nome = 'asdsad'

empresa1.mostrarColaboradores();

empresa1.popColaborador();
console.log(empresa1);
