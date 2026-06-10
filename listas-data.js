/* ============================================================
   PROFESSOR LEÃO — LISTAS DE QUESTÕES INTERATIVAS INTEGRADAS
   listas-data.js

   Listas que acompanham a plataforma, exibidas dentro das aulas
   por assunto (campo aulaIds — casa com o sufixo do id da aula,
   ex.: 'mat-06' vale para sd-pmba-mat-06, cfo-cbmba-mat-06 etc.).

   Carregar SEMPRE antes de usar PlQuestoes:
     <script src="listas-data.js"></script>
     <script src="questoes.js"></script>

   O admin pode editar qualquer uma delas na aba Questões — a
   versão editada sobrescreve a integrada (mesmo id).
   ============================================================ */

window.PL_SEED_LISTAS = [

  /* ── 1. Conjuntos Numéricos ─────────────────────────────── */
  {
    id: 'seed-conjuntos-numericos',
    titulo: 'Questões Interativas — Conjuntos Numéricos',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'facil',
    cursoId: '', aulaId: '', aulaIds: ['mat-01', 'mat-02', 'mb-01'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'Qual das alternativas apresenta APENAS números naturais?',
        opcoes: { A: '−2, 3, 5', B: '0, 7, 12', C: '1/2, 3, 8', D: '√2, 4, 9', E: '−1, 0, 6' },
        gabarito: 'B',
        explicacao: 'O conjunto dos naturais (N) reúne os inteiros não negativos: 0, 1, 2, 3… Negativos, frações e raízes não exatas ficam de fora.'
      },
      {
        num: 2,
        enunciado: 'O número −7 pertence a quais conjuntos numéricos?',
        opcoes: { A: 'Apenas aos naturais', B: 'Aos inteiros, racionais e reais', C: 'Apenas aos inteiros', D: 'Apenas aos racionais', E: 'Aos inteiros e reais, mas não aos racionais' },
        gabarito: 'B',
        explicacao: 'Todo inteiro pode ser escrito como fração (−7 = −7/1), logo é racional; e todo racional é real. Assim, −7 ∈ Z, Q e R.'
      },
      {
        num: 3,
        enunciado: 'Sobre o número 0,75, é correto afirmar que:',
        opcoes: { A: 'é irracional', B: 'pertence aos racionais', C: 'pertence aos inteiros', D: 'pertence aos naturais', E: 'não pertence aos reais' },
        gabarito: 'B',
        explicacao: '0,75 = 3/4 — é um decimal exato, portanto racional (e também real). Não é inteiro nem natural.'
      },
      {
        num: 4,
        enunciado: 'O número √2 é classificado como:',
        opcoes: { A: 'racional', B: 'inteiro', C: 'irracional', D: 'natural', E: 'não real' },
        gabarito: 'C',
        explicacao: '√2 ≈ 1,4142… é uma dízima não periódica: não pode ser escrita como fração. É irracional (e real).'
      },
      {
        num: 5,
        enunciado: 'A fração geratriz da dízima periódica 0,444… é:',
        opcoes: { A: '4/10', B: '4/9', C: '44/100', D: '4/99', E: '1/4' },
        gabarito: 'B',
        explicacao: 'Para período de um algarismo, a geratriz é o período sobre 9: 0,444… = 4/9. Verificação: 4 ÷ 9 = 0,444…'
      },
      {
        num: 6,
        enunciado: 'O oposto de −3 e o inverso de 2 são, respectivamente:',
        opcoes: { A: '3 e 1/2', B: '−3 e 2', C: '3 e −2', D: '1/3 e 1/2', E: '−3 e 1/2' },
        gabarito: 'A',
        explicacao: 'O oposto troca o sinal: −(−3) = 3. O inverso troca numerador e denominador: o inverso de 2 = 2/1 é 1/2.'
      }
    ]
  },

  /* ── 2. Teoria dos Conjuntos ────────────────────────────── */
  {
    id: 'seed-teoria-conjuntos',
    titulo: 'Questões Interativas — Teoria dos Conjuntos',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'medio',
    cursoId: '', aulaId: '', aulaIds: ['mat-08', 'mat-09', 'mb-07'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'Dados A = {1, 2, 3} e B = {2, 3, 4}, o conjunto A ∪ B possui quantos elementos?',
        opcoes: { A: '2', B: '3', C: '4', D: '5', E: '6' },
        gabarito: 'C',
        explicacao: 'A união reúne todos os elementos sem repetição: A ∪ B = {1, 2, 3, 4} → 4 elementos.'
      },
      {
        num: 2,
        enunciado: 'Com A = {1, 2, 3} e B = {2, 3, 4}, o conjunto A ∩ B é:',
        opcoes: { A: '{1}', B: '{2, 3}', C: '{1, 4}', D: '{1, 2, 3, 4}', E: '∅' },
        gabarito: 'B',
        explicacao: 'A intersecção contém apenas o que está nos DOIS conjuntos ao mesmo tempo: {2, 3}.'
      },
      {
        num: 3,
        enunciado: 'Ainda com A = {1, 2, 3} e B = {2, 3, 4}, a diferença A − B é:',
        opcoes: { A: '{1}', B: '{4}', C: '{2, 3}', D: '{1, 4}', E: '∅' },
        gabarito: 'A',
        explicacao: 'A − B mantém o que está em A e NÃO está em B. Sai o 2 e o 3 (comuns), sobra {1}.'
      },
      {
        num: 4,
        enunciado: 'Em uma pesquisa com 100 pessoas, 60 gostam de café, 45 gostam de chá e 20 gostam de ambos. Quantas pessoas não gostam de nenhuma das duas bebidas?',
        opcoes: { A: '5', B: '10', C: '15', D: '20', E: '25' },
        gabarito: 'C',
        explicacao: 'Café ou chá: 60 + 45 − 20 = 85 pessoas. Nenhum: 100 − 85 = 15. O diagrama de Venn evita contar os 20 duas vezes.'
      },
      {
        num: 5,
        enunciado: 'Quantos subconjuntos possui o conjunto {a, b, c}?',
        opcoes: { A: '3', B: '6', C: '7', D: '8', E: '9' },
        gabarito: 'D',
        explicacao: 'Um conjunto com n elementos tem 2ⁿ subconjuntos: 2³ = 8 (incluindo o vazio e o próprio conjunto).'
      },
      {
        num: 6,
        enunciado: 'Se n(A) = 12, n(B) = 9 e n(A ∩ B) = 5, então n(A ∪ B) é igual a:',
        opcoes: { A: '14', B: '15', C: '16', D: '21', E: '26' },
        gabarito: 'C',
        explicacao: 'Princípio da inclusão-exclusão: n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 12 + 9 − 5 = 16.'
      }
    ]
  },

  /* ── 3. Frações e Números Racionais ─────────────────────── */
  {
    id: 'seed-fracoes-racionais',
    titulo: 'Questões Interativas — Frações e Números Racionais',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'facil',
    cursoId: '', aulaId: '', aulaIds: ['mat-06', 'mb-03', 'cr-02'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'O resultado de 1/2 + 1/3 é:',
        opcoes: { A: '2/5', B: '1/5', C: '5/6', D: '2/6', E: '3/5' },
        gabarito: 'C',
        explicacao: 'MMC(2, 3) = 6. Então 1/2 = 3/6 e 1/3 = 2/6. Somando: 3/6 + 2/6 = 5/6.'
      },
      {
        num: 2,
        enunciado: 'O produto 3/4 × 2/5 é igual a:',
        opcoes: { A: '6/9', B: '3/10', C: '5/9', D: '6/10', E: '1/2' },
        gabarito: 'B',
        explicacao: 'Multiplica-se direto: (3×2)/(4×5) = 6/20. Simplificando por 2: 3/10.'
      },
      {
        num: 3,
        enunciado: 'A divisão (2/3) ÷ (4/9) resulta em:',
        opcoes: { A: '8/27', B: '2/3', C: '3/2', D: '4/3', E: '1/2' },
        gabarito: 'C',
        explicacao: 'Dividir é multiplicar pelo inverso: 2/3 × 9/4 = 18/12 = 3/2.'
      },
      {
        num: 4,
        enunciado: 'O número decimal 0,25 escrito como fração irredutível é:',
        opcoes: { A: '25/100', B: '5/20', C: '1/4', D: '2/5', E: '1/5' },
        gabarito: 'C',
        explicacao: '0,25 = 25/100. Simplificando por 25: 1/4 — fração irredutível (numerador e denominador primos entre si).'
      },
      {
        num: 5,
        enunciado: 'Qual das frações abaixo é a MAIOR?',
        opcoes: { A: '3/5', B: '2/3', C: '5/8', D: '7/12', E: '1/2' },
        gabarito: 'B',
        explicacao: 'Convertendo: 3/5 = 0,600; 2/3 ≈ 0,667; 5/8 = 0,625; 7/12 ≈ 0,583; 1/2 = 0,500. A maior é 2/3.'
      },
      {
        num: 6,
        enunciado: 'Uma garrafa contém 3/4 de litro de suco. Após beber 1/4 de litro, quanto resta?',
        opcoes: { A: '1/4 L', B: '1/3 L', C: '1/2 L', D: '2/3 L', E: '3/8 L' },
        gabarito: 'C',
        explicacao: 'Mesma base: 3/4 − 1/4 = 2/4 = 1/2 litro.'
      }
    ]
  },

  /* ── 4. Razão, Proporção e Porcentagem ──────────────────── */
  {
    id: 'seed-razao-proporcao-pct',
    titulo: 'Questões Interativas — Razão, Proporção e Porcentagem',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'medio',
    cursoId: '', aulaId: '', aulaIds: ['mat-14', 'mat-15', 'mb-05', 'cr-03'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'A razão entre 15 e 45, na forma irredutível, é:',
        opcoes: { A: '1/2', B: '1/3', C: '3/1', D: '1/5', E: '3/9' },
        gabarito: 'B',
        explicacao: '15/45 — dividindo ambos por 15: 1/3.'
      },
      {
        num: 2,
        enunciado: 'Se 3 operários constroem um muro em 12 dias, 6 operários (no mesmo ritmo) construirão o mesmo muro em:',
        opcoes: { A: '24 dias', B: '12 dias', C: '9 dias', D: '6 dias', E: '3 dias' },
        gabarito: 'D',
        explicacao: 'Grandezas inversamente proporcionais: dobrando os operários, o tempo cai pela metade → 12 ÷ 2 = 6 dias.'
      },
      {
        num: 3,
        enunciado: '20% de 350 é igual a:',
        opcoes: { A: '35', B: '50', C: '60', D: '70', E: '75' },
        gabarito: 'D',
        explicacao: '20% = 0,20. Então 0,20 × 350 = 70. Atalho: 10% é 35, logo 20% é 70.'
      },
      {
        num: 4,
        enunciado: 'Um produto custa R$ 80,00 e sofre aumento de 25%. O novo preço é:',
        opcoes: { A: 'R$ 95,00', B: 'R$ 100,00', C: 'R$ 105,00', D: 'R$ 110,00', E: 'R$ 120,00' },
        gabarito: 'B',
        explicacao: 'Aumento de 25% = multiplicar por 1,25: 80 × 1,25 = 100. (25% de 80 = 20; 80 + 20 = 100.)'
      },
      {
        num: 5,
        enunciado: 'Um item que custava R$ 200,00 foi vendido por R$ 150,00. O desconto concedido foi de:',
        opcoes: { A: '15%', B: '20%', C: '25%', D: '30%', E: '50%' },
        gabarito: 'C',
        explicacao: 'Desconto: 200 − 150 = 50. Percentual sobre o preço original: 50/200 = 0,25 = 25%.'
      },
      {
        num: 6,
        enunciado: 'Na proporção x/8 = 9/12, o valor de x é:',
        opcoes: { A: '4', B: '5', C: '6', D: '7', E: '8' },
        gabarito: 'C',
        explicacao: 'Multiplicação cruzada: 12x = 8 × 9 = 72 → x = 72 ÷ 12 = 6.'
      }
    ]
  },

  /* ── 5. PA, PG e Juros ──────────────────────────────────── */
  {
    id: 'seed-pa-pg-juros',
    titulo: 'Questões Interativas — PA, PG e Juros',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'medio',
    cursoId: '', aulaId: '', aulaIds: ['mat-03', 'mat-04', 'mat-25', 'mb-06'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'Em uma PA com primeiro termo a₁ = 5 e razão r = 3, o décimo termo (a₁₀) é:',
        opcoes: { A: '27', B: '30', C: '32', D: '35', E: '38' },
        gabarito: 'C',
        explicacao: 'Termo geral: aₙ = a₁ + (n − 1)·r → a₁₀ = 5 + 9 × 3 = 5 + 27 = 32.'
      },
      {
        num: 2,
        enunciado: 'A soma dos 10 primeiros termos da PA (2, 4, 6, 8, …) é:',
        opcoes: { A: '100', B: '105', C: '108', D: '110', E: '120' },
        gabarito: 'D',
        explicacao: 'a₁₀ = 2 + 9 × 2 = 20. Soma: Sₙ = (a₁ + aₙ)·n/2 = (2 + 20) × 10 ÷ 2 = 110.'
      },
      {
        num: 3,
        enunciado: 'Em uma PG com a₁ = 3 e razão q = 2, o quinto termo é:',
        opcoes: { A: '24', B: '32', C: '48', D: '64', E: '96' },
        gabarito: 'C',
        explicacao: 'Termo geral: aₙ = a₁ · qⁿ⁻¹ → a₅ = 3 × 2⁴ = 3 × 16 = 48.'
      },
      {
        num: 4,
        enunciado: 'Um capital de R$ 1.000,00 aplicado a juros SIMPLES de 2% ao mês rende, em 6 meses:',
        opcoes: { A: 'R$ 60,00', B: 'R$ 100,00', C: 'R$ 112,00', D: 'R$ 120,00', E: 'R$ 126,00' },
        gabarito: 'D',
        explicacao: 'Juros simples: J = C·i·t = 1000 × 0,02 × 6 = 120. Nos juros simples, o rendimento é sempre sobre o capital inicial.'
      },
      {
        num: 5,
        enunciado: 'R$ 1.000,00 aplicados a juros COMPOSTOS de 10% ao ano geram, após 2 anos, o montante de:',
        opcoes: { A: 'R$ 1.100,00', B: 'R$ 1.200,00', C: 'R$ 1.210,00', D: 'R$ 1.220,00', E: 'R$ 1.250,00' },
        gabarito: 'C',
        explicacao: 'M = C(1 + i)ᵗ = 1000 × 1,10² = 1000 × 1,21 = 1.210. Os juros do 2° ano incidem também sobre os juros do 1°.'
      },
      {
        num: 6,
        enunciado: 'Em uma PA, a₃ = 11 e a₇ = 23. A razão dessa progressão é:',
        opcoes: { A: '2', B: '3', C: '4', D: '5', E: '6' },
        gabarito: 'B',
        explicacao: 'De a₃ até a₇ são 4 "saltos" de razão: a₇ − a₃ = 4r → 23 − 11 = 12 = 4r → r = 3.'
      }
    ]
  },

  /* ── 6. Geometria Plana ─────────────────────────────────── */
  {
    id: 'seed-geometria-plana',
    titulo: 'Questões Interativas — Geometria Plana',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'medio',
    cursoId: '', aulaId: '', aulaIds: ['mat-19', 'mat-20', 'cr-05'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'A área de um retângulo de base 8 cm e altura 5 cm é:',
        opcoes: { A: '13 cm²', B: '26 cm²', C: '40 cm²', D: '45 cm²', E: '80 cm²' },
        gabarito: 'C',
        explicacao: 'Área do retângulo = base × altura = 8 × 5 = 40 cm². (26 seria o perímetro!)'
      },
      {
        num: 2,
        enunciado: 'Um triângulo retângulo tem catetos de 6 cm e 8 cm. A hipotenusa mede:',
        opcoes: { A: '9 cm', B: '10 cm', C: '12 cm', D: '14 cm', E: '48 cm' },
        gabarito: 'B',
        explicacao: 'Pitágoras: h² = 6² + 8² = 36 + 64 = 100 → h = 10 cm. É o famoso triângulo 6-8-10 (múltiplo do 3-4-5).'
      },
      {
        num: 3,
        enunciado: 'A área de um círculo de raio 3 cm é:',
        opcoes: { A: '3π cm²', B: '6π cm²', C: '9π cm²', D: '12π cm²', E: '18π cm²' },
        gabarito: 'C',
        explicacao: 'Área = π·r² = π × 3² = 9π cm². Cuidado: 6π seria o comprimento da circunferência (2πr).'
      },
      {
        num: 4,
        enunciado: 'A soma dos ângulos internos de um pentágono é:',
        opcoes: { A: '360°', B: '450°', C: '540°', D: '720°', E: '900°' },
        gabarito: 'C',
        explicacao: 'Soma = (n − 2) × 180° = (5 − 2) × 180° = 540°.'
      },
      {
        num: 5,
        enunciado: 'Um triângulo tem base 10 cm e altura 6 cm. Sua área é:',
        opcoes: { A: '16 cm²', B: '30 cm²', C: '32 cm²', D: '60 cm²', E: '120 cm²' },
        gabarito: 'B',
        explicacao: 'Área do triângulo = (base × altura) ÷ 2 = (10 × 6) ÷ 2 = 30 cm².'
      },
      {
        num: 6,
        enunciado: 'Se a área de um quadrado é 49 cm², seu perímetro é:',
        opcoes: { A: '14 cm', B: '21 cm', C: '28 cm', D: '49 cm', E: '196 cm' },
        gabarito: 'C',
        explicacao: 'Lado = √49 = 7 cm. Perímetro = 4 × 7 = 28 cm.'
      }
    ]
  },

  /* ── 7. Combinatória e Probabilidade ────────────────────── */
  {
    id: 'seed-combinatoria-prob',
    titulo: 'Questões Interativas — Combinatória e Probabilidade',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'dificil',
    cursoId: '', aulaId: '', aulaIds: ['mat-17', 'mat-18'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'O valor de 5! (cinco fatorial) é:',
        opcoes: { A: '20', B: '60', C: '100', D: '120', E: '720' },
        gabarito: 'D',
        explicacao: '5! = 5 × 4 × 3 × 2 × 1 = 120.'
      },
      {
        num: 2,
        enunciado: 'Quantos anagramas possui a palavra AMOR?',
        opcoes: { A: '12', B: '16', C: '24', D: '48', E: '256' },
        gabarito: 'C',
        explicacao: '4 letras distintas → permutação simples: 4! = 24 anagramas.'
      },
      {
        num: 3,
        enunciado: 'De um grupo de 5 pessoas, quantas duplas diferentes podem ser formadas?',
        opcoes: { A: '5', B: '10', C: '15', D: '20', E: '25' },
        gabarito: 'B',
        explicacao: 'A ordem não importa → combinação: C(5,2) = 5!/(2!·3!) = 10 duplas.'
      },
      {
        num: 4,
        enunciado: 'Ao lançar um dado comum, a probabilidade de sair um número PAR é:',
        opcoes: { A: '1/6', B: '1/3', C: '1/2', D: '2/3', E: '5/6' },
        gabarito: 'C',
        explicacao: 'Casos favoráveis: {2, 4, 6} = 3. Total: 6. P = 3/6 = 1/2.'
      },
      {
        num: 5,
        enunciado: 'Quantas senhas de 3 dígitos DISTINTOS podem ser formadas com os algarismos de 0 a 9?',
        opcoes: { A: '120', B: '504', C: '720', D: '900', E: '1000' },
        gabarito: 'C',
        explicacao: 'A ordem importa e não há repetição → arranjo: 10 × 9 × 8 = 720. (1000 seria COM repetição.)'
      },
      {
        num: 6,
        enunciado: 'Lançando duas moedas honestas, a probabilidade de obter DUAS caras é:',
        opcoes: { A: '1/2', B: '1/3', C: '1/4', D: '2/3', E: '3/4' },
        gabarito: 'C',
        explicacao: 'Espaço amostral: CC, CK, KC, KK (4 casos). Apenas CC é favorável → P = 1/4. Ou: 1/2 × 1/2 = 1/4.'
      }
    ]
  },

  /* ── 8. Funções do 1° e 2° Graus ────────────────────────── */
  {
    id: 'seed-funcoes',
    titulo: 'Questões Interativas — Funções do 1° e 2° Graus',
    materia: 'Matemática', fonte: 'Professor Leão', dificuldade: 'medio',
    cursoId: '', aulaId: '', aulaIds: ['mat-11', 'mat-12'],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: 'Se f(x) = 2x + 3, então f(4) é igual a:',
        opcoes: { A: '8', B: '9', C: '10', D: '11', E: '14' },
        gabarito: 'D',
        explicacao: 'Basta substituir: f(4) = 2 × 4 + 3 = 8 + 3 = 11.'
      },
      {
        num: 2,
        enunciado: 'O zero (raiz) da função f(x) = 3x − 12 é:',
        opcoes: { A: 'x = 2', B: 'x = 3', C: 'x = 4', D: 'x = 6', E: 'x = 12' },
        gabarito: 'C',
        explicacao: 'Zero da função: f(x) = 0 → 3x − 12 = 0 → 3x = 12 → x = 4.'
      },
      {
        num: 3,
        enunciado: 'As raízes da função f(x) = x² − 5x + 6 são:',
        opcoes: { A: '1 e 6', B: '2 e 3', C: '−2 e −3', D: '5 e 6', E: '−1 e 6' },
        gabarito: 'B',
        explicacao: 'Soma das raízes = 5 e produto = 6 → os números são 2 e 3. Verificação: (x−2)(x−3) = x² − 5x + 6 ✓'
      },
      {
        num: 4,
        enunciado: 'A coordenada x do vértice da parábola y = x² − 4x + 1 é:',
        opcoes: { A: 'x = 1', B: 'x = 2', C: 'x = −2', D: 'x = 4', E: 'x = −4' },
        gabarito: 'B',
        explicacao: 'xᵥ = −b/(2a) = −(−4)/(2 × 1) = 4/2 = 2.'
      },
      {
        num: 5,
        enunciado: 'Para f(x) = x², o valor de f(−3) é:',
        opcoes: { A: '−9', B: '−6', C: '6', D: '9', E: '3' },
        gabarito: 'D',
        explicacao: 'f(−3) = (−3)² = 9. Atenção ao sinal: o quadrado de um negativo é positivo.'
      },
      {
        num: 6,
        enunciado: 'A função afim cujo gráfico passa pelos pontos (0, 2) e (1, 5) é:',
        opcoes: { A: 'f(x) = 2x + 5', B: 'f(x) = 5x + 2', C: 'f(x) = 3x + 2', D: 'f(x) = 2x + 3', E: 'f(x) = x + 4' },
        gabarito: 'C',
        explicacao: 'Em x = 0, f(0) = 2 → coeficiente linear b = 2. Inclinação: (5 − 2)/(1 − 0) = 3 → f(x) = 3x + 2.'
      }
    ]
  }

];
