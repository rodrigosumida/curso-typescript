const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string?] = [1, 'Lionel', 'Messi'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Lionel', 'Messi', 'asdsadsa'];

// dadosCliente1[0] = 100;
dadosCliente2[1] = 'Mateo';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
