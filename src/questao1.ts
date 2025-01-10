/** 
 * Questão 1) Observe o trecho de código abaixo: 
 * int INDICE = 13, SOMA = 0, K = 0;
 * Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
 * Imprimir(SOMA);
 * Ao final do processamento, qual será o valor da variável SOMA?
 */
export default function questao1(): number {
  const INDICE: number = 13;
  let SOMA: number = 0;
  let K: number = 0;

  while(K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  return SOMA;
}
