/* ============================================================
   PROFESSOR LEÃO — BLOG
   blog-data.js — artigos exibidos em blog.html e na página inicial.

   Categorias: metodologia | questoes | redacao | taf | noticias
   ============================================================ */

window.BLOG_POSTS = [
  {
    id: 'raio-x-edital-sd',
    categoria: 'sd',
    tag: '🪖 Soldado (SD)',
    titulo: 'Raio-X do concurso de Soldado PMBA/CBMBA: o que diz o edital (FCC)',
    resumo: 'Banca FCC, 80 questões, nota de corte 60, redação de 20 a 30 linhas. Os números exatos do último edital (SAEB/05/2022) para você treinar do jeito certo.',
    data: '2026-06-10',
    tempo: 7,
    conteudo: `
      <p>Quem estuda para Soldado precisa conhecer as regras do jogo. Abaixo, os dados oficiais do último edital publicado (SAEB/05/2022, organizado pela <strong>Fundação Carlos Chagas — FCC</strong>), que ofereceu <strong>2.000 vagas para a PMBA e 500 para o CBMBA</strong>.</p>
      <h3>A prova objetiva em números</h3>
      <ul>
        <li><strong>80 questões</strong> de múltipla escolha com <strong>5 alternativas</strong>: 50 de Conhecimentos Gerais + 30 de Conhecimentos Específicos.</li>
        <li>Cada questão vale <strong>1,25 ponto</strong> (escala de 0 a 100).</li>
        <li><strong>Nota de corte: 60 pontos</strong> — abaixo disso, eliminação automática.</li>
        <li>Duração total: <strong>4h30</strong>, já incluindo a redação, aplicada no mesmo dia.</li>
      </ul>
      <h3>As matérias — PM e BM não são iguais!</h3>
      <p><strong>Soldado PMBA</strong> — Gerais: Língua Portuguesa, <strong>Matemática</strong>, História do Brasil, Geografia do Brasil, Atualidades e Informática. Específicos: Direito Constitucional, Direitos Humanos, Direito Administrativo, Direito Penal, Igualdade Racial e de Gênero e Direito Penal Militar.</p>
      <p><strong>Soldado CBMBA</strong> — Gerais: Língua Portuguesa, <strong>Matemática</strong>, <strong>Ciências Naturais</strong> (no lugar de História e Geografia), Atualidades e Informática. Específicos: Igualdade Racial e de Gênero, Direito Constitucional, Direito Administrativo, Direito Penal Militar e Direitos Humanos.</p>
      <h3>A redação (2ª etapa)</h3>
      <ul>
        <li>Você recebe <strong>3 temas e escolhe 1</strong> — texto dissertativo-argumentativo sobre assunto de interesse geral.</li>
        <li>Entre <strong>20 e 30 linhas</strong>, sob pena de perder pontos.</li>
        <li>Critérios oficiais: <strong>Conteúdo (40 pts)</strong>, <strong>Estrutura (30 pts)</strong> e <strong>Expressão (30 pts)</strong>. Corte: 60.</li>
        <li>Só são corrigidas as redações dos mais bem classificados na objetiva (até 3× o número de vagas).</li>
      </ul>
      <h3>Inscrição, vagas e cotas</h3>
      <ul>
        <li>Inscrição de <strong>R$ 90,00</strong>, com <strong>isenção para inscritos no CadÚnico</strong> (família de baixa renda) — o pedido tem prazo próprio, logo no início das inscrições.</li>
        <li>As vagas são divididas por <strong>região de classificação</strong> (Salvador + 8 regiões do interior para a PM; 10 regiões para o BM) <strong>e por sexo</strong> — você concorre apenas dentro da sua região e não pode trocar depois. Exemplo do último edital: Salvador teve 1.012 vagas masculinas e 172 femininas na PM.</li>
        <li><strong>30% das vagas são reservadas para candidatos negros</strong> (autodeclaração + procedimento de heteroidentificação por comissão).</li>
        <li>Desempate (nesta ordem): maior nota em Conhecimentos Gerais → maior nota na Redação → maior nota em Específicos → função de jurado → maior idade.</li>
      </ul>
      <h3>Requisitos e carreira</h3>
      <ul>
        <li>Idade entre <strong>18 e 30 anos</strong>; estatura mínima 1,60 m (masc.) e 1,55 m (fem.); ensino médio completo; <strong>CNH categoria B</strong>.</li>
        <li>Durante o Curso de Formação: bolsa de um salário mínimo. Como Soldado: soldo + gratificação que podem chegar a <strong>R$ 4.012,11</strong> (valores do edital de 2022).</li>
        <li><strong>Atenção:</strong> TAF, exames médicos, avaliação psicológica e investigação social são <strong>exames pré-admissionais</strong> — acontecem DEPOIS do resultado final do concurso, e não são etapas da prova.</li>
        <li>Ritmo do último certame: edital em 28/09/2022 → inscrições 13/10 a 11/11/2022 → <strong>prova em 22/01/2023</strong>. Ou seja: do edital à prova foram menos de 4 meses — quem espera o edital para começar, começa perdendo.</li>
      </ul>
      <p style="margin-top:18px"><a href="assets/editais/edital-sd-pmba-cbmba-saeb-05-2022.pdf" download style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:10px;background:#4A6CF7;color:#fff;font-weight:800;text-decoration:none">⬇️ Baixar o edital completo — SD PMBA/CBMBA (SAEB/05/2022)</a></p>
      <p><em>Confira sempre o edital vigente — os números acima são do último certame publicado e servem de referência de treino.</em></p>
    `,
  },
  {
    id: 'raio-x-edital-cfo',
    categoria: 'cfo',
    tag: '🎖️ Oficial (CFO)',
    titulo: 'Raio-X do CFO PM/BM: o que diz o edital 2024 (UNEB)',
    resumo: 'Banca UNEB, 80 questões em 5 horas, e uma regra que derruba muita gente: zerar qualquer disciplina elimina. Veja a distribuição exata de questões.',
    data: '2026-06-09',
    tempo: 7,
    conteudo: `
      <p>O concurso de Oficiais é outro jogo. O edital CFOPM/CFOBM-2024 (Edital n.º 001-CG/2024), executado pela <strong>UNEB</strong>, ofereceu <strong>130 vagas: 100 para a PM</strong> (em duas turmas de 50) <strong>e 30 para o CBM</strong>.</p>
      <h3>A distribuição exata das 80 questões</h3>
      <p><strong>CFOPM:</strong> Língua Portuguesa 20 · Língua Inglesa 5 · Ciências Humanas 20 · <strong>Matemática 10</strong> · Informática 5 · Direito 20.</p>
      <p><strong>CFOBM:</strong> Língua Portuguesa 20 · Língua Inglesa 5 · Ciências Humanas e Naturais 25 · <strong>Matemática 15</strong> · Informática 5 · Direito 10.</p>
      <ul>
        <li>Cada questão vale <strong>1,25 ponto</strong>; corte de <strong>60 pontos</strong>; duração de <strong>5 horas</strong> (objetiva + redação).</li>
        <li><strong>A regra que elimina os despreparados: nota ZERO em qualquer disciplina = eliminação</strong>, mesmo com 60+ pontos no total. Com apenas 5 questões de Inglês e 5 de Informática, ignorar essas matérias é correr risco real.</li>
        <li>No CFOBM, a Matemática inclui <strong>Lógica Matemática</strong> (proposições, tabelas-verdade) — e o programa do CFOPM inclui <strong>Proporcionalidade e Finanças</strong> (porcentagem, juros).</li>
      </ul>
      <h3>A redação no estilo UNEB</h3>
      <p>Uma questão dissertativa sobre <strong>tema da realidade histórico-cultural contemporânea</strong>. Barema oficial: <strong>Conteúdo 30 pts · Estrutura 25 pts · Expressão 25 pts · Clareza, Coesão e Concisão 20 pts</strong>.</p>
      <h3>2ª etapa: aqui o TAF É etapa do concurso</h3>
      <p>Diferente do concurso de Soldado, no CFO a 2ª etapa (eliminatória) faz parte do certame: <strong>Avaliação Psicológica, TAF, Exame Médico-Odontológico, Investigação Social e Exame Documental</strong>.</p>
      <ul>
        <li><strong>TAF CFOPM:</strong> barra fixa (masc. 3 repetições dinâmicas / fem. 10s isometria), corrida de 50 m (masc. 8,00 s / fem. 9,20 s), corrida de 2.400 m (masc. 13 min / fem. 15 min) e <strong>natação de 25 m</strong>.</li>
        <li><strong>TAF CFOBM:</strong> apoio de frente, abdominal remador, 50 m, 2.400 m e <strong>natação de 100 m</strong>.</li>
        <li>Quem não atinge um índice tem <strong>uma única chance</strong> de refazer o teste após 72h.</li>
      </ul>
      <h3>Requisitos, regras de prova e carreira</h3>
      <ul>
        <li>Idade entre 18 e 30 anos; estatura mínima 1,60 m (masc.) / 1,55 m (fem.); ensino médio; CNH categoria B; <strong>30% das vagas reservadas para candidatos negros</strong>.</li>
        <li>No dia da prova: você só pode sair da sala após <strong>4h30</strong> do início e só leva o caderno de questões após <strong>5h completas</strong>.</li>
        <li>Os 100 aprovados da PM entram em <strong>duas turmas de 50</strong>, por ordem de classificação; o BM em turma única. Validade do concurso: 6 meses, prorrogável uma vez.</li>
        <li>O Curso de Formação de Oficiais é em <strong>regime de internato com dedicação exclusiva</strong>, com bolsa de estudo. Ao concluir: Aspirante a Oficial.</li>
        <li>Ritmo do certame 2024: edital em 29/11/2024 → inscrições 05/12/2024 a 05/01/2025 → <strong>prova em 16/02/2025</strong>. Menos de 3 meses do edital à prova.</li>
      </ul>
      <p style="margin-top:18px"><a href="assets/editais/edital-cfo-pm-bm-2024.pdf" download style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:10px;background:#4A6CF7;color:#fff;font-weight:800;text-decoration:none">⬇️ Baixar o edital completo — CFO PM/BM 2024 (UNEB)</a></p>
      <p><em>Use a distribuição de questões para calibrar seu plano: no CFO, Português + Direito + Humanas somam 60 das 80 questões da PM — mas é a matemática que costuma desempatar quem briga pelas primeiras posições.</em></p>
    `,
  },
  {
    id: 'cotas-e-heteroidentificacao',
    categoria: 'noticias',
    tag: '📰 Concursos & Editais',
    titulo: 'Cotas para negros nos concursos da Bahia: como funciona a reserva de 30%',
    resumo: 'Os editais de SD e CFO reservam 30% das vagas para candidatos negros, com heteroidentificação por comissão. Entenda as regras e os direitos.',
    data: '2026-06-11',
    tempo: 6,
    conteudo: `
      <p>Tanto o concurso de Soldado (FCC) quanto o de Oficial (UNEB) aplicam a <strong>Lei estadual nº 13.182/2014</strong>: <strong>30% das vagas são reservadas para candidatos negros</strong> (pretos e pardos). As regras são parecidas nos dois editais — e conhecê-las evita sustos.</p>
      <h3>Como concorrer</h3>
      <ul>
        <li>A opção é feita <strong>no ato da inscrição</strong>, por autodeclaração (critérios de cor/raça do IBGE). É facultativa — sem a opção, você concorre só à ampla concorrência.</li>
        <li>O candidato cotista concorre <strong>às duas listas ao mesmo tempo</strong>: se a nota alcançar a ampla concorrência, ele entra por ela e <strong>não consome vaga reservada</strong>.</li>
        <li>No SD, a reserva vale por região de classificação e por sexo; vagas reservadas não preenchidas voltam para a ampla concorrência.</li>
      </ul>
      <h3>O procedimento de heteroidentificação</h3>
      <ul>
        <li>Os habilitados nas provas passam por uma <strong>comissão de 5 membros</strong> que confirma a autodeclaração pela análise do <strong>fenótipo</strong> (características visíveis) — ascendência, fotos antigas e certidões de outros concursos <strong>não contam</strong>.</li>
        <li>O procedimento é <strong>filmado</strong>; recusar a filmagem ou faltar elimina o candidato da reserva.</li>
        <li>Quem não é confirmado, mas agiu de boa-fé, <strong>continua no concurso pela ampla concorrência</strong> (se a nota alcançar). Má-fé comprovada = exclusão e responsabilização.</li>
        <li>Cabe recurso do resultado provisório, analisado por uma comissão recursal distinta.</li>
      </ul>
      <h3>Na prática</h3>
      <p>A nota de corte da lista reservada costuma ser diferente da ampla — mas a prova é <strong>idêntica para todos</strong>: mesmas questões, mesmo corte mínimo de 60 pontos, mesma redação. A cota muda a concorrência, não o conteúdo. Seu plano de estudos continua o mesmo: dominar matemática e as matérias de maior peso.</p>
      <p style="margin-top:16px">
        <a href="assets/editais/edital-sd-pmba-cbmba-saeb-05-2022.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px;margin-right:8px">⬇️ Edital SD (Cap. 6)</a>
        <a href="assets/editais/edital-cfo-pm-bm-2024.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px">⬇️ Edital CFO (item 3.1)</a>
      </p>
    `,
  },
  {
    id: 'matematica-no-edital',
    categoria: 'metodologia',
    tag: '📊 Metodologia',
    titulo: 'A Matemática dos editais, tópico por tópico — e onde estudar cada um',
    resumo: 'O programa oficial de Matemática de SD e CFO destrinchado, com o mapa de qual aula, minissimulado e jogo da plataforma cobre cada tópico.',
    data: '2026-06-11',
    tempo: 7,
    conteudo: `
      <p>O conteúdo programático de Matemática é <strong>praticamente o mesmo</strong> nos editais de SD (FCC) e CFO (UNEB) — com duas diferenças que valem nota no fim do artigo. Veja o programa oficial e onde treinar cada tópico na plataforma:</p>
      <h3>O programa oficial (7 blocos)</h3>
      <ul>
        <li><strong>1. Conjuntos numéricos:</strong> N, Z, Q, R e Complexos (forma algébrica e trigonométrica), sequências, PA e PG → aulas de Conjuntos Numéricos, PA e PG + jogos 🔢 e 📊 + minissimulados do assunto.</li>
        <li><strong>2. Álgebra:</strong> expressões, polinômios, equações e inequações → aula de Álgebra e Polinômios.</li>
        <li><strong>3. Funções:</strong> 1º grau, 2º grau, modular, exponencial e logarítmica → aulas de Funções + jogo 📐 + minissimulado de Funções.</li>
        <li><strong>4. Sistemas lineares, Matrizes e Determinantes</strong> → aula específica do curso.</li>
        <li><strong>5. Análise Combinatória:</strong> arranjos, permutações, combinações, Binômio de Newton e probabilidade → aulas + jogo 🎲 + minissimulado de Combinatória.</li>
        <li><strong>6. Geometria e Medidas:</strong> plana (congruência, semelhança, áreas), espacial (prisma, pirâmide, cilindro, cone, esfera) e analítica (retas, circunferência, distâncias) → 4 aulas de geometria + jogo 🔺 + minissimulado de Geometria Plana.</li>
        <li><strong>7. Trigonometria:</strong> razões, funções, transformações, equações e triângulos → aula de Trigonometria.</li>
      </ul>
      <h3>As diferenças entre os editais</h3>
      <ul>
        <li><strong>CFO PM</strong> acrescenta o bloco <strong>"Proporcionalidade e Finanças"</strong>: grandezas proporcionais, porcentagem, acréscimos/descontos e juros — treine com os jogos ⚖️ Regra de Três, 📈 Porcentagem e 💰 Juros.</li>
        <li><strong>CFO BM</strong> acrescenta <strong>Lógica Matemática</strong> (proposições, valores lógicos, negação, quantificadores) — tem aula exclusiva no curso CFO CBMBA.</li>
      </ul>
      <h3>Como usar este mapa</h3>
      <p>Não estude o programa em ordem: cruze com a frequência da banca (artigo "Estude pelo peso da prova"). Conjuntos, funções, porcentagem, combinatória e geometria plana são os blocos que mais aparecem — comece por eles, sempre no trio <strong>aula → minissimulado → jogo</strong>.</p>
      <p style="margin-top:16px">
        <a href="assets/editais/edital-sd-pmba-cbmba-saeb-05-2022.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px;margin-right:8px">⬇️ Programa completo — Edital SD (Anexo II)</a>
        <a href="assets/editais/edital-cfo-pm-bm-2024.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px">⬇️ Programa completo — Edital CFO (Anexos II/III)</a>
      </p>
    `,
  },
  {
    id: 'estude-pelo-peso-da-prova',
    categoria: 'metodologia',
    tag: '📊 Metodologia',
    titulo: 'Estude pelo peso da prova, não pela ordem do edital',
    resumo: 'O edital lista os assuntos em sequência — mas a banca não cobra todos por igual. Aprenda a direcionar sua energia para o que realmente vira ponto.',
    data: '2026-06-08',
    tempo: 5,
    conteudo: `
      <p>Um dos erros mais comuns de quem começa a estudar para concursos como PMBA, CBMBA ou Correios é abrir o edital e seguir tópico por tópico, na ordem em que aparecem, dedicando o mesmo tempo a tudo. Parece organizado — mas é a rota mais lenta para a aprovação.</p>
      <h3>A banca tem personalidade — e o edital tem números</h3>
      <p>Cada banca tem um padrão de cobrança que se repete prova após prova. Em matemática, alguns assuntos aparecem em praticamente toda edição — conjuntos, funções, porcentagem, combinatória — enquanto outros rendem uma questão a cada vários anos. Quem analisa provas anteriores descobre onde está o maior retorno por hora de estudo.</p>
      <p>E os pesos estão escritos no edital: no <strong>CFO PM (UNEB)</strong> a Matemática tem <strong>10 das 80 questões</strong>; no <strong>CFO BM, 15 das 80</strong>; no <strong>SD (FCC)</strong>, ela integra as 50 questões de Conhecimentos Gerais. No CFO ainda vale a regra de ouro: <strong>zerar qualquer disciplina elimina</strong> — então até Inglês e Informática (5 questões cada) precisam de um mínimo de atenção.</p>
      <h3>Como aplicar hoje</h3>
      <ul>
        <li><strong>Liste os assuntos pela frequência</strong> com que caem nas provas anteriores da mesma banca — esse é o primeiro filtro de prioridade.</li>
        <li><strong>Reserve mais ciclos de estudo para os núcleos quentes</strong> e mantenha revisões curtas para os tópicos raros — sem zerar nenhum.</li>
        <li><strong>Reavalie a cada simulado:</strong> seus erros mostram onde o peso precisa ser corrigido.</li>
      </ul>
      <p>É exatamente essa lógica que o gerador de Plano de Estudos da plataforma aplica: ele cruza o peso de cada assunto no edital escolhido com as suas dificuldades declaradas, para que cada Pomodoro renda o máximo.</p>
      <p><em>Estudar tudo igual é estudar errado. Estude com direção.</em></p>
    `,
  },
  {
    id: 'leia-o-comando-primeiro',
    categoria: 'questoes',
    tag: '🎯 Questões',
    titulo: 'Leia o comando antes do enunciado: resolva questões como profissional',
    resumo: 'A ordem de leitura muda tudo. Técnicas de leitura ativa e eliminação de alternativas para ganhar tempo e precisão na prova.',
    data: '2026-06-05',
    tempo: 6,
    conteudo: `
      <p>Saber o conteúdo é metade do caminho. A outra metade é o comportamento diante da questão — e isso também se treina. Três técnicas que mudam seu desempenho imediatamente:</p>
      <h3>1. Comece pelo comando</h3>
      <p>Antes de ler o texto de apoio ou o enunciado longo, vá direto à pergunta final. Ela diz se o examinador quer a alternativa <strong>correta</strong>, a <strong>incorreta</strong> ou uma <strong>exceção</strong>. Sabendo o que procurar, sua leitura vira uma busca dirigida — e você economiza minutos preciosos em cada bloco.</p>
      <h3>2. Traduza o enunciado</h3>
      <p>Enunciado rebuscado é estratégia da banca para te cansar. Reescreva mentalmente em linguagem direta: "assinale a alternativa que não corresponde aos parâmetros estipulados" vira simplesmente <em>"qual está errada?"</em>.</p>
      <h3>3. Use filtros de eliminação</h3>
      <ul>
        <li><strong>Palavras absolutas:</strong> alternativas com "sempre", "nunca", "apenas", "exclusivamente" são fortes candidatas a erradas — matemática e legislação vivem de exceções.</li>
        <li><strong>Meia verdade é mentira inteira:</strong> se uma única parte da alternativa estiver errada, descarte tudo.</li>
        <li><strong>Alternativas gêmeas:</strong> quando duas opções são quase idênticas, a resposta costuma estar entre elas. Foque na diferença exata.</li>
      </ul>
      <h3>Depois da questão, o ouro: a autoexplicação</h3>
      <p>Acertar não basta. Para cada questão, explique com suas próprias palavras <strong>por que cada alternativa errada está errada</strong>. Esse hábito constrói o "olho treinado" que diferencia quem passa de quem quase passa.</p>
      <p><em>Treine agora: as listas de questões interativas dentro de cada aula dão feedback imediato com explicação em cada alternativa.</em></p>
    `,
  },
  {
    id: 'redacao-estrutura-que-aprova',
    categoria: 'redacao',
    tag: '✍️ Redação',
    titulo: 'Redação para PMBA e CBMBA: o que as bancas avaliam de verdade',
    resumo: 'FCC (SD) e UNEB (CFO) publicam os critérios no edital — e não são os do ENEM. Veja o barema real de cada banca e a estrutura que pontua.',
    data: '2026-06-01',
    tempo: 7,
    conteudo: `
      <p>Muita gente treina redação para concurso militar usando o modelo do ENEM — e perde pontos por isso. As bancas dos concursos da Bahia publicam <strong>critérios próprios no edital</strong>. Conhecê-los é o primeiro passo para escrever o texto que o corretor procura.</p>
      <h3>SD PMBA/CBMBA — critérios da FCC (edital SAEB/05/2022)</h3>
      <ul>
        <li><strong>Conteúdo — até 40 pontos:</strong> perspectiva adotada, capacidade de análise e senso crítico, consistência dos argumentos.</li>
        <li><strong>Estrutura — até 30 pontos:</strong> respeito ao gênero dissertativo-argumentativo, progressão textual e coesão entre frases e parágrafos.</li>
        <li><strong>Expressão — até 30 pontos:</strong> norma culta — concordância, regência, pontuação, grafia e acentuação.</li>
      </ul>
      <p>Regras práticas: você escolhe <strong>1 entre 3 temas</strong> de interesse geral, escreve entre <strong>20 e 30 linhas</strong> e precisa de <strong>60 pontos</strong> para não ser eliminado. Abordagem tangencial ao tema derruba a nota de Conteúdo — fidelidade ao tema vale mais que frase de efeito.</p>
      <h3>CFO PM/BM — barema da UNEB (edital 2024)</h3>
      <ul>
        <li><strong>Conteúdo — 30 pontos:</strong> fidelidade à questão, relevância argumentativa, progressão temática e senso crítico.</li>
        <li><strong>Estrutura — 25 pontos:</strong> texto predominantemente dissertativo-argumentativo, ideias articuladas ao tema.</li>
        <li><strong>Expressão — 25 pontos:</strong> adequação vocabular e registro culto da língua.</li>
        <li><strong>Clareza, Coesão e Concisão — 20 pontos:</strong> conexão lógica entre palavras e ideias, sem enrolação.</li>
      </ul>
      <p>O tema na UNEB versa sobre a <strong>realidade histórico-cultural contemporânea</strong> — leitura de atualidades pesa aqui.</p>
      <h3>A estrutura que atende às duas bancas</h3>
      <ul>
        <li><strong>Introdução:</strong> contextualize o tema, mostre o problema e deixe sua tese clara.</li>
        <li><strong>Desenvolvimento (2 parágrafos):</strong> cada um com tópico frasal direto, explicação analítica e consequência real. Dois parágrafos bem amarrados valem mais que quatro confusos.</li>
        <li><strong>Conclusão:</strong> retome a tese e aponte caminhos — sem precisar do formato engessado de "proposta de intervenção" do ENEM, que não é exigido por nenhuma das duas bancas.</li>
      </ul>
      <p><em>Treine uma redação por semana, sempre contando linhas e cronometrando — na prova, ela divide o tempo com 80 questões objetivas.</em></p>
      <p style="margin-top:16px">
        <a href="assets/editais/edital-sd-pmba-cbmba-saeb-05-2022.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px;margin-right:8px">⬇️ Edital SD (critérios no Cap. 10)</a>
        <a href="assets/editais/edital-cfo-pm-bm-2024.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px">⬇️ Edital CFO (barema no item 9.2)</a>
      </p>
    `,
  },
  {
    id: 'taf-pmba-treino',
    categoria: 'taf',
    tag: '💪 TAF',
    titulo: 'TAF da PMBA e CBMBA: índices oficiais e por que treinar desde já',
    resumo: 'No CFO o TAF é etapa do concurso (com natação!); no SD, exame pré-admissional. Índices oficiais do edital CFO 2024 para homens e mulheres.',
    data: '2026-05-28',
    tempo: 6,
    conteudo: `
      <p>Muitos candidatos e candidatas tratam o Teste de Aptidão Física como um problema para "depois da objetiva". É um erro que elimina gente bem preparada intelectualmente: o condicionamento físico exige <strong>tempo, adaptação progressiva e constância</strong>.</p>
      <h3>Primeiro, entenda QUANDO o TAF acontece</h3>
      <ul>
        <li><strong>CFO PM/BM (UNEB):</strong> o TAF é a <strong>2ª etapa do concurso</strong>, eliminatória, junto com avaliação psicológica, exames médicos, investigação social e exame documental.</li>
        <li><strong>Soldado (FCC):</strong> o TAF é <strong>exame pré-admissional</strong> — acontece depois do resultado final, conforme portaria da corporação. Não é etapa da prova, mas reprova do mesmo jeito.</li>
      </ul>
      <h3>Índices oficiais — edital CFO 2024 (Anexo V)</h3>
      <p><strong>CFOPM Masculino:</strong></p>
      <ul>
        <li><strong>Barra fixa dinâmica:</strong> mínimo de 3 repetições completas.</li>
        <li><strong>Corrida de 50 m:</strong> até 8,00 segundos.</li>
        <li><strong>Corrida de 2.400 m:</strong> até 13 minutos.</li>
        <li><strong>Natação:</strong> 25 metros.</li>
      </ul>
      <p><strong>CFOPM Feminino:</strong></p>
      <ul>
        <li><strong>Barra fixa estática:</strong> sustentação por pelo menos 10 segundos.</li>
        <li><strong>Corrida de 50 m:</strong> até 9,20 segundos.</li>
        <li><strong>Corrida de 2.400 m:</strong> até 15 minutos.</li>
        <li><strong>Natação:</strong> 25 metros.</li>
      </ul>
      <p><strong>CFOBM (ambos os sexos):</strong> apoio de frente sobre o solo, abdominal remador, corrida de 50 m, corrida de 2.400 m e <strong>natação de 100 m</strong>.</p>
      <p>Detalhe que poucos sabem: quem falha em um índice tem <strong>uma única chance de refazer o teste após 72 horas</strong>. Para o SD, os índices saem na portaria de convocação — historicamente na mesma faixa. <strong>Confira sempre o edital vigente.</strong></p>
      <h3>A lógica da progressão</h3>
      <p>Treinos eficazes seguem fases: <strong>adaptação</strong> (caminhadas, trotes leves, primeiras tentativas na barra), <strong>evolução</strong> (volume crescente), <strong>intensidade</strong> (ritmos variados e tiros curtos) e <strong>simulação</strong> (teste completo nos padrões da banca, cronometrado). E se o seu concurso tem natação, ela entra na rotina desde o início — técnica de nado não se improvisa. Duas regras inegociáveis: nunca treine tiros de velocidade sem aquecer, e respeite os dias de descanso.</p>
      <h3>Bônus: treinar melhora seu estudo</h3>
      <p>Exercício regular melhora foco, reduz ansiedade e otimiza o sono. O treino físico não rouba tempo da matemática — ele potencializa cada Pomodoro estudado.</p>
      <p style="margin-top:16px"><a href="assets/editais/edital-cfo-pm-bm-2024.pdf" download style="display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;background:rgba(74,108,247,.15);border:1px solid rgba(74,108,247,.4);color:#6B89FF;font-weight:800;text-decoration:none;font-size:13px">⬇️ Baixar o edital CFO 2024 (índices completos no Anexo V)</a></p>
    `,
  },
  {
    id: 'pomodoro-25-minutos',
    categoria: 'metodologia',
    tag: '📊 Metodologia',
    titulo: 'Pomodoro: por que ciclos de 25 minutos vencem maratonas de 4 horas',
    resumo: 'Estudar muito não é estudar bem. A ciência dos ciclos curtos com pausas e do rodízio de assuntos — o método por trás das aulas do Professor Leão.',
    data: '2026-05-22',
    tempo: 4,
    conteudo: `
      <p>Quem nunca passou uma tarde inteira "estudando" e terminou sem lembrar de quase nada? O problema não é falta de esforço — é o formato. A atenção humana se degrada rápido, e estudar no limite do cansaço gera sensação de progresso sem retenção real.</p>
      <h3>O ciclo que funciona</h3>
      <ul>
        <li><strong>25 minutos de foco total</strong> em uma única tarefa: videoaula, questões ou revisão. Celular longe, um assunto por vez.</li>
        <li><strong>5 minutos de pausa real:</strong> levante, beba água, alongue. Pausa não é rolar feed.</li>
        <li><strong>A cada 4 ciclos, pausa longa</strong> de 15 minutos para consolidar.</li>
      </ul>
      <h3>Por que as aulas têm 25 minutos</h3>
      <p>Não é coincidência: todas as aulas da plataforma foram divididas para caber em <strong>um Pomodoro</strong>. Você assiste uma aula inteira com atenção máxima, faz a pausa e emenda a lista de questões ou o jogo do assunto no ciclo seguinte. Estudo encaixado na vida real — mesmo para quem trabalha.</p>
      <h3>O segredo extra: rodízio de assuntos</h3>
      <p>Repetir o mesmo assunto por horas dá conforto, mas a ciência da aprendizagem mostra que <strong>intercalar assuntos</strong> força o cérebro a recuperar informações ativamente — e é isso que fixa o conteúdo. O Plano de Estudos da plataforma já monta esse rodízio para você.</p>
      <p><em>Constância vence intensidade: 3 horas bem executadas todos os dias superam 10 horas no sábado.</em></p>
    `,
  },
  {
    id: 'caderno-de-erros',
    categoria: 'questoes',
    tag: '🎯 Questões',
    titulo: 'Caderno de erros: transforme cada erro de hoje em ponto na prova',
    resumo: 'Errar no treino é o melhor diagnóstico gratuito que existe. Aprenda a registrar, classificar e revisar seus erros para nunca repetir o mesmo padrão.',
    data: '2026-05-15',
    tempo: 5,
    conteudo: `
      <p>A maioria dos candidatos e candidatas resolve questões, confere o gabarito, comemora os acertos e segue em frente. Estão jogando fora a parte mais valiosa do treino: <strong>o erro é o único feedback que aponta exatamente onde sua preparação está frágil</strong>.</p>
      <h3>Como montar o caderno de erros</h3>
      <p>Pode ser um caderno físico, uma planilha ou um app de notas. Para cada questão errada, registre:</p>
      <ul>
        <li><strong>O assunto exato</strong> (não "matemática", mas "regra de três composta").</li>
        <li><strong>O tipo de erro:</strong> não sabia o conteúdo? Errou a conta? Caiu numa pegadinha? Leu com pressa?</li>
        <li><strong>A armadilha da banca:</strong> qual palavra ou troca sutil te derrubou.</li>
        <li><strong>A regra correta,</strong> escrita com suas palavras.</li>
      </ul>
      <h3>A revisão que fecha o ciclo</h3>
      <p>Uma vez por semana, releia o caderno e refaça as questões anotadas. Quando acertar a mesma questão duas revisões seguidas, ela "sai" do caderno. O objetivo: <strong>nenhum padrão de erro sobrevive a duas semanas</strong>.</p>
      <h3>Erro classificado é estatística pessoal</h3>
      <p>Depois de um mês, seu caderno revela seus padrões: talvez você erre mais por pressa do que por desconhecimento, ou caia sempre na mesma pegadinha. Esse autoconhecimento vale mais do que qualquer aula — porque é sobre <em>você</em>.</p>
      <p><em>As listas interativas da plataforma mostram a explicação de cada questão na hora — material pronto para alimentar seu caderno de erros.</em></p>
    `,
  },
  {
    id: 'como-acompanhar-editais',
    categoria: 'noticias',
    tag: '📰 Concursos & Editais',
    titulo: 'Como acompanhar editais e nunca ser pego de surpresa',
    resumo: 'Edital publicado é cronômetro ligado. Onde acompanhar as publicações oficiais (PMBA, CBMBA, Correios) e o que fazer nas primeiras 48 horas.',
    data: '2026-05-08',
    tempo: 6,
    conteudo: `
      <p>Quem espera o edital sair para começar a estudar já começa atrás. Mas o oposto também vale: quem estuda sem acompanhar as publicações pode perder prazo de inscrição, mudança de banca ou alteração de conteúdo. O equilíbrio é estudar com constância e <strong>monitorar as fontes oficiais</strong>.</p>
      <h3>Onde acompanhar (fontes oficiais)</h3>
      <ul>
        <li><strong>Diário Oficial do Estado da Bahia (DOE-BA):</strong> toda publicação oficial de concurso estadual (PMBA, CBMBA) passa por ali.</li>
        <li><strong>Portal de seleções do Governo da Bahia:</strong> concentra editais e retificações dos certames estaduais.</li>
        <li><strong>Site oficial dos Correios:</strong> concursos e processos seletivos da empresa são publicados na página de carreiras.</li>
        <li><strong>Site da banca organizadora:</strong> após definida a banca, é lá que saem cronograma, locais de prova e resultados.</li>
      </ul>
      <p>Sites agregadores de concursos ajudam como radar, mas <strong>confirme sempre na fonte oficial</strong> antes de tomar qualquer decisão.</p>
      <h3>Checklist das primeiras 48h após o edital</h3>
      <ul>
        <li>Leia o edital inteiro — duas vezes. Marque prazos, requisitos e documentos.</li>
        <li>Compare o conteúdo programático com o que você já estuda: o que mudou?</li>
        <li>Anote as datas: inscrição, prova objetiva e demais fases.</li>
        <li>Verifique a banca: cada banca tem estilo próprio — ajuste seu treino de questões.</li>
        <li>Refaça seu Plano de Estudos com a data real da prova.</li>
      </ul>
      <p><em>Fique de olho no Quadro de Avisos da sua área de aluno: novidades de concursos e editais relevantes são publicadas por lá.</em></p>
    `,
  },
  {
    id: 'fases-do-concurso-militar',
    categoria: 'noticias',
    tag: '📰 Concursos & Editais',
    titulo: 'A aprovação não termina na objetiva: as fases reais de SD e CFO',
    resumo: 'Os dois concursos têm caminhos diferentes depois da prova escrita. Veja, conforme os editais, o que vem pela frente em cada carreira — e por que preparar tudo em paralelo.',
    data: '2026-04-30',
    tempo: 5,
    conteudo: `
      <p>Passar na prova objetiva é a fase mais concorrida — mas não é a última. E aqui muita gente se confunde: <strong>o caminho do Soldado e o do Oficial são diferentes</strong>. Veja como cada edital organiza o funil.</p>
      <h3>Soldado PMBA/CBMBA (edital FCC)</h3>
      <ul>
        <li><strong>1ª etapa:</strong> Prova Objetiva — 80 questões, corte 60.</li>
        <li><strong>2ª etapa:</strong> Prova Discursiva (Redação) — corrigida só para os mais bem classificados (até 3× as vagas).</li>
        <li><strong>Depois do resultado final</strong>, vêm os <strong>exames pré-admissionais</strong> (não são etapas do concurso): avaliação psicológica, exames médico-odontológicos, TAF, exame documental e investigação social. Para o CBMBA há ainda o Teste de Habilidade Específica.</li>
      </ul>
      <h3>CFO PM/BM (edital UNEB)</h3>
      <ul>
        <li><strong>1ª etapa:</strong> Prova de Conhecimentos — objetiva (80 questões, sem zerar nenhuma disciplina) + redação.</li>
        <li><strong>2ª etapa (do próprio concurso, eliminatória):</strong> Avaliação Psicológica, <strong>TAF (com natação)</strong>, Exame Médico-Odontológico, Investigação Social e Exame Documental.</li>
        <li>Aprovado? Curso de Formação de Oficiais em <strong>regime de internato com dedicação exclusiva</strong>.</li>
      </ul>
      <h3>Por que preparar em paralelo</h3>
      <p>O intervalo entre a objetiva e as fases seguintes costuma ser curto. Quem deixa o TAF, a saúde e a documentação para depois da aprovação na escrita corre contra um relógio impiedoso. A preparação inteligente distribui pequenas doses de cada frente ao longo de toda a jornada: estudo diário, treino físico 3x por semana, redação semanal e documentação organizada (certidões, CNH categoria B em dia!).</p>
      <p><em>Aprovação de verdade é a soma do conhecimento na prova com a prontidão do corpo e da vida pessoal para assumir a farda.</em></p>
    `,
  },
];
