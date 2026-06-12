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
    titulo: 'Minissimulado — Revisão: Conjuntos Numéricos',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-01', 'mat-02', 'mb-01'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Considere as afirmações sobre os conjuntos numéricos:\nI. Toda dízima periódica é um número racional.\nII. A soma de um número racional com um irracional é sempre irracional.\nIII. Entre dois números racionais distintos sempre existe outro número racional.\nEstá correto o que se afirma em:",
        opcoes: { A: "I, apenas", B: "I e II, apenas", C: "II e III, apenas", D: "I, II e III", E: "III, apenas" },
        gabarito: 'D',
        explicacao: "I: toda dízima periódica tem fração geratriz — é racional. II: se racional + irracional desse racional, o irracional seria diferença de racionais (absurdo). III: a média de dois racionais é racional e está entre eles. Todas corretas — estilo clássico FCC de itens."
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
        enunciado: "Em uma operação, foram apreendidos documentos com os registros numéricos: −15; 0,333…; √16; √7 e 12/4. Sobre esses números, é correto afirmar que:",
        opcoes: { A: "todos são racionais", B: "apenas um deles é irracional", C: "dois deles não são números reais", D: "apenas dois deles são inteiros", E: "0,333… é irracional" },
        gabarito: 'B',
        explicacao: "√16 = 4 e 12/4 = 3 são inteiros (com −15, são TRÊS inteiros — cuidado com a alternativa D). 0,333… = 1/3 é racional. Só √7 é irracional: apenas um."
      },
      {
        num: 7,
        enunciado: 'Considere as afirmações:\nI. Todo número natural é inteiro.\nII. Todo número inteiro é racional.\nIII. Todo número real é racional.\nEstá correto o que se afirma APENAS em:',
        opcoes: { A: 'I', B: 'I e II', C: 'II e III', D: 'I e III', E: 'III' },
        gabarito: 'B',
        explicacao: 'I e II são verdadeiras (N ⊂ Z ⊂ Q). III é falsa: os irracionais (√2, π) são reais que NÃO são racionais. Pegadinha clássica de banca com palavra "todo".'
      },
      {
        num: 8,
        enunciado: 'O valor da expressão (−2)³ + |−5| é:',
        opcoes: { A: '−13', B: '−3', C: '3', D: '13', E: '−1' },
        gabarito: 'B',
        explicacao: '(−2)³ = −8 (expoente ímpar mantém o sinal) e |−5| = 5. Logo, −8 + 5 = −3.'
      },
      {
        num: 9,
        enunciado: 'Entre os números 0,5; −2; √9; π e 7/2, quantos são racionais?',
        opcoes: { A: '2', B: '3', C: '4', D: '5', E: '1' },
        gabarito: 'C',
        explicacao: '0,5 = 1/2 ✓; −2 ✓; √9 = 3 ✓ (raiz exata!); π é irracional ✗; 7/2 ✓. São 4 racionais — atenção: √9 parece irracional, mas é 3.'
      },
      {
        num: 10,
        enunciado: 'A fração geratriz da dízima periódica 2,777… é:',
        opcoes: { A: '27/10', B: '25/9', C: '28/9', D: '7/3', E: '23/9' },
        gabarito: 'B',
        explicacao: '2,777… = 2 + 0,777… = 2 + 7/9 = 18/9 + 7/9 = 25/9. Verificação: 25 ÷ 9 = 2,777…'
      }
    ]
  },

  /* ── 2. Teoria dos Conjuntos ────────────────────────────── */
  {
    id: 'seed-teoria-conjuntos',
    titulo: 'Minissimulado — Revisão: Teoria dos Conjuntos',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-08', 'mat-09', 'mb-07'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Em um concurso, 200 candidatos foram consultados sobre os materiais que utilizam: 120 estudam por videoaulas, 90 por apostilas e 50 usam os dois recursos. O número de candidatos que NÃO utiliza nenhum dos dois é:",
        opcoes: { A: "30", B: "40", C: "50", D: "60", E: "70" },
        gabarito: 'B',
        explicacao: "n(V ∪ A) = 120 + 90 − 50 = 160 usam pelo menos um. Nenhum: 200 − 160 = 40."
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
        enunciado: "Em uma pesquisa com 110 pessoas, 65 leem o jornal A, 45 leem o jornal B e 30 leem os dois. O número de pessoas que leem APENAS o jornal B é:",
        opcoes: { A: "10", B: "12", C: "15", D: "20", E: "30" },
        gabarito: 'C',
        explicacao: "\"Apenas B\" exclui a interseção: 45 − 30 = 15. Pegadinha clássica de banca: \"leem B\" (45) é diferente de \"leem APENAS B\" (15)."
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
      },
      {
        num: 7,
        enunciado: 'Em um batalhão com 80 policiais, 45 atuam no policiamento ostensivo, 30 no policiamento de trânsito e 12 atuam em ambos. Quantos policiais NÃO atuam em nenhuma dessas duas funções?',
        opcoes: { A: '15', B: '17', C: '20', D: '23', E: '12' },
        gabarito: 'B',
        explicacao: 'Ostensivo ou trânsito: 45 + 30 − 12 = 63. Fora das duas funções: 80 − 63 = 17. Problema contextualizado típico de FCC.'
      },
      {
        num: 8,
        enunciado: 'Se A ⊂ B (A está contido em B), então A ∩ B é igual a:',
        opcoes: { A: 'A', B: 'B', C: '∅', D: 'A ∪ B', E: 'B − A' },
        gabarito: 'A',
        explicacao: 'Se todo elemento de A também está em B, a parte comum entre os dois é exatamente A.'
      },
      {
        num: 9,
        enunciado: 'Sabendo que n(A ∪ B) = 50, n(A) = 32 e n(B) = 27, o número de elementos de A ∩ B é:',
        opcoes: { A: '5', B: '7', C: '9', D: '11', E: '15' },
        gabarito: 'C',
        explicacao: 'n(A ∩ B) = n(A) + n(B) − n(A ∪ B) = 32 + 27 − 50 = 9. A mesma fórmula da inclusão-exclusão, isolando a intersecção.'
      },
      {
        num: 10,
        enunciado: 'Se o conjunto A possui 4 elementos, o conjunto das partes de A — P(A) — possui quantos elementos?',
        opcoes: { A: '8', B: '12', C: '16', D: '24', E: '32' },
        gabarito: 'C',
        explicacao: 'P(A) reúne todos os subconjuntos de A: 2⁴ = 16, incluindo o conjunto vazio e o próprio A.'
      }
    ]
  },

  /* ── 3. Frações e Números Racionais ─────────────────────── */
  {
    id: 'seed-fracoes-racionais',
    titulo: 'Minissimulado — Revisão: Frações e Números Racionais',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-06', 'mb-03', 'cr-02'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Uma pessoa comprometeu 2/5 do salário com aluguel e 1/3 com alimentação. Sabendo que ainda restaram R$ 720,00, o salário dessa pessoa é de:",
        opcoes: { A: "R$ 2.200,00", B: "R$ 2.400,00", C: "R$ 2.700,00", D: "R$ 3.000,00", E: "R$ 3.200,00" },
        gabarito: 'C',
        explicacao: "Gastos: 2/5 + 1/3 = 6/15 + 5/15 = 11/15. Resto: 4/15 do salário = 720 → 1/15 = 180 → salário = 15 · 180 = R$ 2.700,00."
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
        enunciado: "O valor da expressão 0,666… + 0,5, escrito como fração irredutível, é:",
        opcoes: { A: "7/6", B: "6/7", C: "11/10", D: "1", E: "13/12" },
        gabarito: 'A',
        explicacao: "0,666… = 2/3 (período sobre 9). Então 2/3 + 1/2 = 4/6 + 3/6 = 7/6. As bancas adoram misturar dízima com fração na mesma conta."
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
      },
      {
        num: 7,
        enunciado: 'Um candidato acertou 3/5 das 80 questões de uma prova. O número de questões que ele ERROU foi:',
        opcoes: { A: '30', B: '32', C: '36', D: '44', E: '48' },
        gabarito: 'B',
        explicacao: 'Acertou 3/5 de 80 = 48 questões. Errou 80 − 48 = 32. Cuidado: a banca pergunta os ERROS, mas oferece 48 (os acertos) como alternativa-armadilha.'
      },
      {
        num: 8,
        enunciado: 'O valor de 2/3 de 3/4 de 120 é:',
        opcoes: { A: '50', B: '60', C: '70', D: '80', E: '90' },
        gabarito: 'B',
        explicacao: '3/4 de 120 = 90; depois 2/3 de 90 = 60. Em frações, "de" significa multiplicação.'
      },
      {
        num: 9,
        enunciado: 'O resultado de (1/2 + 1/4) ÷ (3/8) é:',
        opcoes: { A: '1/2', B: '1', C: '3/2', D: '2', E: '3' },
        gabarito: 'D',
        explicacao: '1/2 + 1/4 = 3/4. Depois: 3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2.'
      },
      {
        num: 10,
        enunciado: 'Em uma herança, 1/3 coube a Ana e 1/4 a Bruno. O restante, R$ 25.000,00, ficou para Carla. O valor total da herança era:',
        opcoes: { A: 'R$ 48.000', B: 'R$ 50.000', C: 'R$ 60.000', D: 'R$ 72.000', E: 'R$ 75.000' },
        gabarito: 'C',
        explicacao: 'Ana + Bruno: 1/3 + 1/4 = 7/12. Restante: 5/12 = 25.000 → 1/12 = 5.000 → total = 12 × 5.000 = R$ 60.000.'
      }
    ]
  },

  /* ── 4. Razão, Proporção e Porcentagem ──────────────────── */
  {
    id: 'seed-razao-proporcao-pct',
    titulo: 'Minissimulado — Revisão: Razão, Proporção e Porcentagem',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-14', 'mat-15', 'mb-05', 'cr-03'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Uma gratificação de R$ 2.750,00 será dividida entre três policiais em partes diretamente proporcionais aos seus tempos de serviço: 10, 15 e 30 anos. O policial mais antigo receberá:",
        opcoes: { A: "R$ 1.250,00", B: "R$ 1.400,00", C: "R$ 1.500,00", D: "R$ 1.600,00", E: "R$ 1.750,00" },
        gabarito: 'C',
        explicacao: "Soma das partes: 10 + 15 + 30 = 55. Cada parte: 2750 ÷ 55 = 50. O mais antigo: 30 · 50 = R$ 1.500,00."
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
        enunciado: "Em uma cidade, o número de furtos caiu 20% em 2024 e, em 2025, caiu mais 10% em relação ao ano anterior. A queda acumulada no período foi de:",
        opcoes: { A: "30%", B: "28%", C: "32%", D: "25%", E: "26%" },
        gabarito: 'B',
        explicacao: "Variações sucessivas multiplicam: 0,80 · 0,90 = 0,72 → restaram 72%, queda de 28%. Somar 20% + 10% = 30% é a pegadinha que a banca espera."
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
      },
      {
        num: 7,
        enunciado: 'Em um mapa na escala 1:50.000, a distância entre dois pontos é de 8 cm. A distância real entre eles é de:',
        opcoes: { A: '0,4 km', B: '4 km', C: '40 km', D: '400 km', E: '8 km' },
        gabarito: 'B',
        explicacao: '8 cm × 50.000 = 400.000 cm = 4.000 m = 4 km. Escala é uma razão — questão recorrente em provas FCC.'
      },
      {
        num: 8,
        enunciado: 'Seis máquinas produzem 1.200 peças em 5 dias. Em quantos dias 4 máquinas, no mesmo ritmo, produzirão 1.600 peças?',
        opcoes: { A: '8', B: '9', C: '10', D: '12', E: '15' },
        gabarito: 'C',
        explicacao: 'Regra de três composta: menos máquinas → mais dias (inversa: ×6/4); mais peças → mais dias (direta: ×1600/1200). Dias = 5 × 6/4 × 4/3 = 10.'
      },
      {
        num: 9,
        enunciado: 'Um produto sofreu aumento de 20% e, em seguida, desconto de 20% sobre o novo preço. Em relação ao preço original, o preço final ficou:',
        opcoes: { A: 'igual ao original', B: '4% maior', C: '4% menor', D: '2% menor', E: '2% maior' },
        gabarito: 'C',
        explicacao: '1,20 × 0,80 = 0,96 → o preço final é 96% do original, ou seja, 4% menor. Aumento e desconto de mesmo percentual NÃO se anulam — armadilha favorita das bancas.'
      },
      {
        num: 10,
        enunciado: 'A quantia de R$ 900,00 foi dividida entre Antônio e Bruna na razão de 2 para 7. Bruna recebeu:',
        opcoes: { A: 'R$ 200,00', B: 'R$ 450,00', C: 'R$ 630,00', D: 'R$ 700,00', E: 'R$ 720,00' },
        gabarito: 'D',
        explicacao: 'São 2 + 7 = 9 partes → cada parte vale 900 ÷ 9 = 100. Bruna: 7 × 100 = R$ 700,00.'
      }
    ]
  },

  /* ── 5. PA, PG e Juros ──────────────────────────────────── */
  {
    id: 'seed-pa-pg-juros',
    titulo: 'Minissimulado — Revisão: PA, PG e Juros',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-03', 'mat-04', 'mat-25', 'mb-06'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Um atleta iniciou o treinamento correndo 6 km no primeiro dia e, a cada dia, aumenta o percurso em 1,5 km. Ao final do 12º dia de treino, a distância TOTAL percorrida por ele terá sido de:",
        opcoes: { A: "22,5 km", B: "99 km", C: "142 km", D: "171 km", E: "186 km" },
        gabarito: 'D',
        explicacao: "PA com a₁ = 6 e r = 1,5: a₁₂ = 6 + 11 · 1,5 = 22,5. Soma: S₁₂ = 12 · (6 + 22,5)/2 = 171 km. A banca pergunta a SOMA, não o último termo (22,5 é distrator)."
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
        enunciado: "O número de compartilhamentos de uma publicação triplica a cada hora. Se às 10h ela tinha 5 compartilhamentos, às 14h terá:",
        opcoes: { A: "135", B: "245", C: "405", D: "1.215", E: "60" },
        gabarito: 'C',
        explicacao: "PG de razão 3 em 4 horas: 5 · 3⁴ = 5 · 81 = 405. Contar 5 horas (3⁵) levaria ao distrator 1.215."
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
      },
      {
        num: 7,
        enunciado: 'Quantos múltiplos de 7 existem entre 100 e 300?',
        opcoes: { A: '27', B: '28', C: '29', D: '30', E: '26' },
        gabarito: 'B',
        explicacao: 'É uma PA de razão 7: primeiro múltiplo após 100 é 105; último antes de 300 é 294. n = (294 − 105)/7 + 1 = 27 + 1 = 28. Não esqueça o "+1"!'
      },
      {
        num: 8,
        enunciado: 'A soma da PG infinita 8 + 4 + 2 + 1 + … é igual a:',
        opcoes: { A: '14', B: '15', C: '16', D: '18', E: 'não existe' },
        gabarito: 'C',
        explicacao: 'PG com razão q = 1/2 (|q| < 1, soma existe): S = a₁/(1 − q) = 8/(1 − 1/2) = 16.'
      },
      {
        num: 9,
        enunciado: 'Um capital aplicado a juros simples de 3% ao mês rendeu R$ 240,00 em 8 meses. Esse capital era de:',
        opcoes: { A: 'R$ 800,00', B: 'R$ 900,00', C: 'R$ 1.000,00', D: 'R$ 1.200,00', E: 'R$ 2.400,00' },
        gabarito: 'C',
        explicacao: 'J = C·i·t → 240 = C × 0,03 × 8 = 0,24C → C = 240 ÷ 0,24 = R$ 1.000,00.'
      },
      {
        num: 10,
        enunciado: 'R$ 5.000,00 aplicados a juros compostos de 2% ao mês geram, após 3 meses, um montante de aproximadamente:',
        opcoes: { A: 'R$ 5.300,00', B: 'R$ 5.306,04', C: 'R$ 5.310,00', D: 'R$ 5.412,16', E: 'R$ 5.200,00' },
        gabarito: 'B',
        explicacao: 'M = 5.000 × 1,02³ = 5.000 × 1,061208 = R$ 5.306,04. Nos juros simples daria R$ 5.300,00 — a diferença é o "juros sobre juros".'
      }
    ]
  },

  /* ── 6. Geometria Plana ─────────────────────────────────── */
  {
    id: 'seed-geometria-plana',
    titulo: 'Minissimulado — Revisão: Geometria Plana',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-19', 'mat-20', 'cr-05'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Um terreno retangular tem perímetro de 70 m, e o comprimento excede a largura em 5 m. A área desse terreno é de:",
        opcoes: { A: "250 m²", B: "275 m²", C: "300 m²", D: "325 m²", E: "350 m²" },
        gabarito: 'C',
        explicacao: "c + l = 35 e c = l + 5 → l = 15 e c = 20. Área: 20 · 15 = 300 m²."
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
        enunciado: "Uma praça circular tem 31,4 m de contorno. Usando π = 3,14, a área dessa praça é de aproximadamente:",
        opcoes: { A: "62,8 m²", B: "78,5 m²", C: "88,4 m²", D: "94,2 m²", E: "157 m²" },
        gabarito: 'B',
        explicacao: "C = 2πr → 31,4 = 6,28r → r = 5 m. Área: πr² = 3,14 · 25 = 78,5 m². A banca dá o contorno (perímetro) para você descobrir o raio primeiro."
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
      },
      {
        num: 7,
        enunciado: 'Um terreno retangular mede 20 m por 30 m. Será construído um muro em todo o contorno, exceto em um portão de 4 m. O comprimento do muro será de:',
        opcoes: { A: '96 m', B: '100 m', C: '104 m', D: '90 m', E: '86 m' },
        gabarito: 'A',
        explicacao: 'Perímetro: 2 × (20 + 30) = 100 m. Tirando o portão: 100 − 4 = 96 m. Problema prático típico de prova.'
      },
      {
        num: 8,
        enunciado: 'Um poste de 6 m projeta uma sombra de 4 m. No mesmo instante, um prédio projeta uma sombra de 10 m. A altura do prédio é:',
        opcoes: { A: '12 m', B: '14 m', C: '15 m', D: '16 m', E: '18 m' },
        gabarito: 'C',
        explicacao: 'Semelhança de triângulos: 6/4 = h/10 → h = 60/4 = 15 m. Sol na mesma posição = razões iguais.'
      },
      {
        num: 9,
        enunciado: 'Um losango tem diagonais medindo 10 cm e 24 cm. Sua área é:',
        opcoes: { A: '100 cm²', B: '110 cm²', C: '120 cm²', D: '240 cm²', E: '60 cm²' },
        gabarito: 'C',
        explicacao: 'Área do losango = (D × d) ÷ 2 = (24 × 10) ÷ 2 = 120 cm². (240 é a armadilha de quem esquece o ÷2.)'
      },
      {
        num: 10,
        enunciado: 'Os ângulos internos de um triângulo medem x, 2x e 3x. O maior deles vale:',
        opcoes: { A: '60°', B: '75°', C: '90°', D: '100°', E: '120°' },
        gabarito: 'C',
        explicacao: 'x + 2x + 3x = 180° → 6x = 180° → x = 30°. O maior é 3x = 90° — o triângulo é retângulo.'
      }
    ]
  },

  /* ── 7. Combinatória e Probabilidade ────────────────────── */
  {
    id: 'seed-combinatoria-prob',
    titulo: 'Minissimulado — Revisão: Combinatória e Probabilidade',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'dificil',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-17', 'mat-18'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Um cofre é aberto por uma senha de 4 algarismos DISTINTOS, formada apenas por algarismos ímpares. O número de senhas possíveis é:",
        opcoes: { A: "60", B: "96", C: "120", D: "240", E: "625" },
        gabarito: 'C',
        explicacao: "Ímpares: 1, 3, 5, 7, 9 (cinco opções). Distintos: 5 · 4 · 3 · 2 = 120. Sem a exigência de distintos seria 5⁴ = 625 (distrator E)."
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
        enunciado: "Em uma sala estão 5 soldados e 3 oficiais. Sorteando-se duas pessoas, uma após a outra e SEM reposição, a probabilidade de ambas serem soldados é:",
        opcoes: { A: "5/14", B: "25/64", C: "5/8", D: "15/28", E: "3/14" },
        gabarito: 'A',
        explicacao: "Probabilidade composta sem reposição: 5/8 · 4/7 = 20/56 = 5/14. Com reposição seria 25/64 (distrator B)."
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
      },
      {
        num: 7,
        enunciado: 'De um grupo de 6 policiais, serão escolhidos 1 comandante e 1 motorista (funções diferentes, pessoas diferentes). De quantas formas isso pode ser feito?',
        opcoes: { A: '15', B: '30', C: '36', D: '20', E: '11' },
        gabarito: 'B',
        explicacao: 'A ordem (função) importa → arranjo: 6 × 5 = 30. Se fossem funções iguais (comissão), seria C(6,2) = 15 — diferença clássica cobrada pelas bancas.'
      },
      {
        num: 8,
        enunciado: 'Quantos anagramas possui a palavra BAHIA?',
        opcoes: { A: '120', B: '60', C: '24', D: '30', E: '100' },
        gabarito: 'B',
        explicacao: '5 letras com o A repetido 2 vezes: 5!/2! = 120/2 = 60 anagramas. Letras repetidas dividem o fatorial.'
      },
      {
        num: 9,
        enunciado: 'Uma urna contém 4 bolas azuis e 6 vermelhas. Retirando-se uma bola ao acaso, a probabilidade de ela ser azul é:',
        opcoes: { A: '1/4', B: '2/5', C: '3/5', D: '1/2', E: '2/3' },
        gabarito: 'B',
        explicacao: 'P = favoráveis/total = 4/10 = 2/5 = 40%.'
      },
      {
        num: 10,
        enunciado: 'Lançando uma moeda honesta duas vezes, a probabilidade de sair PELO MENOS uma cara é:',
        opcoes: { A: '1/4', B: '1/2', C: '2/3', D: '3/4', E: '1' },
        gabarito: 'D',
        explicacao: '"Pelo menos uma" = 1 − P(nenhuma) = 1 − 1/4 = 3/4. O complementar resolve em segundos o que a contagem direta demora.'
      }
    ]
  },

  /* ── 8. Funções do 1° e 2° Graus ────────────────────────── */
  {
    id: 'seed-funcoes',
    titulo: 'Minissimulado — Revisão: Funções do 1° e 2° Graus',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'mini',
    cursoId: '', aulaId: '', aulaIds: ['mat-11', 'mat-12'],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "O custo de produção de x unidades de um produto é dado por C(x) = 250 + 12x, em reais. Com um orçamento de R$ 1.000,00, o número MÁXIMO de unidades que podem ser produzidas é:",
        opcoes: { A: "58", B: "60", C: "62", D: "63", E: "75" },
        gabarito: 'C',
        explicacao: "250 + 12x ≤ 1000 → 12x ≤ 750 → x ≤ 62,5. Como x é inteiro, máximo 62 unidades (63 estoura o orçamento — pegadinha do arredondamento)."
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
        enunciado: "A altura de um projétil, em metros, t segundos após o lançamento, é dada por h(t) = −5t² + 40t. A altura MÁXIMA atingida pelo projétil é de:",
        opcoes: { A: "40 m", B: "60 m", C: "75 m", D: "80 m", E: "90 m" },
        gabarito: 'D',
        explicacao: "Vértice: tᵥ = −b/2a = −40/(−10) = 4 s. Altura máxima: h(4) = −5·16 + 160 = 80 m."
      },
      {
        num: 6,
        enunciado: 'A função afim cujo gráfico passa pelos pontos (0, 2) e (1, 5) é:',
        opcoes: { A: 'f(x) = 2x + 5', B: 'f(x) = 5x + 2', C: 'f(x) = 3x + 2', D: 'f(x) = 2x + 3', E: 'f(x) = x + 4' },
        gabarito: 'C',
        explicacao: 'Em x = 0, f(0) = 2 → coeficiente linear b = 2. Inclinação: (5 − 2)/(1 − 0) = 3 → f(x) = 3x + 2.'
      },
      {
        num: 7,
        enunciado: 'Uma corrida de táxi custa R$ 5,00 de bandeirada mais R$ 2,50 por quilômetro rodado. Se uma corrida custou R$ 30,00, quantos quilômetros foram rodados?',
        opcoes: { A: '8', B: '9', C: '10', D: '11', E: '12' },
        gabarito: 'C',
        explicacao: 'f(x) = 2,5x + 5 = 30 → 2,5x = 25 → x = 10 km. Função afim aplicada a problema do cotidiano — formato favorito da FCC.'
      },
      {
        num: 8,
        enunciado: 'O valor MÍNIMO da função f(x) = x² − 6x + 8 é:',
        opcoes: { A: '−1', B: '1', C: '−2', D: '0', E: '−4' },
        gabarito: 'A',
        explicacao: 'yᵥ = −Δ/4a, com Δ = 36 − 32 = 4 → yᵥ = −4/4 = −1. Como a > 0 (concavidade para cima), o vértice é ponto de mínimo.'
      },
      {
        num: 9,
        enunciado: 'Para f(x) = 2ˣ, o valor de f(3) + f(0) é:',
        opcoes: { A: '6', B: '8', C: '9', D: '10', E: '16' },
        gabarito: 'C',
        explicacao: 'f(3) = 2³ = 8 e f(0) = 2⁰ = 1 (todo número não nulo elevado a zero vale 1). Soma: 9.'
      },
      {
        num: 10,
        enunciado: 'O valor de log₂ 32 é:',
        opcoes: { A: '4', B: '5', C: '6', D: '16', E: '2' },
        gabarito: 'B',
        explicacao: 'log₂ 32 pergunta: "2 elevado a quanto dá 32?" Como 2⁵ = 32, a resposta é 5.'
      }
    ]
  },

  /* ── 9. Lista de Exercícios — Lógica: Proposições e Equivalências (questões reais de prova) ── */
  {
    id: 'seed-lq-logica-proposicoes',
    titulo: "Lista de Exercícios — Lógica: Proposições e Equivalências",
    materia: 'Raciocínio Lógico', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "(IBFC · Soldado PM BA · 2020) Conjunções são proposições compostas em que há a presença do conectivo “e” e podem ser representadas pelo símbolo “^”. Sendo assim, assinale a alternativacorreta.",
        opcoes: { A: "Se P é verdadeira e Q é verdadeira, então P^Q é falsa", B: "Se P é verdadeira e Q é falsa, então P^Q é falsa", C: "Se P é falsa e Q é falsa, então P^Q é verdadeira", D: "Se P é falsa e Q é verdadeira, então P^Q é verdadeira", E: "P^Q só será verdadeira se P e Q forem falsas" },
        gabarito: 'B',
        explicacao: "A conjunção (∧) só é verdadeira quando as DUAS proposições são verdadeiras. Com Q falsa, P∧Q é falsa."
      },
      {
        num: 2,
        enunciado: "(IBFC · Soldado PM BA · 2020) Considere que os símbolos →, ↔, ^ e v representam os operadores lógicos “se…então”, “se e somente se”, “e” e “ou”, respectivamente. Analise as sentençasabaixo e dê valores Verdadeiro (V) ou Falso (F). ( ) (7 – 2 ÷ 2 = 5) v (3 > 2)( ) (3 + 2 = 4) ↔ (1 > 3)( ) (3 x 5 + 6 = 21) → (18 ÷ 3 - 1 = 7)( ) (4 x 4 + 3 = 19) ^ (9 - 2 = 7) Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
        opcoes: { A: "V, V, F, V", B: "F, V, F, V", C: "V, V, V, F", D: "V, F, F, V", E: "V, V, F, F" },
        gabarito: 'A',
        explicacao: "(7 − 2÷2 = 6 ≠ 5: F) ∨ (3>2: V) = V; (F) ↔ (F) = V; (21 = 21: V) → (5 ≠ 7: F) = F; (19 = 19: V) ∧ (7 = 7: V) = V. Sequência: V, V, F, V."
      },
      {
        num: 3,
        enunciado: "(IBFC · Soldado PM BA · 2017) Se o valor lógico de uma proposição p é verdade e o valor lógico de uma proposição q é falso, então é correto afirmar que o valor lógico:",
        opcoes: { A: "da conjunção entre p e q é falso", B: "da disjunção entre p e q é falso", C: "do bicondicional entre p e q é verdade", D: "do condicional entre p e q, nessa ordem, é verdade", E: "da negação entre a disjunção entre p e q é verdade" },
        gabarito: 'A',
        explicacao: "Com p = V e q = F: a conjunção p∧q é falsa (alternativa correta). A disjunção é V, o bicondicional é F, o condicional p→q é F e a negação da disjunção é F."
      },
      {
        num: 4,
        enunciado: "(FCC · Soldado PM BA · 2012) Admita que é verdadeira a proposição “Se Gabriela é bonita, então será eleita” . Nesse caso, também será verdadeira a proposição",
        opcoes: { A: "Todas as mulheres bonitas seriam eleitas.", B: "Se Gabriela não é bonita, então não será eleita.", C: "Gabriela pode ser eleita, mesmo sendo feia.", D: "Se Gabriela for eleita, então é bonita.", E: "Gabriela pode não ser eleita, mesmo sendo bonita." },
        gabarito: 'C',
        explicacao: "O condicional só garante o que ocorre quando o antecedente é verdadeiro. Nada impede Gabriela de ser eleita sem ser bonita — condicional não é \"se e somente se\"."
      },
      {
        num: 5,
        enunciado: "(IBFC · Soldado PM BA · 2020) Observe a disjunção: “Marcelo não gosta de futebol ou Bruno não gosta de natação”, assinale a alternativa correta que apresenta a negação dessa disjunção.",
        opcoes: { A: "Marcelo gosta de futebol e Bruno não gosta de natação", B: "Marcelo gosta de futebol se e somente se Bruno gosta de natação", C: "Ou Marcelo gosta de futebol ou Bruno gosta de natação", D: "Marcelo gosta de futebol e Bruno gosta de natação", E: "Marcelo não gosta de futebol e Bruno não gosta de natação" },
        gabarito: 'D',
        explicacao: "Negação da disjunção (De Morgan): ~(~p ∨ ~q) = p ∧ q → \"Marcelo gosta de futebol E Bruno gosta de natação\"."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Para atender, adequadamente, à população que recorre a um posto policial em busca de ajuda e proteção, os profissionais atuantes devem estar devidamentepreparados, devem ser éticos. Considere a proposição p: Se o Oficial da Polícia Militar não tem ética, então ele perde a confiança da população. Assim, é correto afirmar que a negação da proposição p é ~p: O Oficial da Polícia Militar",
        opcoes: { A: "perde a confiança da população se, e somente se, ele não tem ética.", B: "não perde a confiança da população e ele não tem ética.", C: "não perde a confiança da população ou não tem ética.", D: "perde a confiança da população e não tem ética.", E: "tem ética ou perde a confiança da população." },
        gabarito: 'B',
        explicacao: "A negação de \"se p, então q\" é \"p E não q\": mantém o antecedente e nega o consequente → \"não tem ética e não perde a confiança\"."
      },
      {
        num: 7,
        enunciado: "(IBFC · Soldado PM BA · 2017) A frase: “Se o soldado chegou atrasado, então não fez atividade física” é equivalente à frase:",
        opcoes: { A: "O soldado chegou atrasado e não fez atividade física", B: "O soldado chegou atrasado e fez atividade física", C: "O soldado chegou atrasado ou fez atividade física", D: "O soldado não chegou atrasado ou não fez atividade física", E: "O soldado chegou atrasado se, e somente se, não fez atividade física" },
        gabarito: 'D',
        explicacao: "Equivalência clássica da banca: p→q ≡ ~p ∨ q. \"Se chegou atrasado, então não fez atividade\" ≡ \"NÃO chegou atrasado OU não fez atividade física\"."
      },
      {
        num: 8,
        enunciado: "(FCC · Soldado PM BA · 2012) A negação da afirmação: “Estou com saúde e sou feliz” é",
        opcoes: { A: "Não estou com saúde ou sou feliz.", B: "Não estou com saúde ou não sou feliz.", C: "Não estou feliz e estou com saúde.", D: "Não estou com saúde e estou feliz.", E: "Estou com saúde ou não sou feliz." },
        gabarito: 'B',
        explicacao: "De Morgan: ~(p ∧ q) = ~p ∨ ~q → \"Não estou com saúde OU não sou feliz\"."
      },
      {
        num: 9,
        enunciado: "(FCC · Soldado PM BA · 2012) A negação lógica da proposição: \"Pedro é o mais velho da classe ou Jorge é o mais novo da classe\" é",
        opcoes: { A: "Pedro não è o mais novo da classe ou Jorge não é o mais velho da classe.", B: "Pedro é o mais velho da classe e Jorge não é o mais novo da classe.", C: "Pedro não é o mais velho da classe e Jorge não é o mais novo da classe.", D: "Pedro não é o mais novo da classe e Jorge não é o mais velho da classe.", E: "Pedro é o mais novo da classe ou Jorge é o mais novo da classe." },
        gabarito: 'C',
        explicacao: "Negação do \"ou\": negam-se as duas partes e troca-se por \"e\" → \"Pedro não é o mais velho E Jorge não é o mais novo\"."
      },
      {
        num: 10,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Após interrogar o suspeito de um delito, o entrevistador concluiu que “se o suspeito mentiu, então ele é culpado”. Sendo verdadeira tal conclusão, também é verdade que",
        opcoes: { A: "o suspeito mentiu.", B: "o suspeito é culpado.", C: "o suspeito não é culpado e mentiu.", D: "se o suspeito não é culpado, então ele não mentiu.", E: "se o suspeito não mentiu, então ele não é culpado." },
        gabarito: 'D',
        explicacao: "Todo condicional equivale à sua contrapositiva: p→q ≡ ~q→~p → \"se o suspeito não é culpado, então ele não mentiu\"."
      }
    ]
  },

  /* ── 10. Lista de Exercícios — Lógica: Argumentos e Problemas Lógicos (questões reais de prova) ── */
  {
    id: 'seed-lq-logica-argumentos',
    titulo: "Lista de Exercícios — Lógica: Argumentos e Problemas Lógicos",
    materia: 'Raciocínio Lógico', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "(FCC · Soldado PM BA · 2012) Se chover, então o jogo será adiado. Se chover e ventar, então o jogo será cancelado. Sabe-se que choveu. Pode-se certamente concluir que",
        opcoes: { A: "o jogo empatou,", B: "o jogo foi adiado.", C: "só aconteceu o primeiro tempo do jogo.", D: "o jogo aconteceu.", E: "o jogo foi cancelado." },
        gabarito: 'B',
        explicacao: "Choveu (V) + \"se chover, o jogo será adiado\" → modus ponens: o jogo foi adiado. O cancelamento exigiria saber se ventou — não se sabe."
      },
      {
        num: 2,
        enunciado: "(FCC · Soldado PM BA · 2012) Se João for trabalhar, então Maria fará o jantar. Se Maria não fizer o jantar, então Lucas passará fome. Maria não fez o jantar. Pode-se certamente concluir que",
        opcoes: { A: "Lucas fez o jantar.", B: "João foi trabalhar.", C: "Lucas não passou fome.", D: "João fez o jantar.", E: "Lucas passou fome." },
        gabarito: 'E',
        explicacao: "\"Se Maria não fizer o jantar, Lucas passará fome\" + \"Maria não fez o jantar\" → modus ponens: Lucas passou fome. Sobre João, conclui-se apenas que NÃO foi trabalhar."
      },
      {
        num: 3,
        enunciado: "(IBFC · Soldado PM BA · 2020) Considere a proposição: “Todo pesquisador é estudioso.” Assinale a alternativa que não apresenta uma negação da proposição anterior.",
        opcoes: { A: "Existe algum pesquisador que não é estudioso", B: "Algum pesquisador não é estudioso", C: "Pelo menos um pesquisador não é estudioso", D: "Existe pesquisador que não é estudioso", E: "Nenhum pesquisador é estudioso" },
        gabarito: 'E',
        explicacao: "A negação de \"todo A é B\" é \"existe A que não é B\" (basta um contraexemplo). \"NENHUM pesquisador é estudioso\" é afirmação muito mais forte — não é a negação."
      },
      {
        num: 4,
        enunciado: "(FCC · Soldado PM BA · 2012) Há um grupo de 13 meninos. Alguém diz: \"Todos esses meninos têm 13 anos de idade.” Para negar essa afirmação, o número mínimo de meninos que não pode ter13 anos de idade é:",
        opcoes: { A: "1.", B: "13.", C: "7.", D: "12.", E: "4" },
        gabarito: 'A',
        explicacao: "Para negar \"todos têm 13 anos\" basta UM menino com idade diferente. Negação de \"todo\" = \"pelo menos um não\"."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Em certa localidade, sabe-se que todos os militares têm porte de arma;nem todas as pessoas que têm porte de arma trabalham em quartéis. Com relação a essa localidade, alguém faz as seguintes afirmações: ( ) Somente militares trabalham em quartéis. ( ) É possível que existam militares que não trabalhem em quartéis. ( ) Algumas pessoas que trabalham em quartéis não têm porte de arma. Analisando-se tais afirmações e classificando-as como verdadeiras V ou falsas F, pode-se afirmar que, considerada de cima para baixo, a sequência correta é a",
        opcoes: { A: "V F F", B: "F V F", C: "F V V", D: "F F V", E: "V F V" },
        gabarito: 'C',
        explicacao: "I: nada garante que só militares trabalhem em quartéis (F). II: nem todos com porte estão em quartéis, então é possível haver militar fora (V). III: pode haver civil sem porte em quartel (V). Sequência: F V V."
      },
      {
        num: 6,
        enunciado: "(FCC · Soldado PM BA · 2009) Sejam as afirmações: – “Todo policial é forte.”– “Existem policiais altos.” Considerando que as duas afirmações são verdadeiras, então, com certeza, é correto afirmar que:",
        opcoes: { A: "Todo policial alto não é forte.", B: "Todo policial forte é alto.", C: "Existem policiais baixos e fracos.", D: "Algum policial alto não é forte.", E: "Algum policial forte é alto." },
        gabarito: 'E',
        explicacao: "Existem policiais altos, e TODO policial é forte — logo esses altos são fortes: \"algum policial forte é alto\" é conclusão necessária."
      },
      {
        num: 7,
        enunciado: "(FCC · Soldado PM BA · 2009) Certo dia, três policiais militares − Alceste, Belo e Guerra − foram designados para cumprir tarefas distintas entre si. Considere as seguintes informações: − seus tempos de serviço na Corporação eram: 12, 15 e 19 anos, não respectivamente; − as tarefas para as quais eles foram designados eram: patrulhamento de um bairro, acompanhamento de um evento e patrulhamento do trânsito em uma região; − a Alceste coube exercer o acompanhamento do evento; − na ocasião, Guerra tinha 19 anos de serviço na Corporação; − aquele que tinha 12 anos de serviço fez o patrulhamento do trânsito. Com base nas informações dadas, é correto afirmar que",
        opcoes: { A: "Alceste tinha 12 anos de serviço na Corporação.", B: "Belo tinha 12 anos de serviço na Corporação.", C: "Belo fez o patrulhamento do bairro.", D: "Alceste não tinha 15 anos de serviço na Corporação.", E: "Guerra fez o patrulhamento do trânsito." },
        gabarito: 'B',
        explicacao: "Guerra tem 19 anos. Alceste faz o evento, logo não fez o trânsito → não tem 12 anos → Alceste tem 15 e Belo tem 12 (e fez o trânsito); Guerra patrulhou o bairro."
      },
      {
        num: 8,
        enunciado: "(FCC · Soldado PM BA · 2007) Durante a perícia feita em uma residência assaltada, foram encontrados os seguintes vestígios que, com certeza, haviam sido deixados pelos assaltantes: uma lata vazia de refrigerante;uma lata vazia de cerveja;um fio de cabelo loiro;um toco de cigarro. Após a realização da perícia, a Polícia concluiu que os assaltantes eram apenas dois e que eles se encontravam entre cinco suspeitos − Alceste, Boni, Calunga, Dorival eEufrásio − cujas características são as seguintes: − Alceste: só bebe refrigerante, tem cabelos loiros e não fuma; − Boni: bebe cerveja e refrigerante, tem cabelos pretos e não fuma; − Calunga: não bebe refrigerante e nem cerveja, é ruivo e fuma cigarros; − Dorival: só bebe cerveja, tem cabelos loiros e não fuma; − Eufrásio: só bebe refrigerante, é totalmente careca e fuma cigarros. Com base nas informações dadas, é correto afirmar que os assaltantes eram",
        opcoes: { A: "Alceste e Boni.", B: "Dorival e Eufrásio.", C: "Boni e Calunga.", D: "Calunga e Dorival.", E: "Alceste e Eufrásio." },
        gabarito: 'B',
        explicacao: "Os vestígios exigem cobrir: cerveja + refrigerante + cabelo loiro + cigarro. Dorival (só cerveja, loiro) e Eufrásio (só refrigerante, careca, fumante) cobrem tudo sem contradição."
      },
      {
        num: 9,
        enunciado: "(FCC · Soldado PM BA · 2012) Considere três amigos, Roberto, Eduardo e Marcos cujas idades, em anos completos, são diferentes entre si. - Roberto diz: Eduardo é o mais velho entre nós três.- Marcos diz: Roberto não é o mais novo de nós três.- Eduardo diz: Marcos é o mais novo entre nós três. Sabendo que apenas um dos amigos não disse a verdade, a lista dos amigos, em ordem crescente das respectivas idades, é",
        opcoes: { A: "Eduardo, Roberto e Marcos.", B: "Roberto, Eduardo e Marcos.", C: "Marcos, Eduardo e Roberto.", D: "Marcos, Roberto e Eduardo.", E: "Eduardo, Marcos e Roberto." },
        gabarito: 'C',
        explicacao: "Teste a ordem crescente Marcos < Eduardo < Roberto: Roberto mente (Eduardo não é o mais velho), Marcos diz a verdade e Eduardo diz a verdade — exatamente um mentiroso. ✓"
      },
      {
        num: 10,
        enunciado: "(FCC · Soldado PM BA · 2007) Caetano, Gilberto e Eudes, soldados da Polícia Militar do Estado da Bahia, foram designados certo dia para o patrulhamento de trânsito em três bairros − A, B e C −de uma cidade. Indagados sobre seus locais de patrulhamento, forneceram as seguintes informações: − o soldado que vai patrulhar o bairro A disse que Caetano vai patrulhar B;− o soldado que vai patrulhar B disse chamar-se Gilberto;− o soldado que vai patrulhar C afirmou que Eudes vai patrulhar B. Como era sabido que apenas Caetano não mentiu, então os bairros que Caetano, Gilberto e Eudes fizeram patrulhamento em tal dia foram, respectivamente,",
        opcoes: { A: "A, B e C.", B: "A, C e B.", C: "B, C e A.", D: "C, A e B.", E: "C, B e A." },
        gabarito: 'D',
        explicacao: "Caetano é o único que diz a verdade. Na opção D (Caetano em C, Gilberto em A, Eudes em B): Gilberto (em A) mente, Eudes (em B) mente ao dizer que é Gilberto e Caetano (em C) diz a verdade. Tudo consistente."
      }
    ]
  },

  /* ── 11. Lista de Exercícios — Sequências e Lógica Aplicada (questões reais de prova) ── */
  {
    id: 'seed-lq-logica-sequencias',
    titulo: "Lista de Exercícios — Sequências e Lógica Aplicada",
    materia: 'Raciocínio Lógico', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: "(FCC · Soldado PM BA · 2012) Observe a sequência de números, na qual se passa de um número para o seguinte somando alternadamente -1 ou 6: 5; 4; 10; 9; 15; 14; 20; 19; 25; . . . Mantendo sempre a mesma regra, o resultado da subtração entre o 31º elemento da sequência e o 27º elemento é:",
        opcoes: { A: "10.", B: "1.", C: "4.", D: "6.", E: "20." },
        gabarito: 'A',
        explicacao: "Os termos das posições ímpares valem 5k: o 27º termo é 5·14 = 70 e o 31º é 5·16 = 80. Diferença: 80 − 70 = 10."
      },
      {
        num: 2,
        enunciado: "(FCC · Soldado PM BA · 2009) Os termos da sequência (25; 22; 11; 33; 30; 15; 45; 42; 21; 63; . . .) são obtidos segundo um determinado padrão. De acordo com esse padrão o décimo terceiro termo da sequência deverá ser um número",
        opcoes: { A: "não inteiro.", B: "ímpar.", C: "maior do que 80.", D: "divisível por 4.", E: "múltiplo de 11." },
        gabarito: 'C',
        explicacao: "O padrão se repete em ciclos: −3, ÷2, ×3. Continuando: 63, 60, 30, 90 — o 13º termo é 90, maior do que 80."
      },
      {
        num: 3,
        enunciado: "(FCC · Soldado PM BA · 2012) Na situação que vou descrever todos os envolvidos descendem de meu pai e de minha mãe. Tenho um irmão e duas irmãs e sou pai de duas crianças. Meu irmão tem dez sobrinhos. Minhas irmãs têm quantidades iguais de filhos, e eu tenho onze sobrinhos. Nessa situação, o número de primos de um dos filhos de uma de minhas irmãs é",
        opcoes: { A: "12.", B: "10.", C: "9.", D: "8.", E: "11." },
        gabarito: 'C',
        explicacao: "Meu irmão tem 10 sobrinhos → meus filhos (2) + filhos das irmãs = 10 → as irmãs têm 8 filhos (4 cada). Tenho 11 sobrinhos → meu irmão tem 3 filhos. Primos de um filho de uma irmã: 2 + 3 + 4 = 9."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Motivados pelo desejo de participar de uma seleção, alguns amigos seguiam concentrados: um na frente e quatro atrás, um atrás e quatro na frente, um entre doise dois, e cinco em linha. Logo, seguiam concentrados",
        opcoes: { A: "50 amigos.", B: "20 amigos", C: "15 amigos.", D: "10 amigos.", E: "5 amigos." },
        gabarito: 'E',
        explicacao: "Cinco amigos em fila única atendem a tudo: 1 na frente e 4 atrás, 1 atrás e 4 na frente, 1 entre dois e dois, e 5 em linha."
      },
      {
        num: 5,
        enunciado: "(FCC · Soldado PM BA · 2012) De um grupo A de 30 crianças é dito que não há apenas meninos. De um grupo B de 20 crianças é dito que não há apenas meninas. A partir dessas afirmações,pode-se afirmar que",
        opcoes: { A: "o número de meninas do grupo A é maior que o número de meninos do grupo B.", B: "são 15 as meninas do grupo A e 10 os meninos do grupo B.", C: "o número de meninos do grupo A é maior que o número de meninas do grupo B.", D: "há pelo menos uma menina em A e pelo menos um menino em B.", E: "há 10 meninos em A e 5 meninos em B." },
        gabarito: 'D',
        explicacao: "\"Não há apenas meninos\" garante ao menos UMA menina em A; \"não há apenas meninas\" garante ao menos UM menino em B. É só o que se pode afirmar com certeza."
      },
      {
        num: 6,
        enunciado: "(FCC · Soldado PM BA · 2009) Observe que na sentença abaixo há duas palavras sublinhadas e dois espaços em branco. Cachorro está para . . . . . assim como pernilongo está para . . . . . . Preenchidos corretamente os espaços, a primeira palavra deve ter com a segunda a mesma relação que a terceira tem com a quarta. Nessas condições, as respectivas palavras que devem ocupar as lacunas são:",
        opcoes: { A: "cadela − pernalonga", B: "pelo − garra", C: "mordida − ferrolhada", D: "latido − zumbido", E: "raiva − picada" },
        gabarito: 'D',
        explicacao: "Latido está para cachorro assim como zumbido está para pernilongo — relação animal → som característico."
      }
    ]
  },

  /* ── 12. Lista de Exercícios — Conjuntos, Naturais e Frações (questões reais de prova) ── */
  {
    id: 'seed-lq-aritmetica',
    titulo: "Lista de Exercícios — Conjuntos, Naturais e Frações",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-01", "mat-06", "mat-08", "mat-09", "mb-03", "mb-07", "cr-01", "cr-02"],
    total: 9,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Todos os funcionários de determinada empresa deverão fazer um curso de atualização por ela oferecido. Tal curso é composto por três módulos distintos eindependentes que poderão ser cursados simultaneamente ou não. Se cada módulo tiver uma taxa de participação de 70% dos funcionários, pode-se estimar o percentual mínimo de participação simultânea, nos três módulos, em",
        opcoes: { A: "10%.", B: "20%.", C: "25%.", D: "30%.", E: "40%." },
        gabarito: 'A',
        explicacao: "Princípio do pior caso: a participação simultânea mínima é 100% − 3×(100% − 70%) = 100% − 90% = 10%."
      },
      {
        num: 2,
        enunciado: "(FCC · Soldado PM BA · 2012) Sobre a apreciação dos sucos de abacaxi, caju e maracujá, foi feita uma enquete entre 14 pessoas obtendo-se algumas informações. Gostar de apenas um desses sucos, apenas uma pessoa gosta de cada um deles. Gostar dos três sucos, cinco são as pessoas que assim gostam. Há também os que gostam de apenas dois sabores de suco, sejam eles abacaxi e caju, abacaxi e maracujá e caju e maracujá. Sabendo que o suco mais apreciado é o de caju e o menos apreciado é o de maracujá, calcula-se que o número de apreciadores do suco de caju, nessa enquete, é",
        opcoes: { A: "11.", B: "8.", C: "12.", D: "9.", E: "10." },
        gabarito: 'A',
        explicacao: "\"Apenas um\": 3 pessoas; os três sucos: 5; sobram 6 para os pares. Distribuindo 3 + 1 + 2 para manter caju > abacaxi > maracujá: caju = 1 + 5 + 3 + 2 = 11."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Devido à grande incidência de casos de meningite e da gripe H1N1, foi feito um levantamento dentre 120 pessoas de uma comunidade quanto às vacinas que já haviam tomado. Desse total, constatou-se que 42 pessoas haviam sido vacinadas contra a meningite, 66 pessoas contra a gripe H1N1 e que 42 pessoas ainda não haviam tomado nenhuma das duas vacinas. Com base nesses dados, pode-se afirmar que a porcentagem de pessoas do grupo que tomou as duas vacinas é de",
        opcoes: { A: "40%", B: "36%", C: "32%", D: "28%", E: "25%" },
        gabarito: 'E',
        explicacao: "União: 120 − 42 (nenhuma) = 78. Interseção: 42 + 66 − 78 = 30 pessoas → 30/120 = 25%."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Em uma seleção para cursos no CFOPM, de certa cidade, foram abertas 300 vagas para o nível I e 100 vagas para o nível II. Sabe-se que houve 9000 inscrições para o nível I e a terça parte para o nível II. Nessas condições, pode-se concluir que",
        opcoes: { A: "a concorrência para o nível 1 foi maior do que a concorrência para o nível II.", B: "a concorrência para o nível I foi igual à concorrência para o nível II.", C: "a concorrência para o nível II foi de 200 candidatos por vaga.", D: "houve 150 candidatos por vaga para o nível II.", E: "houve 200 candidatos por vaga para o nível I." },
        gabarito: 'B',
        explicacao: "Concorrência nível I: 9000/300 = 30 por vaga; nível II: 3000/100 = 30 por vaga — iguais."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Como parte de sua preparação física, um atleta foi aconselhado por um nutricionista a acrescentar à sua dieta algum suplemento alimentar, como X ou Y, dos quais se tem as seguintes informações: X contém 2 unidades de fibras, 1 unidade de proteínas, 3 unidades de vitaminas e cada unidade desse suplemento custa r reais. Y contém 1 unidade de fibras, 2 unidades de proteínas, 2 unidades de vitaminas e cada unidade desse suplemento custa 2r reais. Sendo recomendada a ingestão diária mínima de 4 unidades de fibras, 5 unidades de proteínas e 8 unidades de vitaminas, pode-se afirmar que a despesa com os suplementos será mínima, se o número de unidades de X e de Y ingeridos forem, respectivamente, iguais a",
        opcoes: { A: "1 e 2.", B: "2 e 1.", C: "2 e 2.", D: "2 e 3.", E: "3 e 2." },
        gabarito: 'C',
        explicacao: "Teste das opções nas exigências (4 fibras, 5 proteínas, 8 vitaminas): (2,2) atende tudo com custo 2r + 4r = 6r — o menor entre as combinações viáveis."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Adicionando-se o menor inteiro positivo ao menor divisor inteiro de 8, em seguida, multiplicando-se pela raiz da equação 0,3x - 10 = 8, obtém-se, corretamente,",
        opcoes: { A: "360", B: "180", C: "- 420", D: "- 540", E: "- 600" },
        gabarito: 'C',
        explicacao: "Menor inteiro positivo = 1; menor divisor inteiro de 8 = −8; raiz de 0,3x − 10 = 8 → x = 60. Logo (1 + (−8)) · 60 = −420."
      },
      {
        num: 7,
        enunciado: "(IBFC · Soldado PM BA · 2017) Assinale a alternativa correta. Antônio gastou 50% de dois quintos do valor que possuía e ainda sobraram R$ 160,00 a ele. Nessas circunstâncias o valor gasto por Antônio foi:",
        opcoes: { A: "R$ 200,00", B: "R$ 160,00", C: "R$ 60,00", D: "R$ 80,00", E: "R$ 40,00" },
        gabarito: 'E',
        explicacao: "Gastou 50% de 2/5 = 1/5 do valor. Sobraram 4/5 = R$ 160 → tinha R$ 200 e gastou R$ 40."
      },
      {
        num: 8,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Em uma blitz, foram encontradas, no interior de um automóvel, duas garrafas, de mesma capacidade, cheias com uma mistura não identificada de bebidas alcoólicas.Após análise, verificou-se que uma das garrafas continha uma mistura das bebidas X e Y na razão de 1 para 2, enquanto a outra garrafa continha uma mistura das mesmas bebidas, porém na razão de 3 para 2. Despejando-se o conteúdo das duas garrafas em um terceiro recipiente, obter-se-á uma nova mistura de X e Y, na razão de",
        opcoes: { A: "7 para 8.", B: "5 para 4.", C: "3 para 4.", D: "2 para 1.", E: "1 para 1." },
        gabarito: 'A',
        explicacao: "Garrafas de volume V: X = V/3 + 3V/5 = 14V/15 e Y = 2V/3 + 2V/5 = 16V/15 → razão 14 para 16 = 7 para 8."
      },
      {
        num: 9,
        enunciado: "(UNEB · CFO PM BA · 2025) Os conjuntos numéricos abrangem diferentes classificações, como naturais, inteiros, racionais e irracionais, cada um com características distintas que os definem. Com base nessa divisão, identifique a alternativa que apresenta um número pertencente ao conjunto dos números irracionais.",
        opcoes: { A: "2+3i", B: "1/2", C: "-3", D: "8", E: "√2" },
        gabarito: 'E',
        explicacao: "√2 é dízima não periódica — irracional. 2+3i é complexo, 1/2 é racional, −3 é inteiro e 8 é natural."
      }
    ]
  },

  /* ── 13. Lista de Exercícios — Porcentagem, Regra de Três e Juros (questões reais de prova) ── */
  {
    id: 'seed-lq-proporcao-financeira',
    titulo: "Lista de Exercícios — Porcentagem, Regra de Três e Juros",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-14", "mat-15", "mat-25", "mb-05", "cr-03"],
    total: 7,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Por medida de precaução, a administração de um prédio resolveu restringir o número de pessoas transportadas por um de seus elevadores a 9 mulheres ou 6 homens, de média compleição. Respeitando-se a restrição imposta, quando, no elevador, já se encontram 6 mulheres, é correto afirmar que, nesse elevador, ainda podem entrar, no máximo,",
        opcoes: { A: "quatro homens.", B: "dois homens.", C: "dois homens e uma mulher.", D: "dois homens e duas mulheres.", E: "um homem e duas mulheres." },
        gabarito: 'B',
        explicacao: "9 mulheres ⇔ 6 homens → 3 mulheres ⇔ 2 homens. Com 6 mulheres dentro, ainda cabem 3 mulheres, ou seja, no máximo 2 homens."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Segundo dados divulgados pela imprensa, o comércio de bens falsificados corresponde a 2% de todas as transações comerciais feitas no mundo, sendo 250 bilhões de dólares o valor do mercado de pirataria no planeta. Só em 2009, foram apreendidos pela Receita Federal no Brasil, de produtos falsos, o equivalente a 1,414 bilhões de reais. Tal montante, considerando-se que, atualmente, um dólar vale cerca de R$1,50, corresponde, em dólares, a um valor entre",
        opcoes: { A: "900 e 910 milhões.", B: "911 e 920 milhões.", C: "921 e 930 milhões.", D: "931 e 940 milhões.", E: "941 e 950 milhões." },
        gabarito: 'E',
        explicacao: "1,414 bilhões de reais ÷ 1,50 ≈ 942,7 milhões de dólares — entre 941 e 950 milhões."
      },
      {
        num: 3,
        enunciado: "(UNEB · CFO PM BA · 2023) O técnico de um determinado atleta constatou que ele acertou 70% dos 90 arremessos que ele fez na cesta de basquete. Após fazer mais 30 arremessos, melhorouseu percentual de acertos para 75% do total de arremessos. Em seguida, fez mais 30 arremessos e seu percentual de acertos aumentou para 80% do total de arremessos. Do total de arremessos feitos, a quantidade de arremessos que ele acertou foi",
        opcoes: { A: "63", B: "80", C: "90", D: "120", E: "150" },
        gabarito: 'D',
        explicacao: "Total de arremessos: 90 + 30 + 30 = 150. Acertos finais: 80% de 150 = 120."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) O número de participantes em uma manifestação, após 3 horas de seu início, foi estimado em, aproximadamente, 1000 pessoas. Admitindo-se que esse número tenha aumentado 25% a cada hora, pode-se afirmar que, no início da manifestação, o número aproximado de participantes era igual a",
        opcoes: { A: "250.", B: "356.", C: "420.", D: "500.", E: "512." },
        gabarito: 'E',
        explicacao: "Voltando 3 horas: 1000 ÷ 1,25³ = 1000 ÷ 1,953125 = 512 pessoas."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Para que não haja redução nos seus vencimentos líquidos, após sua aposentadoria, um funcionário de determinada empresa optou pelo pagamento de umaprevidência privada, mediante débito automático em seu salário, ciente de que sobre o valor total T, correspondente a um ano de salários, o desconto para pagamentodessa previdência seria de p% sobre a parcela de T até R$30000,00, mais um desconto de (p + 3)% sobre a parcela de T que excedesse esse valor. Sabendo-se que, no ano passado, o funcionário teve um desconto total de (p + 0,4)% sobre T, para pagamento da previdência privada, pode-se afirmar que o valor de T, em milhares de reais, foi de, aproximadamente,",
        opcoes: { A: "26,5", B: "31,0", C: "34,6", D: "38,2", E: "40,5" },
        gabarito: 'C',
        explicacao: "30p + (T − 30)(p + 3) = T(p + 0,4) → 3T − 90 = 0,4T → T = 90/2,6 ≈ 34,6 mil reais."
      },
      {
        num: 6,
        enunciado: "(UNEB · CFO PM BA · 2025) Uma loja planeja investir R$ 1.000,00 em um fundo que rende juros simples de 5% ao mês para cobrir despesas sazonais no futuro. Após 4 meses, o gerente financeiro verificará o montante disponível para reinvestir no negócio. Qual será o valor acumulado ao final desse período?",
        opcoes: { A: "R$ 1.500,00", B: "R$ 1.300,00", C: "R$ 1.200,00", D: "R$ 1.250,00", E: "R$ 1.100,00" },
        gabarito: 'C',
        explicacao: "Juros simples: M = 1000 · (1 + 0,05 · 4) = 1000 · 1,20 = R$ 1.200,00."
      },
      {
        num: 7,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Um capital foi aplicado, durante 2 anos, à taxa de capitalização anual i, a juros compostos. Se o capital tivesse sido aplicado por mais um ano, o valor acumuladoteria aumentado R$216,32. Se, ao contrário, tivesse sido aplicado por menos um ano, o valor acumulado teria diminuído R$208,00. Nessas condições, pode-se afirmar que a taxa de juros pagos, nessa aplicação, foi igual a",
        opcoes: { A: "6,0%", B: "5,5%", C: "5,0%", D: "4,5%", E: "4,0%" },
        gabarito: 'E',
        explicacao: "A razão entre os acréscimos consecutivos é (1 + i): 216,32 / 208 = 1,04 → i = 4%."
      }
    ]
  },

  /* ── 14. Lista de Exercícios — Álgebra, Funções e Logaritmos (questões reais de prova) ── */
  {
    id: 'seed-lq-algebra-funcoes',
    titulo: "Lista de Exercícios — Álgebra, Funções e Logaritmos",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'dificil',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-04", "mat-11", "mat-12", "mat-13", "mat-16", "mb-06"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Com a contínua evolução tecnológica, a cada dia os aparelhos eletrônicos são produzidos com processadores mais velozes, que conseguem realizar suas tarefas numtempo cada vez menor. Supondo-se que o tempo, em milésimos de segundo (milissegundos), que certo componente eletrônico leva para processar x bits, seja dado por T(x) = log₈(x) e considerando-se log 2 = 0,30, pode-se concluir que 250 bits serão processados em, aproximadamente,",
        opcoes: { A: "2,66 milissegundos.", B: "3,86 milissegundos.", C: "4,22 milissegundos.", D: "5,02 milissegundos.", E: "6,00 milissegundos." },
        gabarito: 'A',
        explicacao: "T = log₈(250) = log 250 / log 8. log 250 = 3 − 2·0,30 = 2,40; log 8 = 3·0,30 = 0,90 → 2,40/0,90 ≈ 2,66 ms."
      },
      {
        num: 2,
        enunciado: "(IBFC · Soldado PM BA · 2017) Assinale a alternativa correta. O nono termo da sequência lógica 3, - 6, 12, -24, ... , representa o total de candidatos presentes num concurso público. Se 210 desses candidatos foram aprovados,então o total de candidatos reprovados foi de:",
        opcoes: { A: "1426", B: "878", C: "558", D: "768", E: "174" },
        gabarito: 'C',
        explicacao: "PG de razão −2: a₉ = 3 · (−2)⁸ = 768 presentes. Reprovados: 768 − 210 = 558."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Apesar de não ser um investimento de alta rentabilidade, a caderneta de poupança garante que as pessoas tenham um fundo de reserva com alguma atualização ealta liquidez. Se uma caderneta de poupança remunera a aplicação de um capital C à taxa nominal de 6% a.a. capitalizada mensalmente, no regime de juros compostos, pode-se afirmar que os montantes obtidos, a cada mês do período de aplicação, formam uma",
        opcoes: { A: "progressão aritmética de razão 0,005.", B: "progressão aritmética de razão 1,005.", C: "progressão geométrica de razão 0,005.", D: "progressão geométrica de razão 1,005.", E: "sequência que não é progressão aritmética, nem progressão geométrica." },
        gabarito: 'D',
        explicacao: "Taxa nominal 6% a.a. capitalizada mensalmente = 0,5% a.m. Em juros compostos, cada montante é o anterior × 1,005 → PG de razão 1,005."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Uma empresa constatou, em outubro de 2009, um déficit em suas finanças, pois, para uma receita de R$ 160.000,00, teve uma despesa de R$ 200.000,00. Tentando se recuperar dos prejuízos, estabeleceu metas na perspectiva de aumentar mensalmente sua receita, segundo uma progressão geométrica de razão q = 5/4, e aumentar a despesa mensal segundo uma progressão aritmética de razão r = R$ 45.000,00. Admitindo-se que as metas foram alcançadas, pode-se afirmar que o primeiro mês em que a receita superou a despesa foi",
        opcoes: { A: "dezembro de 2009.", B: "janeiro de 2010.", C: "fevereiro de 2010.", D: "março de 2010.", E: "abril de 2010." },
        gabarito: 'C',
        explicacao: "Receita: 160·(5/4)ⁿ; despesa: 200 + 45n (milhares). Em n = 4 meses: 390,6 > 380 — primeiro mês: fevereiro de 2010."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Segundo dados do IBGE, em 2006, aproximadamente 9,0% da bancada eleita para a Câmara Federal era composta por mulheres. Supondo-se que, em 2010, esse número cresça para 12,5% e que essa porcentagem varie linearmente com o tempo, pode-se estimar que as mulheres serão maioria na Câmara Federal a partir das eleições de",
        opcoes: { A: "2066", B: "2062", C: "2058", D: "2054", E: "2048" },
        gabarito: 'D',
        explicacao: "De 9% (2006) para 12,5% (2010): +3,5% a cada 4 anos. 12,5 + 3,5k > 50 → k > 10,7 → 11 eleições depois: 2010 + 44 = 2054."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Uma pessoa teve furtada sua carteira com 12 cédulas e, ao prestar queixa na delegacia, declarou haver uma cédula de R$20,00, algumas de R$5,00 e outras de R$10,00, mas não soube precisar o valor total. Admitindo-se que o quadrado do número de cédulas de R$5,00 seja menor do que o número total das demais, é correto afirmar que a quantia mínima que a pessoa poderia ter, em reais, na carteira seria igual a",
        opcoes: { A: "100", B: "105", C: "110", D: "115", E: "120" },
        gabarito: 'E',
        explicacao: "x = nº de cédulas de R$ 5: x² < 12 − x → x ≤ 2. Quantia mínima com x = 2: 20 + 2·5 + 9·10 = R$ 120."
      },
      {
        num: 7,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Visando ampliar suas instalações, o setor de restauração da Polícia Militar aplicou um capital C em um fundo de investimentos, que paga juros compostos continuamente, de 1,5% ao mês, sendo o montante, ao final de t meses, calculado pela expressão M(t) = C · e^(0,015·t). Considerando-se ln 2 = 0,69, é correto estimar-se o tempo necessário para que esse capital seja duplicado em, aproximadamente,",
        opcoes: { A: "22 meses.", B: "30 meses.", C: "38 meses.", D: "46 meses.", E: "54 meses." },
        gabarito: 'D',
        explicacao: "Para duplicar: e^(0,015t) = 2 → 0,015t = ln 2 = 0,69 → t = 46 meses."
      },
      {
        num: 8,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Segundo as leis brasileiras de trânsito, são considerados infratores os motoristas que dirijam estando no organismo com uma concentração superior a 0,6 grama de álcool por litro de sangue, o que equivale a uma lata de cerveja. Admite-se que a quantidade, em g/L, de álcool remanescente no organismo de uma pessoa, a partir do instante t, em horas, em que ela pare de beber, pode ser estimado através da expressão R(t) = k · (0,5)^(t/2). Ingerindo 5 latas de cerveja, uma após outra e, desejando sair, imediatamente, ao volante do seu veículo, um motorista foi aconselhado, por amigos, a aguardar o tempo mínimo necessário para que não infrinja a lei. Considerando-se log 2 = 0,30, pode-se concluir que esse tempo é de",
        opcoes: { A: "4h00min", B: "4h40min", C: "5h00min", D: "6h00min", E: "6h48min" },
        gabarito: 'B',
        explicacao: "5 latas → k = 5 · 0,6 = 3 g/L. Exige-se 3·(0,5)^(t/2) ≤ 0,6 → (0,5)^(t/2) ≤ 0,2 → t = 2 · log 5/log 2 = 2 · 0,70/0,30 ≈ 4,67 h = 4h40min."
      },
      {
        num: 9,
        enunciado: "(UNEB · CFO PM BA · 2025) Em uma fábrica, dois setores precisam compartilhar recursos de maneira que o total de recursos alocados, representado por x+y=6, seja distribuído igualmente entreos dois setores. Além disso, uma auditoria verificou que a alocação dobrada desses recursos, representada por 2x+2y=12, também precisa ser validada. Considerando o contexto, quantas soluções existem para esse sistema de equações?",
        opcoes: { A: "Nenhuma.", B: "Infinitas.", C: "Dez.", D: "Duas.", E: "Uma." },
        gabarito: 'B',
        explicacao: "A segunda equação é exatamente o dobro da primeira — mesma reta. Sistema possível e indeterminado: infinitas soluções."
      },
      {
        num: 10,
        enunciado: "(FCC · Soldado PM BA · 2023) Em um fornecedor de uniformes, três camisas e duas calças custam, juntas, R$ 455,00, e um conjunto de calça e camisa do mesmo tipo custa R$ 190,00. O preço,em reais, para a compra de duas camisas e uma calça é:",
        opcoes: { A: "215", B: "240", C: "265", D: "280", E: "305" },
        gabarito: 'C',
        explicacao: "3c + 2p = 455 e c + p = 190 → c = 75 e p = 115. Duas camisas e uma calça: 150 + 115 = R$ 265."
      }
    ]
  },

  /* ── 15. Lista de Exercícios — Geometria e Trigonometria (questões reais de prova) ── */
  {
    id: 'seed-lq-geometria',
    titulo: "Lista de Exercícios — Geometria e Trigonometria",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'dificil',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-19", "mat-21", "mat-22", "mat-23", "mat-24", "cr-05"],
    total: 7,
    questoes: [
      {
        num: 1,
        enunciado: "(UNEB · CFO PM BA · 2025) Durante uma aula de trigonometria, o professor pediu aos alunos que analisassem ângulos em múltiplos de 90º e suas respectivas razões trigonométricas.Sabendo que sen(45°) = cos(45°) = √2/2, qual é o valor de sen²(45°) + cos²(45°)?",
        opcoes: { A: "√2", B: "√(2/", C: "√(1/", D: "0", E: "1" },
        gabarito: 'E',
        explicacao: "Identidade fundamental da trigonometria: sen²θ + cos²θ = 1, para qualquer ângulo."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) O menor valor que a função f(x) = sec²x − tg²x − cos x pode assumir é",
        opcoes: { A: "0", B: "-0,5", C: "-1", D: "-1,5", E: "-2" },
        gabarito: 'A',
        explicacao: "sec²x − tg²x = 1 (identidade), então f(x) = 1 − cos x. Como cos x ≤ 1, o menor valor é 1 − 1 = 0."
      },
      {
        num: 3,
        enunciado: "(FCC · Soldado PM BA · 2023) Uma rampa será construída para acesso ao primeiro andar de uma construção, que está a 2,5 m de altura em relação ao nível do terreno. Decidiu-se que a inclinação da rampa deve ser de 30° em relação ao nível do térreo. O comprimento dessa rampa será",
        opcoes: { A: "2 m", B: "3,5 m", C: "4 m", D: "4,5 m", E: "5 m" },
        gabarito: 'E',
        explicacao: "sen 30° = 0,5 = altura/rampa → rampa = 2,5 / 0,5 = 5 m."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Os reservatórios de forma cilíndrica, para água, são econômicos e de manutenção mais simples. Considerando-se que, em laboratório, o protótipo de um deles tem 6 cm de diâmetro e 12cm de altura, pode-se estimar que uma centena desses protótipos é capaz de armazenar, aproximadamente, x mℓ de água, e o valor de x é",
        opcoes: { A: "10800", B: "15496", C: "21624", D: "28168", E: "33912" },
        gabarito: 'E',
        explicacao: "V = πr²h = 3,14 · 9 · 12 ≈ 339,12 cm³ por protótipo. Uma centena: ≈ 33.912 mℓ."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Uma equipe de alunos do Curso de Formação de Oficiais da Polícia Militar desejava realizar algumas transformações na disposição do mobiliário interno da repartiçãoonde atuava. Os profissionais dessa equipe consideraram um prisma reto, como inspiração, e seus lados, como modelo para um biombo. Seja P um prisma reto, com 12cm de altura e base quadrada, de área medindo 16cm². Nessas condições, pode-se afirmar que a área lateral, em cm², do prisma é igual a",
        opcoes: { A: "192", B: "144", C: "96", D: "72", E: "48" },
        gabarito: 'A',
        explicacao: "Base quadrada de área 16 cm² → lado 4 cm. Área lateral = perímetro × altura = 16 × 12 = 192 cm²."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Em um certo país, as moedas são feitas do mesmo material, têm a mesma espessura e têm massa diretamente proporcional ao seu volume. Nesse país, as moedasde 10 centavos e 25 centavos têm massas, respectivamente, iguais a 4,8g e 7,5g, sendo o diâmetro da primeira igual a 20mm. Considerando-se uma moeda M tal que os raios da moeda de 10 centavos, de M e da moeda de 25 centavos, nessa ordem, formam uma progressão geométrica, pode-se afirmar que a moeda M tem diâmetro, em mm, aproximadamente igual a",
        opcoes: { A: "23,5", B: "23,1", C: "22,8", D: "22,3", E: "21,2" },
        gabarito: 'D',
        explicacao: "Massa ∝ volume ∝ r² (mesma espessura): r₂₅ = 10·√(7,5/4,8) = 12,5 mm. PG: rM = √(10 · 12,5) = √125 ≈ 11,18 → diâmetro ≈ 22,3 mm."
      },
      {
        num: 7,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Devido ao crescimento no número de ocorrências violentas em determinado bairro decidiu-se instalar um posto policial cuja localização foi escolhida, por razõesestratégicas, tomando-se como referência três regiões − R 1, R 2, R 3 − de maior incidência de eventos dessa natureza. Se R 1, R 2, R 3 forem representadas no plano cartesiano por (6,1), (6,9) e (13,1), respectivamente, então o posto deverá ser representado por um ponto P, o mais próximo possível de R 1 e R 2, equidistante destes e,além disso, a uma distância de 5u.c. de R 3. Assim sendo, a medida da distância do ponto P a R 2, em unidades de comprimento, deverá ser, aproximadamente, igual a",
        opcoes: { A: "4,0.", B: "4,7.", C: "5,3.", D: "5,6.", E: "6,2." },
        gabarito: 'D',
        explicacao: "P equidistante de R1(6,1) e R2(6,9) → y = 5. Distância 5 até R3(13,1): (x−13)² + 16 = 25 → x = 10. d(P, R2) = √(4² + 4²) = √32 ≈ 5,6."
      }
    ]
  },

  /* ── 16. Lista de Exercícios — Combinatória, Probabilidade e Estatística (questões reais de prova) ── */
  {
    id: 'seed-lq-combinatoria-estatistica',
    titulo: "Lista de Exercícios — Combinatória, Probabilidade e Estatística",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-17", "mat-18", "mat-26"],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: "(UNEB · CFO PM BA · 2025) Durante uma pesquisa estatística, um analista precisa calcular a média dos valores coletados em um experimento. Os números registrados foram 5, 10, 15 e 20. Qual é a média desses valores?",
        opcoes: { A: "12,5", B: "20", C: "17,5", D: "10", E: "15" },
        gabarito: 'A',
        explicacao: "Média aritmética: (5 + 10 + 15 + 20) ÷ 4 = 50 ÷ 4 = 12,5."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Dois grupos de estudantes foram submetidos a uma avaliação. Uma análise das notas obtidas por eles apontou, para o primeiro grupo, média e desvio padrão, respectivamente, iguais a M1 = 5 e D1 = 1,5 e, para o segundo grupo, média e desvio padrão iguais a M2 = 7 e D2 = 2,5. Por uma tarefa complementar, cada aluno do primeiro grupo teve um acréscimo de 20% à nota obtida na primeira avaliação e cada aluno do segundo grupo teve 1 ponto de acréscimo à referida nota. Sendo M1′ e D1′, M2′ e D2′ as médias e desvios padrão depois do acréscimo, no primeiro e segundo grupos, é correto afirmar que",
        opcoes: { A: "M1′ − M1 = 0,2 e D1′ − D1 = 0,2", B: "M1 < M1′ e D1 = D1′", C: "M2′ − M2 = 1 e D2′ − D2 = 1", D: "M2 < M2′ e D2 = D2′", E: "D1′ − D1 = 0,3 e D2′ − D2 = 1" },
        gabarito: 'D',
        explicacao: "Somar 1 ponto a todas as notas desloca a média (+1) mas NÃO altera a dispersão: M2 < M2′ e D2 = D2′. (No 1º grupo, multiplicar por 1,2 altera média E desvio.)"
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Supondo-se que cada um dos 120 candidatos inscritos em um concurso receba como código de identificação um anagrama distinto, da sigla CFOPM, pode-se estimar que a probabilidade de o anagrama impresso em um cartão escolhido aleatoriamente começar e terminar por consoante é igual a",
        opcoes: { A: "48%", B: "51%", C: "53%", D: "57%", E: "60%" },
        gabarito: 'E',
        explicacao: "CFOPM tem 4 consoantes e 1 vogal. Começar e terminar com consoante: 4 · 3 · 3! = 72 dos 120 anagramas → 72/120 = 60%."
      },
      {
        num: 4,
        enunciado: "(IBFC · Soldado PM BA · 2020) Em uma prateleira de uma biblioteca, deseja-se dispor 4 livros de maneiras distintas. Sabendo que a prateleira possui 10 espaços em que os livros podem ser colocados, assinale a alternativa que apresenta corretamente a quantidade de maneiras que esses livros podem ser dispostos nessa prateleira.",
        opcoes: { A: "3628800", B: "5040", C: "151200", D: "720", E: "24" },
        gabarito: 'B',
        explicacao: "Arranjo de 10 espaços tomados 4 a 4: 10 · 9 · 8 · 7 = 5040."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Após um assalto, várias testemunhas foram ouvidas, mas não houve consenso quanto à placa do automóvel usado pelo assaltante na sua fuga. Através dasinformações dessas testemunhas, concluiu-se que a placa do veículo era constituída de 3 vogais distintas e quatro algarismos também distintos, sendo que os dois últimos algarismos eram os dígitos 0 e 1. Com base nesses dados, pode-se afirmar que o número de veículos a ser investigados é",
        opcoes: { A: "560", B: "1120", C: "3360", D: "6720", E: "8240" },
        gabarito: 'D',
        explicacao: "Vogais distintas: 5·4·3 = 60. Os dois últimos algarismos são 0 e 1 (2 ordens) e os dois primeiros vêm dos 8 restantes: 8·7 = 56. Total: 60 · 56 · 2 = 6720."
      },
      {
        num: 6,
        enunciado: "(FCC · Soldado PM BA · 2009) Certo dia, um automóvel passou em alta velocidade por uma avenida, excedendo o limite ali permitido. Um policial de plantão no local tentou anotar o número daplaca do carro do infrator, mas não conseguiu fazê-lo por completo: memorizou apenas o prefixo (CSA) e, da parte numérica, lembrava somente que o algarismo da esquerda era ímpar e o da direita era par. Com base nessas informações, o total de possibilidades para o número da placa de tal automóvel é",
        opcoes: { A: "2500", B: "2000", C: "1000", D: "250", E: "100" },
        gabarito: 'A',
        explicacao: "Primeiro algarismo ímpar (5 opções), último par (5 opções), dois do meio livres (10 · 10): 5 · 10 · 10 · 5 = 2500."
      }
    ]
  }
];
