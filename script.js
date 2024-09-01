function converterMedida(metros, opcao) {
  switch (opcao) {
      case 'mm':
          return metros * 1000;
      case 'cm':
          return metros * 100;
      case 'dm':
          return metros * 10;
      case 'dam':
          return metros / 10;
      case 'hm':
          return metros / 100;
      case 'km':
          return metros / 1000;
      default:
          return 'Opção inválida';
  }
}

const valorEmMetros = parseFloat('Digite um valor em metros:');

const unidadeDesejada = 'Escolha a unidade de medida (mm, cm, dm, dam, hm ou km):';

const resultado = converterMedida(valorEmMetros, unidadeDesejada);

if (typeof resultado === 'number') {
  console.log(`Resultado: ${resultado} ${unidadeDesejada}`);
} else {
  console.log(resultado);
}
