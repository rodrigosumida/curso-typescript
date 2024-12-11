type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date()
};

console.log(documento.data?.toDateString());
console.log(documento.data?.toDateString() ?? 'Não existe data.'); // Se for null ou undefined, retorna o da direita
