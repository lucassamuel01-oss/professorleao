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
    titulo: 'Lista de Questões — Conjuntos Numéricos',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — Teoria dos Conjuntos',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — Frações e Números Racionais',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — Razão, Proporção e Porcentagem',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — PA, PG e Juros',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — Geometria Plana',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — Combinatória e Probabilidade',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'dificil',
    tipoLista: 'lista',
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
    titulo: 'Lista de Questões — Funções do 1° e 2° Graus',
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
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
    titulo: "Banco de Questões — Lógica: Proposições e Equivalências",
    materia: 'Raciocínio Lógico', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 14,
    questoes: [
      {
        num: 1,
        enunciado: "(FCC · Soldado PM BA · 2009) Define-se sentença como qualquer oração que tem sujeito (o termo a respeito do qual se declara alguma coisa) e predicado (o que se declara sobre o sujeito). Na relação que segue há expressões e sentenças:\n1. Tomara que chova!\n2. Que horas são?\n3. Três vezes dois são cinco.\n4. Quarenta e dois detentos.\n5. Policiais são confiáveis.\n6. Exercícios físicos são saudáveis.\nDe acordo com a definição dada, é correto afirmar que, dos itens da relação acima, são sentenças APENAS os de números",
        opcoes: { A: "1, 3 e 5.", B: "2, 3 e 5.", C: "3, 5 e 6.", D: "4 e 6.", E: "5 e 6." },
        gabarito: 'C',
        explicacao: "Sentença exige sujeito + predicado (oração declarativa): 3, 5 e 6. Exclamação (1), pergunta (2) e expressão sem predicado (4) não são sentenças."
      },
      {
        num: 2,
        enunciado: "(IBFC · Soldado PM BA · 2020) Conjunções são proposições compostas em que há a presença do conectivo “e” e podem ser representadas pelo símbolo “^”. Sendo assim, assinale a alternativa correta.",
        opcoes: { A: "Se P é verdadeira e Q é verdadeira, então P^Q é falsa", B: "Se P é verdadeira e Q é falsa, então P^Q é falsa", C: "Se P é falsa e Q é falsa, então P^Q é verdadeira", D: "Se P é falsa e Q é verdadeira, então P^Q é verdadeira", E: "P^Q só será verdadeira se P e Q forem falsas" },
        gabarito: 'B',
        explicacao: "A conjunção (∧) só é verdadeira quando as DUAS proposições são verdadeiras. Com Q falsa, P∧Q é falsa."
      },
      {
        num: 3,
        enunciado: "(IBFC · Soldado PM BA · 2020) Considere que os símbolos →, ↔, ^ e v representam os operadores lógicos “se…então”, “se e somente se”, “e” e “ou”, respectivamente. Analise as sentenças abaixo e dê valores Verdadeiro (V) ou Falso (F).\n( ) (7 – 2 ÷ 2 = 5) v (3 > 2) ( ) (3 + 2 = 4) ↔ (1 > 3) ( ) (3 x 5 + 6 = 21) → (18 ÷ 3 - 1 = 7) ( ) (4 x 4 + 3 = 19) ^ (9 - 2 = 7) Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
        opcoes: { A: "V, V, F, V", B: "F, V, F, V", C: "V, V, V, F", D: "V, F, F, V", E: "V, V, F, F" },
        gabarito: 'A',
        explicacao: "(7 − 2÷2 = 6 ≠ 5: F) ∨ (3>2: V) = V; (F) ↔ (F) = V; (21 = 21: V) → (5 ≠ 7: F) = F; (19 = 19: V) ∧ (7 = 7: V) = V. Sequência: V, V, F, V."
      },
      {
        num: 4,
        enunciado: "(IBFC · Soldado PM BA · 2017) Se o valor lógico de uma proposição p é verdade e o valor lógico de uma proposição q é falso, então é correto afirmar que o valor lógico:",
        opcoes: { A: "da conjunção entre p e q é falso", B: "da disjunção entre p e q é falso", C: "do bicondicional entre p e q é verdade", D: "do condicional entre p e q, nessa ordem, é verdade", E: "da negação entre a disjunção entre p e q é verdade" },
        gabarito: 'A',
        explicacao: "Com p = V e q = F: a conjunção p∧q é falsa (alternativa correta). A disjunção é V, o bicondicional é F, o condicional p→q é F e a negação da disjunção é F."
      },
      {
        num: 5,
        enunciado: "(FCC · Soldado PM BA · 2012) Admita que é verdadeira a proposição “Se Gabriela é bonita, então será eleita” . Nesse caso, também será verdadeira a proposição",
        opcoes: { A: "Todas as mulheres bonitas seriam eleitas.", B: "Se Gabriela não é bonita, então não será eleita.", C: "Gabriela pode ser eleita, mesmo sendo feia.", D: "Se Gabriela for eleita, então é bonita.", E: "Gabriela pode não ser eleita, mesmo sendo bonita." },
        gabarito: 'C',
        explicacao: "O condicional só garante o que ocorre quando o antecedente é verdadeiro. Nada impede Gabriela de ser eleita sem ser bonita — condicional não é \"se e somente se\"."
      },
      {
        num: 6,
        enunciado: "(IBFC · Soldado PM BA · 2020) Observe as duas proposições P e Q apresentadas a seguir.\nP: Ana é engenheira.\nQ: Bianca é arquiteta.\nConsidere que Ana é engenheira somente se Bianca é arquiteta e, assinale a alternativa correta.",
        opcoes: { A: "Ana ser engenheira não implica Bianca ser arquiteta", B: "Ana ser engenheira é condição suficiente para Bianca ser arquiteta", C: "Uma condição necessária para Bianca ser arquiteta é Ana ser engenheira", D: "Ana é engenheira se e somente se Bianca não é arquiteta", E: "Uma condição necessária para Bianca ser arquiteta é Ana não ser engenheira" },
        gabarito: 'B',
        explicacao: "\"p somente se q\" traduz-se como p → q: Ana ser engenheira é condição SUFICIENTE para Bianca ser arquiteta (e Bianca arquiteta é necessária para Ana engenheira)."
      },
      {
        num: 7,
        enunciado: "(IBFC · Soldado PM BA · 2020) Observe a disjunção: “Marcelo não gosta de futebol ou Bruno não gosta de natação”, assinale a alternativa correta que apresenta a negação dessa disjunção.",
        opcoes: { A: "Marcelo gosta de futebol e Bruno não gosta de natação", B: "Marcelo gosta de futebol se e somente se Bruno gosta de natação", C: "Ou Marcelo gosta de futebol ou Bruno gosta de natação", D: "Marcelo gosta de futebol e Bruno gosta de natação", E: "Marcelo não gosta de futebol e Bruno não gosta de natação" },
        gabarito: 'D',
        explicacao: "Negação da disjunção (De Morgan): ~(~p ∨ ~q) = p ∧ q → \"Marcelo gosta de futebol E Bruno gosta de natação\"."
      },
      {
        num: 8,
        enunciado: "(UNEB · CFO CBM BA · 2019) A Lógica Matemática utiliza conectivos para relacionar proposições. Um conectivo de extrema importância na lógica é o condicional que representamos por uma seta ( → ). por p e q . A linguagem \"Se p , então q \" pode ser representada por p → q . A grafia til ( ~ ) serve para negar uma proposição. Então a proposição lógica ~ q → ~ p é chamada de contrapositiva da forma lógica p → q , da qual também é equivalente.\nUma equivalência da proposição lógica \"Se o cavalo estiver cansado, então ele perderá a corrida\" é",
        opcoes: { A: "o cavalo perdeu a corrida porque estava cansado.", B: "se o cavalo ganhou a corrida, então estava descansado.", C: "ou o cavalo estava cansado ou perdeu a corrida.", D: "se o cavalo estiver descansado, então ele ganhará a corrida.", E: "impossível o cavalo ganhar a corrida, se estiver cansado." },
        gabarito: 'B',
        explicacao: "Contrapositiva: nega os dois lados e inverte: \"Se o cavalo ganhou (não perdeu), então estava descansado (não cansado)\"."
      },
      {
        num: 9,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Para atender, adequadamente, à população que recorre a um posto policial em busca de ajuda e proteção, os profissionais atuantes devem estar devidamente preparados, devem ser éticos.\nConsidere a proposição p: Se o Oficial da Polícia Militar não tem ética, então ele perde a confiança da população. Assim, é correto afirmar que a negação da proposição p é ~p: O Oficial da Polícia Militar",
        opcoes: { A: "perde a confiança da população se, e somente se, ele não tem ética.", B: "não perde a confiança da população e ele não tem ética.", C: "não perde a confiança da população ou não tem ética.", D: "perde a confiança da população e não tem ética.", E: "tem ética ou perde a confiança da população." },
        gabarito: 'B',
        explicacao: "A negação de \"se p, então q\" é \"p E não q\": mantém o antecedente e nega o consequente → \"não tem ética e não perde a confiança\"."
      },
      {
        num: 10,
        enunciado: "(IBFC · Soldado PM BA · 2017) A frase: “Se o soldado chegou atrasado, então não fez atividade física” é equivalente à frase:",
        opcoes: { A: "O soldado chegou atrasado e não fez atividade física", B: "O soldado chegou atrasado e fez atividade física", C: "O soldado chegou atrasado ou fez atividade física", D: "O soldado não chegou atrasado ou não fez atividade física", E: "O soldado chegou atrasado se, e somente se, não fez atividade física" },
        gabarito: 'D',
        explicacao: "Equivalência clássica da banca: p→q ≡ ~p ∨ q. \"Se chegou atrasado, então não fez atividade\" ≡ \"NÃO chegou atrasado OU não fez atividade física\"."
      },
      {
        num: 11,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) De acordo com os conhecimentos sobre Lógica Matemática, é correto afirmar que a proposição “Não é verdade que se X participa da manifestação, então presencia atos de vandalismo” é logicamente equivalente a",
        opcoes: { A: "“É verdade que X participa da manifestação e presencia atos de vandalismo”.", B: "“É verdade que X participa da manifestação ou presencia atos de vandalismo”.", C: "“Não é verdade que X participa da manifestação ou não presencia atos de vandalismo”.", D: "“Não é verdade que X não participa da manifestação ou presencia atos de vandalismo”.", E: "“Não é verdade que X não participa da manifestação ou não presencia atos de vandalismo”." },
        gabarito: 'D',
        explicacao: "~(p→q) ≡ p ∧ ~q ≡ ~(~p ∨ q) → \"Não é verdade que X não participa da manifestação ou presencia atos de vandalismo\"."
      },
      {
        num: 12,
        enunciado: "(FCC · Soldado PM BA · 2012) A negação da afirmação: “Estou com saúde e sou feliz” é",
        opcoes: { A: "Não estou com saúde ou sou feliz.", B: "Não estou com saúde ou não sou feliz.", C: "Não estou feliz e estou com saúde.", D: "Não estou com saúde e estou feliz.", E: "Estou com saúde ou não sou feliz," },
        gabarito: 'B',
        explicacao: "De Morgan: ~(p ∧ q) = ~p ∨ ~q → \"Não estou com saúde OU não sou feliz\"."
      },
      {
        num: 13,
        enunciado: "(FCC · Soldado PM BA · 2012) A negação lógica da proposição: \"Pedro é o mais velho da classe ou Jorge é o mais novo da classe\" é",
        opcoes: { A: "Pedro não è o mais novo da classe ou Jorge não é o mais velho da classe.", B: "Pedro é o mais velho da classe e Jorge não é o mais novo da classe.", C: "Pedro não é o mais velho da classe e Jorge não é o mais novo da classe.", D: "Pedro não é o mais novo da classe e Jorge não é o mais velho da classe.", E: "Pedro é o mais novo da classe ou Jorge é o mais novo da classe." },
        gabarito: 'C',
        explicacao: "Negação do \"ou\": negam-se as duas partes e troca-se por \"e\" → \"Pedro não é o mais velho E Jorge não é o mais novo\"."
      },
      {
        num: 14,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Após interrogar o suspeito de um delito, o entrevistador concluiu que “se o suspeito mentiu, então ele é culpado”.\nSendo verdadeira tal conclusão, também é verdade que",
        opcoes: { A: "o suspeito mentiu.", B: "o suspeito é culpado.", C: "o suspeito não é culpado e mentiu.", D: "se o suspeito não é culpado, então ele não mentiu.", E: "se o suspeito não mentiu, então ele não é culpado." },
        gabarito: 'D',
        explicacao: "Todo condicional equivale à sua contrapositiva: p→q ≡ ~q→~p → \"se o suspeito não é culpado, então ele não mentiu\"."
      }
    ]
  },

  /* ── 10. Lista de Exercícios — Lógica: Argumentos e Problemas Lógicos (questões reais de prova) ── */
  {
    id: 'seed-lq-logica-argumentos',
    titulo: "Banco de Questões — Lógica: Argumentos e Problemas Lógicos",
    materia: 'Raciocínio Lógico', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 12,
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
        enunciado: "(CONSULTEC · CFO PM BA · 2010) No preparo de um determinado prato, os ingredientes M, N, P, Q e R devem ser utilizados de acordo com as seguintes regras:\nSe o ingrediente M for usado, então, necessariamente, P deverá ser usado.\nSe o ingrediente N for usado, então, necessariamente, Q e R deverão ser usados Se o ingrediente R for usado, então, necessariamente, M ou Q deverão ser usados.\nNessas condições, desejando-se usar exatamente três desses ingredientes, o número máximode opções distintas será",
        opcoes: { A: "2", B: "4", C: "6", D: "8", E: "10" },
        gabarito: 'B',
        explicacao: "Regras: M→P; N→(Q e R); R→(M ou Q). Trios válidos: {M,P,Q}, {M,P,R}, {P,Q,R} e {N,Q,R} → 4 opções."
      },
      {
        num: 4,
        enunciado: "(IBFC · Soldado PM BA · 2020) Considere a proposição:\n“Todo pesquisador é estudioso.” Assinale a alternativa que não apresenta uma negação da proposição anterior.",
        opcoes: { A: "Existe algum pesquisador que não é estudioso", B: "Algum pesquisador não é estudioso", C: "Pelo menos um pesquisador não é estudioso", D: "Existe pesquisador que não é estudioso", E: "Nenhum pesquisador é estudioso" },
        gabarito: 'E',
        explicacao: "A negação de \"todo A é B\" é \"existe A que não é B\" (basta um contraexemplo). \"NENHUM pesquisador é estudioso\" é afirmação muito mais forte — não é a negação."
      },
      {
        num: 5,
        enunciado: "(FCC · Soldado PM BA · 2012) Há um grupo de 13 meninos. Alguém diz: \"Todos esses meninos têm 13 anos de idade.” Para negar essa afirmação, o número mínimo de meninos que não pode ter 13 anos de idade é:",
        opcoes: { A: "1.", B: "13.", C: "7.", D: "12.", E: "4" },
        gabarito: 'A',
        explicacao: "Para negar \"todos têm 13 anos\" basta UM menino com idade diferente. Negação de \"todo\" = \"pelo menos um não\"."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Em certa localidade, sabe-se que todos os militares têm porte de arma;\nnem todas as pessoas que têm porte de arma trabalham em quartéis.\nCom relação a essa localidade, alguém faz as seguintes afirmações:\n( ) Somente militares trabalham em quartéis.\n( ) É possível que existam militares que não trabalhem em quartéis.\n( ) Algumas pessoas que trabalham em quartéis não têm porte de arma.\nAnalisando-se tais afirmações e classificando-as como verdadeiras V ou falsas F, pode-se afirmar que, considerada de cima para baixo, a sequência correta é a",
        opcoes: { A: "V F F", B: "F V F", C: "F V V", D: "F F V", E: "V F V" },
        gabarito: 'C',
        explicacao: "I: nada garante que só militares trabalhem em quartéis (F). II: nem todos com porte estão em quartéis, então é possível haver militar fora (V). III: pode haver civil sem porte em quartel (V). Sequência: F V V."
      },
      {
        num: 7,
        enunciado: "(FCC · Soldado PM BA · 2009) Sejam as afirmações:\n– “Todo policial é forte.” – “Existem policiais altos.” Considerando que as duas afirmações são verdadeiras, então, com certeza, é correto afirmar que:",
        opcoes: { A: "Todo policial alto não é forte.", B: "Todo policial forte é alto.", C: "Existem policiais baixos e fracos.", D: "Algum policial alto não é forte.", E: "Algum policial forte é alto." },
        gabarito: 'E',
        explicacao: "Existem policiais altos, e TODO policial é forte — logo esses altos são fortes: \"algum policial forte é alto\" é conclusão necessária."
      },
      {
        num: 8,
        enunciado: "(FCC · Soldado PM BA · 2012) As amigas são Júlia, Marta e Cláudia. As idades de cada uma, não necessariamente na ordem em que foram apresentadas as amigas, são 13 anos, 15 anos e 17 anos. Também, não necessariamente nessa ordem, os animais de estimação de cada uma são cão, gato e coelho.\nSabe-se que:\nI. A dona do gato tem 13 anos e Júlia tem 15 anos.\nII. A amiga que não é a mais nova nem a mais velha tem o cão.\nIII. Cláudia tem um animal de estimação que não é o gato.\nSendo assim, a alternativa totalmente correta é",
        opcoes: { A: "Marta tem 13 anos e o coelho é de Cláudia,", B: "O gato é de Júlia e Cláudia tem 13 anos.", C: "O cão é de Júlia e Marta tem 15 anos.", D: "O cão é de Marta e o gato é de Cláudia.", E: "A dona do gato tem 15 anos e Júlia tem o coelho." },
        gabarito: 'A',
        explicacao: "A dona do gato tem 13 e Júlia tem 15; a do meio (15) tem o cão → Júlia tem o cão. Cláudia não tem o gato → Marta (13) tem o gato e Cláudia (17) o coelho."
      },
      {
        num: 9,
        enunciado: "(FCC · Soldado PM BA · 2009) Certo dia, três policiais militares − Alceste, Belo e Guerra − foram designados para cumprir tarefas distintas entre si. Considere as seguintes informações:\n− seus tempos de serviço na Corporação eram: 12, 15 e 19 anos, não respectivamente;\n− as tarefas para as quais eles foram designados eram: patrulhamento de um bairro, acompanhamento de um evento e patrulhamento do trânsito em uma região;\n− a Alceste coube exercer o acompanhamento do evento;\n− na ocasião, Guerra tinha 19 anos de serviço na Corporação;\n− aquele que tinha 12 anos de serviço fez o patrulhamento do trânsito.\nCom base nas informações dadas, é correto afirmar que",
        opcoes: { A: "Alceste tinha 12 anos de serviço na Corporação.", B: "Belo tinha 12 anos de serviço na Corporação.", C: "Belo fez o patrulhamento do bairro.", D: "Alceste não tinha 15 anos de serviço na Corporação.", E: "Guerra fez o patrulhamento do trânsito." },
        gabarito: 'B',
        explicacao: "Guerra tem 19 anos. Alceste faz o evento, logo não fez o trânsito → não tem 12 anos → Alceste tem 15 e Belo tem 12 (e fez o trânsito); Guerra patrulhou o bairro."
      },
      {
        num: 10,
        enunciado: "(FCC · Soldado PM BA · 2007) Durante a perícia feita em uma residência assaltada, foram encontrados os seguintes vestígios que, com certeza, haviam sido deixados pelos assaltantes:\numa lata vazia de refrigerante;\numa lata vazia de cerveja;\num fio de cabelo loiro;\num toco de cigarro.\nApós a realização da perícia, a Polícia concluiu que os assaltantes eram apenas dois e que eles se encontravam entre cinco suspeitos − Alceste, Boni, Calunga, Dorival e Eufrásio − cujas características são as seguintes:\n− Alceste: só bebe refrigerante, tem cabelos loiros e não fuma;\n− Boni: bebe cerveja e refrigerante, tem cabelos pretos e não fuma;\n− Calunga: não bebe refrigerante e nem cerveja, é ruivo e fuma cigarros;\n− Dorival: só bebe cerveja, tem cabelos loiros e não fuma;\n− Eufrásio: só bebe refrigerante, é totalmente careca e fuma cigarros.\nCom base nas informações dadas, é correto afirmar que os assaltantes eram",
        opcoes: { A: "Alceste e Boni.", B: "Dorival e Eufrásio.", C: "Boni e Calunga.", D: "Calunga e Dorival.", E: "Alceste e Eufrásio." },
        gabarito: 'B',
        explicacao: "Os vestígios exigem cobrir: cerveja + refrigerante + cabelo loiro + cigarro. Dorival (só cerveja, loiro) e Eufrásio (só refrigerante, careca, fumante) cobrem tudo sem contradição."
      },
      {
        num: 11,
        enunciado: "(FCC · Soldado PM BA · 2012) Considere três amigos, Roberto, Eduardo e Marcos cujas idades, em anos completos, são diferentes entre si.\n- Roberto diz: Eduardo é o mais velho entre nós três.\n- Marcos diz: Roberto não é o mais novo de nós três.\n- Eduardo diz: Marcos é o mais novo entre nós três.\nSabendo que apenas um dos amigos não disse a verdade, a lista dos amigos, em ordem crescente das respectivas idades, ê",
        opcoes: { A: "Eduardo, Roberto e Marcos.", B: "Roberto, Eduardo e Marcos.", C: "Marcos, Eduardo e Roberto.", D: "Marcos, Roberto e Eduardo.", E: "Eduardo, Marcos e Roberto." },
        gabarito: 'C',
        explicacao: "Teste a ordem crescente Marcos < Eduardo < Roberto: Roberto mente (Eduardo não é o mais velho), Marcos diz a verdade e Eduardo diz a verdade — exatamente um mentiroso. ✓"
      },
      {
        num: 12,
        enunciado: "(FCC · Soldado PM BA · 2007) Caetano, Gilberto e Eudes, soldados da Polícia Militar do Estado da Bahia, foram designados certo dia para o patrulhamento de trânsito em três bairros − A, B e C − de uma cidade. Indagados sobre seus locais de patrulhamento, forneceram as seguintes informações:\n− o soldado que vai patrulhar o bairro A disse que Caetano vai patrulhar B;\n− o soldado que vai patrulhar B disse chamar-se Gilberto;\n− o soldado que vai patrulhar C afirmou que Eudes vai patrulhar B.\nComo era sabido que apenas Caetano não mentiu, então os bairros que Caetano, Gilberto e Eudes fizeram patrulhamento em tal dia foram, respectivamente,",
        opcoes: { A: "A, B e C.", B: "A, C e B.", C: "B, C e A.", D: "C, A e B.", E: "C, B e A." },
        gabarito: 'D',
        explicacao: "Caetano é o único que diz a verdade. Na opção D (Caetano em C, Gilberto em A, Eudes em B): Gilberto (em A) mente, Eudes (em B) mente ao dizer que é Gilberto e Caetano (em C) diz a verdade. Tudo consistente."
      }
    ]
  },

  /* ── 11. Lista de Exercícios — Sequências e Lógica Aplicada (questões reais de prova) ── */
  {
    id: 'seed-lq-logica-sequencias',
    titulo: "Banco de Questões — Sequências e Lógica Aplicada",
    materia: 'Raciocínio Lógico', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 9,
    questoes: [
      {
        num: 1,
        enunciado: "(FCC · Soldado PM BA · 2012) Observe a seqüência de números, na qual se passa de um número para o seguinte somando alternadamente -1 ou 6:\n5; 4; 10; 9; 15; 14; 20; 19; 25; . . .\nMantendo sempre a mesma regra, o resultado da subtração entre o 31º elemento da seqüência e o 27º elemento é:",
        opcoes: { A: "10.", B: "1.", C: "4.", D: "6.", E: "20." },
        gabarito: 'A',
        explicacao: "Os termos das posições ímpares valem 5k: o 27º termo é 5·14 = 70 e o 31º é 5·16 = 80. Diferença: 80 − 70 = 10."
      },
      {
        num: 2,
        enunciado: "(FCC · Soldado PM BA · 2009) Os termos da sequência (25; 22; 11; 33; 30; 15; 45; 42; 21; 63; . . .) são obtidos segundo um determinado padrão.\nDe acordo com esse padrão o décimo terceiro termo da sequência deverá ser um número",
        opcoes: { A: "não inteiro.", B: "ímpar.", C: "maior do que 80.", D: "divisível por 4.", E: "múltiplo de 11." },
        gabarito: 'C',
        explicacao: "O padrão se repete em ciclos: −3, ÷2, ×3. Continuando: 63, 60, 30, 90 — o 13º termo é 90, maior do que 80."
      },
      {
        num: 3,
        enunciado: "(FCC · Soldado PM BA · 2007) Os dois pares de palavras abaixo foram formados segundo determinado critério.\nlacração − cal amostra − soma lavrar − ?\nSegundo o mesmo critério, a palavra que deverá ocupar o lugar do ponto de interrogação é",
        opcoes: { A: "alar.", B: "rala.", C: "ralar.", D: "larva.", E: "arval." },
        gabarito: 'E',
        explicacao: "O critério é inverter o início da palavra: lacração → \"lac\" invertido = cal; amostra → \"amos\" invertido = soma; lavrar → \"lavra\" invertido = arval."
      },
      {
        num: 4,
        enunciado: "(FCC · Soldado PM BA · 2009) As letras que aparecem no quadriculado abaixo devem ser substituídas por números a fim de que, em cada uma das linhas, colunas e diagonais, a soma dos três números seja a mesma.\nX 7 2 Y 5 W 8 Z 4 Se X, Y, W e Z satisfazem as condições do problema, então X + Y + W + Z é igual a",
        opcoes: { A: "19", B: "18", C: "17", D: "16", E: "15" },
        gabarito: 'A',
        explicacao: "Quadrado mágico com centro 5 → soma 15: X = 6, Y = 1, W = 9, Z = 3. X + Y + W + Z = 19."
      },
      {
        num: 5,
        enunciado: "(FCC · Soldado PM BA · 2012) Na situação que vou descrever todos os envolvidos descendem de meu pai e de minha mãe. Tenho um irmão e duas irmãs e sou pai de duas crianças. Meu irmão tem dez sobrinhos. Minhas irmãs têm quantidades iguais de filhos, e eu tenho onze sobrinhos. Nessa situação, o número de primos de um dos filhos de uma de minhas irmãs é",
        opcoes: { A: "12.", B: "10.", C: "9.", D: "8.", E: "11." },
        gabarito: 'C',
        explicacao: "Meu irmão tem 10 sobrinhos → meus filhos (2) + filhos das irmãs = 10 → as irmãs têm 8 filhos (4 cada). Tenho 11 sobrinhos → meu irmão tem 3 filhos. Primos de um filho de uma irmã: 2 + 3 + 4 = 9."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Motivados pelo desejo de participar de uma seleção, alguns amigos seguiam concentrados: um na frente e quatro atrás, um atrás e quatro na frente, um entre dois e dois, e cinco em linha.\nLogo, seguiam concentrados",
        opcoes: { A: "50 amigos.", B: "20 amigos", C: "15 amigos.", D: "10 amigos.", E: "5 amigos." },
        gabarito: 'E',
        explicacao: "Cinco amigos em fila única atendem a tudo: 1 na frente e 4 atrás, 1 atrás e 4 na frente, 1 entre dois e dois, e 5 em linha."
      },
      {
        num: 7,
        enunciado: "(FCC · Soldado PM BA · 2012) De um grupo A de 30 crianças é dito que não há apenas meninos. De um grupo B de 20 crianças é dito que não há apenas meninas. A partir dessas afirmações, pode-se afirmar que",
        opcoes: { A: "o número de meninas do grupo A é maior que o número de meninos do grupo B.", B: "são 15 as meninas do grupo A e 10 os meninos do grupo B.", C: "o número de meninos do grupo A é maior que o número de meninas do grupo B.", D: "há pelo menos uma menina em A e pelo menos um menino em B.", E: "há 10 meninos em A e 5 meninos em B." },
        gabarito: 'D',
        explicacao: "\"Não há apenas meninos\" garante ao menos UMA menina em A; \"não há apenas meninas\" garante ao menos UM menino em B. É só o que se pode afirmar com certeza."
      },
      {
        num: 8,
        enunciado: "(FCC · Soldado PM BA · 2009) Observe que na sentença abaixo há duas palavras sublinhadas e dois espaços em branco.\nCachorro está para . . . . . assim como pernilongo está para . . . . . .\nPreenchidos corretamente os espaços, a primeira palavra deve ter com a segunda a mesma relação que a terceira tem com a quarta. Nessas condições, as respectivas palavras que devem ocupar as lacunas são:",
        opcoes: { A: "cadela − pernalonga", B: "pelo − garra", C: "mordida − ferrolhada", D: "latido − zumbido", E: "raiva − picada" },
        gabarito: 'D',
        explicacao: "Latido está para cachorro assim como zumbido está para pernilongo — relação animal → som característico."
      },
      {
        num: 9,
        enunciado: "(FCC · Soldado PM BA · 2007) A sentença seguinte é seguida de um número entre parênteses, o qual corresponde ao número de letras de uma palavra que se aplica à definição dada.\n“Entrada ilegal de mercadorias no país.” (11) A letra inicial de tal palavra é",
        opcoes: { A: "T", B: "S", C: "E", D: "B", E: "C" },
        gabarito: 'E',
        explicacao: "\"Entrada ilegal de mercadorias no país\" com 11 letras = CONTRABANDO → inicial C."
      }
    ]
  },

  /* ── 12. Lista de Exercícios — Números: Operações e Problemas (questões reais de prova) ── */
  {
    id: 'seed-lq-numeros-operacoes',
    titulo: "Banco de Questões — Números: Operações e Problemas",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-01", "mat-02", "mat-05", "mb-01", "mb-02", "cr-01"],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Em uma seleção para cursos no CFOPM, de certa cidade, foram abertas 300 vagas para o nível I e 100 vagas para o nível II. Sabe-se que houve 9000 inscrições para o nível I e a terça parte para o nivel II.\nNessas condições, pode-se concluir que",
        opcoes: { A: "a concorrência para o nível 1 foi maior do que a concorrência para o nível II.", B: "a concorrência para o nível I foi igual à concorrência para o nível II.", C: "a concorrência para o nível II foi de 200 candidatos por vaga.", D: "houve 150 candidatos por vaga para o nivel II.", E: "houve 200 candidatos por vaga para o nivel I." },
        gabarito: 'B',
        explicacao: "Concorrência nível I: 9000/300 = 30 por vaga; nível II: 3000/100 = 30 por vaga — iguais."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Em determinado concurso, os candidatos foram distribuídos em salas com 40 candidatos cada, segundo a ordem crescente dos números de inscrição: sala 01 recebe as inscrições 0001 a 0040; sala 02, as inscrições 0041 a 0080; sala 03, as inscrições 0081 a 0120; e assim por diante.\nNessas condições, pode-se afirmar que um candidato cujo número de inscrição coincide com a média aritmética dos números de inscrição obtidos através de todas as permutações de 2, 7 e 9 ficou na sala de número",
        opcoes: { A: "20.", B: "19.", C: "18.", D: "17.", E: "16." },
        gabarito: 'D',
        explicacao: "Permutações de 2, 7 e 9: seis números cuja soma é (2+7+9)·222 = 3996 → média 666. Inscrição 666 ÷ 40 por sala = 16,65 → sala 17."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Como parte de sua preparação física, um atleta foi aconselhado por um nutricionista a acrescentar à sua dieta algum suplemento alimentar, como X ou Y, dos quais se tem as seguintes informações:\nX contém 2 unidades de fibras, 1 unidade de proteínas, 3 unidades de vitaminas e cada unidade desse suplemento custa r reais.\nY contém 1 unidade de fibras, 2 unidades de proteínas, 2 unidades de vitaminas e cada unidade desse suplemento custa 2r reais.\nSendo recomendada a ingestão diária mínima de 4 unidades de fibras, 5 unidades de proteínas e 8 unidades de vitaminas, pode-se afirmar que a despesa com os suplementos será mínima, se o número de unidades de X e de Y ingeridos forem, respectivamente, iguais a",
        opcoes: { A: "1 e 2.", B: "2 e 1.", C: "2 e 2.", D: "2 e 3.", E: "3 e 2." },
        gabarito: 'C',
        explicacao: "Teste das opções nas exigências (4 fibras, 5 proteínas, 8 vitaminas): (2,2) atende tudo com custo 2r + 4r = 6r — o menor entre as combinações viáveis."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Adicionando-se o menor inteiro positivo ao menor divisor inteiro de 8, em seguida, multiplicando-se pela raiz da equação 0,3x - 10 = 8, obtém se, corretamente,",
        opcoes: { A: "360", B: "180", C: "- 420", D: "- 540", E: "- 600" },
        gabarito: 'C',
        explicacao: "Menor inteiro positivo = 1; menor divisor inteiro de 8 = −8; raiz de 0,3x − 10 = 8 → x = 60. Logo (1 + (−8)) · 60 = −420."
      },
      {
        num: 5,
        enunciado: "(UNEB · CFO PM BA · 2025) Os conjuntos numéricos abrangem diferentes classificações, como naturais, inteiros, racionais e irracionais, cada um com características distintas que os definem. Com base nessa divisão, identifique a alternativa que apresenta um número pertencente ao conjunto dos números irracionais.",
        opcoes: { A: "2+3i", B: "1/2", C: "-3", D: "8", E: "√2" },
        gabarito: 'E',
        explicacao: "√2 é dízima não periódica — irracional. 2+3i é complexo, 1/2 é racional, −3 é inteiro e 8 é natural."
      },
      {
        num: 6,
        enunciado: "(FCC · Soldado PM BA · 2007) Uma pessoa tem R$ 14,00 em sua carteira apenas em cédulas de 1, 2 e 5 reais, sendo pelo menos uma de cada valor. Se X é o total de cédulas que ela possui, quantos são os possíveis valores de X?",
        opcoes: { A: "4", B: "5", C: "6", D: "7", E: "8" },
        gabarito: 'B',
        explicacao: "5a + 2b + c = 14 com a, b, c ≥ 1: as soluções dão X (total de cédulas) ∈ {5, 6, 7, 8, 9} — 5 valores possíveis."
      }
    ]
  },

  /* ── 13. Lista de Exercícios — Teoria dos Conjuntos (questões reais de prova) ── */
  {
    id: 'seed-lq-teoria-conjuntos',
    titulo: "Banco de Questões — Teoria dos Conjuntos",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-08", "mat-09", "mb-07"],
    total: 4,
    questoes: [
      {
        num: 1,
        enunciado: "(IBFC · Soldado PM BA · 2017) Assinale a alternativa correta.\nNuma tropa com 80 soldados, sabe-se que 37 deles gostam de natação, 25 gostam de futebol. Sendo que, nesses dois grupos, 8 gostam de ambas as modalidades. Nessas condições, o total de soldados que não gostam de nenhuma dessas modalidades é:",
        opcoes: { A: "54", B: "26", C: "36", D: "20", E: "10" },
        gabarito: 'B',
        explicacao: "Pelo menos uma modalidade: 37 + 25 − 8 = 54. Nenhuma: 80 − 54 = 26."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Todos os funcionários de determinada empresa deverão fazer um curso de atualização por ela oferecido. Tal curso é composto por três módulos distintos e independentes que poderão ser cursados simultaneamente ou não.\nSe cada módulo tiver uma taxa de participação de 70% dos funcionários, pode-se estimar o percentual mínimo de participação simultânea, nos três módulos, em",
        opcoes: { A: "10%.", B: "20%.", C: "25%.", D: "30%.", E: "40%." },
        gabarito: 'A',
        explicacao: "Princípio do pior caso: a participação simultânea mínima é 100% − 3×(100% − 70%) = 100% − 90% = 10%."
      },
      {
        num: 3,
        enunciado: "(FCC · Soldado PM BA · 2012) Sobre a apreciação dos sucos de abacaxi, caju e mara­cujá, foi feita uma enquete entre 14 pessoas obtendo-se algumas informações. Gostar de apenas um desses su­cos, apenas uma pessoa gosta de cada um deles. Gostar dos três sucos, cinco são as pessoas que assim gostam. Há também os que gostam de apenas dois sabores de suco, sejam eles abacaxi e caju, abacaxi e maracujá e caju e maracujá. Sabendo que o suco mais apreciado é o de caju e o menos apreciado é o de maracujá, calcula-se que o número de apreciadores do suco de caju, nessa enquete, é",
        opcoes: { A: "11.", B: "8.", C: "12.", D: "9.", E: "10." },
        gabarito: 'A',
        explicacao: "\"Apenas um\": 3 pessoas; os três sucos: 5; sobram 6 para os pares. Distribuindo 3 + 1 + 2 para manter caju > abacaxi > maracujá: caju = 1 + 5 + 3 + 2 = 11."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Devido à grande incidência de casos de meningite e da gripe H1N1, foi feito um levantamento dentre 120 pessoas de uma comunidade quanto às vacinas que já haviam tomado.Desse total, constatou-se que 42 pessoas haviam sido vacinadas contra a meningite, 66 pessoas contra a gripe H1N1 e que 42 pessoas ainda não haviam tomado nenhuma das duas vacinas.\nCom base nesses dados, pode-se afirmar que a porcentagem de pessoas do grupo que tomou as duas vacinas é de",
        opcoes: { A: "40%", B: "36%", C: "32%", D: "28%", E: "25%" },
        gabarito: 'E',
        explicacao: "União: 120 − 42 (nenhuma) = 78. Interseção: 42 + 66 − 78 = 30 pessoas → 30/120 = 25%."
      }
    ]
  },

  /* ── 14. Lista de Exercícios — Frações e Números Racionais (questões reais de prova) ── */
  {
    id: 'seed-lq-fracoes',
    titulo: "Banco de Questões — Frações e Números Racionais",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-06", "mb-03", "cr-02"],
    total: 2,
    questoes: [
      {
        num: 1,
        enunciado: "(IBFC · Soldado PM BA · 2017) Assinale a alternativa correta.\nAntônio gastou 50% de dois quintos do valor que possuía e ainda sobraram R$ 160,00 a ele.\nNessas circunstâncias o valor gasto por Antônio foi:",
        opcoes: { A: "R$ 200,00", B: "R$ 160,00", C: "R$ 60,00", D: "R$ 80,00", E: "R$ 40,00" },
        gabarito: 'E',
        explicacao: "Gastou 50% de 2/5 = 1/5 do valor. Sobraram 4/5 = R$ 160 → tinha R$ 200 e gastou R$ 40."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Em uma blitz, foram encontradas, no interior de um automóvel, duas garrafas, de mesma capacidade, cheias com uma mistura não identificada de bebidas alcoólicas. Após análise, verificou-se que uma das garrafas continha uma mistura das bebidas X e Y na razão de 1 para 2, enquanto a outra garrafa continha uma mistura das mesmas bebidas, porém na razão de 3 para 2.\nDespejando-se o conteúdo das duas garrafas em um terceiro recipiente, obter-se-á uma nova mistura de X e Y, na razão de",
        opcoes: { A: "7 para 8.", B: "5 para 4.", C: "3 para 4.", D: "2 para 1.", E: "1 para 1." },
        gabarito: 'A',
        explicacao: "Garrafas de volume V: X = V/3 + 3V/5 = 14V/15 e Y = 2V/3 + 2V/5 = 16V/15 → razão 14 para 16 = 7 para 8."
      }
    ]
  },

  /* ── 15. Lista de Exercícios — Porcentagem, Regra de Três e Juros (questões reais de prova) ── */
  {
    id: 'seed-lq-proporcao-financeira',
    titulo: "Banco de Questões — Porcentagem, Regra de Três e Juros",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-14", "mat-15", "mat-25", "mb-05", "cr-03"],
    total: 8,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Por medida de precaução, a administração de um prédio resolveu restringir o número de pessoas transportadas por um de seus elevadores a 9 mulheres ou 6 homens, de média compleição.\nRespeitando-se a restrição imposta, quando, no elevador, já se encontram 6 mulheres, é correto afirmar que, nesse elevador, ainda podem entrar, no máximo,",
        opcoes: { A: "quatro homens.", B: "dois homens.", C: "dois homens e uma mulher.", D: "dois homens e duas mulheres.", E: "um homem e duas mulheres." },
        gabarito: 'B',
        explicacao: "9 mulheres ⇔ 6 homens → 3 mulheres ⇔ 2 homens. Com 6 mulheres dentro, ainda cabem 3 mulheres, ou seja, no máximo 2 homens."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Segundo dados divulgados pela imprensa, o comércio de bens falsificados corresponde a 2% de todas as transações comerciais feitas no mundo, sendo 250 bilhões de dólares o valor do mercado de pirataria no planeta. Só em 2009, foram apreendidos pela Receita Federal no Brasil, de produtos falsos, o equivalente a 1,414 bilhões de reais.\nTal montante, considerando-se que, atualmente, um dólar vale cerca de R$1,50, corresponde, em dólares, a um valor entre",
        opcoes: { A: "900 e 910 milhões.", B: "911 e 920 milhões.", C: "921 e 930 milhões.", D: "931 e 940 milhões.", E: "941 e 950 milhões." },
        gabarito: 'E',
        explicacao: "1,414 bilhões de reais ÷ 1,50 ≈ 942,7 milhões de dólares — entre 941 e 950 milhões."
      },
      {
        num: 3,
        enunciado: "(UNEB · CFO PM BA · 2023) O técnico de um determinado atleta constatou que ele acertou 70% dos 90 arremessos que ele fez na cesta de basquete. Após fazer mais 30 arremessos, melhorou seu percentual de acertos para 75% do total de arremessos. Em seguida, fez mais 30 arremessos e seu percentual de acertos aumentou para 80% do total de arremessos.\nDo total de arremessos feitos, a quantidade de arremessos que ele acertou foi",
        opcoes: { A: "63", B: "80", C: "90", D: "120", E: "150" },
        gabarito: 'D',
        explicacao: "Total de arremessos: 90 + 30 + 30 = 150. Acertos finais: 80% de 150 = 120."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) O número de participantes em uma manifestação, após 3 horas de seu início, foi estimado em, aproximadamente, 1000 pessoas.\nAdmitindo-se que esse número tenha aumentado 25% a cada hora, pode-se afirmar que, no início da manifestação, o número aproximado de participantes era igual a",
        opcoes: { A: "250.", B: "356.", C: "420.", D: "500.", E: "512." },
        gabarito: 'E',
        explicacao: "Voltando 3 horas: 1000 ÷ 1,25³ = 1000 ÷ 1,953125 = 512 pessoas."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Para que não haja redução nos seus vencimentos líquidos, após sua aposentadoria, um funcionário de determinada empresa optou pelo pagamento de uma previdência privada, mediante débito automático em seu salário, ciente de que sobre o valor total T, correspondente a um ano de salários, o desconto para pagamento dessa previdência seria de p% sobre a parcela de T até R$30000,00, mais um desconto de (p + 3)% sobre a parcela de T que excedesse esse valor.\nSabendo-se que, no ano passado, o funcionário teve um desconto total de (p + 0,4)% sobre T, para pagamento da previdência privada, pode-se afirmar que o valor de T, em milhares de reais, foi de, aproximadamente,",
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
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Um capital foi aplicado, durante 2 anos, à taxa de capitalização anual i, a juros compostos. Se o capital tivesse sido aplicado por mais um ano, o valor acumulado teria aumentado R$216,32. Se, ao contrário, tivesse sido aplicado por menos um ano, o valor acumulado teria diminuído R$208,00.\nNessas condições, pode-se afirmar que a taxa de juros pagos, nessa aplicação, foi igual a",
        opcoes: { A: "6,0%", B: "5,5%", C: "5,0%", D: "4,5%", E: "4,0%" },
        gabarito: 'E',
        explicacao: "A razão entre os acréscimos consecutivos é (1 + i): 216,32 / 208 = 1,04 → i = 4%."
      },
      {
        num: 8,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Um empréstimo feito através de um financiamento, a uma taxa de juros simples de 2%am, deve ser pago em duas parcelas nos valores de R$3 000,00 e R$5 000,00,; com respectivos vencimentos para dois e quatro meses, contados a partir da data do empréstimo.Diante da impossibilidade de fazer tais pagamentos, o devedor propôs ao credor a substituição das duas parcelas por uma única parcela a ser paga no prazo de seis meses, contados a partir da data do empréstimo.\nSendo aceita tal proposta, o valor, em reais, dessa parcela única será de",
        opcoes: { A: "8500", B: "8440", C: "8320", D: "8200", E: "8080" },
        gabarito: 'A',
        explicacao: "Desconto comercial simples na data zero: 3000(1 − 0,04) + 5000(1 − 0,08) = 7480. Parcela única em 6 meses: X(1 − 0,12) = 7480 → X = R$ 8.500."
      }
    ]
  },

  /* ── 16. Lista de Exercícios — Equações e Polinômios (questões reais de prova) ── */
  {
    id: 'seed-lq-equacoes-polinomios',
    titulo: "Banco de Questões — Equações e Polinômios",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-10"],
    total: 5,
    questoes: [
      {
        num: 1,
        enunciado: "(FCC · Soldado PM BA · 2023) Um setor administrativo recebeu 150 caixas de equipamentos que serão distribuídas para três grupos de funcionários. O primeiro grupo deverá receber 30 caixas a menos do que o segundo grupo e o terceiro grupo a metade do que vai receber o segundo. O número de caixas que serão recebidas pelo primeiro e o terceiro grupos juntos é:",
        opcoes: { A: "78", B: "52", C: "44", D: "80", E: "96" },
        gabarito: 'A',
        explicacao: "Segundo grupo = x: (x − 30) + x + x/2 = 150 → x = 72. Primeiro + terceiro: 42 + 36 = 78."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) X recebe R$320,00 por x horas de trabalho semanal em seu emprego. Y recebe o mesmo valor, por seu trabalho semanal, porém trabalha 4 horas a mais e recebe R$4,00 a menos do que X, por hora trabalhada.\nNessas condições, pode-se afirmar que o número de horas semanais de trabalho de Y equivale a",
        opcoes: { A: "metade de um dia.", B: "3/4 de um dia.", C: "5/6 de um dia.", D: "um dia.", E: "um dia e meio." },
        gabarito: 'C',
        explicacao: "X ganha 320/x por hora; Y: 320/(x+4) = 320/x − 4 → x² + 4x − 320 = 0 → x = 16. Y trabalha 20 h = 20/24 = 5/6 de um dia."
      },
      {
        num: 3,
        enunciado: "(FCC · Soldado PM BA · 2023) A soma das raízes da equação x(x-1).(x+3).(x²+16)=0 é",
        opcoes: { A: "−2", B: "2", C: "0", D: "4", E: "16" },
        gabarito: 'A',
        explicacao: "Raízes reais: 0, 1 e −3 (x² + 16 = 0 não tem raiz real; as complexas ±4i se cancelam). Soma: 0 + 1 − 3 = −2."
      },
      {
        num: 4,
        enunciado: "(UNEB · CFO PM BA · 2025) Em muitas situações, funções polinomiais são usadas para modelar fenômenos ou calcular valores específicos com base em uma variável. Considerando o polinômio P(x)=x³ - 2x² + x. Qual é o valor de P(2)?",
        opcoes: { A: "4", B: "2", C: "10", D: "8", E: "12" },
        gabarito: 'B',
        explicacao: "P(2) = 2³ − 2·2² + 2 = 8 − 8 + 2 = 2."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) A função polinomial f(t) = t^³ - 14t^² + 53t - 40 representa a evolução do lucro de uma microempresa, em milhares de reais, ao longo de t anos de funcionamento, 1 ≤ t ≤ 10.\nExcluindo-se, durante esse intervalo de tempo, o número de anos em que o lucro foi igual a zero, pode-se afirmar que o número de anos em que a empresa não teve prejuízo foi igual a",
        opcoes: { A: "4.", B: "5.", C: "6.", D: "7.", E: "8." },
        gabarito: 'B',
        explicacao: "O lucro zera em t = 1, 5 e 8 (fatorando: (t−1)(t−5)(t−8)). Sem prejuízo (lucro positivo), excluindo os zeros: t ∈ {2, 3, 4, 9, 10} → 5 anos."
      }
    ]
  },

  /* ── 17. Lista de Exercícios — Funções do 1° e 2° Graus (questões reais de prova) ── */
  {
    id: 'seed-lq-funcoes',
    titulo: "Banco de Questões — Funções do 1° e 2° Graus",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-11", "mat-12"],
    total: 3,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Segundo dados do IBGE, em 2006. aproximadamente 9,0% da bancada eleita para a Câmara Federal era composta por mulheres.\nSupondo-se que, em 2010, esse número cresça para 12,5% e que essa porcentagem varie linearmente com o tempo, pode-se estimar que as mulheres serão maioria na Câmara Federal a partir das eleições de",
        opcoes: { A: "2066", B: "2062", C: "2058", D: "2054", E: "2048" },
        gabarito: 'D',
        explicacao: "De 9% (2006) para 12,5% (2010): +3,5% a cada 4 anos. 12,5 + 3,5k > 50 → k > 10,7 → 11 eleições depois: 2010 + 44 = 2054."
      },
      {
        num: 2,
        enunciado: "(UNEB · CFO PM BA · 2025) Uma empresa está analisando uma função quadrática que modela o custo de produção, onde f(x) = x² − 4x + 3 sendo x a quantidade de itens produzidos em centenas. Para uma produção de 300 itens (x=3), qual é o custo correspondente representado por f(3)?",
        opcoes: { A: "-1", B: "1", C: "3", D: "4", E: "0" },
        gabarito: 'E',
        explicacao: "f(3) = 3² − 4·3 + 3 = 9 − 12 + 3 = 0."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Uma pessoa teve furtada sua carteira com 12 cédulas e, ao prestar queixa na delegacia, declarou haver uma cédula de R$20,00, algumas de R$5,00 e outras de R$10,00, mas não soube precisar o valor total.\nAdmitindo-se que o quadrado do número de cédulas de R$5,00 seja menor do que o número total das demais, é correto afirmar que a quantia mínima que a pessoa poderia ter, em reais, na carteira seria igual a",
        opcoes: { A: "100", B: "105", C: "110", D: "115", E: "120" },
        gabarito: 'E',
        explicacao: "x = nº de cédulas de R$ 5: x² < 12 − x → x ≤ 2. Quantia mínima com x = 2: 20 + 2·5 + 9·10 = R$ 120."
      }
    ]
  },

  /* ── 18. Lista de Exercícios — Sistemas, Matrizes e Determinantes (questões reais de prova) ── */
  {
    id: 'seed-lq-sistemas-matrizes',
    titulo: "Banco de Questões — Sistemas, Matrizes e Determinantes",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-16"],
    total: 3,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Com fins beneficentes, organizou-se um sorteio para o qual foram vendidas cartelas com nove números dispostos na forma de matrizes de ordem 3. Foi premiado o portador da cartela cujos números aᵢⱼ obedeciam à regra aᵢⱼ = |i − 3j| (i = linha, j = coluna).\nA matriz assim obtida tem determinante igual a",
        opcoes: { A: "−14.", B: "−10.", C: "0.", D: "10.", E: "14." },
        gabarito: 'C',
        explicacao: "aᵢⱼ = |i − 3j| gera as linhas (2, 5, 8), (1, 4, 7) e (0, 3, 6). L1 − L2 = L2 − L3 (linhas em PA) → determinante = 0."
      },
      {
        num: 2,
        enunciado: "(UNEB · CFO PM BA · 2025) Em uma fábrica, dois setores precisam compartilhar recursos de maneira que o total de recursos alocados, representado por x+y=6, seja distribuído igualmente entre os dois setores. Além disso, uma auditoria verificou que a alocação dobrada desses recursos, representada por 2x+2y=12, também precisa ser validada. Considerando o contexto, quantas soluções existem para esse sistema de equações?",
        opcoes: { A: "Nenhuma.", B: "Infinitas.", C: "Dez.", D: "Duas.", E: "Uma." },
        gabarito: 'B',
        explicacao: "A segunda equação é exatamente o dobro da primeira — mesma reta. Sistema possível e indeterminado: infinitas soluções."
      },
      {
        num: 3,
        enunciado: "(FCC · Soldado PM BA · 2023) Em um fornecedor de uniformes, três camisas e duas calças custam, juntas, R$ 455,00, e um conjunto de calça e camisa do mesmo tipo custa R$ 190,00. O preço, em reais, para a compra de duas camisas e uma calça é:",
        opcoes: { A: "215", B: "240", C: "265", D: "280", E: "305" },
        gabarito: 'C',
        explicacao: "3c + 2p = 455 e c + p = 190 → c = 75 e p = 115. Duas camisas e uma calça: 150 + 115 = R$ 265."
      }
    ]
  },

  /* ── 19. Lista de Exercícios — Exponencial e Logaritmos (questões reais de prova) ── */
  {
    id: 'seed-lq-exponencial-log',
    titulo: "Banco de Questões — Exponencial e Logaritmos",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'dificil',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-13"],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Com a contínua evolução tecnológica, a cada dia os aparelhos eletrônicos são produzidos com processadores mais velozes, que conseguem realizar suas tarefas num tempo cada vez menor.\nSupondo-se que o tempo, em milésimos de segundo (milissegundos), que certo componente eletrônico leva para processar xbits, seja dado por T(x) = log ₈ x e considerando-se log 2 = 0,30, pode-se concluir que 250bits serão processados em, aproximadamente,",
        opcoes: { A: "2,66milissegundos.", B: "3,86milissegundos.", C: "4,22milissegundos.", D: "5,02milissegundos.", E: "6,00milissegundos." },
        gabarito: 'A',
        explicacao: "T = log₈(250) = log 250 / log 8. log 250 = 3 − 2·0,30 = 2,40; log 8 = 3·0,30 = 0,90 → 2,40/0,90 ≈ 2,66 ms."
      },
      {
        num: 2,
        enunciado: "(UNEB · CFO CBM BA · 2019) O número de unidades produzidas ( p ), de certo produto, durante um mês é obtido em função do número de funcionários ( f ) da fábrica de acordo com a relação :\np = 50 √(f) .\nSe a fábrica possui 64 funcionários, é correto afirmar que a contratação de mais 36 funcionários aumentará a produção mensal em",
        opcoes: { A: "100 unidades.", B: "200 unidades.", C: "300 unidades.", D: "400 unidades.", E: "500 unidades." },
        gabarito: 'A',
        explicacao: "p = 50√f: com 64 funcionários, p = 50·8 = 400; com 100, p = 50·10 = 500. Aumento: 100 unidades."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Visando ampliar suas instalações, o setor de restauração da Polícia Militar aplicou um capital C em um fundo de investimentos, que paga juros compostos continuamente, de 1,5% ao mês, sendo o montante, ao fina! de t meses, calculado pela expressão f(t)=C · e^0,015 · t .\nConsiderando-se log_e2 = 0,69, é correto estimar-se o tempo necessário para que esse capital seja duplicado em, aproximadamente,",
        opcoes: { A: "22 meses.", B: "30 meses.", C: "38 meses.", D: "46 meses.", E: "54 meses." },
        gabarito: 'D',
        explicacao: "Para duplicar: e^(0,015t) = 2 → 0,015t = ln 2 = 0,69 → t = 46 meses."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Lembrando-se o gráfico cartesiano da função f(x) = 3^(2x−5) + 7, tem-se que os valores reais de x para os quais a imagem é maior do que 250 estão expressos em",
        opcoes: { A: "x > 3.", B: "x > 5.", C: "x > 6.", D: "x > 9.", E: "x > 10." },
        gabarito: 'B',
        explicacao: "3^(2x−5) + 7 > 250 → 3^(2x−5) > 243 = 3⁵ → 2x − 5 > 5 → x > 5."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Durante uma reunião de trabalho, foi servido um cafezinho bem quente aos seus participantes.\nAdmitindo-se que a variação da temperatura do café, T (em ºC), em função do tempo x (em minutos), é definida pela expressão T(x) = 20 + 64 · 2^(−0,25x), pode-se afirmar que um participante dessa reunião que prefira o cafezinho menos quente, pode calcular o tempo de espera x, para que a temperatura T desejada seja atingida, através da expressão",
        opcoes: { A: "24 + 40log (T-20)", B: "24 - 4log₂ (T-20)", C: "24 - 4log (T-20)", D: "44 - 1/4 log (T-20)", E: "1/4 log₂ (T-20) - 3/2" },
        gabarito: 'B',
        explicacao: "Isolando x: 2^(−0,25x) = (T−20)/64 → −x/4 = log₂(T−20) − 6 → x = 24 − 4·log₂(T−20)."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Segundo as leis brasileiras de trânsito, são considerados infratores os motoristas que dirijam estando no organismo com uma concentração superior a 0.6 gramas de álcool por litro de sangue, o que equivale a uma lata de cerveja. Admite-se que a quantidade, em glt% de álcool remanescente no organismo de uma pessoa, a partir do instante t, em horas, em que ela pare de beber, pode ser estimado através da expressão R(t) = k(0,5)ᵗ^/². Ingerindo 5 latas de cerveja, uma após outra e, desejando sair, imediatamente, ao volante do seu veículo, um motorista foi aconselhado, por amigos, a aguardar o tempo mínimo necessário para cue não infrinja a lei.\nConsiderando-se log 2 = 0,30, pode-se concluir que esse tempo é de",
        opcoes: { A: "4h00min", B: "4h40min", C: "5h00min", D: "6h00min", E: "6h48min" },
        gabarito: 'B',
        explicacao: "5 latas → k = 5 · 0,6 = 3 g/L. Exige-se 3·(0,5)^(t/2) ≤ 0,6 → (0,5)^(t/2) ≤ 0,2 → t = 2 · log 5/log 2 = 2 · 0,70/0,30 ≈ 4,67 h = 4h40min."
      }
    ]
  },

  /* ── 20. Lista de Exercícios — Progressões: PA e PG (questões reais de prova) ── */
  {
    id: 'seed-lq-progressoes',
    titulo: "Banco de Questões — Progressões: PA e PG",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-03", "mat-04", "mb-06"],
    total: 7,
    questoes: [
      {
        num: 1,
        enunciado: "(UNEB · CFO PM BA · 2023) Uma atleta corre todos os dias e resolveu, a partir de determinado dia, anotar a quantidade de quilômetros que caminhou durante 30 dias. No final dos 30 dias, ele verificou que caminhou, ao todo, 1170km e que a cada dia ele caminhou 2km a mais que o dia anterior.\nDe acordo com essas informações, pode-se dizer que, no 30º dia, o número de quilômetros que ele caminhou foi:",
        opcoes: { A: "10", B: "23", C: "39", D: "55", E: "68" },
        gabarito: 'E',
        explicacao: "S₃₀ = 1170 e r = 2: 15·(2a₁ + 58) = 1170 → a₁ = 10. No 30º dia: a₃₀ = 10 + 29·2 = 68 km."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Ao consultar uma pasta de documentos, um funcionário observou que eles foram arquivados na ordem crescente de sua numeração, obedecendo à sequência 1, 3, 4, 6, 7, 9, ....\nCalculando-se a média aritmética dos números atribuídos aos trinta primeiros documentos, o valor obtido é igual a",
        opcoes: { A: "20", B: "23", C: "26", D: "29", E: "32" },
        gabarito: 'B',
        explicacao: "O padrão soma +2, +1 alternadamente: pares (3k+1, 3k+3). Os 30 primeiros somam 690 → média 23."
      },
      {
        num: 3,
        enunciado: "(IBFC · Soldado PM BA · 2017) Assinale a alternativa correta.\nO nono termo da sequencia lógica 3, - 6, 12, -24, ... , representa o total de candidatos presentes num concurso público. Se 210 desses candidatos foram aprovados, então o total de candidatos reprovados foi de:",
        opcoes: { A: "1426", B: "878", C: "558", D: "768", E: "174" },
        gabarito: 'C',
        explicacao: "PG de razão −2: a₉ = 3 · (−2)⁸ = 768 presentes. Reprovados: 768 − 210 = 558."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Em determinada cidade, cada candidato inscrito para a seleção do CFOPM deveria contribuir, conforme um critério pré-estabelecido, com certa quantia para a manutenção de uma ONG, sem fins lucrativos. Sabe-se que, a cada dia, o número de candidatos a contribuir, logo inscritos, variaria de acordo com uma progressão geométrica de razão 2 e que, no 1º dia, somente 2 pessoas contribuíram.\nSe cada candidato contribuir com 3 reais, pode-se estimar que o número mínimo de dias necessários para que o total arrecadado atinja o valor R$6138,00 é",
        opcoes: { A: "10", B: "12", C: "15", D: "18", E: "21" },
        gabarito: 'A',
        explicacao: "Contribuintes por dia: 2, 4, 8, … (PG razão 2). Total: 3·(2ⁿ⁺¹ − 2) ≥ 6138 → 2ⁿ⁺¹ ≥ 2048 = 2¹¹ → n = 10 dias."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Dois colegas de trabalho C₁ e C₂ devem ler as 124 páginas de um relatório, a partir do qual terão os subsídios necessários para, conjuntamente, emitirem um parecer técnico sobre determinada questão.\nAdmitindo que os dois comecem a leitura no mesmo dia, na página 1, suponha que C₁ lerá quatro páginas no primeiro dia e, a cada dia subsequente, lerá o dobro do número de páginas do dia anterior, com única exceção possível no último dia de leitura.\nC₂ lerá duas páginas no primeiro dia e, a cada dia subsequente, lerá mais quatro páginas do que no dia anterior, com única exceção possível no último dia de leitura.\nNessas condições, pode-se afirmar que",
        opcoes: { A: "O número total de páginas lidas por C₁, em t dias, pode ser calculado pela expressão f(t) = 2ᵗ⁺² − 4.", B: "O número total de páginas lidas por C₂, em t dias, pode ser calculado pela expressão f(t) = 2t² + t.", C: "C₁ e C₂ concluirão a leitura em um mesmo número de dias.", D: "C₁ concluirá a leitura quatro dias antes de C₂.", E: "C₂ concluirá a leitura dois dias após C₁." },
        gabarito: 'A',
        explicacao: "C₁ lê 4 + 8 + 16 + … = 4(2ᵗ − 1) = 2ᵗ⁺² − 4 ✓ (alternativa A). C₂ lê PA 2, 4, 6, …, cuja soma é t² + t — a alternativa B (2t² + t) está errada."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Apesar de não ser um investimento de alta rentabilidade, a caderneta de poupança garante que as pessoas tenham um fundo de reserva com alguma atualização e alta liquidez.\nSe uma caderneta de poupança remunera a aplicação de um capital C à taxa nominal de 6% a.a. capitalizada mensalmente, no regime de juros compostos, pode-se afirmar que os montantes obtidos, a cada mês do período de aplicação, formam uma",
        opcoes: { A: "progressão aritmética de razão 0,005.", B: "progressão aritmética de razão 1,005.", C: "progressão geométrica de razão 0,005.", D: "progressão geométrica de razão 1,005.", E: "sequência que não é progressão aritmética, nem progressão geométrica." },
        gabarito: 'D',
        explicacao: "Taxa nominal 6% a.a. capitalizada mensalmente = 0,5% a.m. Em juros compostos, cada montante é o anterior × 1,005 → PG de razão 1,005."
      },
      {
        num: 7,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Uma empresa constatou, em outubro de 2009, um déficit em suas finanças, pois, para uma receita de R$160 000,00. teve uma despesa de R$200 000,00. Tentando se recuperar dos prejuízos, estabeleceu metas na perspectiva de aumentar mensalmente sua receita, segundo uma progressão geométrica de razão q = 5/4 , e aumentar a despesa mensal segundo uma progressão aritmética de razão r = R$45 000,00 Admitindo-se que as metas foram alcançadas, pode-se afirmar que o primeiro mês em que a receita superou a despesa foi",
        opcoes: { A: "dezembro de 2009.", B: "janeiro de 2010.", C: "fevereiro de 2010.", D: "março de 2010.", E: "abril de 2010." },
        gabarito: 'C',
        explicacao: "Receita: 160·(5/4)ⁿ; despesa: 200 + 45n (milhares). Em n = 4 meses: 390,6 > 380 — primeiro mês: fevereiro de 2010."
      }
    ]
  },

  /* ── 21. Lista de Exercícios — Geometria Plana (questões reais de prova) ── */
  {
    id: 'seed-lq-geo-plana',
    titulo: "Banco de Questões — Geometria Plana",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-19", "mat-20"],
    total: 2,
    questoes: [
      {
        num: 1,
        enunciado: "(UNEB · CFO PM BA · 2025) Um engenheiro está projetando a fachada de um edifício e precisa calcular a área de um triângulo decorativo para definir a quantidade de material necessário. A base desse triângulo mede 8 cm e sua altura é de 5 cm. Qual é a área dessa figura?",
        opcoes: { A: "70 cm²", B: "30 cm²", C: "20 cm²", D: "50 cm²", E: "40 cm²" },
        gabarito: 'C',
        explicacao: "Área do triângulo: (base × altura)/2 = (8 × 5)/2 = 20 cm²."
      },
      {
        num: 2,
        enunciado: "(UNEB · CFO PM BA · 2023) Determinada família deseja construir uma árvore de natal no quintal da casa e, para tanto, desenha uma circunferência de 5 metros de raio, no local onde quer construir essa árvore e fixa, no centro dessa circunferência e perpendicularmente ao plano do chão, um cano em pé. Em seguida, preenche a parte interna desse cano com cimento para que este fique fixo no local determinado.\nA partir de um ponto P neste cano, serão colocadas mangueiras de iluminação, de mesmo comprimento e em formato de segmentos de retas, até pontos dessa circunferência, de forma que esta fique dividida em 20 partes iguais.\nSabendo-se que para tal construção essa família utilizou 260 metros de comprimento dessas mangueiras de iluminação, a altura, em metros, do ponto P de onde deverão ser colocadas essas mangueiras é de:",
        opcoes: { A: "8", B: "12", C: "13", D: "18", E: "52" },
        gabarito: 'B',
        explicacao: "260 m ÷ 20 mangueiras = 13 m cada. Triângulo retângulo com cateto 5 (raio): altura = √(13² − 5²) = 12 m (terno 5-12-13)."
      }
    ]
  },

  /* ── 22. Lista de Exercícios — Geometria Espacial (questões reais de prova) ── */
  {
    id: 'seed-lq-geo-espacial',
    titulo: "Banco de Questões — Geometria Espacial",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'dificil',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-21", "mat-22", "cr-05"],
    total: 6,
    questoes: [
      {
        num: 1,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Os reservatórios de forma cilíndrica, para água, são econômicos e de manutenção mais simples. Considerando-se que, em laboratório, o protótipo de um deles tem 6cm de diâmetro e 12cm de altura, pode-se estimar que uma centena desses protótipos é capaz de armazenar, aproximadamente, xmf de água, e o valor de x é",
        opcoes: { A: "10800", B: "15496", C: "21624", D: "28168", E: "33912" },
        gabarito: 'E',
        explicacao: "V = πr²h = 3,14 · 9 · 12 ≈ 339,12 cm³ por protótipo. Uma centena: ≈ 33.912 mℓ."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Uma equipe de alunos do Curso de Formação de Oficiais da Polícia Militar desejava realizar algumas transformações na disposição do mobiliário interno da repartição onde atuava. Os profissionais dessa equipe consideraram um prisma reto, como inspiração, e seus lados, como modelo para um biombo.\nSeja P um prisma reto, com 12cm de altura e base quadrada, de área medindo 16cm ².\nNessas condições, pode-se afirmar que a área lateral, em cm ², do prisma s igual a",
        opcoes: { A: "192", B: "144", C: "96", D: "72", E: "48" },
        gabarito: 'A',
        explicacao: "Base quadrada de área 16 cm² → lado 4 cm. Área lateral = perímetro × altura = 16 × 12 = 192 cm²."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Sabe-se que a capacidade de uma taça na forma de um cone equilátero é de 72 √(3) π cm³ .\nSe uma pessoa colocou um líquido nessa taça até a altura correspondente a 2/3 do raio máximo da taça, então sobre o volume de líquido nela colocado, em cm³, pode-se afirmar:",
        opcoes: { A: "É menor do que 6,2π.", B: "Está entre 6,2π e 7,5π.", C: "É igual a 7,5π.", D: "Está entre 7,5π e 8,8π.", E: "É igual a 8,8π." },
        gabarito: 'B',
        explicacao: "Cone equilátero: V = (√3/3)πr³ = 72√3π → r = 6 e h = 6√3. Água até 4 cm (2/3 do raio): V·(4/(6√3))³ = 64π/9 ≈ 7,1π — entre 6,2π e 7,5π."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2012) Em um certo país, as moedas são feitas do mesmo material, têm a mesma espessura e têm massa diretamente proporcional ao seu volume. Nesse país, as moedas de 10 centavos e 25 centavos têm massas, respectivamente, iguais a 4,8g e 7,5g, sendo o diâmetro da primeira igual a 20mm.\nConsiderando-se uma moeda M tal que os raios da moeda de 10 centavos, de M e da moeda de 25 centavos, nessa ordem, formam uma progressão geométrica, pode-se afirmar que a moeda M tem diâmetro, em mm, aproximadamente igual a",
        opcoes: { A: "23,5", B: "23,1", C: "22,8", D: "22,3", E: "21,2" },
        gabarito: 'D',
        explicacao: "Massa ∝ volume ∝ r² (mesma espessura): r₂₅ = 10·√(7,5/4,8) = 12,5 mm. PG: rM = √(10 · 12,5) = √125 ≈ 11,18 → diâmetro ≈ 22,3 mm."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) É frequente a utilização de cones de PVC na sinalização de trânsito, estacionamentos, obras etc.\nAo adquirir dois desses cones — o maior com altura igual a 70cm e diâmetro da base, 40cm, e o menor com altura igual a 50cm e diâmetro da base, 24cm — o comprador decide guardá-los em uma caixa fechada que tem a forma de um prisma reto de base quadrada.\nPara que a base do cone maior fique apoiada na base inferior da caixa e o cone menor encaixado sobre o maior, será necessário utilizar-se uma caixa cuja capacidade interna mínima, em cm³, seja igual a",
        opcoes: { A: "2⁴ × 5 × 19", B: "2⁵ × 5² × 19", C: "2⁵ × 5 × 23", D: "2⁷ × 5² × 23", E: "2⁷ × 5² × 39" },
        gabarito: 'E',
        explicacao: "O cone menor (base r = 12) apoia-se onde o cone maior tem raio 12: a 42 cm do vértice = 28 cm da base. Altura da caixa: 28 + 50 = 78. Volume: 40·40·78 = 124.800 = 2⁷·5²·39."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Um professor propôs a seus alunos a construção de dois pluviômetros artesanais, de modelos diferentes, através dos quais pudessem aprender a calcular a quantidade de chuva ocorrida em uma localidade, num determinado espaço de tempo. Para tanto, foram utilizados dois recipientes, um cônico e um cilíndrico e, após uma chuva, verificou-se que a água recolhida pelo pluviômetro cônico havia atingido uma altura h = 8cm, preenchendo um certo espaço de um pequeno cone de geratriz g = 10cm.\nSe essa água, colocada no pluviômetro cilíndrico atingir a mesma altura h = 8cm, então o raio do recipiente cilíndrico, em cm, é igual a;",
        opcoes: { A: "√(6)", B: "2 √(3)", C: "3 √(2)", D: "2 √(6)", E: "6 √(2)" },
        gabarito: 'B',
        explicacao: "Água no cone: h = 8 e g = 10 → r = 6 → V = (1/3)π·36·8 = 96π. No cilindro com h = 8: πR²·8 = 96π → R² = 12 → R = 2√3."
      }
    ]
  },

  /* ── 23. Lista de Exercícios — Trigonometria e Geometria Analítica (questões reais de prova) ── */
  {
    id: 'seed-lq-trigonometria',
    titulo: "Banco de Questões — Trigonometria e Geometria Analítica",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'dificil',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-23", "mat-24"],
    total: 5,
    questoes: [
      {
        num: 1,
        enunciado: "(UNEB · CFO PM BA · 2025) Durante uma aula de trigonometria, o professor pediu aos alunos que analisassem ângulos em múltiplos de 90º e suas respectivas razões trigonométricas.\nSabendo que sen(45°) = cos(45°) = √2/2, qual é o valor de sen²(45°) + cos²(45°)?",
        opcoes: { A: "√2", B: "√2/2", C: "√(1/2)", D: "0", E: "1" },
        gabarito: 'E',
        explicacao: "Identidade fundamental da trigonometria: sen²θ + cos²θ = 1, para qualquer ângulo."
      },
      {
        num: 2,
        enunciado: "(CONSULTEC · CFO PM BA · 2017) O menor valor que a função f(x) = sec ²x - tg ²x - cos x pode assumir é",
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
        enunciado: "(CONSULTEC · CFO PM BA · 2017) Sejam as circunferências cujas equações são expressas por C₁: x² + y² + 16x + 63 = 0 e C₂: 3x² + 3y² - 6x - 54y + 234 = 0, respectivamente.\nNessas condições, é correto afirmar que uma das expressões para a equação geral da reta que passa pelos centros de C₁ e de C₂ é",
        opcoes: { A: "y - x - 4 = 0", B: "x - y + 4 = 0", C: "x - y + 8 = 0", D: "x + y - 8 = 0", E: "y + x + 8 = 0" },
        gabarito: 'C',
        explicacao: "Centros: C₁(−8, 0) e C₂(1, 9). Coeficiente angular: 9/9 = 1 → y = x + 8, ou seja, x − y + 8 = 0."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Devido ao crescimento no número de ocorrências violentas em determinado bairro decidiu-se instalar um posto policial cuja localização foi escolhida, por razões estratégicas, tomando-se como referência três regiões − R ₁, R ₂, R ₃ − de maior incidência de eventos dessa natureza. Se R ₁, R ₂, R ₃ forem representadas no plano cartesiano por (6,1), (6,9) e (13,1), respectivamente, então o posto deverá ser representado por um ponto P, o mais próximo possível de R ₁_ e R ₂, equidistante destes e, além disso, a uma distância de 5u.c. de R ₃.\nAssim sendo, a medida da distância do ponto P a R ₂, em unidades de comprimento, deverá ser, aproximadamente, igual a",
        opcoes: { A: "4,0.", B: "4,7.", C: "5,3.", D: "5,6.", E: "6,2." },
        gabarito: 'D',
        explicacao: "P equidistante de R1(6,1) e R2(6,9) → y = 5. Distância 5 até R3(13,1): (x−13)² + 16 = 25 → x = 10. d(P, R2) = √(4² + 4²) = √32 ≈ 5,6."
      }
    ]
  },

  /* ── 24. Lista de Exercícios — Análise Combinatória (questões reais de prova) ── */
  {
    id: 'seed-lq-combinatoria',
    titulo: "Banco de Questões — Análise Combinatória",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-17"],
    total: 5,
    questoes: [
      {
        num: 1,
        enunciado: "(UNEB · CFO PM BA · 2025) Em uma competição de palavras, um desafio consiste em formar todas as combinações possíveis com as letras de uma palavra específica. A palavra escolhida foi \"CASA\", que possui letras repetidas. Quantos anagramas distintos podem ser formados utilizando todas as letras dessa palavra?",
        opcoes: { A: "36", B: "72", C: "24", D: "48", E: "12" },
        gabarito: 'E',
        explicacao: "CASA tem 4 letras com A repetido 2 vezes: 4!/2! = 12 anagramas."
      },
      {
        num: 2,
        enunciado: "(FCC · Soldado PM BA · 2023) Placas para identificação de veículos deverão conter 4 letras distintas. Se escolhermos as letras X, Y, Z e W, o número de placas distintas que poderão ser produzidas é",
        opcoes: { A: "36", B: "24", C: "20", D: "16", E: "12" },
        gabarito: 'B',
        explicacao: "4 letras distintas em 4 posições: 4! = 24 placas."
      },
      {
        num: 3,
        enunciado: "(IBFC · Soldado PM BA · 2020) Em uma prateleira de uma biblioteca, deseja-se dispor 4 livros de maneiras distintas. Sabendo que a prateleira possui 10 espaços em que os livros podem ser colocados, assinale a alternativa que apresenta corretamente a quantidade de maneiras que esses livros podem ser dispostos nessa prateleira.",
        opcoes: { A: "3628800", B: "5040", C: "151200", D: "720", E: "24" },
        gabarito: 'B',
        explicacao: "Arranjo de 10 espaços tomados 4 a 4: 10 · 9 · 8 · 7 = 5040."
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Após um assalto, várias testemunhas foram ouvidas, mas não houve consenso quanto à placa do automóvel usado pelo assaltante na sua fuga. Através das informações dessas testemunhas, concluiu-se que a placa do veículo era constituída de 3 vogais distintas e quatro algarismos também distintos, sendo que os dois últimos algarismos eram os dígitos 0 e 1.\nCom base nesses dados, pode-se afirmar que o número de veículos a ser investigados é",
        opcoes: { A: "560", B: "1120", C: "3360", D: "6720", E: "8240" },
        gabarito: 'D',
        explicacao: "Vogais distintas: 5·4·3 = 60. Os dois últimos algarismos são 0 e 1 (2 ordens) e os dois primeiros vêm dos 8 restantes: 8·7 = 56. Total: 60 · 56 · 2 = 6720."
      },
      {
        num: 5,
        enunciado: "(FCC · Soldado PM BA · 2009) Certo dia, um automóvel passou em alta velocidade por uma avenida, excedendo o limite ali permitido. Um policial de plantão no local tentou anotar o número da placa do carro do infrator, mas não conseguiu fazê-lo por completo: memorizou apenas o prefixo (CSA) e, da parte numérica, lembrava somente que o algarismo da esquerda era ímpar e o da direita era par. Com base nessas informações, o total de possibilidades para o número da placa de tal automóvel é",
        opcoes: { A: "2500", B: "2000", C: "1000", D: "250", E: "100" },
        gabarito: 'A',
        explicacao: "Primeiro algarismo ímpar (5 opções), último par (5 opções), dois do meio livres (10 · 10): 5 · 10 · 10 · 5 = 2500."
      }
    ]
  },

  /* ── 25. Lista de Exercícios — Probabilidade e Estatística (questões reais de prova) ── */
  {
    id: 'seed-lq-probabilidade-estatistica',
    titulo: "Banco de Questões — Probabilidade e Estatística",
    materia: 'Matemática', fonte: 'Questões de provas — FCC · IBFC · UNEB · CONSULTEC (PM BA/CBM BA)', dificuldade: 'media',
    tipoLista: 'banco',
    cursoId: '', aulaId: '', aulaIds: ["mat-18", "mat-26"],
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
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Em um dia de grande movimentação em uma delegacia de polícia, o tempo médio e o tempo mediano de espera para atendimento de um grupo de 10 pessoas foram, ambos, iguais a 12 minutos.\nSabendo-se que o conjunto ordenado de valores 4, 5, 5, 9, a, 14, 16, 18, b, 21 corresponde ao tempo de espera, em minutos, de cada uma dessas pessoas, pode-se concluir que b - a é igual a",
        opcoes: { A: "5", B: "6", C: "7", D: "8", E: "9" },
        gabarito: 'D',
        explicacao: "Mediana de 10 valores = média do 5º e 6º: (a+14)/2 = 12 → a = 10. Média 12 → soma = 120: os demais somam 102 + b → b = 18. Logo b − a = 8."
      },
      {
        num: 3,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Dois grupos de estudantes foram submetidos a uma avaliação. Uma análise das notas obtidas por eles apontou, para o primeiro grupo, média e desvio padrão respectivamente iguais a M ₁ = 5 e D ₁ = 1,5 e, para o segundo grupo, média e desvio padrão iguais a M ₂ = 7 e D2 = 2,5. Por uma tarefa complementar, cada aluno do primeiro grupo teve um acréscimo de 20% à nota obtida na primeira avaliação e cada aluno do segundo grupo teve 1 ponto de acréscimo à referida nota.\nSendo M1’ e D ₁’, M ₂’ e D ₂’ as médias e desvios padrão depois do acréscimo, no primeiro e segundo grupos, é correto afirmar que",
        opcoes: { A: "M ₁’ − M1 = 0,2 e D1’ − D1 = 0,2", B: "M ₁ < M1’ e D1 = D1’", C: "M ₂’ − M2 = 1 e D ₂’ − D ₂ = 1", D: "M ₂ < M ₂’ e D ₂ = D ₂’", E: "D ₁’ − D1 = 0,3 e D ₂’ − D ₂ = 1" },
        gabarito: 'D',
        explicacao: "Somar 1 ponto a todas as notas desloca a média (+1) mas NÃO altera a dispersão: M2 < M2′ e D2 = D2′. (No 1º grupo, multiplicar por 1,2 altera média E desvio.)"
      },
      {
        num: 4,
        enunciado: "(CONSULTEC · CFO PM BA · 2014) Devido a um problema na emissão digital de senhas, um funcionário recebeu uma caixa contendo cartões numerados para serem distribuídos ao público como senhas de atendimento. Examinando-se esses cartões, observou-se que 20 deles tinham numeração múltipla de 3;\n15 deles tinham numeração múltipla de 4;\n10 deles tinham numeração múltipla de 12.\nConsiderando-se que a caixa contém o menor número possível de cartões com essas características, pode-se afirmar que, retirando-se, aleatoriamente, um desses cartões, a probabilidade de que ele não tenha numeração múltipla de 12 é igual a",
        opcoes: { A: "1/4", B: "3/10", C: "2/5", D: "1/2", E: "3/5" },
        gabarito: 'E',
        explicacao: "Menor caixa possível: 20 + 15 − 10 = 25 cartões (os 10 múltiplos de 12 contam nos dois grupos). Não múltiplos de 12: 25 − 10 = 15 → 15/25 = 3/5."
      },
      {
        num: 5,
        enunciado: "(CONSULTEC · CFO PM BA · 2010) Apenas três candicatos X, Y e Z disputarão uma eleição, na qual só pode haver um vencedor.\nAo analisar as intenções de voto da população, um instituto de pesquisa constatou que a chance de o candidato X vencer a eleição é o dobro da chance do candidato Y;\no candidato Y vencer a eleição é dois terços da chance do candidato Z.\nAssim, a probabilidade de vitória do candidato X ou do candidato Z é igual a",
        opcoes: { A: "2/3", B: "3/7", C: "7/9", D: "9/11", E: "11/10" },
        gabarito: 'C',
        explicacao: "Sejam z = 3k, y = 2k e x = 4k → total 9k. P(X ou Z) = (4k + 3k)/9k = 7/9."
      },
      {
        num: 6,
        enunciado: "(CONSULTEC · CFO PM BA · 2011) Supondo-se que cada um dos 120 candidatos inscritos em um concurso receba como código de identificação um anagrama distinto, da sigla CFOPM, pode-se estimar que a probabilidade de o anagrama impresso em um cartão escolhido aleatoriamente começar e terminar por consoante é igual a",
        opcoes: { A: "48%", B: "51%", C: "53%", D: "57%", E: "60%" },
        gabarito: 'E',
        explicacao: "CFOPM tem 4 consoantes e 1 vogal. Começar e terminar com consoante: 4 · 3 · 3! = 72 dos 120 anagramas → 72/120 = 60%."
      }
    ]
  },

  /* ── Lista de Questões — Primos, MMC e MDC (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-primos-mmc-mdc',
    titulo: "Lista de Questões — Primos, MMC e MDC",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-05", "mb-02", "cr-01"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Qual é o menor número primo?",
        opcoes: { A: "0", B: "1", C: "2", D: "3", E: "5" },
        gabarito: 'C',
        explicacao: "O 2 é o menor primo (e o único primo PAR). Lembre: 1 não é primo, pois tem um único divisor."
      },
      {
        num: 2,
        enunciado: "A fatoração em primos de 60 é:",
        opcoes: { A: "2 · 3 · 5", B: "2² · 3 · 5", C: "2² · 3² · 5", D: "2³ · 5", E: "2 · 3² · 5" },
        gabarito: 'B',
        explicacao: "60 = 2 · 30 = 2 · 2 · 15 = 2² · 3 · 5. Confira: 4 · 3 · 5 = 60 ✓"
      },
      {
        num: 3,
        enunciado: "O MMC de 12 e 18 é:",
        opcoes: { A: "6", B: "24", C: "36", D: "54", E: "72" },
        gabarito: 'C',
        explicacao: "12 = 2²·3 e 18 = 2·3². MMC = todos os fatores com maior expoente: 2²·3² = 36."
      },
      {
        num: 4,
        enunciado: "O MDC de 84 e 60 é:",
        opcoes: { A: "6", B: "12", C: "18", D: "24", E: "4" },
        gabarito: 'B',
        explicacao: "84 = 2²·3·7 e 60 = 2²·3·5. MDC = fatores comuns com menor expoente: 2²·3 = 12."
      },
      {
        num: 5,
        enunciado: "Dois ônibus saem juntos do terminal: um a cada 15 min, outro a cada 20 min. Voltarão a sair juntos depois de:",
        opcoes: { A: "35 min", B: "45 min", C: "60 min", D: "40 min", E: "30 min" },
        gabarito: 'C',
        explicacao: "“Voltar a coincidir” = MMC(15, 20) = 60 minutos."
      },
      {
        num: 6,
        enunciado: "Quantos divisores naturais tem o número 36?",
        opcoes: { A: "6", B: "7", C: "8", D: "9", E: "10" },
        gabarito: 'D',
        explicacao: "36 = 2²·3². Quantidade de divisores: (2+1)·(2+1) = 9. São eles: 1, 2, 3, 4, 6, 9, 12, 18, 36."
      },
      {
        num: 7,
        enunciado: "Duas cordas, de 24 m e 36 m, serão cortadas em pedaços iguais do MAIOR tamanho possível. Cada pedaço terá:",
        opcoes: { A: "6 m", B: "8 m", C: "12 m", D: "18 m", E: "4 m" },
        gabarito: 'C',
        explicacao: "“Maior pedaço igual” = MDC(24, 36) = 12 m (2 pedaços de uma e 3 da outra)."
      },
      {
        num: 8,
        enunciado: "Qual destes números é primo?",
        opcoes: { A: "51", B: "87", C: "91", D: "93", E: "97" },
        gabarito: 'E',
        explicacao: "51 = 3·17, 87 = 3·29, 91 = 7·13 e 93 = 3·31 são compostos. 97 não tem divisores além de 1 e ele mesmo."
      },
      {
        num: 9,
        enunciado: "O MDC de dois números é 4 e o MMC é 24. Se um deles é 8, o outro é:",
        opcoes: { A: "10", B: "12", C: "16", D: "6", E: "20" },
        gabarito: 'B',
        explicacao: "MMC × MDC = produto dos números: 24 · 4 = 96 → o outro = 96 ÷ 8 = 12."
      },
      {
        num: 10,
        enunciado: "No número 4□52, quantos algarismos podem ocupar o □ para que ele seja divisível por 3?",
        opcoes: { A: "1", B: "2", C: "3", D: "4", E: "5" },
        gabarito: 'C',
        explicacao: "Soma: 4+□+5+2 = 11+□ deve ser múltiplo de 3 → □ ∈ {1, 4, 7}: 3 valores."
      }
    ]
  },

  /* ── Lista de Questões — Potenciação e Radiciação (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-potenciacao',
    titulo: "Lista de Questões — Potenciação e Radiciação",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-07", "mb-04"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "O valor de 2⁵ é:",
        opcoes: { A: "10", B: "16", C: "25", D: "32", E: "64" },
        gabarito: 'D',
        explicacao: "2⁵ = 2·2·2·2·2 = 32."
      },
      {
        num: 2,
        enunciado: "O valor de (−2)⁴ + (−2)³ é:",
        opcoes: { A: "−24", B: "−8", C: "8", D: "24", E: "0" },
        gabarito: 'C',
        explicacao: "(−2)⁴ = +16 (expoente par) e (−2)³ = −8 (ímpar): 16 − 8 = 8."
      },
      {
        num: 3,
        enunciado: "O valor de 5⁰ + 5¹ é:",
        opcoes: { A: "0", B: "1", C: "5", D: "6", E: "25" },
        gabarito: 'D',
        explicacao: "Todo número (≠0) elevado a zero vale 1: 1 + 5 = 6."
      },
      {
        num: 4,
        enunciado: "O valor de 2⁻³ é:",
        opcoes: { A: "−8", B: "−6", C: "1/6", D: "1/8", E: "8" },
        gabarito: 'D',
        explicacao: "Expoente negativo = inverso: 2⁻³ = 1/2³ = 1/8. Não é número negativo!"
      },
      {
        num: 5,
        enunciado: "O valor de (2³)² é:",
        opcoes: { A: "12", B: "32", C: "36", D: "64", E: "128" },
        gabarito: 'D',
        explicacao: "Potência de potência multiplica os expoentes: 2⁶ = 64."
      },
      {
        num: 6,
        enunciado: "√144 vale:",
        opcoes: { A: "10", B: "11", C: "12", D: "13", E: "14" },
        gabarito: 'C',
        explicacao: "12 · 12 = 144 → √144 = 12."
      },
      {
        num: 7,
        enunciado: "O valor de ³√27 + √49 é:",
        opcoes: { A: "8", B: "9", C: "10", D: "11", E: "12" },
        gabarito: 'C',
        explicacao: "³√27 = 3 (3³ = 27) e √49 = 7 → 3 + 7 = 10."
      },
      {
        num: 8,
        enunciado: "O valor de 10⁴ · 10⁻² é:",
        opcoes: { A: "10", B: "100", C: "1.000", D: "10.000", E: "1" },
        gabarito: 'B',
        explicacao: "Mesma base: soma os expoentes: 10⁴⁻² = 10² = 100."
      },
      {
        num: 9,
        enunciado: "O número 0,0006 em notação científica é:",
        opcoes: { A: "6 × 10⁻³", B: "6 × 10⁻⁴", C: "0,6 × 10⁻³", D: "6 × 10⁴", E: "60 × 10⁻⁵" },
        gabarito: 'B',
        explicacao: "A vírgula anda 4 casas para a direita até o 6: 6 × 10⁻⁴ (entre 1 e 10 × potência de 10)."
      },
      {
        num: 10,
        enunciado: "O valor de 8^(2/3) é:",
        opcoes: { A: "2", B: "4", C: "6", D: "8", E: "16" },
        gabarito: 'B',
        explicacao: "Expoente fracionário: 8^(2/3) = (³√8)² = 2² = 4."
      }
    ]
  },

  /* ── Lista de Questões — Álgebra e Polinômios (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-algebra',
    titulo: "Lista de Questões — Álgebra e Polinômios",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-10"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "O desenvolvimento de (x + 3)² é:",
        opcoes: { A: "x² + 9", B: "x² + 3x + 9", C: "x² + 6x + 9", D: "x² + 6x + 6", E: "x² + 9x + 6" },
        gabarito: 'C',
        explicacao: "Quadrado da soma: a² + 2ab + b² = x² + 6x + 9. O termo 2ab é o que a banca espera que você esqueça."
      },
      {
        num: 2,
        enunciado: "O produto (2x − 5)(2x + 5) é igual a:",
        opcoes: { A: "4x² + 25", B: "4x² − 25", C: "4x² − 10x − 25", D: "2x² − 25", E: "4x² − 20x + 25" },
        gabarito: 'B',
        explicacao: "Produto da soma pela diferença: a² − b² = 4x² − 25, direto."
      },
      {
        num: 3,
        enunciado: "A forma fatorada de x² − 16 é:",
        opcoes: { A: "(x − 4)²", B: "(x + 4)²", C: "(x − 4)(x + 4)", D: "(x − 8)(x + 2)", E: "x(x − 16)" },
        gabarito: 'C',
        explicacao: "Diferença de quadrados: x² − 4² = (x − 4)(x + 4)."
      },
      {
        num: 4,
        enunciado: "Para P(x) = x³ − 2x² + 3x − 1, o valor de P(2) é:",
        opcoes: { A: "3", B: "4", C: "5", D: "7", E: "9" },
        gabarito: 'C',
        explicacao: "P(2) = 8 − 8 + 6 − 1 = 5."
      },
      {
        num: 5,
        enunciado: "A soma dos coeficientes de (2x − 1)³ é:",
        opcoes: { A: "−1", B: "0", C: "1", D: "3", E: "8" },
        gabarito: 'C',
        explicacao: "Soma dos coeficientes = P(1) = (2·1 − 1)³ = 1³ = 1. Atalho que dispensa expandir o cubo."
      },
      {
        num: 6,
        enunciado: "O resto da divisão de P(x) = x² + 3x − 2 por (x − 1) é:",
        opcoes: { A: "0", B: "1", C: "2", D: "3", E: "−2" },
        gabarito: 'C',
        explicacao: "Teorema do resto: resto = P(1) = 1 + 3 − 2 = 2."
      },
      {
        num: 7,
        enunciado: "Simplificando (x² − 25)/(x + 5), para x ≠ −5, obtém-se:",
        opcoes: { A: "x − 5", B: "x + 5", C: "x − 25", D: "5 − x", E: "x²" },
        gabarito: 'A',
        explicacao: "x² − 25 = (x+5)(x−5); corta o (x+5): sobra x − 5."
      },
      {
        num: 8,
        enunciado: "Fatorando 6x² + 9x pelo fator comum, obtém-se:",
        opcoes: { A: "3(2x² + 3x)", B: "3x(2x + 3)", C: "x(6x + 9)", D: "6x(x + 9)", E: "3x(2x + 9)" },
        gabarito: 'B',
        explicacao: "O maior fator comum é 3x: 6x² + 9x = 3x(2x + 3). A alternativa A fatora só o 3 (incompleto)."
      },
      {
        num: 9,
        enunciado: "O grau do polinômio (x² + 1)(x³ − x) é:",
        opcoes: { A: "2", B: "3", C: "5", D: "6", E: "4" },
        gabarito: 'C',
        explicacao: "O grau do produto é a soma dos graus: 2 + 3 = 5."
      },
      {
        num: 10,
        enunciado: "Para que x² + bx + 16 seja um quadrado perfeito com b > 0, o valor de b é:",
        opcoes: { A: "2", B: "4", C: "8", D: "16", E: "32" },
        gabarito: 'C',
        explicacao: "Quadrado perfeito: (x + 4)² = x² + 8x + 16 → b = 8 (b = 2·4)."
      }
    ]
  },

  /* ── Lista de Questões — Exponencial e Logaritmos (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-exp-log',
    titulo: "Lista de Questões — Exponencial e Logaritmos",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-13"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "Se 3ˣ = 81, então x vale:",
        opcoes: { A: "2", B: "3", C: "4", D: "5", E: "27" },
        gabarito: 'C',
        explicacao: "81 = 3⁴ → x = 4 (iguale as bases)."
      },
      {
        num: 2,
        enunciado: "O valor de log₂ 32 é:",
        opcoes: { A: "4", B: "5", C: "6", D: "8", E: "16" },
        gabarito: 'B',
        explicacao: "“2 elevado a quanto dá 32?” → 2⁵ = 32 → log₂ 32 = 5."
      },
      {
        num: 3,
        enunciado: "Resolvendo 2^(x−1) = 16, encontra-se x igual a:",
        opcoes: { A: "3", B: "4", C: "5", D: "6", E: "8" },
        gabarito: 'C',
        explicacao: "16 = 2⁴ → x − 1 = 4 → x = 5."
      },
      {
        num: 4,
        enunciado: "O valor de log 1000 (base 10) é:",
        opcoes: { A: "2", B: "3", C: "10", D: "100", E: "4" },
        gabarito: 'B',
        explicacao: "10³ = 1000 → log 1000 = 3."
      },
      {
        num: 5,
        enunciado: "O valor de log₅ 1 é:",
        opcoes: { A: "0", B: "1", C: "5", D: "1/5", E: "não existe" },
        gabarito: 'A',
        explicacao: "Logaritmo de 1 é SEMPRE zero, em qualquer base válida (b⁰ = 1)."
      },
      {
        num: 6,
        enunciado: "Para f(x) = 2ˣ, o valor de f(0) + f(3) é:",
        opcoes: { A: "6", B: "8", C: "9", D: "10", E: "12" },
        gabarito: 'C',
        explicacao: "f(0) = 2⁰ = 1 e f(3) = 8 → 1 + 8 = 9."
      },
      {
        num: 7,
        enunciado: "O valor de log₂(8 · 4) é:",
        opcoes: { A: "3", B: "4", C: "5", D: "6", E: "12" },
        gabarito: 'C',
        explicacao: "log do produto = soma: log₂8 + log₂4 = 3 + 2 = 5. (Ou direto: 8·4 = 32 = 2⁵.)"
      },
      {
        num: 8,
        enunciado: "Se 5^(x+1) = 125, então x vale:",
        opcoes: { A: "1", B: "2", C: "3", D: "4", E: "5" },
        gabarito: 'B',
        explicacao: "125 = 5³ → x + 1 = 3 → x = 2."
      },
      {
        num: 9,
        enunciado: "O valor de log₃(81 ÷ 3) é:",
        opcoes: { A: "2", B: "3", C: "4", D: "9", E: "27" },
        gabarito: 'B',
        explicacao: "log da divisão = diferença: log₃81 − log₃3 = 4 − 1 = 3. (81/3 = 27 = 3³ ✓)"
      },
      {
        num: 10,
        enunciado: "Uma cultura de bactérias DOBRA a cada hora. Começando com 100, depois de quantas horas passará de 1.600?",
        opcoes: { A: "3", B: "4", C: "5", D: "6", E: "16" },
        gabarito: 'C',
        explicacao: "100·2ⁿ > 1600 → 2ⁿ > 16 = 2⁴ → n = 5 horas (com 4 horas chega exatamente a 1.600, sem passar)."
      }
    ]
  },

  /* ── Lista de Questões — Sistemas, Matrizes e Determinantes (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-sistemas-matrizes',
    titulo: "Lista de Questões — Sistemas, Matrizes e Determinantes",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-16"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "No sistema x + y = 12 e x − y = 4, o valor de x é:",
        opcoes: { A: "4", B: "6", C: "8", D: "10", E: "12" },
        gabarito: 'C',
        explicacao: "Somando as equações: 2x = 16 → x = 8 (e y = 4)."
      },
      {
        num: 2,
        enunciado: "Duas camisas e uma calça custam R$ 110; uma camisa e uma calça custam R$ 80. O preço da camisa é:",
        opcoes: { A: "R$ 25", B: "R$ 30", C: "R$ 35", D: "R$ 40", E: "R$ 50" },
        gabarito: 'B',
        explicacao: "Subtraindo as equações: (2c + p) − (c + p) = 110 − 80 → c = 30."
      },
      {
        num: 3,
        enunciado: "O determinante da matriz de linhas (3, 1) e (5, 2) é:",
        opcoes: { A: "0", B: "1", C: "2", D: "6", E: "11" },
        gabarito: 'B',
        explicacao: "det = ad − bc = 3·2 − 1·5 = 6 − 5 = 1."
      },
      {
        num: 4,
        enunciado: "Uma matriz 2×3 possui quantos elementos?",
        opcoes: { A: "5", B: "6", C: "8", D: "9", E: "12" },
        gabarito: 'B',
        explicacao: "2 linhas × 3 colunas = 6 elementos."
      },
      {
        num: 5,
        enunciado: "Se aᵢⱼ = 2i + j, o elemento a₂₁ vale:",
        opcoes: { A: "3", B: "4", C: "5", D: "6", E: "7" },
        gabarito: 'C',
        explicacao: "i = 2 (linha), j = 1 (coluna): 2·2 + 1 = 5."
      },
      {
        num: 6,
        enunciado: "O sistema x + y = 5 e 2x + 2y = 10 possui:",
        opcoes: { A: "nenhuma solução", B: "uma única solução", C: "duas soluções", D: "infinitas soluções", E: "cinco soluções" },
        gabarito: 'D',
        explicacao: "A 2ª equação é o dobro da 1ª — mesma reta → SPI: infinitas soluções."
      },
      {
        num: 7,
        enunciado: "O determinante da matriz de linhas (2, 4) e (3, 6) é:",
        opcoes: { A: "0", B: "2", C: "6", D: "12", E: "24" },
        gabarito: 'A',
        explicacao: "As linhas são proporcionais (a 2ª é 1,5× a 1ª) → det = 0. (Conta: 12 − 12 = 0.)"
      },
      {
        num: 8,
        enunciado: "Somando as matrizes de linhas (1, 2),(3, 4) e (0, 1),(1, 0), o MAIOR elemento da matriz resultante é:",
        opcoes: { A: "3", B: "4", C: "5", D: "6", E: "7" },
        gabarito: 'B',
        explicacao: "Soma elemento a elemento: (1, 3),(4, 4) → maior = 4."
      },
      {
        num: 9,
        enunciado: "No sistema x + 2y = 7 e x = y + 1, o produto x·y vale:",
        opcoes: { A: "4", B: "5", C: "6", D: "8", E: "10" },
        gabarito: 'C',
        explicacao: "Substituindo: (y + 1) + 2y = 7 → y = 2 → x = 3 → x·y = 6."
      },
      {
        num: 10,
        enunciado: "O sistema x + y = 3 e x + y = 5 é classificado como:",
        opcoes: { A: "possível e determinado", B: "possível e indeterminado", C: "impossível", D: "homogêneo", E: "equivalente" },
        gabarito: 'C',
        explicacao: "A mesma soma não pode dar 3 E 5 — retas paralelas distintas → sistema impossível (SI)."
      }
    ]
  },

  /* ── Lista de Questões — Geometria Espacial (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-geo-espacial',
    titulo: "Lista de Questões — Geometria Espacial",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-21", "mat-22"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "O volume de um cubo de aresta 4 cm é:",
        opcoes: { A: "12 cm³", B: "16 cm³", C: "48 cm³", D: "64 cm³", E: "256 cm³" },
        gabarito: 'D',
        explicacao: "V = a³ = 4³ = 64 cm³."
      },
      {
        num: 2,
        enunciado: "Um paralelepípedo mede 5 cm × 3 cm × 2 cm. Seu volume é:",
        opcoes: { A: "10 cm³", B: "15 cm³", C: "30 cm³", D: "60 cm³", E: "25 cm³" },
        gabarito: 'C',
        explicacao: "V = comprimento × largura × altura = 5·3·2 = 30 cm³."
      },
      {
        num: 3,
        enunciado: "Uma caixa d’água de 2 m × 2 m × 1,5 m comporta quantos litros?",
        opcoes: { A: "600 L", B: "6.000 L", C: "60.000 L", D: "3.000 L", E: "1.500 L" },
        gabarito: 'B',
        explicacao: "V = 6 m³ e 1 m³ = 1.000 L → 6.000 litros."
      },
      {
        num: 4,
        enunciado: "Um cilindro tem raio 2 cm e altura 7 cm. Com π = 3,14, seu volume é:",
        opcoes: { A: "43,96 cm³", B: "87,92 cm³", C: "28 cm³", D: "175,84 cm³", E: "94,2 cm³" },
        gabarito: 'B',
        explicacao: "V = πr²h = 3,14 · 4 · 7 = 87,92 cm³."
      },
      {
        num: 5,
        enunciado: "A área total de um cubo de aresta 3 cm é:",
        opcoes: { A: "27 cm²", B: "36 cm²", C: "54 cm²", D: "18 cm²", E: "9 cm²" },
        gabarito: 'C',
        explicacao: "São 6 faces de 3² = 9 cm²: 6 · 9 = 54 cm²."
      },
      {
        num: 6,
        enunciado: "Uma pirâmide tem base de área 9 cm² e altura 4 cm. Seu volume é:",
        opcoes: { A: "6 cm³", B: "12 cm³", C: "18 cm³", D: "36 cm³", E: "27 cm³" },
        gabarito: 'B',
        explicacao: "V = (1/3) · A_base · h = (1/3) · 9 · 4 = 12 cm³. Não esqueça o ÷3!"
      },
      {
        num: 7,
        enunciado: "Um cone tem raio 3 e altura 4. Seu volume é:",
        opcoes: { A: "12π", B: "36π", C: "24π", D: "16π", E: "48π" },
        gabarito: 'A',
        explicacao: "V = (1/3)πr²h = (1/3)π·9·4 = 12π."
      },
      {
        num: 8,
        enunciado: "O volume de uma esfera de raio 3 é:",
        opcoes: { A: "9π", B: "18π", C: "27π", D: "36π", E: "12π" },
        gabarito: 'D',
        explicacao: "V = (4/3)πr³ = (4/3)π·27 = 36π."
      },
      {
        num: 9,
        enunciado: "Dobrando a aresta de um cubo, seu volume fica multiplicado por:",
        opcoes: { A: "2", B: "4", C: "6", D: "8", E: "16" },
        gabarito: 'D',
        explicacao: "Volume varia com o CUBO da razão: 2³ = 8."
      },
      {
        num: 10,
        enunciado: "Um prisma reto tem base quadrada de lado 5 cm e altura 10 cm. Sua área LATERAL é:",
        opcoes: { A: "50 cm²", B: "100 cm²", C: "200 cm²", D: "250 cm²", E: "150 cm²" },
        gabarito: 'C',
        explicacao: "Lateral = perímetro da base × altura = 20 · 10 = 200 cm²."
      }
    ]
  },

  /* ── Lista de Questões — Geometria Analítica (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-geo-analitica',
    titulo: "Lista de Questões — Geometria Analítica",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-23"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "A distância entre a origem (0, 0) e o ponto (3, 4) é:",
        opcoes: { A: "3", B: "4", C: "5", D: "7", E: "12" },
        gabarito: 'C',
        explicacao: "d = √(3² + 4²) = √25 = 5 — o terno 3-4-5."
      },
      {
        num: 2,
        enunciado: "O ponto médio do segmento de extremos (2, 4) e (6, 8) é:",
        opcoes: { A: "(3, 5)", B: "(4, 6)", C: "(5, 7)", D: "(4, 5)", E: "(8, 12)" },
        gabarito: 'B',
        explicacao: "Média dos x: (2+6)/2 = 4; média dos y: (4+8)/2 = 6 → (4, 6)."
      },
      {
        num: 3,
        enunciado: "O coeficiente angular da reta pelos pontos (1, 2) e (3, 6) é:",
        opcoes: { A: "1", B: "2", C: "3", D: "4", E: "1/2" },
        gabarito: 'B',
        explicacao: "m = Δy/Δx = (6−2)/(3−1) = 4/2 = 2."
      },
      {
        num: 4,
        enunciado: "A reta y = 2x + 1 corta o eixo y no ponto:",
        opcoes: { A: "(0, 1)", B: "(1, 0)", C: "(0, 2)", D: "(2, 1)", E: "(−1, 0)" },
        gabarito: 'A',
        explicacao: "No eixo y, x = 0 → y = 1 → (0, 1). O “+1” é o coeficiente linear."
      },
      {
        num: 5,
        enunciado: "Uma reta PARALELA a y = 3x − 2 tem coeficiente angular:",
        opcoes: { A: "−3", B: "−1/3", C: "1/3", D: "2", E: "3" },
        gabarito: 'E',
        explicacao: "Paralelas têm o MESMO coeficiente angular: m = 3."
      },
      {
        num: 6,
        enunciado: "A distância entre (1, 1) e (4, 5) é:",
        opcoes: { A: "3", B: "4", C: "5", D: "6", E: "7" },
        gabarito: 'C',
        explicacao: "Δx = 3, Δy = 4 → d = √(9+16) = 5."
      },
      {
        num: 7,
        enunciado: "O centro da circunferência x² + y² − 4x − 6y + 9 = 0 é:",
        opcoes: { A: "(4, 6)", B: "(2, 3)", C: "(−2, −3)", D: "(−4, −6)", E: "(2, −3)" },
        gabarito: 'B',
        explicacao: "Centro = (−D/2, −E/2) = (4/2, 6/2) = (2, 3)."
      },
      {
        num: 8,
        enunciado: "O raio da circunferência x² + y² − 4x − 6y + 9 = 0 é:",
        opcoes: { A: "1", B: "2", C: "3", D: "4", E: "9" },
        gabarito: 'B',
        explicacao: "r = √(a² + b² − F) = √(4 + 9 − 9) = √4 = 2."
      },
      {
        num: 9,
        enunciado: "Para que (0,0), (1,2) e (2,k) fiquem alinhados, k deve valer:",
        opcoes: { A: "2", B: "3", C: "4", D: "5", E: "6" },
        gabarito: 'C',
        explicacao: "A reta pela origem com m = 2 é y = 2x → em x = 2, y = 4."
      },
      {
        num: 10,
        enunciado: "Uma reta PERPENDICULAR a outra de coeficiente angular 2 tem coeficiente:",
        opcoes: { A: "2", B: "−2", C: "1/2", D: "−1/2", E: "0" },
        gabarito: 'D',
        explicacao: "Perpendiculares: m₁ · m₂ = −1 → m₂ = −1/2."
      }
    ]
  },

  /* ── Lista de Questões — Trigonometria (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-trigonometria',
    titulo: "Lista de Questões — Trigonometria",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-24"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "O valor de sen 30° é:",
        opcoes: { A: "1/2", B: "√2/2", C: "√3/2", D: "1", E: "√3/3" },
        gabarito: 'A',
        explicacao: "Valor notável: sen 30° = 1/2 (decore a tabelinha 30°-45°-60°)."
      },
      {
        num: 2,
        enunciado: "O valor de tg 45° é:",
        opcoes: { A: "0", B: "1/2", C: "1", D: "√2", E: "√3" },
        gabarito: 'C',
        explicacao: "tg 45° = sen/cos = (√2/2)/(√2/2) = 1."
      },
      {
        num: 3,
        enunciado: "Uma escada de 8 m faz 30° com o CHÃO. A altura que ela alcança na parede é:",
        opcoes: { A: "2 m", B: "4 m", C: "6 m", D: "8 m", E: "4√3 m" },
        gabarito: 'B',
        explicacao: "Altura = oposto ao ângulo; escada = hipotenusa: h = 8 · sen 30° = 8 · 0,5 = 4 m."
      },
      {
        num: 4,
        enunciado: "O valor de cos 60° é:",
        opcoes: { A: "1/2", B: "√2/2", C: "√3/2", D: "1", E: "0" },
        gabarito: 'A',
        explicacao: "cos 60° = sen 30° = 1/2 (o cosseno “espelha” o seno)."
      },
      {
        num: 5,
        enunciado: "Para qualquer ângulo x, sen²x + cos²x vale:",
        opcoes: { A: "0", B: "1/2", C: "1", D: "2", E: "depende de x" },
        gabarito: 'C',
        explicacao: "Identidade fundamental da trigonometria: sempre 1."
      },
      {
        num: 6,
        enunciado: "Quando o sol está a 45°, uma torre projeta sombra de 50 m. A altura da torre é:",
        opcoes: { A: "25 m", B: "50 m", C: "50√2 m", D: "100 m", E: "25√3 m" },
        gabarito: 'B',
        explicacao: "tg 45° = altura/sombra = 1 → altura = sombra = 50 m."
      },
      {
        num: 7,
        enunciado: "Num triângulo retângulo, o cateto oposto a θ mede 6 e a hipotenusa 10. Então sen θ vale:",
        opcoes: { A: "0,3", B: "0,6", C: "0,8", D: "6/8", E: "10/6" },
        gabarito: 'B',
        explicacao: "sen θ = oposto/hipotenusa = 6/10 = 0,6."
      },
      {
        num: 8,
        enunciado: "Uma rampa de 5 m de comprimento atinge 2,5 m de altura. O ângulo da rampa com o chão é:",
        opcoes: { A: "15°", B: "30°", C: "45°", D: "60°", E: "75°" },
        gabarito: 'B',
        explicacao: "sen θ = 2,5/5 = 0,5 → θ = 30°."
      },
      {
        num: 9,
        enunciado: "O valor de sen 60° + cos 30° é:",
        opcoes: { A: "1", B: "√3/2", C: "√3", D: "2", E: "√2" },
        gabarito: 'C',
        explicacao: "Os dois valem √3/2 → soma = √3."
      },
      {
        num: 10,
        enunciado: "O valor de tg 30° é:",
        opcoes: { A: "√3", B: "√3/3", C: "1/2", D: "√2/2", E: "1" },
        gabarito: 'B',
        explicacao: "tg 30° = (1/2)/(√3/2) = 1/√3 = √3/3 (racionalizado)."
      }
    ]
  },

  /* ── Lista de Questões — Estatística (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-estatistica',
    titulo: "Lista de Questões — Estatística",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'facil',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-26", "cr-05"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "A média de 4, 6, 8, 10 e 12 é:",
        opcoes: { A: "6", B: "7", C: "8", D: "9", E: "10" },
        gabarito: 'C',
        explicacao: "Soma = 40, dividido por 5 = 8."
      },
      {
        num: 2,
        enunciado: "A mediana do conjunto 3, 7, 8, 12, 15 é:",
        opcoes: { A: "7", B: "8", C: "9", D: "12", E: "45" },
        gabarito: 'B',
        explicacao: "Já está ordenado; com 5 valores, a mediana é o 3º: 8."
      },
      {
        num: 3,
        enunciado: "A moda do conjunto 2, 3, 3, 5, 7, 3 é:",
        opcoes: { A: "2", B: "3", C: "5", D: "7", E: "não tem" },
        gabarito: 'B',
        explicacao: "Moda = o valor que MAIS se repete: o 3 aparece três vezes."
      },
      {
        num: 4,
        enunciado: "Um aluno tirou 6 (peso 1) e 8 (peso 3). Sua média ponderada é:",
        opcoes: { A: "7,0", B: "7,2", C: "7,5", D: "7,8", E: "8,0" },
        gabarito: 'C',
        explicacao: "(6·1 + 8·3)/(1+3) = 30/4 = 7,5."
      },
      {
        num: 5,
        enunciado: "A mediana de 2, 4, 6, 8 é:",
        opcoes: { A: "4", B: "5", C: "6", D: "7", E: "20" },
        gabarito: 'B',
        explicacao: "Quantidade PAR: média dos dois centrais: (4+6)/2 = 5."
      },
      {
        num: 6,
        enunciado: "Somando 2 pontos a TODAS as notas de uma turma:",
        opcoes: { A: "média e desvio padrão aumentam", B: "média aumenta e desvio padrão não muda", C: "nada muda", D: "média não muda e desvio aumenta", E: "os dois diminuem" },
        gabarito: 'B',
        explicacao: "Somar constante desloca a média (+2), mas o “espalhamento” (desvio padrão) fica igual."
      },
      {
        num: 7,
        enunciado: "A média de 5 notas é 7. Se quatro delas somam 26, a quinta nota é:",
        opcoes: { A: "7", B: "8", C: "9", D: "10", E: "6" },
        gabarito: 'C',
        explicacao: "Soma total = 5 × 7 = 35 → quinta = 35 − 26 = 9."
      },
      {
        num: 8,
        enunciado: "A amplitude do conjunto 4, 7, 11, 15, 19 é:",
        opcoes: { A: "4", B: "11", C: "15", D: "19", E: "23" },
        gabarito: 'C',
        explicacao: "Amplitude = maior − menor = 19 − 4 = 15."
      },
      {
        num: 9,
        enunciado: "De 200 unidades vendidas, 40 foram do produto X. O percentual de X nas vendas é:",
        opcoes: { A: "10%", B: "15%", C: "20%", D: "25%", E: "40%" },
        gabarito: 'C',
        explicacao: "40/200 = 0,20 = 20%."
      },
      {
        num: 10,
        enunciado: "Numa empresa, um único salário altíssimo distorce a análise. A medida MENOS afetada por esse valor extremo é:",
        opcoes: { A: "a média", B: "a mediana", C: "a amplitude", D: "a soma", E: "o máximo" },
        gabarito: 'B',
        explicacao: "A mediana depende só da POSIÇÃO central — valores extremos quase não a movem (a média, sim)."
      }
    ]
  },

  /* ── Lista de Questões — Lógica Matemática (autoral · 10 questões da aula) ── */
  {
    id: 'seed-lqa-logica',
    titulo: "Lista de Questões — Lógica Matemática",
    materia: 'Matemática', fonte: 'Professor Leão · estilo FCC/UNEB', dificuldade: 'medio',
    tipoLista: 'lista',
    cursoId: '', aulaId: '', aulaIds: ["mat-lg", "cr-04"],
    total: 10,
    questoes: [
      {
        num: 1,
        enunciado: "A negação de “Todos os soldados gostam de treinar” é:",
        opcoes: { A: "Nenhum soldado gosta de treinar", B: "Todos os soldados não gostam de treinar", C: "Pelo menos um soldado não gosta de treinar", D: "Alguns soldados gostam de treinar", E: "Ninguém treina" },
        gabarito: 'C',
        explicacao: "Negação de “todo” = “pelo menos um não”. “Nenhum gosta” é muito mais forte que a negação."
      },
      {
        num: 2,
        enunciado: "Se p é VERDADEIRA e q é FALSA, então p ∧ q (p e q) é:",
        opcoes: { A: "verdadeira", B: "falsa", C: "indeterminada", D: "verdadeira ou falsa", E: "tautologia" },
        gabarito: 'B',
        explicacao: "A conjunção (E) exige as DUAS verdadeiras. Com q falsa, p ∧ q é falsa."
      },
      {
        num: 3,
        enunciado: "A proposição “se p, então q” (p → q) é FALSA somente quando:",
        opcoes: { A: "p V e q V", B: "p V e q F", C: "p F e q V", D: "p F e q F", E: "nunca é falsa" },
        gabarito: 'B',
        explicacao: "O condicional só falha na “promessa quebrada”: antecedente V com consequente F."
      },
      {
        num: 4,
        enunciado: "A negação de “chove e venta” é:",
        opcoes: { A: "não chove e não venta", B: "não chove ou não venta", C: "chove ou venta", D: "não chove e venta", E: "chove e não venta" },
        gabarito: 'B',
        explicacao: "De Morgan: nega os dois e troca E por OU."
      },
      {
        num: 5,
        enunciado: "A contrapositiva de “se estudo, então passo” é:",
        opcoes: { A: "se passo, então estudei", B: "se não estudo, então não passo", C: "se não passo, então não estudei", D: "estudo e não passo", E: "passo ou estudo" },
        gabarito: 'C',
        explicacao: "Contrapositiva: nega os dois lados E inverte a ordem: ~q → ~p."
      },
      {
        num: 6,
        enunciado: "A negação de “Nenhum policial é covarde” é:",
        opcoes: { A: "Todos os policiais são covardes", B: "Algum policial é covarde", C: "Nenhum covarde é policial", D: "Algum policial não é covarde", E: "Todos são corajosos" },
        gabarito: 'B',
        explicacao: "Negação de “nenhum A é B” = “algum A é B” (basta UM exemplo)."
      },
      {
        num: 7,
        enunciado: "A proposição “3 > 2 ou 1 > 5” é:",
        opcoes: { A: "falsa", B: "verdadeira", C: "indeterminada", D: "contradição", E: "aberta" },
        gabarito: 'B',
        explicacao: "O OU precisa de apenas UMA verdadeira: 3 > 2 é verdade, então a disjunção é verdadeira."
      },
      {
        num: 8,
        enunciado: "Uma proposição equivalente a p → q é:",
        opcoes: { A: "p ∧ ~q", B: "~p ∨ q", C: "p ∨ q", D: "~p ∧ ~q", E: "q → ~p" },
        gabarito: 'B',
        explicacao: "Equivalência clássica: “se p então q” = “não-p OU q”."
      },
      {
        num: 9,
        enunciado: "“Todo soldado é forte. João é soldado.” Conclui-se que:",
        opcoes: { A: "João pode ser forte", B: "João é forte", C: "algum soldado é fraco", D: "João não é forte", E: "nada se conclui" },
        gabarito: 'B',
        explicacao: "Silogismo direto: se TODOS são fortes e João pertence ao grupo, João é forte."
      },
      {
        num: 10,
        enunciado: "Na sequência 2, 6, 12, 20, 30, …, o próximo termo é:",
        opcoes: { A: "36", B: "40", C: "42", D: "44", E: "48" },
        gabarito: 'C',
        explicacao: "As diferenças crescem: +4, +6, +8, +10 → próxima é +12: 30 + 12 = 42."
      }
    ]
  }
];

/* ════════════════════════════════════════════════════════════
   MINISSIMULADOS POR ASSUNTO — COMPLEMENTO COM QUESTÕES REAIS
   Questões reais de banca selecionadas do banco (Tec) para
   casar EXATAMENTE com o assunto da aula e o perfil do edital
   (Soldado/Oficial PM BA · CBM BA — FCC · CONSULTEC · UNEB · IBFC).
   O bloco _ajustarMinisPara10 deixa cada minissimulado 'banco'
   com 10 questões: mantém as já curadas e completa com estas.
   ════════════════════════════════════════════════════════════ */
window.PL_SEED_MINI_EXTRA = {
  'seed-lq-logica-sequencias': [
    {
      enunciado: "(FCC · DPT BA · 2014) Observe a sequência 6; 10; 18; 34; 66; … em que cada termo é o dobro do anterior menos 2. Sabe-se que o 11º termo é 4098. A soma do 9º com o 10º termo é igual a:",
      opcoes: { A: "5126", B: "2122", C: "4098", D: "3076", E: "6186" },
      gabarito: "D",
      explicacao: "Aplicando 'dobro do anterior menos 2': 6, 10, 18, 34, 66, 130, 258, 514, 1026, 2050, 4098. O 9º (1026) somado ao 10º (2050) dá 3076."
    }
  ],
  'seed-lq-numeros-operacoes': [
    {
      enunciado: "(FCC · SEC BA · 2018) Raquel dividiu 17 por 3 na calculadora e obteve no visor 5,6666667; Sérgio fez a mesma divisão e obteve 5,6666666. Sobre os resultados, o professor respondeu, corretamente, que:",
      opcoes: { A: "a calculadora de Raquel deve estar quebrada e, por isso, marcou o último algarismo como 7.", B: "ambas apresentaram resultados aproximados, sendo a de Sérgio a de menor erro em relação ao valor correto.", C: "ambas apresentaram resultados aproximados, sendo a de Raquel a de menor erro em relação ao valor correto.", D: "a calculadora de Sérgio deve estar em base não decimal.", E: "ambas apresentaram resultados aproximados porque 17/3 é um número irracional." },
      gabarito: "C",
      explicacao: "17/3 = 5,6666… (dízima). Raquel arredondou (5,6666667) e Sérgio truncou (5,6666666); o arredondamento de Raquel fica mais perto do valor real, com menor erro."
    },
    {
      enunciado: "(FCC · SEC BA · 2022) O valor numérico da expressão (x·y)/(y − x) para y = 4 e x = −2 é:",
      opcoes: { A: "4", B: "−2/3", C: "6", D: "−16/9", E: "−4/3" },
      gabarito: "E",
      explicacao: "(x·y)/(y − x) = (−2·4)/(4 − (−2)) = −8/6 = −4/3."
    },
    {
      enunciado: "(FCC · SEE MG · 2012) Uma escola tinha 480 alunos matriculados e a diretora queria montar turmas de, no mínimo, 35 alunos. Verificando que uma das turmas ficaria incompleta, ela concluiu que seria necessário matricular mais:",
      opcoes: { A: "6 alunos.", B: "10 alunos.", C: "15 alunos.", D: "25 alunos." },
      gabarito: "B",
      explicacao: "480 = 13·35 + 25: formam-se 13 turmas de 35 e sobra uma turma com 25 alunos. Para completá-la (chegar a 35) faltam 10 alunos."
    },
    {
      enunciado: "(FCC · Pref. Santos · 2005) Um ano bissexto (366 dias) tem x semanas completas e mais y dias. O número x·y é:",
      opcoes: { A: "104", B: "54", C: "52", D: "108", E: "208" },
      gabarito: "A",
      explicacao: "366 ÷ 7 = 52 semanas completas e resto 2, logo x = 52 e y = 2. Assim x·y = 104."
    }
  ],
  'seed-lq-teoria-conjuntos': [
    {
      enunciado: "(CONSULTEC · Oficial PM BA · 2011) Numa pesquisa com motoristas: 50% já foram multados por estacionar em local proibido, 60% por usar o celular dirigindo e 15 nunca foram multados por nenhuma das duas. O número mínimo de motoristas que podem ter cometido as duas infrações é:",
      opcoes: { A: "18", B: "19", C: "21", D: "23", E: "24" },
      gabarito: "B",
      explicacao: "Com 40 motoristas (menor total compatível): 20 multados por estacionamento, 24 por celular e 15 por nenhuma, então no máximo 25 foram multados por alguma. Pela inclusão-exclusão, ao menos 20 + 24 − 25 = 19 cometeram as duas."
    },
    {
      enunciado: "(IBFC · Soldado CBM BA · 2020) Considere os conjuntos A = {1, 2, 4, 5, 6, 10} e B = {3, 4, 5, 6, 8, 10}. Os conjuntos A∩B e A−B são, respectivamente:",
      opcoes: { A: "{4, 5, 6, 10} e {1, 2}", B: "{1, 2} e {3, 8}", C: "{4, 5, 6, 10} e {1, 2, 3, 8}", D: "{1, 2, 3, 4, 5, 6, 8, 10} e {1, 2}", E: "{4, 5, 6, 10} e {3, 8}" },
      gabarito: "A",
      explicacao: "A∩B são os elementos comuns: {4, 5, 6, 10}. A−B são os de A que não estão em B: {1, 2}."
    },
    {
      enunciado: "(IBFC · Soldado CBM BA · 2020) Num corpo de bombeiros, 10 profissionais têm a especialidade “Busca e salvamento”, 8 têm “Combate a incêndio” e, destes, 4 têm ambas. O número total de profissionais considerados é:",
      opcoes: { A: "10", B: "12", C: "20", D: "14", E: "22" },
      gabarito: "D",
      explicacao: "Total = 10 + 8 − 4 (contados duas vezes) = 14 profissionais."
    },
    {
      enunciado: "(IBFC · PC BA · 2022) Dois conjuntos finitos A e B têm, respectivamente, 10 e 12 elementos, e a interseção entre eles tem 3 elementos. É correto afirmar que:",
      opcoes: { A: "a união entre A e B tem 22 elementos.", B: "a 'adição' entre A e B tem 19 elementos.", C: "A − B tem 19 elementos.", D: "B − A tem 9 elementos.", E: "A e B são disjuntos." },
      gabarito: "D",
      explicacao: "União = 10 + 12 − 3 = 19; A − B = 10 − 3 = 7; B − A = 12 − 3 = 9. A única correta é B − A = 9."
    },
    {
      enunciado: "(FCC · SEFAZ BA · 2019) Numa cidade com dois clubes (Alfa e Beta), o número de sócios de Alfa é 3/4 do número de sócios de Beta; 8% dos habitantes são sócios dos dois clubes e 24% não são sócios de nenhum. Escolhido um habitante ao acaso, a probabilidade de ser sócio somente de Alfa é:",
      opcoes: { A: "30%.", B: "32%.", C: "20%.", D: "28%.", E: "34%." },
      gabarito: "D",
      explicacao: "Em 100 habitantes, 24 não são sócios → 76 em ao menos um clube. Com Beta = b e Alfa = 3b/4 e 8 nos dois: 3b/4 + b − 8 = 76 → b = 48 e Alfa = 36. Só Alfa = 36 − 8 = 28%."
    },
    {
      enunciado: "(FCC · TRT 6ª · 2025) Em um bairro há 70 famílias: 30 têm cachorro, 18 têm gato e 13 têm pássaro; 3 têm cachorro e gato, 8 têm cachorro e pássaro, e nenhum gato convive com pássaro. O número de famílias que NÃO possuem animais é:",
      opcoes: { A: "22.", B: "18.", C: "15.", D: "20.", E: "10." },
      gabarito: "D",
      explicacao: "Como nenhum gato convive com pássaro, gato∩pássaro = 0. Famílias com algum animal = 30 + 18 + 13 − 3 − 8 = 50. Sem animais = 70 − 50 = 20."
    }
  ],
  'seed-lq-fracoes': [
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Numa festa, uma pessoa comeu 2/3 de um bolo. Em seguida, compartilhou 1/4 da parte que restava com um amigo, que provou essa porção. Que fração do bolo ainda não foi consumida ao final?",
      opcoes: { A: "1/4.", B: "1/5.", C: "1/9.", D: "1/6.", E: "1/12." },
      gabarito: "A",
      explicacao: "Comeu 2/3, sobrou 1/3. O amigo provou 1/4 desse resto: 1/4·1/3 = 1/12. Não consumido = 1/3 − 1/12 = 1/4."
    },
    {
      enunciado: "(FCC · SEC BA · 2022) O gasto com salários de um setor (1 gerente, 8 administradores e 1 arquivista) teve reajuste de 20% e passou a R$ 57.600,00. Sabendo que 1/3 do gasto é com o gerente e 1/24 com o arquivista, o valor que cada administrador recebia antes do reajuste era:",
      opcoes: { A: "R$ 2.000,00", B: "R$ 3.750,00", C: "R$ 3.600,00", D: "R$ 1.986,00", E: "R$ 3.456,00" },
      gabarito: "B",
      explicacao: "Antes do reajuste o total era 57.600 ÷ 1,2 = R$ 48.000. Gerente = 1/3 = 16.000; arquivista = 1/24 = 2.000; sobram 30.000 para os 8 administradores → 3.750 cada."
    },
    {
      enunciado: "(FCC · TRE BA · 2003) De uma equipe de técnicos, 1/3 trabalhou das 8 às 10 h e 2/5 do número restante das 10 às 12 h. Se à tarde a orientação foi dada pelos últimos 6 técnicos, o total de membros da equipe era:",
      opcoes: { A: "12", B: "15", C: "18", D: "21", E: "24" },
      gabarito: "B",
      explicacao: "Após a manhã sobram 2/3; destes, 2/5 trabalham das 10 às 12 (= 4/15 do total). Restam 2/3 − 4/15 = 6/15 = 2/5 do total para a tarde, e isso são 6 técnicos → total 15."
    },
    {
      enunciado: "(FCC · SEDUC SP · 2010) Uma professora mediu a altura de seus 35 alunos e comparou cada uma com a média aritmética das alturas. Todos os números encontrados pertencem ao conjunto dos números:",
      opcoes: { A: "inteiros, mas não aos naturais.", B: "racionais não negativos.", C: "reais não positivos.", D: "racionais não positivos.", E: "complexos, mas não aos reais." },
      gabarito: "B",
      explicacao: "Alturas de pessoas são positivas e podem ser fracionárias; a média também. Todos são racionais não negativos."
    },
    {
      enunciado: "(FCC · SEDUC SP · 2010) Existe um número real que, somado ao numerador e subtraído do denominador da fração 7/13, a transforma em sua inversa. Esse número é:",
      opcoes: { A: "um quadrado perfeito, como 4.", B: "primo.", C: "um decimal não exato, como 1,2.", D: "um dos divisores de 24, como 2 ou 3.", E: "um inteiro negativo, como −5." },
      gabarito: "D",
      explicacao: "Queremos (7 + x)/(13 − x) = 13/7 (o inverso). Então 7(7 + x) = 13(13 − x) → 49 + 7x = 169 − 13x → 20x = 120 → x = 6, que é divisor de 24."
    },
    {
      enunciado: "(FCC · CPRH · 2026) Um cinema tem 160 lugares e uma sessão por dia. De segunda a quarta o ingresso custa R$ 24,00 e de quinta a domingo, R$ 36,00. Na semana passada, na segunda foram vendidos 1/4 dos ingressos; na terça, a metade; na quarta, quinta, sexta e sábado, todos os ingressos. Se a arrecadação total foi R$ 29.328,00, o número de ingressos vendidos no domingo foi:",
      opcoes: { A: "148", B: "146", C: "150", D: "140", E: "144" },
      gabarito: "A",
      explicacao: "Seg: 40·24 = 960; ter: 80·24 = 1.920; qua: 160·24 = 3.840; qui + sex + sáb: 3·160·36 = 17.280 → subtotal 24.000. Faltam 29.328 − 24.000 = 5.328 = 36·d → d = 148."
    },
    {
      enunciado: "(FCC · TRT 1ª · 2025) José ganhou R$ 15.000,00 na loteria. Deu 1/3 de presente para a esposa e 1/5 do que sobrou para a filha. A quantia que sobrou para José foi:",
      opcoes: { A: "R$ 6.500,00", B: "R$ 7.000,00", C: "R$ 8.000,00", D: "R$ 3.500,00", E: "R$ 5.000,00" },
      gabarito: "C",
      explicacao: "1/3 de 15.000 = 5.000 para a esposa, sobrando 10.000; 1/5 de 10.000 = 2.000 para a filha. Sobraram R$ 8.000,00."
    },
    {
      enunciado: "(FCC · TRT 1ª · 2025) Em uma viagem de 1200 km, Pedro percorreu 2/3 do trajeto a 80 km/h e o restante a 50 km/h. O tempo total da viagem foi de:",
      opcoes: { A: "10h", B: "18h", C: "15h", D: "13h", E: "16h" },
      gabarito: "B",
      explicacao: "2/3 de 1.200 = 800 km a 80 km/h → 10 h; os 400 km restantes a 50 km/h → 8 h. Total: 18 h."
    }
  ],
  'seed-lq-proporcao-financeira': [
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Um produto custa R$ 200,00 e sofre dois aumentos sucessivos: primeiro de 10% e, em seguida, de 20%. O valor final do produto é:",
      opcoes: { A: "R$ 260,00", B: "R$ 320,00", C: "R$ 262,00", D: "R$ 264,00", E: "R$ 240,00" },
      gabarito: "D",
      explicacao: "Aumentos sucessivos multiplicam: 200 · 1,10 · 1,20 = R$ 264,00 (não se somam os percentuais)."
    },
    {
      enunciado: "(FCC · TRE BA · 2003) Artur e Boni dividiram a instalação de 16 aparelhos na razão inversa de seus tempos de serviço. Boni trabalha há 6 anos e Artur há mais tempo. Se Artur instalou 4 aparelhos, há quantos anos ele trabalha na empresa?",
      opcoes: { A: "8", B: "10", C: "12", D: "16", E: "18" },
      gabarito: "E",
      explicacao: "Artur instalou 4 e Boni 12, razão 1:3. Como a divisão é inversa ao tempo de serviço, os tempos estão na razão 3:1; com Boni há 6 anos, Artur trabalha há 18 anos."
    }
  ],
  'seed-lq-equacoes-polinomios': [
    {
      enunciado: "(CONSULTEC · Oficial PM BA · 2017) Uma loja oferece desconto de x%, com x natural satisfazendo 3x − 43 > 0 e 93 − 6x > 0. O valor de x é:",
      opcoes: { A: "30", B: "25", C: "20", D: "15", E: "10" },
      gabarito: "D",
      explicacao: "3x − 43 > 0 → x > 14,33; 93 − 6x > 0 → x < 15,5. O único natural no intervalo é x = 15."
    },
    {
      enunciado: "(FCC · TJ BA · 2023) Ana deu a Beth três quartos das jabuticabas de um saco. Beth deu a Carla a metade das suas mais 5. Então Carla percebeu que, dando algumas a Ana, as três ficariam com a mesma quantidade. O número de jabuticabas do saco era:",
      opcoes: { A: "150", B: "130", C: "120", D: "125", E: "140" },
      gabarito: "C",
      explicacao: "Ana fica com N/4 e Beth com 3N/4; Beth dá a Carla 3N/8 + 5, ficando com 3N/8 − 5. Para as três terem N/3, basta 3N/8 − 5 = N/3 → N = 120 jabuticabas."
    },
    {
      enunciado: "(FCC · SEC BA · 2022) Numa fazenda há bois e avestruzes, somando 730 animais e 2060 pernas. O número de avestruzes é:",
      opcoes: { A: "300", B: "270", C: "460", D: "430", E: "330" },
      gabarito: "D",
      explicacao: "Com b bois e a avestruzes: b + a = 730 e 4b + 2a = 2060. Subtraindo o dobro da 1ª, 2b = 600 → b = 300 e a = 430 avestruzes."
    },
    {
      enunciado: "(FCC · SEC BA · 2022) Uma conta de R$ 780,00 seria dividida igualmente, mas dois participantes (aniversariantes) não pagaram, e os demais pagaram R$ 13,00 a mais cada. O número de participantes era:",
      opcoes: { A: "9", B: "11", C: "14", D: "12", E: "15" },
      gabarito: "D",
      explicacao: "Com n participantes: 780/(n − 2) = 780/n + 13. Isso leva a n² − 2n − 120 = 0, cuja raiz positiva é n = 12."
    },
    {
      enunciado: "(FCC · TRE BA · 2003) Dos 16 veículos de uma oficina, o número X dos que precisavam de ajuste mecânico era 5/3 do número Y dos que precisavam de conserto elétrico (nenhum precisava dos dois). O valor de X − Y é:",
      opcoes: { A: "1", B: "2", C: "3", D: "4", E: "5" },
      gabarito: "D",
      explicacao: "X + Y = 16 e X = 5Y/3. Substituindo: 8Y/3 = 16 → Y = 6 e X = 10. Logo X − Y = 4."
    }
  ],
  'seed-lq-funcoes': [
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Considere a função do 1º grau f(x) = 2x + 5. Quanto ao seu comportamento, com base no coeficiente angular, a função é:",
      opcoes: { A: "Variável.", B: "Decrescente.", C: "Não pode ser determinada.", D: "Constante.", E: "Crescente." },
      gabarito: "E",
      explicacao: "O coeficiente angular é 2 > 0, logo a função é crescente."
    },
    {
      enunciado: "(FCC · SEFAZ BA · 2019) O custo unitário de uma peça é R$ 0,50 e o custo fixo semanal da linha é R$ 5.000,00. Para obter lucro semanal de R$ 2.000,00 vendendo cada peça a R$ 1,00, o número de milhares de unidades a vender é:",
      opcoes: { A: "7.", B: "9.", C: "11.", D: "14.", E: "16." },
      gabarito: "D",
      explicacao: "Lucro = 1·q − (5.000 + 0,5q) = 0,5q − 5.000 = 2.000 → q = 14.000 = 14 mil unidades."
    },
    {
      enunciado: "(FCC · SEFAZ BA · 2019) O preço de um notebook segue y = mx + n, com x em anos de uso. Sabendo que em x = 0 vale R$ 12.000 e em x = 7 vale R$ 800, o valor em x = 4 é, em reais:",
      opcoes: { A: "4200.", B: "4600.", C: "5200.", D: "5600.", E: "7200." },
      gabarito: "D",
      explicacao: "Em x = 0, n = 12.000; em x = 7, 7m + 12.000 = 800 → m = −1.600. Em x = 4: y = −1.600·4 + 12.000 = 5.600."
    },
    {
      enunciado: "(FCC · SEFAZ BA · 2019) A receita diária é r(x) = 750x e o custo é c(x) = 250x + 10.000, com x o número de consultorias. O número de consultorias por dia para um lucro L(x) = r(x) − c(x) de R$ 5.000 é:",
      opcoes: { A: "10.", B: "15.", C: "20.", D: "25.", E: "30." },
      gabarito: "E",
      explicacao: "L(x) = 750x − (250x + 10.000) = 500x − 10.000 = 5.000 → x = 30 consultorias."
    },
    {
      enunciado: "(FCC · SEFAZ BA · 2019) A oferta de um produto é y = 90 − 1,2x e a demanda é y = 1,4x + 12. As coordenadas do ponto de equilíbrio de mercado (oferta = demanda) são:",
      opcoes: { A: "(50, 30).", B: "(40, 42).", C: "(30, 54).", D: "(20, 66).", E: "(10, 78)." },
      gabarito: "C",
      explicacao: "90 − 1,2x = 1,4x + 12 → 78 = 2,6x → x = 30; y = 1,4·30 + 12 = 54. Ponto (30, 54)."
    },
    {
      enunciado: "(FCC · TRF 4ª · 2025) André e Luís têm conta conjunta com saldos iniciais de R$ 41.000,00 e R$ 33.000,00. A cada ano André deposita R$ 4.000,00 e Luís R$ 6.000,00, sem retiradas. No ano em que o total depositado por André igualar o de Luís, a soma depositada pelos dois será, em reais:",
      opcoes: { A: "124.000,00.", B: "104.000,00.", C: "94.000,00.", D: "84.000,00.", E: "114.000,00." },
      gabarito: "E",
      explicacao: "André acumula 41.000 + 4.000t e Luís 33.000 + 6.000t. Igualando: t = 4 anos. Cada um terá 57.000, e o total é R$ 114.000,00."
    },
    {
      enunciado: "(FCC · SABESP · 2018) Os táxis de uma cidade cobram pela fórmula P = 4,55 + 1,35·k, em que P é o preço (R$) e k a distância em km. Quem rodou 3,4 km pagou:",
      opcoes: { A: "R$ 20,06", B: "R$ 13,12", C: "R$ 18,34", D: "R$ 9,14", E: "R$ 8,92" },
      gabarito: "D",
      explicacao: "P = 4,55 + 1,35·3,4 = 4,55 + 4,59 = R$ 9,14."
    }
  ],
  'seed-lq-sistemas-matrizes': [
    {
      enunciado: "(UNEB · Oficial PM BA · 2019) Considere a matriz quadrada A de ordem 3 com elementos a_ij = 2^(i+j) se i < j e a_ij = i² − j + 1 se i ≥ j. A soma dos elementos da diagonal principal é:",
      opcoes: { A: "7", B: "8", C: "9", D: "10", E: "11" },
      gabarito: "E",
      explicacao: "Na diagonal i = j (caso i ≥ j): a_ii = i² − i + 1. Assim a₁₁ = 1, a₂₂ = 3, a₃₃ = 7, cuja soma é 11."
    },
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Dada a matriz A = [[2, 4], [1, 2]], o determinante de A é:",
      opcoes: { A: "2.", B: "6.", C: "0.", D: "4.", E: "8." },
      gabarito: "C",
      explicacao: "det A = 2·2 − 4·1 = 4 − 4 = 0."
    },
    {
      enunciado: "(FCC · TJ BA · 2023) Os recipientes A e B continham, juntos, 48 litros de suco. Transferiu-se de A para B a mesma quantidade que havia em B; depois, de B para A a mesma quantidade que havia em A. Ao final os dois ficaram iguais. A quantidade inicial, em litros, no recipiente A era:",
      opcoes: { A: "18", B: "36", C: "42", D: "30", E: "28" },
      gabarito: "D",
      explicacao: "Trabalhando de trás para frente a partir de 24 e 24: antes da 2ª transferência A = 12 e B = 36; antes da 1ª, A = 30 e B = 18. Inicialmente A tinha 30 litros."
    },
    {
      enunciado: "(FCC · TRE BA · 2003) Distribuindo documentos por pastas: com 30 por pasta sobram 36 documentos; com 35 por pasta restam apenas 11. O total de documentos é um número:",
      opcoes: { A: "primo.", B: "quadrado perfeito.", C: "cubo perfeito.", D: "divisível por 5.", E: "múltiplo de 6." },
      gabarito: "E",
      explicacao: "N = 30p + 36 = 35p + 11 → 5p = 25 → p = 5 e N = 186. Como 186 = 6·31, é múltiplo de 6."
    },
    {
      enunciado: "(FCC · Pref. Jaboatão dos Guararapes · 2024) Três amigos pediram, na segunda, dois combos A e um combo B, gastando R$ 134,00; na terça, dois combos A e dois combos B, gastando R$ 176,00. O valor do combo B é, em reais:",
      opcoes: { A: "48,00", B: "46,00", C: "44,00", D: "42,00", E: "43,00" },
      gabarito: "D",
      explicacao: "2A + B = 134 e 2A + 2B = 176. Subtraindo a 1ª da 2ª: B = 42, ou seja, R$ 42,00."
    },
    {
      enunciado: "(FCC · Pref. Jaboatão dos Guararapes · 2024) Numa cantina, um sanduíche e um suco custam R$ 12,00; um sanduíche e dois chocolates, R$ 18,00; e dois sucos e um sanduíche, R$ 16,00. O preço de um chocolate é:",
      opcoes: { A: "R$ 10,00", B: "R$ 5,00", C: "R$ 7,00", D: "R$ 8,00", E: "R$ 4,00" },
      gabarito: "B",
      explicacao: "Sendo s, j (suco) e c (chocolate): s + j = 12 e 2j + s = 16 → j = 4 e s = 8. De s + 2c = 18: 8 + 2c = 18 → c = R$ 5,00."
    },
    {
      enunciado: "(FCC · TRT 11ª · 2017) Sendo A = [[1, 3], [2, 1]] uma matriz quadrada de ordem 2, o determinante da inversa da transposta de A é igual a:",
      opcoes: { A: "−0,20", B: "−0,40", C: "−0,25", D: "−0,50", E: "−1,00" },
      gabarito: "A",
      explicacao: "det A = 1·1 − 3·2 = −5. Como det(Aᵗ) = det A e det(A⁻¹) = 1/det A, o determinante pedido é 1/(−5) = −0,20."
    }
  ],
  'seed-lq-exponencial-log': [
    {
      enunciado: "(FCC · IBMEC · 2018) A população de uma cidade cresce 25% ao ano (a cada ano é 25% maior que a do ano anterior). Considerando log 5 ≈ 0,7, a população quintuplica em, aproximadamente:",
      opcoes: { A: "7 anos.", B: "10 anos.", C: "12 anos.", D: "5 anos.", E: "15 anos." },
      gabarito: "A",
      explicacao: "1,25ⁿ = 5 → n = log 5 / log 1,25. Como log 1,25 = log 5 − 2·log 2 = 0,7 − 2·0,3 = 0,1, então n = 0,7/0,1 = 7 anos."
    },
    {
      enunciado: "(FCC · IBMEC · 2018) Para a equação logarítmica (log₂ x)² − 4 = 0, a soma das possíveis soluções reais é:",
      opcoes: { A: "4,25", B: "4", C: "2", D: "1,25", E: "2,75" },
      gabarito: "A",
      explicacao: "(log₂ x)² = 4 → log₂ x = 2 ou −2 → x = 4 ou x = 1/4. A soma é 4 + 0,25 = 4,25."
    },
    {
      enunciado: "(FCC · SEDU ES · 2016) A diferença entre o maior e o menor valor da imagem da função g(x) = 4ˣ − 1, com x no intervalo [−1; 2,5], é:",
      opcoes: { A: "14.", B: "31,75.", C: "17,5.", D: "8,25.", E: "18." },
      gabarito: "B",
      explicacao: "g é crescente: máximo em g(2,5) = 4^2,5 − 1 = 2⁵ − 1 = 31 e mínimo em g(−1) = 1/4 − 1 = −0,75. Diferença = 31 − (−0,75) = 31,75."
    },
    {
      enunciado: "(FCC · CEF · 1998) Calculando o valor de log₃ [ (3^(x+1) − 3ˣ − 3^(x−1)) / (5·3ˣ) ], obtém-se:",
      opcoes: { A: "log₃(1/5)", B: "1/3", C: "1/5", D: "−1/3", E: "−1" },
      gabarito: "E",
      explicacao: "No numerador, 3^(x+1) − 3ˣ − 3^(x−1) = 3ˣ·(3 − 1 − 1/3) = 3ˣ·(5/3). Dividindo por 5·3ˣ resulta 1/3, e log₃(1/3) = −1."
    }
  ],
  'seed-lq-progressoes': [
    {
      enunciado: "(FCC · SEC BA · 2022) Um auditório tem 20 filas: a 1ª com 10 cadeiras, a 2ª com 11, e assim por diante (a 20ª com 29). Se só podem ser ocupadas as fileiras ímpares (1ª, 3ª, …, 19ª) e todos os lugares forem ocupados, o número de estudantes é:",
      opcoes: { A: "106", B: "110", C: "124", D: "190", E: "158" },
      gabarito: "D",
      explicacao: "As fileiras ímpares têm 10, 12, 14, …, 28 cadeiras — uma PA de 10 termos. Soma = 10·(10 + 28)/2 = 190 estudantes."
    },
    {
      enunciado: "(IBFC · Soldado CBM BA · 2017) Carlos cadastrou como senha o nono termo de uma P.G. cujo primeiro termo é 3 e cuja razão é igual à razão da P.A. 12, 14, … A senha cadastrada foi:",
      opcoes: { A: "384", B: "768", C: "192", D: "4374", E: "1458" },
      gabarito: "B",
      explicacao: "A razão da PA 12, 14, … é 2. A PG tem a₁ = 3 e razão 2, então o 9º termo é 3·2⁸ = 3·256 = 768."
    },
    {
      enunciado: "(FCC · SEAP BA · 2010) Em janeiro de 2009 um fabricante doou 1 camiseta a uma instituição e, a cada mês seguinte, doou o dobro do mês anterior, até maio (inclusive). A quantidade total doada pode ser representada por:",
      opcoes: { A: "2⁵", B: "2⁵ + 1", C: "2⁵ − 1", D: "(2⁵ − 1) : 2", E: "2(2⁵ − 1)" },
      gabarito: "C",
      explicacao: "As doações de janeiro a maio formam a PG 1, 2, 4, 8, 16 (5 termos). A soma é (2⁵ − 1) = 31 camisetas."
    }
  ],
  'seed-lq-geo-plana': [
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Um terreno triangular tem lados de 6 cm, 8 cm e 10 cm. O perímetro desse triângulo é:",
      opcoes: { A: "18 cm.", B: "20 cm.", C: "32 cm.", D: "26 cm.", E: "24 cm." },
      gabarito: "E",
      explicacao: "Perímetro = 6 + 8 + 10 = 24 cm."
    },
    {
      enunciado: "(IBFC · Soldado CBM BA · 2017) A área de um triângulo retângulo cuja hipotenusa mede 2√5 cm e um dos catetos mede 4 cm é igual a:",
      opcoes: { A: "8 cm²", B: "6 cm²", C: "10 cm²", D: "4√5 cm²", E: "4 cm²" },
      gabarito: "E",
      explicacao: "Pelo Teorema de Pitágoras o outro cateto = √((2√5)² − 4²) = √(20 − 16) = 2 cm. Área = 4·2/2 = 4 cm²."
    },
    {
      enunciado: "(FCC · SEC BA · 2018) Luís partiu de A para leste, percorrendo 8 km até B; de B partiu para o sul, percorrendo 4 km até C. A distância em linha reta entre A e C é, aproximadamente:",
      opcoes: { A: "entre 7,5 e 8,5 km.", B: "entre 6,5 e 7,5 km.", C: "menor do que 6,5 km.", D: "entre 8,5 e 9,5 km.", E: "maior do que 9,5 km." },
      gabarito: "D",
      explicacao: "Distância = √(8² + 4²) = √80 ≈ 8,94 km, que está entre 8,5 e 9,5 km."
    },
    {
      enunciado: "(FCC · TCE SE · 2011) Às 3 horas o menor ângulo entre os ponteiros das horas e dos minutos é 90°. Exatamente 50 minutos depois, esse menor ângulo mede:",
      opcoes: { A: "120°.", B: "135°.", C: "150°.", D: "160°.", E: "175°." },
      gabarito: "E",
      explicacao: "Às 3h50, o ponteiro das horas está a 90° + 50·0,5° = 115° e o dos minutos a 50·6° = 300°. A diferença é 185°, cujo menor ângulo é 360° − 185° = 175°."
    },
    {
      enunciado: "(FCC · SEDUC SP · 2010) Os lados de um triângulo medem x + 1, 7 − x e 4x − 2. O número de valores de x para os quais o triângulo é isósceles é:",
      opcoes: { A: "1", B: "0", C: "2", D: "3", E: "6" },
      gabarito: "A",
      explicacao: "Igualando pares de lados: x = 3 dá lados 4, 4, 10 (não fecha) e x = 1 dá 2, 6, 2 (não fecha); só x = 1,8 (lados 2,8; 5,2; 5,2) forma triângulo isósceles válido. Logo, 1 valor."
    },
    {
      enunciado: "(FCC · IBMEC · 2018) À tarde, a sombra de um edifício de 45 m de altura mede 45 m. Sabendo que nesse local o Sol nasce às 6h e se põe às 18h, o relógio deve marcar:",
      opcoes: { A: "14:00", B: "15:00", C: "16:00", D: "14:30", E: "16:30" },
      gabarito: "B",
      explicacao: "Sombra igual à altura ⇒ ângulo de 45°. Com o Sol nascendo às 6h e se pondo às 18h (máximo ao meio-dia), 45° à tarde ocorre às 15h."
    },
    {
      enunciado: "(FCC · SEDU ES · 2018) A altura relativa à hipotenusa de um triângulo retângulo mede 12 cm e um dos catetos mede 15 cm. A medida do outro cateto, em centímetros, é:",
      opcoes: { A: "24.", B: "18.", C: "22.", D: "16.", E: "20." },
      gabarito: "E",
      explicacao: "Na relação 1/h² = 1/b² + 1/c² com h = 12 e um cateto c = 15: 1/b² = 1/144 − 1/225 = 1/400 → b = 20 cm."
    },
    {
      enunciado: "(FCC · ARTESP · 2026) A largura de um retângulo é 1 m menor que o dobro do seu comprimento. Se a área é 10 m², a soma da largura com o comprimento é:",
      opcoes: { A: "7,0 m", B: "5,5 m", C: "7,5 m", D: "6,0 m", E: "6,5 m" },
      gabarito: "E",
      explicacao: "Com comprimento x e largura 2x − 1: x(2x − 1) = 10 → 2x² − x − 10 = 0 → x = 2,5. A largura é 4, e a soma é 2,5 + 4 = 6,5 m."
    }
  ],
  'seed-lq-geo-espacial': [
    {
      enunciado: "(FCC · Soldado PM BA · 2023) A aresta de um cubo é igual ao lado do quadrado que serve de base a uma pirâmide; a altura da pirâmide é o dobro do lado da base. A razão entre o volume do cubo e o volume da pirâmide é:",
      opcoes: { A: "3", B: "2", C: "3/2", D: "4/3", E: "5/2" },
      gabarito: "C",
      explicacao: "Seja a a aresta. V_cubo = a³ e V_pirâmide = (1/3)·a²·(2a) = (2/3)a³. Razão = a³ ÷ (2/3·a³) = 3/2."
    },
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Uma lata cilíndrica tem raio da base 3 cm e altura 10 cm. Seu volume interno, usando π = 3,14, é:",
      opcoes: { A: "180 cm³.", B: "220 cm³.", C: "360 cm³.", D: "282,6 cm³.", E: "94,2 cm³." },
      gabarito: "D",
      explicacao: "Volume do cilindro = π·r²·h = 3,14·3²·10 = 282,6 cm³."
    },
    {
      enunciado: "(FCC · TRE BA · 2003) Um recipiente em forma de paralelepípedo retângulo mede 1,5 m de comprimento, 1 m de largura e 0,5 m de altura. Desprezando a espessura das paredes, sua capacidade, em litros, é:",
      opcoes: { A: "50", B: "75", C: "500", D: "750", E: "7 500" },
      gabarito: "D",
      explicacao: "Volume = 1,5·1·0,5 = 0,75 m³. Como 1 m³ = 1000 L, a capacidade é 750 litros."
    },
    {
      enunciado: "(FCC · TJ SC · 2021) Com 64 cubinhos 1×1×1 montou-se um cubo 4×4×4 e pintaram-se de azul as faces externas. O número de cubinhos que ficaram sem nenhuma face pintada é:",
      opcoes: { A: "32.", B: "8.", C: "16.", D: "27.", E: "4." },
      gabarito: "B",
      explicacao: "Os cubinhos sem pintura formam o miolo, com aresta 4 − 2 = 2: são 2 × 2 × 2 = 8 cubinhos."
    }
  ],
  'seed-lq-trigonometria': [
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) No plano cartesiano, considere os pontos A(2, 3) e B(5, 7). A distância entre A e B é:",
      opcoes: { A: "6.", B: "3.", C: "7.", D: "8.", E: "5." },
      gabarito: "E",
      explicacao: "d = √((5 − 2)² + (7 − 3)²) = √(9 + 16) = √25 = 5."
    },
    {
      enunciado: "(FCC · SEDU ES · 2018) Dois pisos paralelos distam 4 m e são ligados por uma escada rolante retilínea de 8 m. O ângulo de inclinação da escada em relação ao piso mais baixo é de:",
      opcoes: { A: "30°.", B: "75°.", C: "60°.", D: "45°.", E: "25°." },
      gabarito: "A",
      explicacao: "sen θ = altura/comprimento = 4/8 = 0,5, logo θ = 30°."
    },
    {
      enunciado: "(FCC · SEDUC SP · 2010) Para qualquer real x, a expressão sen⁴x − cos⁴x é equivalente a:",
      opcoes: { A: "2cos²x − 1", B: "1 − sen 2x", C: "cos 2x", D: "−2cos²x + 1", E: "sen 2x" },
      gabarito: "D",
      explicacao: "sen⁴x − cos⁴x = (sen²x − cos²x)(sen²x + cos²x) = sen²x − cos²x = −cos 2x = −(2cos²x − 1) = −2cos²x + 1."
    },
    {
      enunciado: "(FCC · SEDU ES · 2018) Num plano cartesiano, os pontos (1, 1) e (4, 5) são extremidades da diagonal de um retângulo de lados paralelos aos eixos. A área desse retângulo é:",
      opcoes: { A: "8.", B: "6.", C: "20.", D: "12.", E: "10." },
      gabarito: "D",
      explicacao: "Os lados são as diferenças das coordenadas: |4 − 1| = 3 e |5 − 1| = 4. Área = 3·4 = 12."
    },
    {
      enunciado: "(IBFC · Soldado CBM BA · 2017) Ana digitou a reta r: y = 3x − 2 e, em seguida, uma reta s paralela a r. A equação de s pode ser:",
      opcoes: { A: "3x + 2y − 1 = 0", B: "6x − 3y + 2 = 0", C: "9x − 3y + 5 = 0", D: "2x − 6y + 1 = 0", E: "3x + 2y − 4 = 0" },
      gabarito: "C",
      explicacao: "Retas paralelas têm o mesmo coeficiente angular (3). Em 9x − 3y + 5 = 0, isolando y: y = 3x + 5/3, cujo coeficiente angular é 3."
    }
  ],
  'seed-lq-combinatoria': [
    {
      enunciado: "(CONSULTEC · Oficial PM BA · 2011) Cada um dos 120 candidatos recebe como código um anagrama distinto da sigla CFOPM. A probabilidade de um cartão sorteado ao acaso começar e terminar por consoante é:",
      opcoes: { A: "48%", B: "51%", C: "53%", D: "57%", E: "60%" },
      gabarito: "E",
      explicacao: "CFOPM tem 4 consoantes e 1 vogal. P(começar e terminar com consoante) = (4/5)·(3/4) = 3/5 = 60%."
    },
    {
      enunciado: "(UNEB · Oficial CBM BA · 2023) Uma palavra tem 8 letras, das quais 3 se repetem duas vezes cada. A quantidade de anagramas que podem ser formados é:",
      opcoes: { A: "24", B: "48", C: "56", D: "5040", E: "6720" },
      gabarito: "D",
      explicacao: "Com 8 letras em que 3 se repetem duas vezes cada: 8!/(2!·2!·2!) = 40.320/8 = 5.040 anagramas."
    },
    {
      enunciado: "(IBFC · Soldado CBM BA · 2017) Um comandante escolherá os 4 melhores de uma tropa de 10 soldados para receberem, cada um, a mesma condecoração. O total de escolhas distintas é:",
      opcoes: { A: "5040", B: "2520", C: "420", D: "210", E: "840" },
      gabarito: "D",
      explicacao: "Como a ordem não importa (mesma condecoração), é uma combinação: C(10, 4) = 210."
    },
    {
      enunciado: "(FCC · SEC BA · 2022) A turma do professor Luís tem 12 rapazes e 8 moças. Ele formará um grupo com exatamente 7 rapazes e 7 moças. A quantidade de grupos distintos é:",
      opcoes: { A: "6336", B: "3168", C: "1056", D: "1024", E: "528" },
      gabarito: "A",
      explicacao: "Escolhas independentes: C(12, 7)·C(8, 7) = 792·8 = 6.336 grupos."
    },
    {
      enunciado: "(FCC · SEFAZ PI · 2025) Um comitê de 4 membros será formado a partir de 6 auditores e 5 especialistas, com pelo menos 2 especialistas. O número de formações distintas é:",
      opcoes: { A: "190", B: "240", C: "215", D: "205", E: "225" },
      gabarito: "C",
      explicacao: "Casos com ≥ 2 especialistas: C(5,2)·C(6,2) + C(5,3)·C(6,1) + C(5,4) = 150 + 60 + 5 = 215."
    }
  ],
  'seed-lq-probabilidade-estatistica': [
    {
      enunciado: "(UNEB · Oficial CBM BA · 2025) Considerando os números 10, 15, 20 e 25, a média aritmética desse conjunto é:",
      opcoes: { A: "15.", B: "20.", C: "17,5.", D: "30.", E: "25." },
      gabarito: "C",
      explicacao: "Média = (10 + 15 + 20 + 25)/4 = 70/4 = 17,5."
    },
    {
      enunciado: "(UNEB · Oficial CBM BA · 2023) Os atendimentos de uma corporação foram: acidentes de trânsito 20, desastres naturais 5, desmoronamentos 2, afogamentos 10, incêndio urbano 18 e incêndio florestal 5. A amplitude e o desvio padrão desses valores são, aproximadamente:",
      opcoes: { A: "5 e 46,3", B: "12 e 6", C: "15 e 36", D: "18 e 6,8", E: "20 e 2,5" },
      gabarito: "D",
      explicacao: "Amplitude = 20 − 2 = 18. Média = 60/6 = 10; a variância = (10² + 5² + 8² + 0² + 8² + 5²)/6 = 278/6 ≈ 46,3 e o desvio padrão ≈ √46,3 ≈ 6,8."
    },
    {
      enunciado: "(CONSULTEC · Oficial PM BA · 2010) Três candidatos X, Y e Z disputam uma eleição (um só vencedor). A chance de X vencer é o dobro da de Y, e a de Y é dois terços da de Z. A probabilidade de vitória de X ou de Z é:",
      opcoes: { A: "2/3", B: "3/7", C: "7/9", D: "9/11" },
      gabarito: "C",
      explicacao: "Seja P(Z) = z: P(Y) = 2z/3 e P(X) = 4z/3. Como somam 1: 3z = 1 → z = 1/3. P(X ou Z) = 4/9 + 1/3 = 7/9."
    },
    {
      enunciado: "(FCC · SEC BA · 2022) A média das idades dos professores de Física e Matemática de uma reunião é 40 anos. A média dos de Física é 35 e a dos de Matemática é 50. A razão entre o número de professores de Física e de Matemática é:",
      opcoes: { A: "1", B: "3", C: "2", D: "4", E: "5" },
      gabarito: "C",
      explicacao: "(35f + 50m)/(f + m) = 40 → 35f + 50m = 40f + 40m → 10m = 5f → f/m = 2."
    }
  ]
};

/* Deixa cada minissimulado 'banco' com exatamente 10 questões:
   mantém as já curadas (até 10) e completa com as do banco acima. */
(function _ajustarMinisPara10() {
  const extra = window.PL_SEED_MINI_EXTRA || {};
  (window.PL_SEED_LISTAS || []).filter(l => l.tipoLista === 'banco').forEach(l => {
    let qs = (l.questoes || []).slice(0, 10);
    const add = extra[l.id] || [];
    for (let i = 0; qs.length < 10 && i < add.length; i++) qs.push(add[i]);
    qs = qs.slice(0, 10).map((q, i) => ({ ...q, num: i + 1 }));
    l.questoes = qs;
    l.total = qs.length;
  });
})();

/* ════════════════════════════════════════════════════════════
   INTEGRAÇÃO COM AS AULAS
   A Lista de Exercícios do assunto passa a ser o material
   "lista" da aula (substitui os antigos PDFs estáticos).
   Requer data.js carregado ANTES deste arquivo.
   ════════════════════════════════════════════════════════════ */
(function _integrarListasNasAulas() {
  if (typeof PL_CATALOG === 'undefined' || !PL_CATALOG.cursos) return;
  const listas = (window.PL_SEED_LISTAS || []).filter(l => l.tipoLista === 'lista');
  Object.values(PL_CATALOG.cursos).forEach(curso => {
    (curso.aulas || []).forEach(aula => {
      if (!aula.materiais) return;
      const m = listas.find(l => Array.isArray(l.aulaIds) &&
        l.aulaIds.some(s => aula.id === s || aula.id.endsWith('-' + s)));
      if (m) {
        aula.materiais.lista = 'lista.html?id=' + m.id;
      } else if (typeof aula.materiais.lista === 'string' && aula.materiais.lista.indexOf('assets/listas/') === 0) {
        /* PDF antigo sem lista integrada correspondente — remove */
        aula.materiais.lista = null;
      }
    });
  });
})();
