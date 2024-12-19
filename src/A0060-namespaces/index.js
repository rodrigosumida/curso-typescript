var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nomeDoNamespace = 'Rodrigo';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNameSpace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace('Rodrigo');
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Rodrigo';
    })(OutroNamespace = MeuNameSpace.OutroNamespace || (MeuNameSpace.OutroNamespace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
var pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('Rodrigo');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace);
/// <reference path="module.ts" />
console.log(MeuNameSpace.nomeDoNamespace);
