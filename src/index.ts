import questao1 from './questao1';
import questao2 from './questao2';
import { analisarFaturamento, FaturamentoDiario } from './questao3';
import dadosQuestao3 from './dadosQuestao3.json';
import { gerarRelatorio, FaturamentoEstado } from './questao4';
import dadosQuestao4 from './dadosQuestao4.json';
import questao5 from './questao5';

function executarQuestao1() {
  console.log('\n=== Executando Exercício 1 - SOMA ===');
  const resultado: number = questao1();
  console.log(resultado);
}

function executarQuestao2() {
  console.log('\n=== Executando Exercício 2 - Fibonacci ===');
  const numero = 13;
  const resultado: string = questao2(numero);
  console.log(resultado);
}

function executarQuestao3() {
  console.log('\n=== Executando Exercício 3 - Faturamento ===');
  const dadosFaturamento: FaturamentoDiario[] = dadosQuestao3;
  console.log(analisarFaturamento(dadosFaturamento));
}

function executarQuestao4() {
  console.log('\n=== Executando Exercício 4 - Percentual por Estado ===');
  const dadosFaturamento: FaturamentoEstado[] = dadosQuestao4;
  console.log(gerarRelatorio(dadosFaturamento));
}

function executarQuestao5() {
  console.log('\n=== Executando Exercício 5 - Inversao de String ===');
  console.log(questao5("Teste"));
}

function main() {
  executarQuestao1();
  executarQuestao2();
  executarQuestao3();
  executarQuestao4();
  executarQuestao5();
}

main();