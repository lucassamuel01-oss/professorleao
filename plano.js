/* ============================================================
   TELEFONE FORMATTER
   ============================================================ */
function formatarTelefone(valor) {
  const n = String(valor).replace(/\D/g, '').slice(0, 11);
  if (n.length <= 2)  return n;
  if (n.length <= 6)  return `(${n.slice(0,2)}) ${n.slice(2)}`;
  if (n.length <= 10) return `(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`;
  return `(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  ['whatsapp', 'telefone', 'pubTelefone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', e => { e.target.value = formatarTelefone(e.target.value); });
  });
});

/* ============================================================
   EDITAIS — dados completos dos 4 cursos do Professor Leão
   Baseado nos editais reais + modelo do projeto Elite Feminina
   ============================================================ */

const EDITAIS_PL = {

  /* ─── CFO PMBA ─────────────────────────────────────────── */
  'CFO PMBA': {
    nome: 'CFO PMBA',
    subtitulo: 'Curso de Formação de Oficiais da PMBA',
    tipo: 'Prova Objetiva + Redação + 2ª Etapa (FCC/UNEB)',
    duracao: '5h',
    questoes: 80,
    estrategia: 'Português, Direito e Ciências Humanas formam o núcleo. O plano mantém rodízio semanal para não zerar disciplina.',
    prova: [
      '80 questões objetivas + Redação dissertativa',
      'Língua Portuguesa: 20 questões',
      'Direito: 20 questões',
      'Ciências Humanas: 20 questões',
      'Matemática/RLM: 10 questões',
      'Informática: 5 questões',
      'Língua Inglesa: 5 questões',
      '2ª etapa: avaliação psicológica, física, médica e investigação social',
    ],
    dicas: [
      'Português, Direito e Ciências Humanas somam 75% da prova — alta frequência obrigatória.',
      'Não abandone Inglês e Informática: zerar disciplina é risco estratégico real.',
      'Treine redação semanalmente: estrutura, clareza, coesão e concisão.',
      'Matemática/RLM com 10 questões pode separar candidatos no corte — domine o básico.',
      'Inclua TAF na rotina: aprovação intelectual não substitui preparação física.',
    ],
    pesos: {
      'Língua Portuguesa': 20,
      'Direito': 20,
      'Ciências Humanas': 20,
      'Matemática/RLM': 10,
      'Informática': 5,
      'Língua Inglesa': 5,
    },
    materias: {
      'Língua Portuguesa': [
        'Leitura e interpretação de textos',
        'Tipologia e gêneros textuais',
        'Ortografia e acentuação gráfica',
        'Classes de palavras e flexões',
        'Sintaxe: termos essenciais e integrantes',
        'Coordenação e subordinação',
        'Concordância verbal e nominal',
        'Regência verbal e nominal',
        'Crase e pontuação',
        'Semântica e figuras de linguagem',
        'Redação oficial e dissertativa',
      ],
      'Direito': [
        'Direito Constitucional: CF/88 e direitos fundamentais',
        'Direito Administrativo: princípios, atos e poderes',
        'Direito Penal: teoria do crime e penas',
        'Direito Processual Penal',
        'Legislação penal especial',
        'Direito Penal Militar',
        'Direito Processual Penal Militar',
        'Direitos Humanos e tratados internacionais',
      ],
      'Ciências Humanas': [
        'História: Antiguidade ao Mundo Contemporâneo',
        'Brasil Colônia, Império e República',
        'História da Bahia: Canudos, Malês, Conjuração Baiana',
        'Independência da Bahia',
        'Atualidades: política, economia, segurança pública',
        'Geografia: relação sociedade-natureza',
        'Formação territorial do Brasil',
        'Urbanização e metropolização',
      ],
      'Matemática/RLM': [
        'Conjuntos numéricos e operações',
        'Razão, proporção e porcentagem',
        'Regra de três simples e composta',
        'Equações do 1° e 2° graus',
        'Progressões aritméticas e geométricas',
        'Geometria plana: áreas e perímetros',
        'Juros simples e compostos',
        'Estatística básica e gráficos',
        'Raciocínio lógico e sequências',
      ],
      'Informática': [
        'Word, Excel e PowerPoint (BrOffice equivalentes)',
        'Windows e organização de arquivos',
        'Internet, intranet e correio eletrônico',
        'Computação em nuvem',
        'Segurança da informação',
        'Certificação e assinatura digital',
      ],
      'Língua Inglesa': [
        'Compreensão e interpretação de textos',
        'Substantivos, artigos e adjetivos',
        'Verbos regulares e irregulares',
        'Tempos verbais essenciais',
        'Voz ativa e passiva',
        'Estratégias de leitura e inferência',
      ],
    },
  },

  /* ─── SD PMBA ──────────────────────────────────────────── */
  'SD PMBA': {
    nome: 'SD PMBA',
    subtitulo: 'Soldado da Polícia Militar da Bahia',
    tipo: 'Prova Objetiva + Redação',
    duracao: '4h30',
    questoes: 80,
    estrategia: 'Equilibrar base geral com bloco jurídico específico, evitando semana com matéria única.',
    prova: [
      '80 questões objetivas + Redação',
      'Conhecimentos Gerais: 50 questões',
      'Conhecimentos Específicos (jurídico): 30 questões',
      'Fases posteriores: física, psicológica, médica e investigação social',
    ],
    dicas: [
      'Português, Matemática e Atualidades precisam de alta frequência — base da prova.',
      'O bloco jurídico deve entrar desde o início: Constitucional, Penal, Penal Militar, DH.',
      'Faça questões desde a primeira semana — não espere terminar teoria.',
      'Separe ao menos 2 dias/semana para condicionamento físico.',
    ],
    pesos: {
      'Língua Portuguesa': 14,
      'Matemática': 10,
      'Atualidades': 8,
      'Informática': 6,
      'História do Brasil': 6,
      'Geografia do Brasil': 6,
      'Direito Constitucional': 6,
      'Direitos Humanos': 5,
      'Direito Administrativo': 5,
      'Direito Penal': 5,
      'Direito Penal Militar': 5,
      'Igualdade Racial e de Gênero': 4,
    },
    materias: {
      'Língua Portuguesa': [
        'Compreensão e interpretação de textos',
        'Tipologia textual',
        'Ortografia oficial',
        'Acentuação gráfica',
        'Classes de palavras',
        'Sintaxe da oração e do período',
        'Pontuação',
        'Concordância verbal e nominal',
        'Regência verbal e nominal',
        'Crase e semântica',
        'Redação oficial',
      ],
      'Matemática': [
        'Conjuntos numéricos',
        'Operações fundamentais',
        'Razão e proporção',
        'Porcentagem',
        'Regra de três simples e composta',
        'Equações do 1° e 2° graus',
        'Geometria plana básica',
        'Estatística básica',
        'Probabilidade',
        'Resolução de problemas',
      ],
      'Atualidades': [
        'Política nacional e internacional',
        'Economia brasileira',
        'Segurança pública na Bahia',
        'Meio ambiente e clima',
        'Tecnologia e inovação',
        'Temas sociais contemporâneos',
      ],
      'Informática': [
        'Conceitos básicos de informática',
        'Sistemas operacionais',
        'Editores de texto e planilhas',
        'Internet e intranet',
        'Correio eletrônico',
        'Segurança da informação',
      ],
      'História do Brasil': [
        'Brasil Colônia',
        'Brasil Império',
        'Primeira República',
        'Era Vargas',
        'Ditadura Militar',
        'Redemocratização',
        'História da Bahia',
      ],
      'Geografia do Brasil': [
        'Formação territorial',
        'Regionalização',
        'Aspectos físicos e clima',
        'População e urbanização',
        'Economia brasileira',
        'Geografia da Bahia',
      ],
      'Direito Constitucional': [
        'Princípios fundamentais da CF/88',
        'Direitos e garantias fundamentais',
        'Organização do Estado',
        'Administração Pública',
        'Segurança pública',
      ],
      'Direitos Humanos': [
        'Declaração Universal dos Direitos Humanos',
        'Direitos fundamentais na CF/88',
        'Tratados internacionais',
        'Proteção contra discriminação',
        'Cidadania e acesso à justiça',
      ],
      'Direito Administrativo': [
        'Princípios da Administração Pública',
        'Atos administrativos',
        'Poderes administrativos',
        'Agentes públicos',
        'Responsabilidade civil do Estado',
      ],
      'Direito Penal': [
        'Aplicação da lei penal',
        'Teoria do crime',
        'Penas e medidas de segurança',
        'Crimes contra a pessoa',
        'Crimes contra o patrimônio',
        'Lei de Drogas',
        'Crimes contra a Administração Pública',
      ],
      'Direito Penal Militar': [
        'Código Penal Militar',
        'Crimes militares em tempo de paz',
        'Crimes contra autoridade militar',
        'Crimes contra o serviço militar',
        'Crimes contra a Administração Militar',
      ],
      'Igualdade Racial e de Gênero': [
        'Estatuto da Igualdade Racial',
        'Políticas afirmativas',
        'Lei Maria da Penha',
        'Violência contra a mulher',
        'Discriminação racial e de gênero',
      ],
    },
  },

  /* ─── MATEMÁTICA BÁSICA ─────────────────────────────────── */
  'Matemática Básica': {
    nome: 'Matemática Básica',
    subtitulo: 'Fundamentos de Matemática para Concursos',
    tipo: 'Curso preparatório — base para todos os concursos',
    duracao: 'Autorritmado',
    questoes: null,
    estrategia: 'Do zero ao avançado — cada módulo consolida a base antes de avançar.',
    prova: [
      'Módulo 1: Conjuntos numéricos e operações',
      'Módulo 2: Frações, decimais e radiciação',
      'Módulo 3: Razão, proporção e porcentagem',
      'Módulo 4: Equações, funções e sistemas',
      'Módulo 5: Geometria plana e espacial',
      'Módulo 6: Progressões e matemática financeira',
      'Módulo 7: Estatística e combinatória',
    ],
    dicas: [
      'Conjuntos numéricos e frações são a base de tudo — domine antes de avançar.',
      'Porcentagem e regra de três aparecem em todos os concursos sem exceção.',
      'Geometria plana: pratique áreas e perímetros com questões comentadas.',
      'Resolva questões de concursos reais para fixar cada tópico.',
      'Revise PA e PG antes de partir para matemática financeira.',
    ],
    pesos: {
      'Conjuntos Numéricos': 10,
      'Frações e Números Decimais': 11,
      'MMC e MDC': 7,
      'Potenciação e Radiciação': 8,
      'Razão, Proporção e Porcentagem': 14,
      'Regra de Três': 10,
      'Equações e Sistemas': 9,
      'PA, PG e Juros': 9,
      'Funções do 1° e 2° Graus': 9,
      'Geometria Plana': 8,
      'Estatística e Probabilidade': 5,
    },
    materias: {
      'Conjuntos Numéricos': [
        'Números naturais e inteiros',
        'Números racionais e irracionais',
        'Números reais e complexos',
        'Representação na reta numérica',
        'Propriedades e operações',
      ],
      'Frações e Números Decimais': [
        'Frações próprias, impróprias e mistas',
        'Operações com frações',
        'Conversão fração-decimal',
        'Dízimas periódicas',
        'Simplificação e comparação de frações',
      ],
      'MMC e MDC': [
        'Múltiplos e divisores',
        'Critérios de divisibilidade',
        'Decomposição em fatores primos',
        'Cálculo do MMC e MDC',
        'Aplicações em problemas',
      ],
      'Potenciação e Radiciação': [
        'Potências de base inteira e fracionária',
        'Notação científica',
        'Radiciação e raízes',
        'Propriedades das operações',
        'Racionalização de denominadores',
      ],
      'Razão, Proporção e Porcentagem': [
        'Razão e proporção direta',
        'Grandezas inversamente proporcionais',
        'Porcentagem e taxa',
        'Aumento e desconto percentual',
        'Variação percentual',
      ],
      'Regra de Três': [
        'Regra de três simples direta',
        'Regra de três simples inversa',
        'Regra de três composta',
        'Problemas de mistura',
        'Aplicações em concursos',
      ],
      'Equações e Sistemas': [
        'Equações do 1° grau',
        'Equações do 2° grau e Bhaskara',
        'Sistemas de equações lineares',
        'Inequações',
        'Aplicações e problemas',
      ],
      'PA, PG e Juros': [
        'PA: definição e fórmulas',
        'PA: soma dos termos',
        'PG: definição e fórmulas',
        'Juros simples',
        'Juros compostos',
      ],
      'Funções do 1° e 2° Graus': [
        'Conceito de função e domínio',
        'Função afim (1° grau)',
        'Função quadrática (2° grau)',
        'Gráficos e interpretação',
        'Máximo e mínimo da parábola',
      ],
      'Geometria Plana': [
        'Ângulos e retas paralelas',
        'Triângulos: classificação e propriedades',
        'Teorema de Pitágoras',
        'Quadriláteros: áreas e perímetros',
        'Circunferência e círculo',
      ],
      'Estatística e Probabilidade': [
        'Moda, média e mediana',
        'Gráficos e tabelas',
        'Probabilidade simples',
        'Análise combinatória básica',
        'Variância e desvio padrão',
      ],
    },
  },

  /* ─── CORREIOS ──────────────────────────────────────────── */
  'Correios': {
    nome: 'Correios',
    subtitulo: 'Empresa Brasileira de Correios e Telégrafos',
    tipo: 'Prova Objetiva',
    duracao: '3h30',
    questoes: 50,
    estrategia: 'Equilíbrio entre conhecimentos gerais e específicos — Português e Raciocínio Lógico são os pilares.',
    prova: [
      '~50 questões objetivas',
      'Língua Portuguesa: ~10 questões',
      'Matemática e Raciocínio Lógico: ~10 questões',
      'Informática: ~10 questões',
      'Atualidades: ~5 questões',
      'Conhecimentos Específicos do cargo: ~15 questões',
    ],
    dicas: [
      'Raciocínio lógico é altamente cobrado nos Correios — inclua exercícios diários.',
      'Português e interpretação de textos são recorrentes: pratique com textos variados.',
      'Informática nos Correios tende a ser bastante específica — leia o edital com atenção.',
      'Os conhecimentos específicos dependem do cargo — foque no edital da área escolhida.',
      'Matemática básica bem dominada resolve a maioria das questões quantitativas.',
    ],
    pesos: {
      'Língua Portuguesa': 20,
      'Matemática': 15,
      'Raciocínio Lógico': 15,
      'Informática': 15,
      'Atualidades': 10,
      'Conhecimentos Específicos': 25,
    },
    materias: {
      'Língua Portuguesa': [
        'Compreensão e interpretação de textos',
        'Classes de palavras e análise sintática',
        'Concordância verbal e nominal',
        'Regência verbal e nominal',
        'Ortografia e acentuação',
        'Pontuação e crase',
        'Semântica e figuras de linguagem',
      ],
      'Matemática': [
        'Números inteiros e frações',
        'Múltiplos e divisores',
        'Razão, proporção e porcentagem',
        'Regra de três',
        'Equações básicas',
        'Geometria plana básica',
        'Estatística e gráficos',
      ],
      'Raciocínio Lógico': [
        'Lógica proposicional',
        'Diagramas lógicos',
        'Sequências e padrões numéricos',
        'Problemas de raciocínio matemático',
        'Análise combinatória básica',
        'Probabilidade',
        'Lógica de argumentação',
      ],
      'Informática': [
        'Conceitos básicos e hardware',
        'Windows e gerenciamento de arquivos',
        'Editores de texto e planilhas',
        'Navegadores e internet',
        'Correio eletrônico',
        'Segurança da informação',
        'Computação em nuvem e backup',
      ],
      'Atualidades': [
        'Política e governo federal',
        'Economia e mercado de trabalho',
        'Tecnologia e inovação',
        'Meio ambiente e sustentabilidade',
        'Saúde pública',
        'Temas sociais recentes',
      ],
      'Conhecimentos Específicos': [
        'Serviços postais e logísticos dos Correios',
        'Atendimento ao cliente e qualidade',
        'Operações básicas de agência',
        'Noções de legislação postal',
        'Ética no serviço público',
        'Responsabilidade social e ambiental',
      ],
    },
  },
};

/* ============================================================
   ENGINE DE PLANO POMODORO
   Algoritmo completo adaptado do projeto Elite Feminina —
   sem dependência de backend, 100% client-side.
   ============================================================ */

function _safeNum(v, fb = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fb;
}

function _toArr(v) {
  if (!v) return [];
  return Array.isArray(v) ? v.filter(Boolean) : [v].filter(Boolean);
}

function _diasAte(dataProva) {
  if (!dataProva) return null;
  const hoje  = new Date(); hoje.setHours(0, 0, 0, 0);
  const prova = new Date(dataProva + 'T00:00:00');
  if (isNaN(prova.getTime())) return null;
  return Math.max(0, Math.ceil((prova - hoje) / 86400000));
}

function _perfilNivel(nivel) {
  const n = String(nivel || '').toLowerCase();
  if (n.includes('iniciante')) return {
    nome: 'Base guiada',
    difExtra: 5, facReducao: 1,
    teoria: 'teoria guiada + exemplos',
    questoes: 'questões fundamentais',
    revisao: 'revisão de base + caderno de erros',
    simulado: 'mini-simulado leve',
  };
  if (n.includes('avan')) return {
    nome: 'Alta performance',
    difExtra: 7, facReducao: 2,
    teoria: 'revisão objetiva do ponto-chave',
    questoes: 'questões cronometradas',
    revisao: 'correção ativa + padrão de erro',
    simulado: 'simulado com tempo controlado',
  };
  return {
    nome: 'Evolução equilibrada',
    difExtra: 6, facReducao: 3,
    teoria: 'teoria direcionada',
    questoes: 'questões comentadas',
    revisao: 'revisão/caderno de erros',
    simulado: 'mini-simulado',
  };
}

function _buildState(edital, difs, facs, nivel) {
  const perfil = _perfilNivel(nivel);
  const state  = {};
  const BASE_BOOST = ['Língua Portuguesa', 'Matemática', 'Matemática/RLM', 'Conjuntos Numéricos', 'Frações e Números Decimais'];

  Object.entries(edital.materias).forEach(([mat, assuntos]) => {
    let score = edital.pesos[mat] || 5;
    if (difs.includes(mat))  score += perfil.difExtra;
    if (facs.includes(mat))  score -= perfil.facReducao;
    if (String(nivel).toLowerCase().includes('iniciante') && BASE_BOOST.includes(mat)) score += 3;

    state[mat] = {
      assuntos: [...assuntos],
      cursor: 0,
      score: Math.max(2, score),
      dificuldade: difs.includes(mat),
      facilidade:  facs.includes(mat),
      categoria: difs.includes(mat) ? 'Prioridade de recuperação'
               : facs.includes(mat) ? 'Manutenção estratégica'
               : 'Construção de desempenho',
    };
  });
  return state;
}

function _escolher(materias, state, ctx) {
  let best = null, bestScore = -Infinity;
  materias.forEach((mat, idx) => {
    let s = state[mat].score;
    s -= (ctx.weekCounts[mat] || 0) * 5.5;
    s -= (ctx.globalCounts[mat] || 0) * 0.4;
    if (ctx.last === mat)                      s -= 120;
    if (ctx.daySet && ctx.daySet.has(mat))     s -= 60;
    if ((ctx.weekCounts[mat] || 0) === 0)      s += 14;
    s += ((ctx.seed + idx) % 5) * 0.08;
    if (s > bestScore) { bestScore = s; best = mat; }
  });
  return best || materias[ctx.seed % materias.length];
}

function _nextAssunto(state, mat) {
  const item = state[mat];
  if (!item || !item.assuntos.length) return '';
  const a = item.assuntos[item.cursor % item.assuntos.length];
  item.cursor++;
  return a;
}

function _limitePorDia(h) { return h <= 1 ? 1 : h <= 3 ? 2 : 3; }

function _selecionarDia(materias, state, ctx, limite) {
  const escolhidas = [];
  let guard = 0;
  while (escolhidas.length < limite && guard < materias.length * 4) {
    const mat = _escolher(materias, state, {
      ...ctx,
      daySet: new Set(escolhidas),
      last: escolhidas[escolhidas.length - 1] || null,
    });
    if (!escolhidas.includes(mat)) {
      escolhidas.push(mat);
    } else {
      const fb = materias.find(m => !escolhidas.includes(m));
      if (fb) escolhidas.push(fb); else break;
    }
    guard++;
  }
  return escolhidas;
}

function _distribuirCiclos(ciclos, qtd) {
  if (qtd <= 1) return [ciclos];
  if (qtd === 2) {
    const a = Math.max(1, Math.round(ciclos * 0.55));
    return [a, Math.max(1, ciclos - a)];
  }
  const a = Math.max(1, Math.round(ciclos * 0.44));
  const b = Math.max(1, Math.round(ciclos * 0.34));
  return [a, b, Math.max(1, ciclos - a - b)];
}

function _tarefa(perfil, etapa, retaFinal) {
  if (retaFinal && etapa >= 2) return perfil.simulado + ' + correção';
  if (etapa === 1) return perfil.teoria;
  if (etapa === 2) return perfil.questoes;
  return perfil.revisao;
}

function _gerarDia({ horasDia, materias, state, weekCounts, globalCounts, seed, retaFinal, diaNome, nivel }) {
  const perfil = _perfilNivel(nivel);
  let ciclos   = Math.max(2, Math.min(Math.floor((horasDia * 60) / 30), 10));

  const limite = Math.min(_limitePorDia(horasDia), materias.length);
  const matsDay = _selecionarDia(materias, state, { weekCounts, globalCounts, seed, last: null }, limite);
  const ciclDia = _distribuirCiclos(ciclos, matsDay.length);

  const blocos = [];
  let cont = 1;

  matsDay.forEach((mat, idx) => {
    const qtd    = ciclDia[idx] || 1;
    const assunto = _nextAssunto(state, mat);
    const cat     = state[mat]?.categoria || '';

    weekCounts[mat]   = (weekCounts[mat]   || 0) + qtd;
    globalCounts[mat] = (globalCounts[mat] || 0) + qtd;

    for (let i = 1; i <= qtd; i++) {
      blocos.push({
        tipo: 'pomodoro',
        titulo: `Pomodoro ${cont}`,
        tempo: '25min foco + 5min pausa',
        mat, assunto, cat, tarefa: _tarefa(perfil, i, retaFinal),
      });
      if (cont % 4 === 0 && cont !== ciclos) {
        blocos.push({ tipo: 'pausa', titulo: 'Pausa longa', tempo: '15–20min', mat: '', assunto: 'Pausa para recuperar energia.', cat: '', tarefa: 'recuperação' });
      }
      cont++;
    }
  });

  if (diaNome === 'Sábado' || diaNome === 'Domingo' || retaFinal) {
    blocos.push({
      tipo: 'simulado', titulo: retaFinal ? 'Fechamento tático' : 'Revisão semanal',
      tempo: '30–60min', mat: 'Treino integrado',
      assunto: retaFinal ? 'Mini-simulado + correção dos erros' : 'Revisão dos assuntos cobrados esta semana',
      cat: 'Consolidação', tarefa: perfil.simulado,
    });
  }

  return { blocos, matsDay };
}

function gerarPlanoCompleto(dados) {
  const edital     = EDITAIS_PL[dados.concurso] || EDITAIS_PL['CFO PMBA'];
  const diasRest   = _diasAte(dados.dataProva);
  const horasDia   = Math.max(_safeNum(dados.horasDia, 1), 1);
  const diasSemana = Math.max(_safeNum(dados.diasSemana, 3), 1);
  const cargaSem   = horasDia * diasSemana;
  const semanas    = Math.max(1, Math.ceil((diasRest || 60) / 7));

  const difs  = _toArr(dados.diffs);
  const facs  = _toArr(dados.facs);
  const state = _buildState(edital, difs, facs, dados.nivel);
  const mats  = Object.keys(edital.pesos).sort((a, b) => state[b].score - state[a].score);
  const DIAS  = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const agenda = [];
  const globalCounts = {};

  for (let s = 1; s <= semanas; s++) {
    const retaFinal  = diasRest !== null && (diasRest <= 30 || s > Math.max(1, semanas - 2));
    const weekCounts = {};
    const dias       = [];

    for (let d = 0; d < diasSemana; d++) {
      const diaNome = DIAS[d] || `Dia ${d + 1}`;
      const dia     = _gerarDia({ horasDia, materias: mats, state, weekCounts, globalCounts, seed: s * 17 + d * 7, retaFinal, diaNome, nivel: dados.nivel });
      dias.push({ dia: diaNome, matsDay: dia.matsDay, blocos: dia.blocos });
    }

    agenda.push({
      numero: s,
      foco: retaFinal ? 'Reta final — questões, revisão e correção ativa' : 'Distribuição por prioridade, dificuldade e desempenho',
      matsemana: Object.entries(weekCounts).sort((a, b) => b[1] - a[1]).map(([m]) => m),
      dias,
    });
  }

  const prioridades = mats.slice(0, 6);
  const intensidade =
    diasRest !== null && diasRest <= 30  ? 'Operação Reta Final 🔥' :
    diasRest !== null && diasRest <= 90  ? 'Missão 90 Dias ⚡' :
    diasRest !== null && diasRest <= 180 ? 'Modo Intensivo 💪' :
                                           'Construção de Base 📅';

  const totalPoms = agenda.reduce((a, s) => a + s.dias.reduce((b, d) => b + d.blocos.filter(bl => bl.tipo === 'pomodoro').length, 0), 0);

  return {
    edital, diasRest, semanas, cargaSem, intensidade, prioridades, agenda, totalPoms,
    revisoes: [
      'Revisão 24h: o primeiro Pomodoro do dia seguinte retoma erros e marcações do estudo anterior.',
      'Revisão 7 dias: no encerramento da semana, refaça questões erradas e registre padrões de erro.',
      'Revisão 15 dias: aplique mini-simulado dos assuntos acumulados e reorganize prioridades.',
      'Caderno de erros: toda questão errada deve virar anotação objetiva com o motivo do erro.',
    ],
    alertas: [
      dados.trabalha === 'Sim'
        ? 'Como você trabalha, o plano usa Pomodoros para reduzir atrito e manter constância.'
        : 'Use sua disponibilidade para elevar o volume de questões sem abandonar revisão.',
      String(dados.nivel || '').toLowerCase().includes('iniciante')
        ? 'Como iniciante, o sistema reforça base, leitura ativa e questões fundamentais.'
        : 'Como você já tem base, o plano aumenta questões, correção ativa e simulados curtos.',
      'A distribuição prioriza os assuntos em que você declarou mais dificuldade.',
      'Inclua treino físico fora do cronograma teórico, especialmente 2 a 4 vezes por semana.',
    ],
  };
}

/* ============================================================
   RENDERIZAÇÃO DO PLANO — HTML inline no #pubPlanResult
   ============================================================ */

function renderPlanoHTML(dados, plano) {
  const esc = (v) => String(v || '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' })[c]);

  const maxPeso = Math.max(...Object.values(plano.edital.pesos));
  const difs    = _toArr(dados.diffs);

  /* ── Barra de distribuição de pesos ── */
  const distribuicao = plano.prioridades.map(m => {
    const peso = plano.edital.pesos[m] || 5;
    const pct  = Math.min(100, Math.round((peso / maxPeso) * 100));
    const cor  = difs.includes(m) ? '#fbbf24' : '#4A6CF7';
    return `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">
        <span style="font-size:11px;min-width:150px;color:${difs.includes(m) ? '#fbbf24' : '#a8b4d0'};flex-shrink:0;">${esc(m)}</span>
        <div style="flex:1;height:5px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;">
          <div style="width:${pct}%;height:100%;background:${cor};border-radius:99px;"></div>
        </div>
        <b style="font-size:10px;min-width:18px;text-align:right;color:#6B89FF">${peso}</b>
        ${difs.includes(m) ? '<span style="font-size:10px;color:#fbbf24;margin-left:2px;" title="Alta prioridade">⚠</span>' : ''}
      </div>`;
  }).join('');

  /* ── Semanas (primeiras 4 exibidas, resto indicado) ── */
  const SEMtoShow = Math.min(plano.agenda.length, 4);
  let weeksHtml = '';

  for (let si = 0; si < SEMtoShow; si++) {
    const sem  = plano.agenda[si];
    const open = si === 0;
    const wid  = `week-body-${si}`;
    const arId = `week-arrow-${si}`;

    weeksHtml += `
      <div style="margin-bottom:10px;border:1px solid rgba(255,255,255,0.07);border-radius:10px;overflow:hidden;">
        <button type="button"
          onclick="var b=document.getElementById('${wid}');var a=document.getElementById('${arId}');var o=b.style.display!=='none';b.style.display=o?'none':'block';a.textContent=o?'›':'‹';"
          style="width:100%;text-align:left;background:rgba(255,255,255,0.03);border:none;color:#fff;padding:11px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:inherit;font-size:13px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <strong>Semana ${sem.numero}</strong>
            ${si === 0 ? '<span style="background:rgba(74,108,247,0.2);color:#6B89FF;border-radius:20px;padding:2px 8px;font-size:10px;font-weight:700;">← começar aqui</span>' : ''}
            <span style="font-size:11px;color:#6B89FF;">${esc(sem.foco)}</span>
          </div>
          <span id="${arId}" style="color:#4A6CF7;font-size:16px;">${open ? '‹' : '›'}</span>
        </button>

        <div id="${wid}" style="display:${open ? 'block' : 'none'};">
          ${sem.dias.map(dia => {
            const poms = dia.blocos.filter(b => b.tipo === 'pomodoro');
            const sims = dia.blocos.filter(b => b.tipo === 'simulado');
            return `
              <div style="padding:10px 16px;border-top:1px solid rgba(255,255,255,0.04);">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                  <strong style="font-size:12px;color:#6B89FF;">📅 ${esc(dia.dia)}</strong>
                  <div style="display:flex;flex-wrap:wrap;gap:4px;">
                    ${dia.matsDay.map(m => `<span style="background:rgba(74,108,247,0.1);border:1px solid rgba(74,108,247,0.18);border-radius:20px;padding:2px 8px;font-size:10px;color:#a8b4d0;">${esc(m)}</span>`).join('')}
                  </div>
                </div>
                <ul style="margin:0;padding-left:14px;">
                  ${poms.map(b => `
                    <li style="font-size:12px;color:#6B89FF;margin-bottom:3px;list-style:none;padding-left:0;">
                      <span style="color:#8892B4">⏱</span>
                      <strong style="color:#fff">${esc(b.titulo)}</strong>
                      · <span style="color:#60a5fa">${esc(b.mat)}</span>
                      <span style="color:#6B7280"> — ${esc(b.assunto)}</span>
                      <em style="color:#4A6CF7;font-size:11px;"> [${esc(b.tarefa)}]</em>
                    </li>`).join('')}
                  ${sims.map(b => `
                    <li style="font-size:12px;color:#fbbf24;margin-top:4px;list-style:none;">
                      ⭐ <strong>${esc(b.titulo)}</strong>: ${esc(b.assunto)}
                    </li>`).join('')}
                </ul>
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  if (plano.agenda.length > SEMtoShow) {
    weeksHtml += `<p style="font-size:11px;color:#6B89FF;text-align:center;margin:4px 0 0;padding:8px;">
      + ${plano.agenda.length - SEMtoShow} semana${plano.agenda.length - SEMtoShow > 1 ? 's' : ''} adicionais no seu plano completo (${plano.semanas} no total)
    </p>`;
  }

  /* ── WhatsApp CTA ── */
  const waMsg = encodeURIComponent(`Olá Professor Leão! Gerei meu plano de estudos para ${dados.concurso}${dados.nome ? ` (sou ${dados.nome})` : ''} e quero começar!`);

  return `
    <div style="font-family:'Open Sans',sans-serif;color:#fff;line-height:1.5;padding:4px 0;">

      <!-- Banner resumo -->
      <div style="background:linear-gradient(135deg,#152545,#1a3a7a);border:1px solid rgba(74,108,247,0.3);border-top:3px solid #4A6CF7;border-radius:12px;padding:18px 22px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
          <div>
            <p style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6B89FF;margin:0 0 3px;">📋 Plano Pomodoro Personalizado</p>
            <h4 style="font-family:'Montserrat',sans-serif;font-size:16px;font-weight:900;margin:0 0 3px;">${esc(plano.intensidade)} — ${esc(plano.edital.nome)}</h4>
            ${dados.nome ? `<p style="font-size:12px;color:#a8b4d0;margin:0;">Para <strong style="color:#fff">${esc(dados.nome)}</strong></p>` : ''}
          </div>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            ${plano.diasRest !== null ? `<div style="text-align:center;"><div style="font-size:20px;font-weight:800;color:#fbbf24;font-family:'Montserrat',sans-serif;line-height:1;">${plano.diasRest}</div><div style="font-size:9px;color:#8892B4;text-transform:uppercase;margin-top:2px;">dias</div></div>` : ''}
            <div style="text-align:center;"><div style="font-size:20px;font-weight:800;color:#60a5fa;font-family:'Montserrat',sans-serif;line-height:1;">${plano.cargaSem}h</div><div style="font-size:9px;color:#8892B4;text-transform:uppercase;margin-top:2px;">por semana</div></div>
            <div style="text-align:center;"><div style="font-size:20px;font-weight:800;color:#a78bfa;font-family:'Montserrat',sans-serif;line-height:1;">${plano.totalPoms}</div><div style="font-size:9px;color:#8892B4;text-transform:uppercase;margin-top:2px;">pomodoros</div></div>
            <div style="text-align:center;"><div style="font-size:20px;font-weight:800;color:#34d399;font-family:'Montserrat',sans-serif;line-height:1;">${plano.semanas}</div><div style="font-size:9px;color:#8892B4;text-transform:uppercase;margin-top:2px;">semanas</div></div>
          </div>
        </div>
        ${dados.concurso !== 'Matemática Básica' && plano.edital.estrategia ? `
        <p style="font-size:11px;color:#8892B4;margin:10px 0 0;padding-top:10px;border-top:1px solid rgba(255,255,255,0.06);">💡 <em>${esc(plano.edital.estrategia)}</em></p>` : ''}
      </div>

      <!-- Grid: distribuição + alertas -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
        <div style="background:#0F1E38;border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px;">
          <strong style="font-size:11px;font-family:'Montserrat',sans-serif;display:block;margin-bottom:10px;color:#fff;">📊 Distribuição por peso</strong>
          ${distribuicao}
        </div>
        <div style="background:#0F1E38;border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px;">
          <strong style="font-size:11px;font-family:'Montserrat',sans-serif;display:block;margin-bottom:8px;color:#fff;">⚡ Alertas táticos</strong>
          <ul style="padding:0;margin:0;list-style:none;">
            ${plano.alertas.map(a => `<li style="font-size:11px;color:#8892B4;margin-bottom:5px;padding-left:12px;position:relative;"><span style="position:absolute;left:0;color:#4A6CF7">›</span>${esc(a)}</li>`).join('')}
          </ul>
          ${difs.length ? `
          <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06);">
            <strong style="font-size:10px;color:#fbbf24;display:block;margin-bottom:4px;">⚠️ Prioridade máxima</strong>
            ${difs.slice(0, 3).map(d => `<span style="display:inline-block;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.25);border-radius:20px;padding:2px 8px;font-size:10px;color:#fbbf24;margin:2px;">${esc(d)}</span>`).join('')}
          </div>` : ''}
        </div>
      </div>

      <!-- Cronograma -->
      <div style="background:#0F1E38;border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px;margin-bottom:14px;">
        <strong style="font-size:11px;font-family:'Montserrat',sans-serif;display:block;margin-bottom:10px;color:#fff;">📅 Cronograma Pomodoro — primeiras ${SEMtoShow} semanas</strong>
        ${weeksHtml}
      </div>

      <!-- Protocolo de revisões -->
      <div style="background:#0F1E38;border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px;margin-bottom:14px;">
        <strong style="font-size:11px;font-family:'Montserrat',sans-serif;display:block;margin-bottom:8px;color:#fff;">🔄 Protocolo de revisões</strong>
        <ul style="padding:0;margin:0;list-style:none;">
          ${plano.revisoes.map(r => `<li style="font-size:11px;color:#8892B4;margin-bottom:5px;padding-left:12px;position:relative;"><span style="position:absolute;left:0;color:#4A6CF7">›</span>${esc(r)}</li>`).join('')}
        </ul>
      </div>

      <!-- CTA WhatsApp -->
      <div style="background:linear-gradient(135deg,rgba(74,108,247,0.12),rgba(107,137,255,0.06));border:1px solid rgba(74,108,247,0.25);border-radius:10px;padding:14px;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;">
        <div>
          <strong style="font-family:'Montserrat',sans-serif;font-size:12px;display:block;margin-bottom:3px;">💡 Dica do Professor Leão</strong>
          <p style="font-size:11px;color:#8892B4;margin:0;">A execução consistente supera qualquer estratégia perfeita. Foco e disciplina!</p>
        </div>
        <a href="https://wa.me/5577999229281?text=${waMsg}" target="_blank" rel="noopener"
          style="background:#22c55e;color:#fff;padding:9px 16px;border-radius:8px;font-family:'Montserrat',sans-serif;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;gap:6px;">
          Falar com o Professor →
        </a>
      </div>

    </div>`;
}

/* ============================================================
   FORMULÁRIO — INIT
   ============================================================ */
(function initPubPlano() {
  /* skip if the host page manages the form itself (e.g. minha-area.html) */
  if (window._planoManagedExternally) return;
  const pubConcurso   = document.getElementById('pubConcurso');
  const pubDataProva  = document.getElementById('pubDataProva');
  const pubHorasDia   = document.getElementById('pubHorasDia');
  const pubDiasSemana = document.getElementById('pubDiasSemana');
  const pubDifBox     = document.getElementById('pubDifBox');
  const pubFacBox     = document.getElementById('pubFacBox');
  const pubPlanForm   = document.getElementById('pubPlanForm');
  if (!pubPlanForm) return;

  /* preenche checkboxes com as matérias do edital */
  function preencherMaterias(concurso) {
    const edital = EDITAIS_PL[concurso] || EDITAIS_PL['CFO PMBA'];
    const lista  = Object.keys(edital.pesos);

    function criarCbs(box, name) {
      if (!box) return;
      box.innerHTML = lista.map((m, i) => `
        <label class="pub-cb-label" for="${name}-${i}">
          <input type="checkbox" id="${name}-${i}" name="${name}" value="${m}" />
          <span>${m}</span>
        </label>`).join('');
    }

    criarCbs(pubDifBox, 'pubDificuldade');
    criarCbs(pubFacBox, 'pubFacilidade');

    /* destaque nos switch-buttons */
    document.querySelectorAll('.switch-pub').forEach(b =>
      b.classList.toggle('active', b.dataset.val === concurso));
  }

  /* atualiza o preview de missão em tempo real */
  function atualizarPreview() {
    const h    = parseInt((pubHorasDia   || {}).value) || 0;
    const d    = parseInt((pubDiasSemana || {}).value) || 0;
    const date = (pubDataProva || {}).value || '';

    if (date) {
      const hoje  = new Date(); hoje.setHours(0, 0, 0, 0);
      const prova = new Date(date + 'T00:00:00');
      const diff  = Math.max(0, Math.ceil((prova - hoje) / 86400000));
      document.getElementById('pubDaysLeft').textContent = diff;
      document.getElementById('pubMode').textContent =
        diff <= 15 ? '🔥 Sprint final' :
        diff <= 30 ? '⚡ Reta final'   :
        diff <= 90 ? '⚡ Intensivo'    : '📅 Base';
    } else {
      document.getElementById('pubDaysLeft').textContent = '--';
      document.getElementById('pubMode').textContent     = '--';
    }

    const weekly = h * d;
    document.getElementById('pubWeeklyLoad').textContent = weekly ? weekly + 'h' : '--';

    if (h && d) {
      const ciclos = Math.floor((h * 60) / 30);
      document.getElementById('pubPomodoroText').textContent =
        `${h}h/dia × ${d} dias = ${weekly}h/semana · ${ciclos} ciclos Pomodoro/dia (25min foco + 5min pausa).`;
    } else {
      document.getElementById('pubPomodoroText').textContent =
        'Preencha os dados para ver a estratégia de estudo.';
    }
  }

  /* salva lead no localStorage (mesmos campos que minha-area.html lê) */
  function salvarLeadLocal(dados) {
    try {
      const leads = JSON.parse(localStorage.getItem('pl_leads') || '[]');
      leads.push({ ...dados, criadoEm: new Date().toISOString() });
      localStorage.setItem('pl_leads', JSON.stringify(leads));
    } catch(err) { console.warn('Erro ao salvar lead:', err); }
  }

  /* eventos */
  if (pubConcurso) {
    pubConcurso.addEventListener('change', () => {
      if (pubConcurso.value) preencherMaterias(pubConcurso.value);
      atualizarPreview();
    });
  }

  document.querySelectorAll('.switch-pub').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      if (pubConcurso) pubConcurso.value = val;
      preencherMaterias(val);
      atualizarPreview();
    });
  });

  [pubDataProva, pubHorasDia, pubDiasSemana].forEach(el => {
    if (!el) return;
    el.addEventListener('input',  atualizarPreview);
    el.addEventListener('change', atualizarPreview);
  });

  /* submit */
  pubPlanForm.addEventListener('submit', e => {
    e.preventDefault();

    const concurso   = (pubConcurso || {}).value || 'CFO PMBA';
    const nome       = (document.getElementById('pubNome')         || {}).value || '';
    const email      = (document.getElementById('pubEmail')        || {}).value || '';
    const telefone   = (document.getElementById('pubTelefone')     || {}).value || '';
    const dataProva  = (pubDataProva                                || {}).value || '';
    const horasDia   = parseInt((pubHorasDia   || {}).value) || 2;
    const diasSemana = parseInt((pubDiasSemana || {}).value) || 5;
    const nivel      = (document.getElementById('pubNivel')        || {}).value || 'intermediario';
    const trabalha   = (document.getElementById('pubTrabalha')     || {}).value || '';
    const estudou    = (document.getElementById('pubEstudouAntes') || {}).value || '';
    const notaAlvo   = (document.getElementById('pubNotaAlvo')     || {}).value || '';
    const obs        = (document.getElementById('pubObservacoes')  || {}).value || '';

    const diffs = [...document.querySelectorAll('[name=pubDificuldade]:checked')].map(c => c.value);
    const facs  = [...document.querySelectorAll('[name=pubFacilidade]:checked')].map(c => c.value);

    /* validação mínima */
    if (!concurso) { alert('Por favor, selecione o concurso.'); return; }
    if (!nome.trim()) { alert('Por favor, informe seu nome.'); return; }
    if (!email.trim()) { alert('Por favor, informe seu e-mail.'); return; }
    if (!dataProva) { alert('Por favor, informe a data da prova.'); return; }

    const btn = pubPlanForm.querySelector('[type=submit]');
    if (btn) { btn.disabled = true; btn.textContent = '⏳ Gerando plano...'; }

    try {
      /* objeto de dados — campos compatíveis com minha-area.html */
      const dados = {
        concurso, nome, email, telefone, dataProva,
        horasDia, diasSemana, nivel, trabalha, estudouAntes: estudou,
        notaAlvo, obs, diffs, facs,
      };

      salvarLeadLocal(dados);

      const plano = gerarPlanoCompleto(dados);

      const result = document.getElementById('pubPlanResult');
      if (result) {
        result.innerHTML = renderPlanoHTML(dados, plano);
        result.classList.add('show');
        setTimeout(() => result.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      }
    } catch(err) {
      console.error('Erro ao gerar plano:', err);
      const result = document.getElementById('pubPlanResult');
      if (result) {
        result.innerHTML = `<p style="color:#ef4444;padding:16px;font-size:13px;">Erro ao gerar o plano. Verifique os campos e tente novamente.</p>`;
        result.classList.add('show');
      }
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '🚀 Gerar meu plano de estudos'; }
    }
  });

  /* inicializa */
  preencherMaterias('CFO PMBA');
  atualizarPreview();
})();
