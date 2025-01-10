/**
 * Questão 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
 * próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
 * escreva um programa na linguagem que desejar onde, informado um número,
 * ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 * IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

export default function questao2(num: number): string {
  const pertence = verificaFibonacci(num);

  function verificaFibonacci(num: number): boolean {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let anterior = 0;
    let atual = 1;

    while (atual <= num) {
      if (atual === num) return true;

      const proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }

    return false;
  }

  const mensagem = pertence
    ? `O número ${num} pertence à sequência de Fibonacci!`
    : `O número ${num} NÃO pertence à sequência de Fibonacci!`;
    
    return `${mensagem}`;
}
