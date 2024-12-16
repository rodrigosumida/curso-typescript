namespace MeuNameSpace {
  export const nomeDoNamespace = 'Rodrigo';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Rodrigo');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Rodrigo';
  }
}

const pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('Rodrigo');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace);

export default 1;
