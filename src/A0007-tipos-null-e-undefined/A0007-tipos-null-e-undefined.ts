let x;
if(typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(firstname: string, lastname?: string): {
  firstname: string;
  lastname?: string;
} {
  return {
    firstname,
    lastname
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber);
}
