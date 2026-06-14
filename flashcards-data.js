/* ============================================================
   PROFESSOR LEÃO — Flashcards de Revisão (dados)
   flashcards-data.js

   Baralhos por assunto do edital (matemática para concursos).
   Cada card: { f: frente (pergunta/conceito), v: verso (resposta) }.
   Matemática em Unicode (², ³, √, ×, ÷, π, ≤, ≥, ≠) — NUNCA LaTeX.
   Foco no que a banca cobra + a pegadinha clássica de cada tema.
   ============================================================ */
(function () {
  'use strict';

  window.PL_FLASHCARDS = [
    {
      id: 'fracoes', titulo: 'Frações & Operações', emoji: '➗', cor: '#4A6CF7',
      cards: [
        { f: 'Como somar frações com denominadores diferentes?', v: 'Tire o MMC dos denominadores, converta as frações e some os numeradores. Ex.: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.' },
        { f: 'Como multiplicar duas frações?', v: 'Multiplica numerador com numerador e denominador com denominador. Ex.: 2/3 × 4/5 = 8/15. (Não precisa de MMC!)' },
        { f: 'Como dividir frações?', v: 'Repete a primeira e multiplica pelo INVERSO da segunda. Ex.: (2/3) ÷ (4/5) = 2/3 × 5/4 = 10/12 = 5/6.' },
        { f: 'O que é uma fração própria, imprópria e aparente?', v: 'Própria: numerador < denominador (3/4). Imprópria: numerador > denominador (7/4). Aparente: numerador é múltiplo do denominador (8/4 = 2).' },
        { f: 'Como transformar dízima 0,333… em fração?', v: 'A dízima periódica simples 0,(3) = 3/9 = 1/3. Regra: o período sobre tantos 9 quantos forem os algarismos do período.' },
        { f: 'Pegadinha: 2/3 de 60 é quanto?', v: '"De" significa multiplicar: 2/3 × 60 = 40. O erro comum é dividir 60 por 2/3.' },
        { f: 'Como comparar 3/4 e 5/7?', v: 'Multiplicação cruzada: 3×7 = 21 e 4×5 = 20. Como 21 > 20, então 3/4 > 5/7.' },
      ],
    },
    {
      id: 'porcentagem', titulo: 'Porcentagem', emoji: '％', cor: '#22c55e',
      cards: [
        { f: 'Como calcular x% de um valor?', v: 'Multiplique o valor por x/100. Ex.: 15% de 200 = 200 × 0,15 = 30.' },
        { f: 'Aumento de 20%: multiplico por quanto?', v: 'Por 1,20 (fator de aumento = 1 + 20/100). Ex.: 50 com +20% = 50 × 1,2 = 60.' },
        { f: 'Desconto de 30%: multiplico por quanto?', v: 'Por 0,70 (fator = 1 − 30/100). Ex.: 80 com −30% = 80 × 0,7 = 56.' },
        { f: 'Pegadinha: aumentar 10% e depois descontar 10% volta ao valor inicial?', v: 'NÃO! Fica menor. 100 × 1,1 × 0,9 = 99. Há uma perda de 1% (= 10%×10%).' },
        { f: 'Dois aumentos sucessivos de 10% e 20% equivalem a quanto?', v: 'Multiplique os fatores: 1,10 × 1,20 = 1,32 → aumento único de 32% (não 30%).' },
        { f: 'De 40 para 50, qual o aumento percentual?', v: 'Variação/valor inicial: (50−40)/40 = 10/40 = 0,25 = 25%. Sempre divide pelo valor INICIAL.' },
        { f: 'Como achar o valor cheio sabendo que 30% dele é 60?', v: 'Regra de três ou: valor = 60 ÷ 0,30 = 200.' },
      ],
    },
    {
      id: 'regra-tres', titulo: 'Razão, Proporção & Regra de 3', emoji: '⚖️', cor: '#f59e0b',
      cards: [
        { f: 'Quando a regra de três é DIRETA?', v: 'Quando uma grandeza aumenta e a outra também aumenta (ou ambas diminuem). Monta e multiplica em cruz.' },
        { f: 'Quando a regra de três é INVERSA?', v: 'Quando uma aumenta e a outra diminui (ex.: mais operários → menos tempo). INVERTE uma das razões antes de multiplicar em cruz.' },
        { f: 'Pegadinha clássica de velocidade × tempo', v: 'São inversamente proporcionais: dobrar a velocidade → metade do tempo. Mais rápido = menos tempo.' },
        { f: 'Como resolver regra de três composta?', v: 'Fixe a grandeza da incógnita; compare cada outra grandeza com ela (direta mantém, inversa inverte); multiplique as razões.' },
        { f: 'O que é uma proporção?', v: 'Igualdade entre duas razões: a/b = c/d. Propriedade fundamental: a×d = b×c (produto dos meios = produto dos extremos).' },
        { f: 'Dividir 100 em partes proporcionais a 2 e 3', v: 'Soma das partes = 5. Cada unidade vale 100/5 = 20. Logo 2×20 = 40 e 3×20 = 60.' },
        { f: '6 operários fazem em 10 dias; 12 operários em quantos?', v: 'Inversa: mais operários, menos dias. 6×10 = 12×x → x = 5 dias.' },
      ],
    },
    {
      id: 'equacoes', titulo: 'Equações 1º e 2º grau', emoji: '🟰', cor: '#a855f7',
      cards: [
        { f: 'Como isolar o x em 3x + 5 = 20?', v: 'Faça a mesma operação dos dois lados: 3x = 15 → x = 5. A equação é uma balança em equilíbrio.' },
        { f: 'Fórmula de Bhaskara', v: 'x = (−b ± √Δ) / (2a), onde Δ = b² − 4ac. Vale para ax² + bx + c = 0, com a ≠ 0.' },
        { f: 'O que o discriminante Δ revela?', v: 'Δ > 0: duas raízes reais distintas. Δ = 0: uma raiz (dupla). Δ < 0: nenhuma raiz real.' },
        { f: 'Soma e produto das raízes (sem Bhaskara)', v: 'Soma S = −b/a e Produto P = c/a. Útil para achar raízes inteiras "de cabeça".' },
        { f: 'Pegadinha: x² = 16 tem quantas soluções?', v: 'DUAS: x = +4 e x = −4. Esquecer a raiz negativa é o erro mais comum.' },
        { f: 'Como resolver equação biquadrada x⁴ − 5x² + 4 = 0?', v: 'Substitua y = x²: y² − 5y + 4 = 0 → y = 1 ou y = 4. Depois volte: x = ±1 e x = ±2.' },
        { f: 'Vértice da parábola y = ax² + bx + c', v: 'x_v = −b/(2a); y_v = −Δ/(4a). a > 0 abre para cima (mínimo); a < 0 abre para baixo (máximo).' },
      ],
    },
    {
      id: 'funcoes', titulo: 'Funções', emoji: '📈', cor: '#06b6d4',
      cards: [
        { f: 'Função do 1º grau (afim): forma e gráfico', v: 'f(x) = ax + b. Gráfico é uma RETA. "a" é a inclinação (taxa de variação); "b" é onde corta o eixo y.' },
        { f: 'Quando a função afim é crescente ou decrescente?', v: 'Crescente se a > 0; decrescente se a < 0. (O sinal do coeficiente angular manda.)' },
        { f: 'Raiz (zero) da função afim', v: 'É o x onde f(x) = 0: x = −b/a. No gráfico, é onde a reta cruza o eixo x.' },
        { f: 'Função do 2º grau: gráfico', v: 'f(x) = ax² + bx + c. Gráfico é uma PARÁBOLA. As raízes são onde ela cruza o eixo x.' },
        { f: 'Como saber se um gráfico representa uma função?', v: 'Teste da reta vertical: qualquer vertical pode cortar o gráfico em NO MÁXIMO um ponto.' },
        { f: 'O que é domínio e imagem?', v: 'Domínio: valores de entrada (x) permitidos. Imagem: valores de saída (y) atingidos.' },
        { f: 'Pegadinha do domínio com raiz e fração', v: 'Dentro de raiz par: ≥ 0. No denominador: ≠ 0. Sempre verifique essas restrições.' },
      ],
    },
    {
      id: 'pa-pg', titulo: 'Sequências: PA e PG', emoji: '🔢', cor: '#ec4899',
      cards: [
        { f: 'Termo geral da PA', v: 'aₙ = a₁ + (n − 1)·r, onde r é a razão (constante somada). Ex.: 2, 5, 8, 11… tem r = 3.' },
        { f: 'Soma dos n primeiros termos da PA', v: 'Sₙ = (a₁ + aₙ)·n / 2. "Soma dos extremos vezes a quantidade, dividido por 2."' },
        { f: 'Termo geral da PG', v: 'aₙ = a₁ · q^(n−1), onde q é a razão (constante multiplicada). Ex.: 3, 6, 12, 24… tem q = 2.' },
        { f: 'Soma dos n termos da PG (q ≠ 1)', v: 'Sₙ = a₁·(qⁿ − 1)/(q − 1).' },
        { f: 'Soma da PG INFINITA (|q| < 1)', v: 'S = a₁ / (1 − q). Só converge quando a razão está entre −1 e 1.' },
        { f: 'Como reconhecer PA vs PG?', v: 'PA: diferença constante entre termos (soma). PG: razão constante entre termos (multiplicação).' },
        { f: 'Pegadinha: termo médio da PA', v: 'Em 3 termos em PA, o do meio é a média dos outros dois: a₂ = (a₁ + a₃)/2.' },
      ],
    },
    {
      id: 'juros', titulo: 'Juros & Matemática Financeira', emoji: '💰', cor: '#16a34a',
      cards: [
        { f: 'Fórmula do juro SIMPLES', v: 'J = C · i · t (capital × taxa × tempo). O montante é M = C + J = C·(1 + i·t). Cresce de forma LINEAR.' },
        { f: 'Fórmula do montante a juros COMPOSTOS', v: 'M = C · (1 + i)ᵗ. Juro sobre juro — crescimento EXPONENCIAL.' },
        { f: 'Atenção com a taxa em porcentagem', v: 'Use i na forma decimal: 5% → i = 0,05. Esquecer de dividir por 100 é erro clássico.' },
        { f: 'Taxa e tempo precisam estar na mesma unidade?', v: 'SIM! Taxa ao mês exige tempo em meses; taxa ao ano, tempo em anos. Converta antes de calcular.' },
        { f: 'Simples ou composto: qual rende mais no longo prazo?', v: 'Composto, sempre que t > 1 período. Em t = 1 período, os dois dão o mesmo montante.' },
        { f: 'O que é desconto comercial simples?', v: 'Desconto calculado sobre o valor NOMINAL (futuro): D = N·i·t. O valor atual = N − D.' },
      ],
    },
    {
      id: 'combinatoria', titulo: 'Análise Combinatória', emoji: '🎲', cor: '#8b5cf6',
      cards: [
        { f: 'Princípio Fundamental da Contagem', v: 'Se uma etapa tem m opções e a próxima n, o total de combinações é m × n. Multiplique as possibilidades de cada etapa.' },
        { f: 'Quando a ORDEM importa: arranjo ou combinação?', v: 'Ordem importa → ARRANJO (ou permutação). Ordem NÃO importa → COMBINAÇÃO. Essa é a decisão-chave da questão.' },
        { f: 'Fórmula da Permutação de n elementos', v: 'Pₙ = n! (fatorial). Ex.: anagramas de "AMOR" = 4! = 24.' },
        { f: 'Fórmula da Combinação', v: 'C(n,p) = n! / [p!·(n−p)!]. Ex.: escolher 2 de 5 = 5!/(2!·3!) = 10.' },
        { f: 'O que é n! (fatorial)?', v: 'Produto de todos os naturais de 1 até n. 5! = 5×4×3×2×1 = 120. Por definição, 0! = 1.' },
        { f: 'Anagramas com letras repetidas', v: 'Divida pelo fatorial das repetições. "ARARA": 5!/(3!·2!) = 10 (3 A e 2 R).' },
        { f: 'Pegadinha: "pelo menos um"', v: 'Use o complementar: total − (nenhum). Quase sempre é mais rápido que contar caso a caso.' },
      ],
    },
    {
      id: 'probabilidade', titulo: 'Probabilidade', emoji: '🍀', cor: '#10b981',
      cards: [
        { f: 'Definição clássica de probabilidade', v: 'P = casos favoráveis / casos possíveis. Resultado sempre entre 0 e 1 (ou 0% a 100%).' },
        { f: 'Probabilidade do evento complementar', v: 'P(não A) = 1 − P(A). "A chance de NÃO acontecer."' },
        { f: 'Probabilidade da UNIÃO (ou)', v: 'P(A ou B) = P(A) + P(B) − P(A e B). Se forem mutuamente exclusivos, P(A e B) = 0.' },
        { f: 'Probabilidade da INTERSEÇÃO (e) — eventos independentes', v: 'P(A e B) = P(A) × P(B). Ex.: duas caras seguidas = 1/2 × 1/2 = 1/4.' },
        { f: 'Pegadinha: "e" multiplica, "ou" soma', v: 'Eventos em sequência ("e") → multiplica. Eventos alternativos ("ou") → soma. Identifique o conectivo!' },
        { f: 'Probabilidade condicional P(A|B)', v: 'P(A|B) = P(A e B) / P(B). "Probabilidade de A sabendo que B ocorreu."' },
      ],
    },
    {
      id: 'estatistica', titulo: 'Estatística', emoji: '📊', cor: '#f43f5e',
      cards: [
        { f: 'O que é a MÉDIA aritmética?', v: 'Soma de todos os valores dividida pela quantidade de valores. É sensível a valores extremos.' },
        { f: 'O que é a MEDIANA?', v: 'O valor central com os dados em ORDEM. Se a quantidade for par, é a média dos dois centrais.' },
        { f: 'O que é a MODA?', v: 'O valor que mais se repete. Pode não existir (amodal) ou haver mais de uma (bimodal…).' },
        { f: 'Pegadinha: precisa ordenar para a mediana?', v: 'SEMPRE ordene antes de pegar o(s) valor(es) central(is). Esquecer isso derruba a questão.' },
        { f: 'O que é amplitude?', v: 'Maior valor − menor valor. Mede o "espalhamento" total dos dados.' },
        { f: 'Média ponderada: quando usar?', v: 'Quando os valores têm pesos diferentes: soma de (valor×peso) ÷ soma dos pesos. Ex.: notas com pesos.' },
        { f: 'Média, mediana e moda numa distribuição simétrica', v: 'Coincidem (média = mediana = moda). Em distribuições assimétricas, separam-se.' },
      ],
    },
    {
      id: 'geometria-plana', titulo: 'Geometria Plana (áreas)', emoji: '📐', cor: '#3b82f6',
      cards: [
        { f: 'Área do retângulo e do quadrado', v: 'Retângulo: base × altura. Quadrado: lado² (L²).' },
        { f: 'Área do triângulo', v: 'A = (base × altura) / 2.' },
        { f: 'Área e perímetro do círculo', v: 'Área = π·r². Perímetro (circunferência) = 2·π·r. Não troque um pelo outro!' },
        { f: 'Teorema de Pitágoras', v: 'No triângulo retângulo: hipotenusa² = cateto² + cateto² (a² = b² + c²).' },
        { f: 'Área do trapézio', v: 'A = (B + b)·h / 2 — soma das bases vezes a altura, dividido por 2.' },
        { f: 'Pegadinha: dobrar o lado dobra a área?', v: 'NÃO! A área quadruplica (cresce com o quadrado): lado ×2 → área ×4.' },
        { f: 'Soma dos ângulos internos de um polígono', v: 'S = (n − 2)·180°. Triângulo: 180°; quadrilátero: 360°.' },
      ],
    },
    {
      id: 'geometria-espacial', titulo: 'Geometria Espacial (volumes)', emoji: '🧊', cor: '#6366f1',
      cards: [
        { f: 'Volume do paralelepípedo e do cubo', v: 'Paralelepípedo: comprimento × largura × altura. Cubo: aresta³ (a³).' },
        { f: 'Volume do cilindro', v: 'V = π·r²·h (área da base circular × altura).' },
        { f: 'Volume do cone', v: 'V = (π·r²·h) / 3 — é 1/3 do cilindro de mesma base e altura.' },
        { f: 'Volume da esfera', v: 'V = (4/3)·π·r³.' },
        { f: 'Volume do prisma e da pirâmide', v: 'Prisma: área da base × altura. Pirâmide: (área da base × altura)/3.' },
        { f: 'Pegadinha: 1 litro equivale a quanto em cm³?', v: '1 L = 1 dm³ = 1000 cm³. E 1 m³ = 1000 L. Conversões caem muito!' },
      ],
    },
    {
      id: 'unidades', titulo: 'Unidades & Medidas', emoji: '📏', cor: '#0ea5e9',
      cards: [
        { f: 'Como converter metros para centímetros?', v: 'Cada degrau para a DIREITA (unidade menor) multiplica por 10. m → dm → cm → mm. 1 m = 100 cm.' },
        { f: 'Área: como muda a conversão?', v: 'De ×100 em ×100 (cada degrau é 10² ). 1 m² = 10 000 cm².' },
        { f: 'Volume: como muda a conversão?', v: 'De ×1000 em ×1000 (cada degrau é 10³ ). 1 m³ = 1 000 000 cm³.' },
        { f: 'Quantos minutos tem 2,5 horas?', v: '2,5 × 60 = 150 minutos. (Cuidado: 2,5 h NÃO é 2 h 50 min, é 2 h 30 min.)' },
        { f: '1 tonelada em quilos; 1 kg em gramas', v: '1 t = 1000 kg; 1 kg = 1000 g. Logo 1 t = 1 000 000 g.' },
        { f: 'Pegadinha: km/h para m/s', v: 'Divida por 3,6. Ex.: 72 km/h ÷ 3,6 = 20 m/s. (Para m/s → km/h, multiplique por 3,6.)' },
      ],
    },
    {
      id: 'logica', titulo: 'Raciocínio Lógico', emoji: '🧠', cor: '#eab308',
      cards: [
        { f: 'Tabela-verdade da conjunção (E / ∧)', v: 'Só é VERDADEIRA quando AS DUAS proposições são verdadeiras. Em qualquer outro caso, falsa.' },
        { f: 'Tabela-verdade da disjunção (OU / ∨)', v: 'Só é FALSA quando AS DUAS são falsas. Basta uma verdadeira para ser verdadeira.' },
        { f: 'Quando o condicional (se… então / →) é FALSO?', v: 'Só quando a 1ª (antecedente) é V e a 2ª (consequente) é F. "Verdadeiro leva a falso" = mentira.' },
        { f: 'Negação de "todo A é B"', v: '"Existe ao menos um A que NÃO é B" (algum A não é B). Negar "todo" vira "algum… não".' },
        { f: 'Negação de "p e q" (Leis de De Morgan)', v: '¬(p ∧ q) = ¬p ∨ ¬q. E ¬(p ∨ q) = ¬p ∧ ¬q. Nega cada uma e troca E↔OU.' },
        { f: 'Contrapositiva de "se p então q"', v: '"Se ¬q então ¬p" — é LOGICAMENTE EQUIVALENTE ao original. Ferramenta poderosa em provas.' },
        { f: 'Pegadinha: o que é uma tautologia?', v: 'Proposição composta SEMPRE verdadeira, independentemente dos valores. (Contradição = sempre falsa.)' },
      ],
    },
  ];
})();
