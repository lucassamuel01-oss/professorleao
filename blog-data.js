/* ============================================================
   PROFESSOR LEÃO — BLOG
   blog-data.js — artigos exibidos em blog.html e na página inicial.

   Categorias: metodologia | questoes | redacao | taf | noticias
   ============================================================ */

window.BLOG_POSTS = [
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
      <h3>A banca tem personalidade</h3>
      <p>Cada banca examinadora tem um padrão de cobrança que se repete prova após prova. Em matemática, alguns assuntos aparecem em praticamente toda edição — razão e proporção, porcentagem, conjuntos — enquanto outros, listados no mesmo edital, rendem uma questão a cada vários anos. Quem analisa provas anteriores descobre onde está o maior retorno por hora de estudo.</p>
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
    titulo: 'Redação para concursos: a estrutura que aprova (sem decoreba de citações)',
    resumo: 'Você não precisa citar filósofos. Precisa de clareza, estrutura dissertativa impecável e uma proposta de intervenção completa.',
    data: '2026-06-01',
    tempo: 7,
    conteudo: `
      <p>Diferente do ENEM, a redação de concursos como o da PMBA valoriza menos o repertório enciclopédico e mais a <strong>clareza, a objetividade e a estrutura</strong>. Quem domina o esqueleto dissertativo-argumentativo consegue desenvolver qualquer tema proposto.</p>
      <h3>Introdução em 4 movimentos</h3>
      <ul>
        <li><strong>Contextualização:</strong> apresente o tema com um repertório legítimo — a Constituição Federal é sempre uma porta de entrada segura.</li>
        <li><strong>Problematização:</strong> mostre o contraste entre o que a lei garante e o que acontece na prática.</li>
        <li><strong>Tese:</strong> seu posicionamento claro sobre o problema.</li>
        <li><strong>Direcionamento:</strong> anuncie os argumentos que virão no desenvolvimento.</li>
      </ul>
      <h3>Desenvolvimento: um esqueleto por parágrafo</h3>
      <p>Cada parágrafo precisa de três peças: <strong>tópico frasal</strong> (a ideia central em uma frase direta), <strong>explicação</strong> (o porquê analítico) e <strong>consequência</strong> (o impacto real na sociedade). Dois parágrafos bem construídos valem mais do que quatro confusos.</p>
      <h3>Conclusão: o mnemônico que garante pontos</h3>
      <p>A proposta de intervenção precisa responder a quatro perguntas: <strong>QUEM faz + O QUE faz + COMO faz + PARA QUÊ faz</strong>. Exemplo de moldura: "cabe ao Estado [ação prática], por meio de [instrumento], com o objetivo de [finalidade]". Feche com o efeito social desejado.</p>
      <h3>Argumentos coringa</h3>
      <p>Algumas causas servem para quase qualquer tema social: desigualdade social, carência de políticas públicas eficientes, fragilidade da educação de base. Tenha-as prontas e adapte ao tema do dia.</p>
      <p><em>Treine uma redação por semana desde o início da preparação — estrutura só vira reflexo com repetição.</em></p>
    `,
  },
  {
    id: 'taf-pmba-treino',
    categoria: 'taf',
    tag: '💪 TAF',
    titulo: 'TAF da PMBA e CBMBA: por que começar a treinar antes da aprovação',
    resumo: 'O Teste de Aptidão Física é eliminatório — e condicionamento não se constrói em duas semanas. Índices para homens e mulheres e a lógica da progressão.',
    data: '2026-05-28',
    tempo: 5,
    conteudo: `
      <p>Muitos candidatos e candidatas tratam o Teste de Aptidão Física como um problema para "depois da objetiva". É um erro que elimina gente bem preparada intelectualmente todos os anos: o condicionamento físico exige <strong>tempo, adaptação progressiva e constância</strong>.</p>
      <h3>O que o TAF costuma exigir — índices de referência (PMBA)</h3>
      <p><strong>Feminino:</strong></p>
      <ul>
        <li><strong>Corrida de velocidade:</strong> 50 metros em até 9,2 segundos.</li>
        <li><strong>Barra fixa:</strong> sustentação isométrica por pelo menos 10 segundos.</li>
        <li><strong>Corrida de resistência:</strong> 2.400 metros em até 15 minutos.</li>
      </ul>
      <p><strong>Masculino:</strong></p>
      <ul>
        <li><strong>Corrida de velocidade:</strong> 50 metros em até 8,2 segundos.</li>
        <li><strong>Barra fixa:</strong> no mínimo 4 flexões dinâmicas (puxadas completas).</li>
        <li><strong>Corrida de resistência:</strong> 2.400 metros em até 13 minutos.</li>
      </ul>
      <p>Esses são os índices praticados nos últimos certames — <strong>confira sempre o edital vigente</strong>, pois os valores podem mudar a cada concurso.</p>
      <h3>A lógica da progressão</h3>
      <p>Treinos eficazes seguem fases: <strong>adaptação</strong> (caminhadas, trotes leves, primeiras tentativas na barra), <strong>evolução</strong> (volume crescente), <strong>intensidade</strong> (ritmos variados e tiros curtos) e <strong>simulação</strong> (executar o teste completo nos padrões da banca, cronometrado). Duas regras inegociáveis: nunca treine tiros de velocidade sem aquecer muito bem, e respeite os dias de descanso — é neles que o corpo evolui.</p>
      <h3>Bônus: treinar melhora seu estudo</h3>
      <p>Exercício regular melhora foco, reduz ansiedade e otimiza o sono. O treino físico não rouba tempo da matemática — ele potencializa cada Pomodoro estudado.</p>
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
    titulo: 'A aprovação não termina na objetiva: o ciclo completo de fases',
    resumo: 'Prova escrita, redação, TAF, exames médicos e investigação social — entenda cada fase dos concursos militares e por que preparar tudo em paralelo.',
    data: '2026-04-30',
    tempo: 5,
    conteudo: `
      <p>Passar na prova objetiva é a fase mais concorrida — mas não é a última. Concursos militares como PMBA e CBMBA são um funil com várias etapas eliminatórias, e cada uma derruba candidatos e candidatas que negligenciaram a preparação completa.</p>
      <h3>O funil típico do certame</h3>
      <ul>
        <li><strong>Prova objetiva:</strong> conhecimentos gerais e específicos — matemática tem peso decisivo. É o grande filtro inicial.</li>
        <li><strong>Redação:</strong> estrutura dissertativa, norma culta e proposta de intervenção. Treine semanalmente desde o início.</li>
        <li><strong>Teste de Aptidão Física (TAF):</strong> índices eliminatórios de corrida e barra. Condicionamento se constrói com meses de antecedência.</li>
        <li><strong>Avaliação médica e odontológica:</strong> exames conforme o edital — organize seus documentos e cuide da saúde ao longo da preparação.</li>
        <li><strong>Avaliação psicológica:</strong> perfil compatível com a função.</li>
        <li><strong>Investigação social:</strong> análise da vida pregressa e da documentação. Mantenha tudo em dia.</li>
      </ul>
      <h3>Por que preparar em paralelo</h3>
      <p>O intervalo entre a objetiva e as fases seguintes costuma ser curto. Quem deixa o TAF, a saúde e a documentação para depois da aprovação na escrita corre contra um relógio impiedoso. A preparação inteligente distribui pequenas doses de cada frente ao longo de toda a jornada: estudo diário, treino físico 3x por semana, redação semanal e documentação organizada.</p>
      <p><em>Aprovação de verdade é a soma do conhecimento na prova com a prontidão do corpo e da vida pessoal para assumir a farda.</em></p>
    `,
  },
];
