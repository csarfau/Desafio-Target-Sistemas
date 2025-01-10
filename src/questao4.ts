/**
 * Questão 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
 * • SP – R$67.836,43
 * • RJ – R$36.678,66
 * • MG – R$29.229,88
 * • ES – R$27.165,48
 * • Outros – R$19.849,53
 * Escreva um programa na linguagem que desejar onde calcule o percentual de 
 * representação que cada estado teve dentro do valor total mensal da distribuidora.
 */

export interface FaturamentoEstado {
  estado: string;
  valor: number;
}

function calcularTotal(dados: FaturamentoEstado[]): number {
  return dados.reduce((soma, item) => soma + item.valor, 0);
}

function calcularPercentuais(dados: FaturamentoEstado[]): Array<FaturamentoEstado & { percentual: number }> {
  const total = calcularTotal(dados);
  return dados.map(item => ({
    ...item,
    percentual: (item.valor / total) * 100
  }));
}

export function gerarRelatorio(dados: FaturamentoEstado[]): string {
  const total = calcularTotal(dados);
  const percentuais = calcularPercentuais(dados);

  return `
    Análise de Faturamento por Estado:
    --------------------------------
    Faturamento Total: R$ ${total.toFixed(2)}

    Percentual por estado:
    ${percentuais.map(item => 
      `${item.estado}: R$ ${item.valor.toFixed(2)} (${item.percentual.toFixed(2)}%)`
    ).join('\n')}
  `;
}