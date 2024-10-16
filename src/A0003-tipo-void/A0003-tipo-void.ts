function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Sumida',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Rodrigo', 'Lingenover', 'Sumida');
pessoa.exibirNome();

export { pessoa };
