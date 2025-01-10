/**
 * Questão 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
 * faça um programa, na linguagem que desejar, que calcule e retorne:
 * • O menor valor de faturamento ocorrido em um dia do mês.
 * • O maior valor de faturamento ocorrido em um dia do mês;
 * • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 * IMPORTANTE:
 * a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
 * b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
 * Estes dias devem ser ignorados no cálculo da média;
 */

export interface FaturamentoDiario {
  dia: number;
  valor: number;
}

function menorFaturamento(dados: FaturamentoDiario[]): FaturamentoDiario {
  return dados
    .filter(dia => dia.valor > 0)
    .reduce((menor, atual) => 
      atual.valor < menor.valor ? atual : menor
    );
}

function maiorFaturamento(dados: FaturamentoDiario[]): FaturamentoDiario {
  return dados.reduce((maior, atual) => 
    atual.valor > maior.valor ? atual : maior
  );
}

function mediaMensal(dados: FaturamentoDiario[]): number {
  const diasComFaturamento = dados.filter(dia => dia.valor > 0);
  const somaFaturamento = diasComFaturamento
    .reduce((soma, dia) => soma + dia.valor, 0);
  
  return somaFaturamento / diasComFaturamento.length;
}

function diasAcimaMedia(dados: FaturamentoDiario[]): FaturamentoDiario[] {
  const media = mediaMensal(dados);
  return dados.filter(dia => dia.valor > media);
}

export function analisarFaturamento(dados: FaturamentoDiario[]): string {
  const menor = menorFaturamento(dados);
  const maior = maiorFaturamento(dados);
  const media = mediaMensal(dados);
  const diasAcima = diasAcimaMedia(dados);

  return `
    Análise de Faturamento Diário:
    -----------------------------
    Menor faturamento: R$ ${menor.valor.toFixed(2)} (Dia ${menor.dia})
    Maior faturamento: R$ ${maior.valor.toFixed(2)} (Dia ${maior.dia})
    Média mensal: R$ ${media.toFixed(2)}
    Dias acima da média: ${diasAcima.length}

    Dias com faturamento acima da média:
    ${diasAcima.map(dia => `Dia ${dia.dia}: R$ ${dia.valor.toFixed(2)}`).join('\n')}
  `;
}