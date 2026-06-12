/* ============================================================
   PROFESSOR LEÃO — MATERIAIS TEÓRICOS DAS AULAS
   materiais-data.js

   Resumo teórico interativo de cada assunto, exibido como
   "PDF da Aula" (material.html?id=...). Cada material casa com
   as aulas pelo sufixo do id (campo aulaIds — ex.: 'mat-01'
   vale para sdpm-mat-01, cfobm-mat-01, mb-01 etc.).

   Carregar SEMPRE depois de data.js:
     <script src="data.js"></script>
     <script src="materiais-data.js"></script>
   ============================================================ */

window.PL_MATERIAIS = [

  {
    id: 'm-conjuntos-numericos',
    titulo: 'Conjuntos Numéricos: N, Z, Q e R',
    aulaIds: ['mat-01', 'mb-01'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-01-conjuntos-numericos.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Os números se organizam em conjuntos encaixados: <b>N ⊂ Z ⊂ Q ⊂ R</b>.</p><ul><li><b>Naturais (N)</b> = {0, 1, 2, 3, …} — contagem. O <b>zero é natural</b>.</li><li><b>Inteiros (Z)</b> = {…, −2, −1, 0, 1, 2, …} — entram os negativos.</li><li><b>Racionais (Q)</b> — todo número que pode ser escrito como fração a/b (b ≠ 0): inteiros, decimais exatos e <b>dízimas periódicas</b>.</li><li><b>Irracionais (I)</b> — dízimas NÃO periódicas: √2, π, 0,101001000…</li><li><b>Reais (R)</b> = racionais ∪ irracionais.</li></ul>" },
      { ic: '🧮', t: 'Ferramentas que caem em prova', h: "<ul><li><b>Fração geratriz</b> — período sobre tantos 9 quantos forem os algarismos do período: 0,444… = 4/9; 0,232323… = 23/99; 2,777… = 2 + 7/9 = 25/9.</li><li><b>Oposto</b> de a é −a; <b>inverso</b> de a é 1/a (a ≠ 0).</li><li>Entre dois racionais distintos <b>sempre existe outro racional</b> (e também um irracional).</li><li>racional + irracional = <b>irracional</b>; racional × irracional (≠0) = <b>irracional</b>.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>(estilo UNEB) Entre os números −15; 0,333…; √16; √7 e 12/4, quantos são inteiros e quantos são irracionais?</p><div class='sol'><b>Resolução.</b> √16 = 4 (inteiro) e 12/4 = 3 (inteiro); com −15, são <b>3 inteiros</b>. 0,333… = 1/3 é racional. Só √7 é dízima não periódica → <b>1 irracional</b>. A banca adora esconder inteiros dentro de raízes exatas e frações aparentes.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>“Todo real é racional” — <b>FALSO</b> (π e √2 são reais e não são racionais).</li><li>0,999… = 1 (dízima de período 9 é o próprio inteiro).</li><li>√2 + (−√2) = 0: a soma de DOIS irracionais <b>pode</b> ser racional.</li><li>Zero é natural, é par e é múltiplo de todo número — mas <b>não é divisor</b> de nenhum.</li></ul>" }
    ]
  },

  {
    id: 'm-irracionais-complexos',
    titulo: 'Números Irracionais, Reais e Complexos',
    aulaIds: ['mat-02'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-05-irracionais-complexos.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Raiz quadrada de número negativo não existe em R — por isso criou-se a <b>unidade imaginária</b>: <b>i² = −1</b>. Todo número complexo tem a forma algébrica <b>z = a + bi</b> (a = parte real, b = parte imaginária).</p><ul><li>b = 0 → z é real; a = 0 e b ≠ 0 → z é <b>imaginário puro</b>.</li><li><b>Conjugado</b>: z̄ = a − bi (troca o sinal da parte imaginária).</li><li><b>Módulo</b>: |z| = √(a² + b²) — distância até a origem no plano complexo.</li></ul>" },
      { ic: '🧮', t: 'Operações e potências de i', h: "<ul><li>Soma/subtração: opera-se parte real com real, imaginária com imaginária.</li><li>Multiplicação: distributiva normal, trocando i² por −1.</li><li>Divisão: multiplica em cima e embaixo pelo <b>conjugado do denominador</b>.</li><li>Potências de i são cíclicas de 4 em 4: i¹ = i, i² = −1, i³ = −i, i⁴ = 1. Para iⁿ, use o <b>resto da divisão de n por 4</b>: i²⁰²⁶ → 2026 ÷ 4 deixa resto 2 → i²⁰²⁶ = −1.</li><li>Forma trigonométrica: z = |z|·(cos θ + i·sen θ), onde tg θ = b/a.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>Calcule (2 + 3i) · (1 − i).</p><div class='sol'><b>Resolução.</b> Distributiva: 2·1 + 2·(−i) + 3i·1 + 3i·(−i) = 2 − 2i + 3i − 3i². Como i² = −1: −3i² = +3. Resultado: (2 + 3) + (−2 + 3)i = <b>5 + i</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>“2 + 3i é irracional” — FALSO: é <b>complexo não real</b>; irracional é categoria de número REAL.</li><li>Igualdade de complexos: a + bi = c + di exige a = c <b>e</b> b = d (duas equações).</li><li>|z| nunca é negativo; |3 − 4i| = √(9+16) = 5.</li></ul>" }
    ]
  },

  {
    id: 'm-pa',
    titulo: 'Progressão Aritmética (PA)',
    aulaIds: ['mat-03'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-06-pa.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>PA é a sequência em que cada termo é o anterior <b>somado</b> de uma constante r (razão). r &gt; 0: crescente; r &lt; 0: decrescente; r = 0: constante.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Termo geral</b>: aₙ = a₁ + (n − 1)·r</li><li><b>Soma dos n primeiros</b>: Sₙ = (a₁ + aₙ)·n / 2</li><li><b>Termo médio</b>: numa PA de 3 termos, o do meio é a média dos vizinhos: b = (a + c)/2.</li><li>Quantidade de termos entre dois valores: n = (último − primeiro)/r + 1.</li><li>Múltiplos de k entre A e B: ache o primeiro e o último múltiplo no intervalo e aplique a fórmula acima.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real adaptada', h: "<p class='en'>(CONSULTEC) Um remédio é tomado assim: 24 comprimidos por dia na 1ª semana, 22 na 2ª, 20 na 3ª…, reduzindo 2 por semana até parar. Se cada caixa tem 80 comprimidos, qual o número mínimo de caixas para o tratamento?</p><div class='sol'><b>Resolução.</b> Comprimidos por semana: 7·(24 + 22 + … + 2). A PA 24, 22, …, 2 tem n = (24−2)/2 + 1 = 12 termos e soma S = (24+2)·12/2 = 156. Total: 7 · 156 = 1.092 comprimidos. Caixas: 1092 ÷ 80 = 13,65 → <b>14 caixas</b> (sempre arredonde PARA CIMA quando a pergunta é “quantas caixas”).</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>A banca pergunta a <b>soma</b> e oferece o último termo como distrator (e vice-versa). Leia o que se pede!</li><li>“Quantos múltiplos de 7 entre 100 e 300?” → primeiro: 105, último: 294 → (294−105)/7 + 1 = 28.</li><li>Em problemas de “dia/semana”, confira se o 1º dia conta como termo 1.</li></ul>" }
    ]
  },

  {
    id: 'm-pg',
    titulo: 'Progressão Geométrica (PG) — com revisão de PA',
    aulaIds: ['mat-04', 'mb-06'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-07-pg.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>PG é a sequência em que cada termo é o anterior <b>multiplicado</b> por uma constante q (razão). Crescimentos percentuais repetidos (juros, “dobra a cada hora”) são PGs disfarçadas: aumentar 25% ao mês = PG de razão 1,25.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave (PG e PA juntas)', h: "<ul><li><b>PG — termo geral</b>: aₙ = a₁ · qⁿ⁻¹</li><li><b>PG — soma finita</b>: Sₙ = a₁·(qⁿ − 1)/(q − 1)</li><li><b>PG — soma infinita</b> (|q| &lt; 1): S∞ = a₁/(1 − q)</li><li><b>PG — termo médio</b>: b² = a·c (média geométrica).</li><li><b>PA — recap</b>: aₙ = a₁ + (n−1)r e Sₙ = (a₁+aₙ)n/2. Na PA soma-se; na PG multiplica-se.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(IBFC · Soldado PM BA) O nono termo da sequência 3, −6, 12, −24, … representa o total de candidatos presentes. Se 210 foram aprovados, quantos foram reprovados?</p><div class='sol'><b>Resolução.</b> PG de razão q = −2. a₉ = 3·(−2)⁸ = 3·256 = 768 presentes. Reprovados: 768 − 210 = <b>558</b>. Atenção ao sinal: (−2)⁸ é positivo porque o expoente é par.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>“Triplica a cada hora, das 10h às 14h” = <b>4</b> multiplicações (3⁴), não 5.</li><li>Poupança a 0,5% ao mês → montantes formam PG de razão <b>1,005</b> (não 0,005!).</li><li>Soma infinita só existe se |q| &lt; 1: 8 + 4 + 2 + 1 + … = 8/(1 − 1/2) = 16.</li></ul>" }
    ]
  },

  {
    id: 'm-primos-mmc-mdc',
    titulo: 'Números Primos, MMC e MDC',
    aulaIds: ['mat-05', 'mb-02', 'cr-01'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-04-mmc-mdc.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p><b>Primo</b> é o natural com exatamente dois divisores: 1 e ele mesmo (2, 3, 5, 7, 11, 13…). O 2 é o único primo par; <b>1 não é primo</b>. Todo número se decompõe de forma única em fatores primos — e dessa fatoração saem MMC e MDC.</p>" },
      { ic: '🧮', t: 'Ferramentas que caem em prova', h: "<ul><li><b>MDC</b> (máximo divisor comum): fatores comuns com os MENORES expoentes. Uso típico: <b>repartir/cortar em pedaços iguais máximos</b>.</li><li><b>MMC</b> (mínimo múltiplo comum): todos os fatores com os MAIORES expoentes. Uso típico: <b>eventos que se repetem e voltam a coincidir</b>.</li><li><b>MMC × MDC = a × b</b> (para dois números).</li><li><b>Quantidade de divisores</b>: fatore e multiplique os expoentes somados de 1: 72 = 2³·3² → (3+1)·(2+1) = 12 divisores.</li><li>Critérios de divisibilidade: por 3/9 (soma dos algarismos), por 4 (dois últimos), por 6 (par e divisível por 3).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>Três viaturas saem juntas da base e retornam a cada 12, 15 e 20 dias, respectivamente. Depois de quantos dias as três voltarão a se encontrar na base?</p><div class='sol'><b>Resolução.</b> Encontro de ciclos = MMC. 12 = 2²·3; 15 = 3·5; 20 = 2²·5 → MMC = 2²·3·5 = <b>60 dias</b>. Se fosse “cortar três cordas de 12, 15 e 20 m em pedaços iguais máximos”, seria MDC = 1… cuidado para não inverter!</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>“Juntos novamente” / “mesmo dia” → MMC. “Maior tamanho igual” / “menor número de pedaços” → MDC.</li><li>1 não é primo e 2 é primo — afirmações clássicas de V/F.</li><li>O MDC de dois números consecutivos é sempre 1.</li></ul>" }
    ]
  },

  {
    id: 'm-fracoes',
    titulo: 'Números Racionais e Frações',
    aulaIds: ['mat-06', 'mb-03', 'cr-02'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-02-numeros-racionais.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Fração é divisão: a/b é “a dividido em b partes”. As quatro operações: <b>soma/subtração</b> exigem mesmo denominador (use o MMC); <b>multiplicação</b> é direto (numerador × numerador); <b>divisão</b> é multiplicar pelo inverso da segunda.</p>" },
      { ic: '🧮', t: 'Ferramentas que caem em prova', h: "<ul><li><b>Fração DE um valor</b>: “2/5 de 300” = 2/5 × 300 = 120. “De” = vezes.</li><li><b>Fração de fração</b>: 2/3 de 3/4 = 1/2.</li><li><b>Problema do resto</b>: gastou 2/5 e 1/3 → gastou 6/15 + 5/15 = 11/15 → <b>sobraram 4/15</b>. Se o resto vale R$ 720, então 1/15 = 180 e o todo = R$ 2.700.</li><li><b>Comparação</b>: iguale denominadores ou compare em decimal.</li><li>Decimal exato → fração: 0,25 = 25/100 = 1/4 (simplifique sempre).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(IBFC · Soldado PM BA/2017) Antônio gastou 50% de dois quintos do valor que possuía e ainda sobraram R$ 160,00. O valor gasto foi:</p><div class='sol'><b>Resolução.</b> Gastou metade de 2/5 = <b>1/5</b> do total → sobraram 4/5 = R$ 160 → o todo era R$ 200 → gastou 1/5 de 200 = <b>R$ 40,00</b>. A pergunta é o GASTO, não o total — leia duas vezes.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Misturas e razões: garrafas de MESMO volume com razões 1:2 e 3:2 → some frações do mesmo todo (X = 1/3 + 3/5 = 14/15 do volume de uma garrafa).</li><li>Dividir por fração = multiplicar pelo inverso: (2/3) ÷ (4/9) = 2/3 · 9/4 = 3/2.</li><li>Frações de frações encadeadas: resolva da direita para a esquerda com calma.</li></ul>" }
    ]
  },

  {
    id: 'm-potencia-radiciacao',
    titulo: 'Potenciação e Radiciação',
    aulaIds: ['mat-07', 'mb-04'],
    pdfOriginal: 'assets/aulas/cfo-sd/aula-03-dizimas-potenciacao.pdf',
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Potência é multiplicação repetida; raiz é a operação inversa. Dominar as <b>propriedades</b> resolve 90% das questões — quase nunca se calcula força bruta.</p>" },
      { ic: '🧮', t: 'Propriedades (decore!)', h: "<ul><li>aᵐ · aⁿ = aᵐ⁺ⁿ &nbsp;|&nbsp; aᵐ ÷ aⁿ = aᵐ⁻ⁿ &nbsp;|&nbsp; (aᵐ)ⁿ = aᵐ·ⁿ</li><li>(a·b)ⁿ = aⁿ·bⁿ &nbsp;|&nbsp; a⁰ = 1 (a ≠ 0) &nbsp;|&nbsp; a⁻ⁿ = 1/aⁿ</li><li>Expoente fracionário: a^(m/n) = ⁿ√(aᵐ). Ex.: 8^(2/3) = (³√8)² = 4.</li><li>√(a·b) = √a·√b — mas <b>√(a+b) ≠ √a + √b</b>!</li><li>Racionalização: 1/√2 = √2/2 (multiplica em cima e embaixo por √2).</li><li>Notação científica: 0,00045 = 4,5 × 10⁻⁴.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>Simplifique: (2³ · 2⁵) ÷ 2⁶ + (−2)² − 2².</p><div class='sol'><b>Resolução.</b> 2³·2⁵ = 2⁸; 2⁸ ÷ 2⁶ = 2² = 4. (−2)² = 4 e 2² = 4 → 4 + 4 − 4 = <b>4</b>. Atenção: (−2)² = +4, mas −2² = −4 (o sinal fora do parêntese não entra na potência).</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>(−2)² ≠ −2² — a clássica das clássicas.</li><li>2³ · 2⁵ NÃO é 4⁸ (base não muda na multiplicação de mesma base).</li><li>√(x²) = |x| — para x negativo o resultado é positivo.</li><li>0⁰ é indeterminado; 0ⁿ = 0 para n &gt; 0.</li></ul>" }
    ]
  },

  {
    id: 'm-teoria-conjuntos-1',
    titulo: 'Teoria dos Conjuntos — Operações',
    aulaIds: ['mat-08', 'mb-07'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Conjunto é coleção de elementos. <b>∈</b> relaciona elemento↔conjunto; <b>⊂</b> relaciona conjunto↔conjunto. O vazio (∅) é subconjunto de todo conjunto.</p>" },
      { ic: '🧮', t: 'Operações e fórmulas', h: "<ul><li><b>União</b> A ∪ B: tudo que está em A <b>ou</b> em B.</li><li><b>Interseção</b> A ∩ B: o que está em A <b>e</b> em B ao mesmo tempo.</li><li><b>Diferença</b> A − B: está em A e NÃO está em B.</li><li><b>Complementar</b>: o que falta para completar o universo.</li><li>Se A ⊂ B: A ∩ B = A e A ∪ B = B.</li><li><b>Conjunto das partes</b>: A com n elementos tem <b>2ⁿ subconjuntos</b>. {a, b, c} → 2³ = 8.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>Dados A = {1, 2, 3} e B = {2, 3, 4}: determine A ∪ B, A ∩ B, A − B e o número de subconjuntos de A ∪ B.</p><div class='sol'><b>Resolução.</b> A ∪ B = {1, 2, 3, 4}; A ∩ B = {2, 3}; A − B = {1} (só o que é exclusivo de A). A ∪ B tem 4 elementos → 2⁴ = <b>16 subconjuntos</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>∅ ⊂ A é sempre verdade; ∅ ∈ A só se o vazio for ELEMENTO listado de A.</li><li>A − B ≠ B − A (a ordem importa).</li><li>n(P(A)) = 2ⁿ conta TODOS os subconjuntos, incluindo ∅ e o próprio A.</li></ul>" }
    ]
  },

  {
    id: 'm-teoria-conjuntos-2',
    titulo: 'Teoria dos Conjuntos — Problemas com n(A ∪ B)',
    aulaIds: ['mat-09'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Os problemas de contagem com dois ou três grupos se resolvem com a fórmula da união ou com o <b>diagrama de Venn</b> — sempre preenchendo <b>da interseção para fora</b>.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Dois conjuntos</b>: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</li><li><b>“Nenhum”</b>: total − n(A ∪ B).</li><li><b>“Apenas A”</b>: n(A) − n(A ∩ B) — “gosta de A” inclui a interseção; “gosta APENAS de A” exclui!</li><li><b>Três conjuntos</b>: preencha o miolo (A∩B∩C) primeiro e vá descontando.</li><li><b>Mínimo de interseção</b> (pior caso): com taxas percentuais, interseção mínima de k grupos = 100% − k·(100% − taxa).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) De 120 pessoas, 42 foram vacinadas contra meningite, 66 contra a gripe e 42 não tomaram nenhuma. Qual a porcentagem que tomou as duas vacinas?</p><div class='sol'><b>Resolução.</b> Pelo menos uma: 120 − 42 = 78. Fórmula da união: 42 + 66 − x = 78 → x = 30. Percentual: 30/120 = <b>25%</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>“Gosta de A” vs “gosta APENAS de A” — a diferença é a interseção (e é onde mora o erro).</li><li>Não esqueça o grupo “nenhum dos dois” no total.</li><li>Pior caso com 3 módulos de 70% cada: 100 − 3·30 = <b>10%</b> no mínimo nos três.</li></ul>" }
    ]
  },

  {
    id: 'm-algebra',
    titulo: 'Álgebra: Expressões, Produtos Notáveis e Polinômios',
    aulaIds: ['mat-10'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Álgebra é aritmética com letras. As bancas cobram <b>produtos notáveis</b>, <b>fatoração</b> e o valor numérico de <b>polinômios</b> — quase sempre com uma simplificação esperta antes da conta.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li>(a + b)² = a² + 2ab + b² &nbsp;|&nbsp; (a − b)² = a² − 2ab + b²</li><li>(a + b)(a − b) = a² − b² — o “produto da soma pela diferença”.</li><li>Fator comum: ax + ay = a(x + y). Agrupamento: ax + ay + bx + by = (a+b)(x+y).</li><li><b>Valor numérico</b>: P(2) de P(x) = x³ − 2x² + x → 8 − 8 + 2 = 2.</li><li><b>Teorema do resto</b>: o resto de P(x) ÷ (x − a) é P(a). Se P(a) = 0, a é raiz e (x − a) é fator.</li><li>Soma dos coeficientes de P(x) = P(1).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC) A função f(t) = t³ − 14t² + 53t − 40 dá o lucro (em milhares) ao longo de t anos, 1 ≤ t ≤ 10. Excluindo os anos de lucro zero, em quantos anos NÃO houve prejuízo?</p><div class='sol'><b>Resolução.</b> t = 1 zera (1 − 14 + 53 − 40 = 0). Dividindo por (t − 1): t² − 13t + 40 = 0 → t = 5 e t = 8. O sinal do polinômio alterna: positivo em (1, 5), negativo em (5, 8), positivo após 8. Anos inteiros sem prejuízo (excluindo zeros): {2, 3, 4} e {9, 10} → <b>5 anos</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>(a + b)² ≠ a² + b² — o “quadrado da soma” tem o termo 2ab.</li><li>x² + 16 = 0 não tem raiz REAL — não conta na soma de raízes reais.</li><li>x(x−1)(x+3)(x²+16) = 0: raízes reais são 0, 1 e −3 → soma = −2.</li></ul>" }
    ]
  },

  {
    id: 'm-funcao-1grau',
    titulo: 'Funções do 1° Grau',
    aulaIds: ['mat-11'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>f(x) = ax + b é a reta: <b>a</b> é a inclinação (taxa de variação) e <b>b</b> é o valor inicial (onde corta o eixo y). a &gt; 0: crescente; a &lt; 0: decrescente. Modela tudo que tem <b>valor fixo + valor por unidade</b>: bandeirada + km, assinatura + consumo, custo fixo + custo por peça.</p>" },
      { ic: '🧮', t: 'Ferramentas que caem em prova', h: "<ul><li><b>Raiz</b> (zero): ax + b = 0 → x = −b/a. É onde a reta corta o eixo x.</li><li><b>Encontrar a função por 2 pontos</b>: a = Δy/Δx; depois substitua um ponto para achar b. Pontos (0, 2) e (1, 5): a = 3, b = 2 → f(x) = 3x + 2.</li><li><b>Inequação</b>: resolve como equação; só <b>inverte a desigualdade ao multiplicar/dividir por negativo</b>.</li><li>Crescimento linear no tempo: valor(t) = inicial + taxa·t.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>O custo de produção é C(x) = 250 + 12x. Com orçamento de R$ 1.000, qual o número MÁXIMO de unidades?</p><div class='sol'><b>Resolução.</b> 250 + 12x ≤ 1000 → 12x ≤ 750 → x ≤ 62,5. Como x é inteiro, <b>62 unidades</b> (63 estoura o orçamento — o arredondamento aqui é para BAIXO).</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Máximo de unidades com orçamento → arredonda para baixo; mínimo de caixas para conter algo → para cima.</li><li>Multiplicou a inequação por número negativo? INVERTA o sinal da desigualdade.</li><li>“Variação linear” entre dois anos: ache a taxa anual ANTES de projetar.</li></ul>" }
    ]
  },

  {
    id: 'm-funcao-2grau',
    titulo: 'Funções do 2° Grau',
    aulaIds: ['mat-12'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>f(x) = ax² + bx + c é a parábola. a &gt; 0: boca para cima (tem ponto de <b>mínimo</b>); a &lt; 0: boca para baixo (tem <b>máximo</b>). Problemas de “altura máxima”, “lucro máximo” e “área máxima” são sempre o <b>vértice</b>.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Bhaskara</b>: x = (−b ± √Δ)/(2a), com Δ = b² − 4ac.</li><li>Δ &gt; 0: duas raízes; Δ = 0: uma raiz dupla; Δ &lt; 0: nenhuma raiz real.</li><li><b>Soma e produto</b>: S = −b/a e P = c/a (x² − Sx + P = 0). Para raízes 2 e 3: x² − 5x + 6.</li><li><b>Vértice</b>: xᵥ = −b/(2a) e yᵥ = −Δ/(4a).</li><li>Inequação do 2º grau: estude o <b>sinal</b> pela concavidade e raízes.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>A altura de um projétil é h(t) = −5t² + 40t (metros, t em segundos). Qual a altura máxima?</p><div class='sol'><b>Resolução.</b> tᵥ = −40/(2·(−5)) = 4 s. h(4) = −5·16 + 160 = <b>80 m</b>. (Ou direto: yᵥ = −Δ/4a = −1600/(−20) = 80.) O tempo de subida (4 s) é distrator clássico.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>A pergunta é a altura máxima (yᵥ) ou o instante do máximo (xᵥ)? São respostas diferentes!</li><li>f(3) = 3² − 4·3 + 3 = 0 — não estranhe resultado zero, é só uma raiz.</li><li>Raízes da função = pontos onde o gráfico corta o eixo x.</li></ul>" }
    ]
  },

  {
    id: 'm-exp-log',
    titulo: 'Funções Exponencial e Logarítmica',
    aulaIds: ['mat-13'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Exponencial: a incógnita está no <b>expoente</b> (crescimento/decaimento). Logaritmo é a operação inversa: <b>log_b(a) = x ⇔ bˣ = a</b>. “Quanto tempo até dobrar/passar de X?” é quase sempre log.</p>" },
      { ic: '🧮', t: 'Propriedades (decore!)', h: "<ul><li>log(a·b) = log a + log b &nbsp;|&nbsp; log(a/b) = log a − log b</li><li>log(aⁿ) = n·log a — a propriedade que “desce o expoente”.</li><li>Mudança de base: log_b(a) = log a / log b.</li><li>log_b(1) = 0; log_b(b) = 1. Condições: base &gt; 0, base ≠ 1, logaritmando &gt; 0.</li><li>Equação exponencial: iguale as bases. 3ˣ = 243 → 3ˣ = 3⁵ → x = 5.</li><li>Valores usuais dados na prova: log 2 ≈ 0,30 e log 3 ≈ 0,48 → log 5 = 1 − log 2 = 0,70.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) T(x) = log₈(x) é o tempo (ms) para processar x bits. Com log 2 = 0,30, quanto tempo para 250 bits?</p><div class='sol'><b>Resolução.</b> T = log 250 / log 8. log 250 = log(1000/4) = 3 − 2·0,30 = 2,40. log 8 = 3·0,30 = 0,90. T = 2,40/0,90 ≈ <b>2,66 ms</b>. Reescrever 250 como 1000/4 evita conta suja — truque típico da banca.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>log(a + b) ≠ log a + log b — propriedade vale para PRODUTO.</li><li>3^(2x−5) &gt; 243: iguale bases (243 = 3⁵) → 2x − 5 &gt; 5 → x &gt; 5.</li><li>Em decaimento R(t) = k·(0,5)^(t/2), o k é o valor INICIAL (ex.: 5 latas × 0,6 = 3 g/L).</li></ul>" }
    ]
  },

  {
    id: 'm-razao-proporcao',
    titulo: 'Razão, Proporção e Regra de Três',
    aulaIds: ['mat-14', 'mb-05'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Razão compara grandezas por divisão; proporção é a igualdade de duas razões (a/b = c/d ⇔ <b>a·d = b·c</b>). Antes de qualquer regra de três, pergunte: as grandezas são <b>diretas</b> (aumenta→aumenta) ou <b>inversas</b> (aumenta→diminui)?</p>" },
      { ic: '🧮', t: 'Ferramentas que caem em prova', h: "<ul><li><b>Regra de três simples direta</b>: multiplica em cruz.</li><li><b>Inversa</b> (velocidade×tempo, operários×dias): multiplica em LINHA — 3 operários/12 dias → 6 operários: 3·12 = 6·x → x = 6 dias.</li><li><b>Composta</b>: monte colunas, classifique cada grandeza em relação à incógnita e inverta as inversas.</li><li><b>Divisão proporcional</b>: divida pelo total das partes. R$ 2.750 proporcional a 10, 15 e 30 → 55 partes → R$ 50 cada → o maior leva 30·50 = R$ 1.500.</li><li><b>Escala</b>: 1:50.000 → 8 cm no mapa = 8 × 50.000 cm = 4 km reais.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) Um elevador transporta 9 mulheres ou 6 homens. Com 6 mulheres já dentro, quantos homens ainda cabem, no máximo?</p><div class='sol'><b>Resolução.</b> 9 mulheres ⇔ 6 homens → 3 mulheres ⇔ 2 homens. Restam 3 “vagas de mulher” = <b>2 homens</b>. Proporção entre capacidades, sem fórmula decorada.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Mais operários, MENOS dias: inversa — quem multiplica em cruz aqui erra a questão inteira.</li><li>Na composta, cada coluna é classificada SEPARADAMENTE em relação à incógnita.</li><li>Divisão INVERSAMENTE proporcional a a, b, c = diretamente proporcional a 1/a, 1/b, 1/c.</li></ul>" }
    ]
  },

  {
    id: 'm-porcentagem',
    titulo: 'Porcentagem',
    aulaIds: ['mat-15', 'cr-03'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Porcentagem é fração de denominador 100. A ferramenta profissional é o <b>fator multiplicativo</b>: aumentar 25% = ×1,25; descontar 20% = ×0,80. Variações sucessivas? <b>Multiplique os fatores</b> — nunca some os percentuais.</p>" },
      { ic: '🧮', t: 'Ferramentas que caem em prova', h: "<ul><li>x% de V = (x/100)·V. 20% de 350 = 70.</li><li><b>Aumentos/descontos sucessivos</b>: +20% e depois −20% → 1,2 × 0,8 = 0,96 → caiu 4% (não volta ao original!).</li><li><b>Variação acumulada</b>: −20% e −10% → 0,8 × 0,9 = 0,72 → queda de 28%.</li><li><b>Voltar no tempo</b>: cresceu 25% ao ano por 3 anos até 1000 → início = 1000/1,25³ = 512.</li><li>“A passou a ganhar 25% a mais que B” ≠ “B ganha 25% a menos que A” (bases diferentes!).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(UNEB · CFO PM BA/2023) Um atleta acertou 70% de 90 arremessos. Após mais 30, foi para 75% do total; após outros 30, para 80% do total. Quantos acertos ao final?</p><div class='sol'><b>Resolução.</b> Total final: 90 + 30 + 30 = 150 arremessos. 80% de 150 = <b>120 acertos</b>. A banca dá etapas intermediárias para te perder — a pergunta usa só o total final.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>+20% seguido de −20% = −4% (e não zero).</li><li>Queda de 20% e depois 10%: acumulado 28% (e não 30%).</li><li>Sobre qual base é o percentual? “25% a mais que B” tem base B.</li></ul>" }
    ]
  },

  {
    id: 'm-sistemas-matrizes',
    titulo: 'Sistemas Lineares, Matrizes e Determinantes',
    aulaIds: ['mat-16'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Sistema linear: traduza o problema em equações e resolva por <b>substituição</b> ou <b>adição</b>. Classificação: <b>SPD</b> (solução única), <b>SPI</b> (infinitas — uma equação é múltipla da outra), <b>SI</b> (impossível — retas paralelas).</p>" },
      { ic: '🧮', t: 'Matrizes e determinantes', h: "<ul><li>Matriz m×n: m linhas, n colunas. Elemento a₍ᵢⱼ₎: i = linha, j = coluna.</li><li>Construção por lei: aᵢⱼ = |i − 3j| numa 3×3 → linhas (2,5,8), (1,4,7), (0,3,6).</li><li><b>Determinante 2×2</b>: ad − bc.</li><li><b>3×3 (Sarrus)</b>: repita as duas primeiras colunas; some os produtos das diagonais principais e subtraia os das secundárias.</li><li>Linha/coluna de zeros → det = 0. Duas linhas proporcionais (ou em PA encadeada) → det = 0.</li><li>det(A·B) = det(A)·det(B); trocar duas linhas inverte o sinal do det.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(FCC · Soldado PM BA/2023) Três camisas e duas calças custam R$ 455; um conjunto de calça e camisa custa R$ 190. Quanto custam duas camisas e uma calça?</p><div class='sol'><b>Resolução.</b> 3c + 2p = 455 e c + p = 190. Da segunda: p = 190 − c → 3c + 380 − 2c = 455 → c = 75, p = 115. Resposta: 2·75 + 115 = <b>R$ 265</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>x + y = 6 e 2x + 2y = 12: a 2ª é o dobro da 1ª → <b>infinitas soluções</b> (SPI), não “duas”.</li><li>Em aᵢⱼ, i é LINHA e j é COLUNA — inverter detona a matriz inteira.</li><li>det = 0 não significa matriz nula — significa linhas/colunas dependentes.</li></ul>" }
    ]
  },

  {
    id: 'm-combinatoria',
    titulo: 'Análise Combinatória',
    aulaIds: ['mat-17'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Tudo nasce do <b>Princípio Fundamental da Contagem</b>: etapas independentes se MULTIPLICAM. A pergunta de ouro para escolher a fórmula: <b>a ordem importa?</b> Sim → arranjo/permutação. Não → combinação.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Fatorial</b>: 5! = 120; 0! = 1.</li><li><b>Permutação</b>: Pₙ = n! — todos em fila.</li><li><b>Permutação com repetição</b>: anagramas de CASA = 4!/2! = 12 (o A repete).</li><li><b>Arranjo</b> (ordem importa): A(n,p) = n!/(n−p)! — pódio, senha, cargos diferentes.</li><li><b>Combinação</b> (ordem NÃO importa): C(n,p) = n!/[p!(n−p)!] — duplas, comissões. C(5,2) = 10.</li><li>Posições com restrição: trave primeiro as posições restritas, multiplique o resto.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) A placa de um veículo tinha 3 vogais distintas e 4 algarismos distintos, sendo os dois últimos os dígitos 0 e 1. Quantos veículos devem ser investigados?</p><div class='sol'><b>Resolução.</b> Vogais distintas: 5·4·3 = 60. Dois últimos dígitos: 0 e 1 em alguma ordem = 2. Dois primeiros dígitos: restam 8 algarismos → 8·7 = 56. Total: 60 · 56 · 2 = <b>6.720</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Comandante e motorista (funções DIFERENTES) → arranjo. Dupla de patrulha (iguais) → combinação.</li><li>Anagramas com letra repetida: divida pelo fatorial das repetições.</li><li>“Pelo menos um” em contagem: às vezes é mais rápido contar o TOTAL menos os casos sem nenhum.</li></ul>" }
    ]
  },

  {
    id: 'm-probabilidade',
    titulo: 'Probabilidade e Binômio de Newton',
    aulaIds: ['mat-18'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>P(evento) = casos favoráveis / casos possíveis — sempre entre 0 e 1. Em eventos em sequência, multiplique as probabilidades de cada etapa, <b>atualizando o total quando não há reposição</b>.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>União</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).</li><li><b>Complementar</b>: P(não A) = 1 − P(A). “Pelo menos um” = 1 − P(nenhum).</li><li><b>Sem reposição</b>: 2 soldados entre 5 soldados e 3 oficiais → 5/8 · 4/7 = 5/14.</li><li><b>Independentes</b>: P(A ∩ B) = P(A)·P(B) (com reposição, lançamentos de moeda).</li><li><b>Binômio de Newton</b>: (a+b)ⁿ tem termo geral C(n,p)·aⁿ⁻ᵖ·bᵖ; a soma dos coeficientes de (a+b)ⁿ é 2ⁿ (faça a = b = 1).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) Cada um dos 120 candidatos recebe um anagrama distinto de CFOPM. Qual a probabilidade de o anagrama sorteado começar e terminar por consoante?</p><div class='sol'><b>Resolução.</b> CFOPM: 4 consoantes e 1 vogal. Primeira posição: 4 opções de consoante; última: 3; o miolo permuta livre: 3! = 6. Favoráveis: 4·3·6 = 72 → P = 72/120 = <b>60%</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Moedas: “pelo menos uma cara” em 2 lançamentos = 1 − 1/4 = 3/4 (não 1/2).</li><li>Com ou sem reposição? A frase “uma após a outra, sem repor” muda o denominador.</li><li>Dado: “número par” são 3 casos em 6 = 1/2 — confira o espaço amostral antes.</li></ul>" }
    ]
  },

  {
    id: 'm-geo-plana-triangulos',
    titulo: 'Geometria Plana: Triângulos e Conceitos',
    aulaIds: ['mat-19'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>A soma dos ângulos internos de QUALQUER triângulo é <b>180°</b>. O triângulo retângulo é o rei das provas: <b>Pitágoras</b> (a² = b² + c²) resolve distância, rampa, escada, sombra e mangueira esticada.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Área</b>: A = (base × altura)/2.</li><li><b>Pitágoras</b>: hipotenusa² = soma dos quadrados dos catetos. Ternos clássicos: 3-4-5, 5-12-13, 6-8-10 (reconhecê-los economiza minutos).</li><li><b>Semelhança</b>: lados proporcionais — sombra do poste/sombra do prédio: 6/4 = h/10 → h = 15.</li><li>Ângulos x, 2x, 3x → 6x = 180° → x = 30° (o maior = 90°).</li><li>Condição de existência: cada lado &lt; soma dos outros dois.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) De um ponto P num poste central, 20 mangueiras de luz iguais (total 260 m) vão até uma circunferência de raio 5 m no chão. Qual a altura de P?</p><div class='sol'><b>Resolução.</b> Cada mangueira: 260 ÷ 20 = 13 m. Mangueira = hipotenusa; raio = cateto: h = √(13² − 5²) = √144 = <b>12 m</b>. Terno 5-12-13 puro.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>A altura relativa à hipotenusa NÃO é um cateto — cuidado com a figura mental.</li><li>Na semelhança, mantenha a correspondência (sombra com sombra, altura com altura).</li><li>Triângulo 3-4-6 existe? 3 + 4 &gt; 6 ✓ existe. 3-4-8? 3 + 4 &lt; 8 ✗ não existe.</li></ul>" }
    ]
  },

  {
    id: 'm-geo-plana-quadrilateros',
    titulo: 'Geometria Plana: Quadriláteros, Círculo e Thales',
    aulaIds: ['mat-20'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Cada figura tem sua fórmula de área — e a banca adora dar o <b>perímetro</b> para você descobrir o lado antes de calcular a área (duas etapas).</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li>Retângulo: A = b·h; quadrado: A = L² (perímetro 4L).</li><li>Paralelogramo: A = b·h; trapézio: A = (B + b)·h/2.</li><li><b>Losango</b>: A = (D · d)/2 — diagonais 10 e 24 → área 120.</li><li><b>Círculo</b>: C = 2πr e A = πr². Contorno 31,4 m (π = 3,14) → r = 5 → A = 78,5 m².</li><li><b>Polígono de n lados</b>: soma dos ângulos internos = (n − 2)·180°. Pentágono: 540°.</li><li><b>Thales</b>: retas paralelas cortadas por transversais geram segmentos proporcionais.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — estilo banca', h: "<p class='en'>Um terreno retangular tem perímetro 70 m e o comprimento excede a largura em 5 m. Qual a área?</p><div class='sol'><b>Resolução.</b> c + l = 35 e c = l + 5 → 2l + 5 = 35 → l = 15, c = 20. Área: 20 × 15 = <b>300 m²</b>. Perímetro vira sistema; área é a etapa final.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Dobrar o lado de um quadrado QUADRUPLICA a área (relação quadrática).</li><li>Diâmetro ≠ raio: contorno de 31,4 m dá raio 5 (não 10).</li><li>Muro com portão: perímetro MENOS a largura do portão.</li></ul>" }
    ]
  },

  {
    id: 'm-geo-espacial-prismas',
    titulo: 'Geometria Espacial: Prismas e Pirâmides',
    aulaIds: ['mat-21'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Sólidos de “paredes retas”. A receita é sempre a mesma: <b>Volume = área da base × altura</b> (no prisma) e <b>V = (1/3)·A_base·h</b> (na pirâmide — um terço do prisma de mesma base).</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Área lateral do prisma</b> = perímetro da base × altura.</li><li><b>Área total</b> = lateral + 2 × base.</li><li>Cubo: V = a³, total = 6a², diagonal = a√3.</li><li>Paralelepípedo: V = a·b·c; diagonal = √(a² + b² + c²).</li><li>Pirâmide: relacione apótema, altura e meia-base por Pitágoras.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) Um prisma reto tem 12 cm de altura e base quadrada de área 16 cm². Qual a área lateral?</p><div class='sol'><b>Resolução.</b> Base de área 16 → lado 4 cm → perímetro 16 cm. Lateral = perímetro × altura = 16 × 12 = <b>192 cm²</b>. Não confunda área da base (16) com perímetro (também 16 aqui — coincidência armada pela banca!).</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Lateral usa o PERÍMETRO da base; volume usa a ÁREA da base.</li><li>Pirâmide tem o fator 1/3 — esquecê-lo triplica o resultado.</li><li>Unidades: cm³ para volume, cm² para área — alternativas misturam de propósito.</li></ul>" }
    ]
  },

  {
    id: 'm-geo-espacial-corpos',
    titulo: 'Geometria Espacial: Cilindro, Cone e Esfera',
    aulaIds: ['mat-22'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Corpos redondos. Cilindro segue a regra do prisma (base × altura); cone leva o fator 1/3; esfera tem fórmula própria. <b>Semelhança de sólidos</b>: razão k nos comprimentos → k² nas áreas → <b>k³ nos volumes</b>.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Cilindro</b>: V = πr²h; lateral = 2πrh.</li><li><b>Cone</b>: V = (1/3)πr²h; g² = h² + r² (geratriz); lateral = πrg.</li><li><b>Cone equilátero</b>: g = 2r e h = r√3.</li><li><b>Esfera</b>: V = (4/3)πr³; superfície = 4πr².</li><li>Líquido até fração da altura do cone: volume proporcional ao <b>cubo</b> da razão.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) Um protótipo cilíndrico tem 6 cm de diâmetro e 12 cm de altura. Quanto armazenam, aproximadamente, cem protótipos (em mℓ)?</p><div class='sol'><b>Resolução.</b> Raio = 3 cm. V = π·9·12 = 108π ≈ 339,12 cm³. Cem unidades: <b>33.912 mℓ</b> (1 cm³ = 1 mℓ). Metade do erro da turma é usar o DIÂMETRO no lugar do raio.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Diâmetro 6 → raio 3. Sempre divida antes de elevar ao quadrado.</li><li>Água no cone: h=8 e g=10 → r = 6 (Pitágoras) ANTES do volume.</li><li>Dobrar o raio da esfera multiplica o volume por 8 (2³).</li></ul>" }
    ]
  },

  {
    id: 'm-geo-analitica',
    titulo: 'Geometria Analítica',
    aulaIds: ['mat-23'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Geometria com coordenadas: cada ponto é (x, y) e as figuras viram equações. As três contas básicas — distância, ponto médio e coeficiente angular — resolvem a maioria das questões.</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Distância</b>: d = √[(Δx)² + (Δy)²].</li><li><b>Ponto médio</b>: M = ((x₁+x₂)/2, (y₁+y₂)/2).</li><li><b>Coeficiente angular</b>: m = Δy/Δx; reta por um ponto: y − y₀ = m(x − x₀).</li><li>Paralelas: mesmo m; perpendiculares: m₁·m₂ = −1.</li><li><b>Circunferência</b>: (x − a)² + (y − b)² = r², centro (a, b). Da forma geral, complete quadrados: x² + y² + 16x + 63 = 0 → centro (−8, 0).</li><li>Equidistante de dois pontos = mediatriz do segmento.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) Um posto deve ser equidistante de R1(6,1) e R2(6,9) e ficar a 5 u.c. de R3(13,1). Qual a distância do posto a R2?</p><div class='sol'><b>Resolução.</b> Equidistante de R1 e R2 (mesmo x): y = 5. Distância 5 até R3: (x−13)² + (5−1)² = 25 → (x−13)² = 9 → x = 10 (o mais próximo). P(10,5) → d(P,R2) = √(4² + 4²) = √32 ≈ <b>5,6</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Na equação geral da circunferência, o sinal inverte: +16x → centro com x = −8.</li><li>Reta pelos centros: ache os DOIS centros primeiro, depois m = Δy/Δx.</li><li>Distância nunca é negativa; (Δx)² elimina o sinal.</li></ul>" }
    ]
  },

  {
    id: 'm-trigonometria',
    titulo: 'Trigonometria',
    aulaIds: ['mat-24'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>No triângulo retângulo: <b>SOH-CAH-TOA</b> — sen = oposto/hipotenusa, cos = adjacente/hipotenusa, tg = oposto/adjacente. Rampas, escadas e inclinações são sempre “qual lado eu tenho, qual lado eu quero?”.</p>" },
      { ic: '🧮', t: 'Valores e identidades (decore!)', h: "<ul><li>sen 30° = 1/2 | sen 45° = √2/2 | sen 60° = √3/2 (cosseno é o espelho).</li><li>tg 45° = 1; tg 30° = √3/3; tg 60° = √3.</li><li><b>Identidade fundamental</b>: sen²θ + cos²θ = 1 (para QUALQUER ângulo).</li><li>tg = sen/cos; <b>sec²x − tg²x = 1</b>; 1 + cotg²x = cossec²x.</li><li>Lei dos senos: a/sen A = b/sen B; lei dos cossenos: a² = b² + c² − 2bc·cos A.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(FCC · Soldado PM BA/2023) Uma rampa de inclinação 30° deve alcançar 2,5 m de altura. Qual o comprimento da rampa?</p><div class='sol'><b>Resolução.</b> Altura é o lado OPOSTO; rampa é a HIPOTENUSA → seno: sen 30° = 2,5/rampa → 0,5 = 2,5/r → r = <b>5 m</b>. Identificar o par (lado que tenho / lado que quero) decide qual razão usar.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>sen²(45°) + cos²(45°) = 1 — identidade fundamental, sem conta nenhuma.</li><li>f(x) = sec²x − tg²x − cos x = 1 − cos x → mínimo 0 (quando cos x = 1).</li><li>30° e 60°: o seno de um é o cosseno do outro — não troque os valores.</li></ul>" }
    ]
  },

  {
    id: 'm-juros',
    titulo: 'Juros Simples e Compostos',
    aulaIds: ['mat-25'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p><b>Juros simples</b>: rendem sempre sobre o capital inicial (crescimento linear — PA). <b>Juros compostos</b>: rendem sobre o montante (“juros sobre juros”, crescimento exponencial — PG).</p>" },
      { ic: '🧮', t: 'Fórmulas-chave', h: "<ul><li><b>Simples</b>: J = C·i·t e M = C(1 + i·t).</li><li><b>Compostos</b>: M = C(1 + i)ᵗ.</li><li>Taxa e tempo na MESMA unidade (5% ao mês com t em meses).</li><li>Taxa nominal anual capitalizada mensalmente: divida por 12 (6% a.a. → 0,5% a.m.).</li><li>Para achar a taxa composta entre dois acréscimos consecutivos: razão entre eles = (1 + i).</li><li>Desconto comercial simples: valor atual = N(1 − i·t).</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(UNEB · CFO PM BA/2025) R$ 1.000 aplicados a juros simples de 5% ao mês. Qual o montante após 4 meses?</p><div class='sol'><b>Resolução.</b> M = 1000·(1 + 0,05·4) = 1000·1,20 = <b>R$ 1.200</b>. Nos compostos daria 1000·1,05⁴ ≈ R$ 1.215,51 — a banca cobra a diferença entre os regimes.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Dobrar capital a juros compostos: use logaritmo ou os valores de ln dados (0,015t = 0,69 → t = 46).</li><li>(M₃ − M₂)/(M₂ − M₁) = 1 + i nos compostos — atalho que resolve questão inteira.</li><li>Simples: montantes em PA; compostos: em PG. Identifique o regime ANTES da fórmula.</li></ul>" }
    ]
  },

  {
    id: 'm-estatistica',
    titulo: 'Estatística Descritiva e Gráficos',
    aulaIds: ['mat-26', 'cr-05'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p>Três medidas de tendência central: <b>média</b> (soma/quantidade), <b>mediana</b> (o do meio com dados ORDENADOS) e <b>moda</b> (o que mais repete). Dispersão: variância e <b>desvio padrão</b> medem o “espalhamento”.</p>" },
      { ic: '🧮', t: 'Propriedades que caem em prova', h: "<ul><li>Mediana com n par = média dos dois centrais.</li><li><b>Somar constante k</b> a todos os dados: média soma k, <b>desvio padrão NÃO muda</b>.</li><li><b>Multiplicar por k</b>: média multiplica por k e desvio padrão por |k|.</li><li>Média ponderada: Σ(valor × peso)/Σ(pesos).</li><li>Se média = mediana, a distribuição é “equilibrada” — útil para achar incógnitas em rol ordenado.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(CONSULTEC · CFO PM BA) No rol ordenado 4, 5, 5, 9, a, 14, 16, 18, b, 21, a média e a mediana valem 12. Calcule b − a.</p><div class='sol'><b>Resolução.</b> Mediana (5º e 6º): (a + 14)/2 = 12 → a = 10. Média: soma = 120 → 4+5+5+9+10+14+16+18+21 = 102 → b = 18. b − a = <b>8</b>.</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>+1 ponto para todos → desvio padrão IGUAL (D₂' = D₂); +20% em todos → desvio também aumenta 20%.</li><li>Mediana exige ORDENAR primeiro — rol bagunçado é armadilha.</li><li>Média 12 com 10 valores → a soma é 120 (use a soma, não tente “chutar” valores).</li></ul>" }
    ]
  },

  {
    id: 'm-logica',
    titulo: 'Lógica Matemática: Proposições e Argumentos',
    aulaIds: ['mat-lg', 'cr-04'],
    pdfOriginal: null,
    secoes: [
      { ic: '📌', t: 'A ideia central', h: "<p><b>Proposição</b> é uma frase declarativa que pode ser classificada em V ou F (perguntas, exclamações e ordens NÃO são proposições). Conectivos: ∧ (e), ∨ (ou), → (se…então), ↔ (se e somente se), ~ (não).</p>" },
      { ic: '🧮', t: 'Tabela-verdade e equivalências (decore!)', h: "<ul><li><b>∧</b> só é V quando os dois são V. <b>∨</b> só é F quando os dois são F.</li><li><b>p → q</b> só é F quando p = V e q = F (“promessa quebrada”).</li><li><b>De Morgan</b>: ~(p ∧ q) = ~p ∨ ~q | ~(p ∨ q) = ~p ∧ ~q.</li><li><b>Negação do condicional</b>: ~(p → q) = p ∧ ~q (mantém a 1ª, nega a 2ª).</li><li><b>Equivalências do condicional</b>: p → q ≡ ~q → ~p (contrapositiva) ≡ ~p ∨ q.</li><li><b>Quantificadores</b>: ~(todo A é B) = “existe A que não é B”; ~(existe) = “nenhum”.</li><li>“p somente se q” = p → q; p é condição SUFICIENTE para q.</li></ul>" },
      { ic: '✏️', t: 'Exemplo resolvido — questão real', h: "<p class='en'>(FCC · Soldado PM BA/2012) Negue: “Estou com saúde e sou feliz”.</p><div class='sol'><b>Resolução.</b> De Morgan no “e”: nega os dois e troca por “ou” → <b>“Não estou com saúde OU não sou feliz”</b>. Quem responde “não estou com saúde e não sou feliz” cai na pegadinha (essa é a negação do “ou”).</div>" },
      { ic: '⚠️', t: 'Pegadinhas da banca', h: "<ul><li>Negação de “todos têm 13 anos”: basta UM diferente (não é “nenhum tem”).</li><li>Modus ponens: “se chover, adia” + “choveu” → adiou. Não dá para concluir nada sobre cancelar.</li><li>Verdade/mentira: teste as alternativas contra TODAS as falas — só uma ordem fecha sem contradição.</li></ul>" }
    ]
  }

];

/* ════════════════════════════════════════════════════════════
   INTEGRAÇÃO COM AS AULAS
   O material teórico do assunto vira o "PDF da Aula"
   (material.html?id=...). Requer data.js carregado ANTES.
   ════════════════════════════════════════════════════════════ */
(function _integrarMateriaisNasAulas() {
  if (typeof PL_CATALOG === 'undefined' || !PL_CATALOG.cursos) return;
  const mats = window.PL_MATERIAIS || [];
  Object.values(PL_CATALOG.cursos).forEach(curso => {
    (curso.aulas || []).forEach(aula => {
      if (!aula.materiais) return;
      const m = mats.find(x => Array.isArray(x.aulaIds) &&
        x.aulaIds.some(s => aula.id === s || aula.id.endsWith('-' + s)));
      if (m) aula.materiais.pdf = 'material.html?id=' + m.id;
    });
  });
})();
