type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOptions(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      console.log('');
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOptions({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'TypeScript', numberOfVotes: 0 });
votation1.vote(2);
votation1.vote(2);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(1);

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOptions({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Verde', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Roxo', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Marrom', numberOfVotes: 0 });
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(1);
votation2.vote(0);
votation2.vote(2);
votation2.vote(4);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
