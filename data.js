/* ============================================================
   PROFESSOR LEÃO – CATÁLOGO DE CURSOS E AULAS
   data.js — incluído em minha-area.html, curso.html e aula.html
   ============================================================ */

'use strict';

const PL_CATALOG = {

  /* ── Cursos ────────────────────────────────────────────── */
  cursos: {

    'cfo-pmba': {
      id: 'cfo-pmba',
      nome: 'CFO PMBA',
      subtitulo: 'Curso de Formação de Oficiais',
      descricao: 'Preparação completa para o CFO PMBA (banca UNEB) — do básico ao avançado, com foco nas matérias de maior peso.',
      icon: '🎖️',
      cor: '#fcd34d',
      corBg: 'rgba(252,211,77,0.12)',
      aulas: [
        {
          id: 'cfo-01', numero: 1,
          titulo: 'Conjuntos Numéricos',
          descricao: 'Naturais, Inteiros, Racionais, Irracionais, Reais e Complexos.',
          duracao: '90min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-01-conjuntos-numericos.pdf',
            jogo:     'jogos/conjuntos-numericos.html',
            lista:    'assets/listas/cfo-sd/lista-conjuntos-numericos.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-02', numero: 2,
          titulo: 'Números Racionais e Frações',
          descricao: 'Operações com frações, dízimas periódicas e números decimais.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-02-numeros-racionais.pdf',
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-numeros-racionais.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-03', numero: 3,
          titulo: 'Dízimas, Potenciação e Radiciação',
          descricao: 'Dízimas periódicas, potências e raízes — fundamentos do CFO.',
          duracao: '75min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-03-dizimas-potenciacao.pdf',
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'cfo-04', numero: 4,
          titulo: 'MMC e MDC',
          descricao: 'Mínimo Múltiplo Comum e Máximo Divisor Comum com aplicações.',
          duracao: '70min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-04-mmc-mdc.pdf',
            jogo:     'jogos/multiplos-divisores.html',
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'cfo-05', numero: 5,
          titulo: 'Números Irracionais e Complexos',
          descricao: 'Irracionais (π, √2) e introdução aos números complexos.',
          duracao: '85min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-05-irracionais-complexos.pdf',
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'cfo-06', numero: 6,
          titulo: 'Teoria dos Conjuntos',
          descricao: 'União, intersecção, diferença e complementar — muito cobrado na UNEB.',
          duracao: '90min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     'jogos/conjuntos-operacoes.html',
            lista:    'assets/listas/cfo-sd/lista-teoria-conjuntos.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-07', numero: 7,
          titulo: 'Razão, Proporção e Porcentagem',
          descricao: 'Razão, proporção, regra de três e porcentagem aplicada.',
          duracao: '95min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-razao-proporcao-porcentagem.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-08', numero: 8,
          titulo: 'Sequências, PA e PG',
          descricao: 'Progressões Aritméticas e Geométricas — padrão de questões UNEB.',
          duracao: '100min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-06-pa.pdf',
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-juros-pa-pg.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-09', numero: 9,
          titulo: 'Funções do 1° e 2° Graus',
          descricao: 'Funções lineares, quadráticas, exponenciais e logarítmicas.',
          duracao: '110min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-funcoes-exp-log.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-10', numero: 10,
          titulo: 'Geometria Plana',
          descricao: 'Triângulos, quadriláteros, circunferência e cálculo de áreas.',
          duracao: '120min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-geometria-plana.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-11', numero: 11,
          titulo: 'Geometria Espacial',
          descricao: 'Prismas, pirâmides, cilindros, cones e esferas.',
          duracao: '110min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-geometria-espacial.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-12', numero: 12,
          titulo: 'Geometria Analítica',
          descricao: 'Coordenadas, retas, circunferência e cônicas no plano.',
          duracao: '120min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-geometria-analitica.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-13', numero: 13,
          titulo: 'Análise Combinatória e Probabilidade',
          descricao: 'Arranjos, combinações, permutações e probabilidade.',
          duracao: '105min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-combinatoria-probabilidade.pdf',
            resolucao: null
          }
        },
        {
          id: 'cfo-14', numero: 14,
          titulo: 'Matrizes e Determinantes',
          descricao: 'Operações com matrizes, determinantes e sistemas lineares.',
          duracao: '115min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        }
      ]
    },

    'sd-pmba': {
      id: 'sd-pmba',
      nome: 'SD PMBA',
      subtitulo: 'Soldado da Polícia Militar da Bahia',
      descricao: 'Preparação focada no edital do Soldado PMBA — matérias mais cobradas com abordagem objetiva.',
      icon: '🚔',
      cor: '#60a5fa',
      corBg: 'rgba(96,165,250,0.12)',
      aulas: [
        {
          id: 'sd-01', numero: 1,
          titulo: 'Conjuntos Numéricos',
          descricao: 'Naturais, inteiros, racionais — base do SD PMBA.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-01-conjuntos-numericos.pdf',
            jogo:     'jogos/conjuntos-numericos.html',
            lista:    'assets/listas/cfo-sd/lista-conjuntos-numericos.pdf',
            resolucao: null
          }
        },
        {
          id: 'sd-02', numero: 2,
          titulo: 'MMC, MDC e Múltiplos',
          descricao: 'Múltiplos, divisores, MMC e MDC — muito cobrado no SD.',
          duracao: '70min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-04-mmc-mdc.pdf',
            jogo:     'jogos/multiplos-divisores.html',
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'sd-03', numero: 3,
          titulo: 'Números Racionais e Frações',
          descricao: 'Frações, operações e representação decimal.',
          duracao: '75min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-02-numeros-racionais.pdf',
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-numeros-racionais.pdf',
            resolucao: null
          }
        },
        {
          id: 'sd-04', numero: 4,
          titulo: 'Razão, Proporção e Regra de Três',
          descricao: 'O tópico mais cobrado no SD PMBA — domine para garantir pontos.',
          duracao: '90min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-razao-proporcao.pdf',
            resolucao: null
          }
        },
        {
          id: 'sd-05', numero: 5,
          titulo: 'Porcentagem',
          descricao: 'Porcentagem simples, composta e problemas aplicados.',
          duracao: '85min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-razao-proporcao-porcentagem.pdf',
            resolucao: null
          }
        },
        {
          id: 'sd-06', numero: 6,
          titulo: 'Teoria dos Conjuntos',
          descricao: 'União, intersecção e diferença — muito cobrado no SD.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     'jogos/conjuntos-operacoes.html',
            lista:    'assets/listas/cfo-sd/lista-teoria-conjuntos.pdf',
            resolucao: null
          }
        },
        {
          id: 'sd-07', numero: 7,
          titulo: 'Juros Simples e Compostos',
          descricao: 'Matemática financeira básica cobrada no SD PMBA.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-juros-pa-pg.pdf',
            resolucao: null
          }
        },
        {
          id: 'sd-08', numero: 8,
          titulo: 'Geometria Plana',
          descricao: 'Áreas e perímetros — presença garantida no SD PMBA.',
          duracao: '90min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-geometria-plana.pdf',
            resolucao: null
          }
        }
      ]
    },

    'mat-basica': {
      id: 'mat-basica',
      nome: 'Matemática Básica',
      subtitulo: 'Fundamentos para Concursos',
      descricao: 'Construa uma base sólida em matemática — do zero ao concurso, sem pular etapas.',
      icon: '📐',
      cor: '#34d399',
      corBg: 'rgba(52,211,153,0.12)',
      aulas: [
        {
          id: 'mb-01', numero: 1,
          titulo: 'Conjuntos Numéricos',
          descricao: 'Entenda os conjuntos numéricos e suas propriedades fundamentais.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-01-conjuntos-numericos.pdf',
            jogo:     'jogos/conjuntos-numericos.html',
            lista:    'assets/listas/cfo-sd/lista-conjuntos-numericos.pdf',
            resolucao: null
          }
        },
        {
          id: 'mb-02', numero: 2,
          titulo: 'MMC e MDC',
          descricao: 'Múltiplos, divisores, mínimo múltiplo e máximo divisor.',
          duracao: '70min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-04-mmc-mdc.pdf',
            jogo:     'jogos/multiplos-divisores.html',
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'mb-03', numero: 3,
          titulo: 'Frações e Números Decimais',
          descricao: 'Operações com frações, decimais e conversões essenciais.',
          duracao: '75min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-02-numeros-racionais.pdf',
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-numeros-racionais.pdf',
            resolucao: null
          }
        },
        {
          id: 'mb-04', numero: 4,
          titulo: 'Potenciação e Radiciação',
          descricao: 'Potências, raízes e dízimas periódicas.',
          duracao: '70min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-03-dizimas-potenciacao.pdf',
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'mb-05', numero: 5,
          titulo: 'Razão, Proporção e Regra de Três',
          descricao: 'Conceito central de toda matemática aplicada a concursos.',
          duracao: '85min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-razao-proporcao.pdf',
            resolucao: null
          }
        },
        {
          id: 'mb-06', numero: 6,
          titulo: 'PA e PG',
          descricao: 'Progressões aritméticas e geométricas — bases sólidas.',
          duracao: '90min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/cfo-sd/aula-06-pa.pdf',
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-juros-pa-pg.pdf',
            resolucao: null
          }
        },
        {
          id: 'mb-07', numero: 7,
          titulo: 'Teoria dos Conjuntos',
          descricao: 'União, intersecção e diferença — fundamentos da lógica matemática.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     'jogos/conjuntos-operacoes.html',
            lista:    'assets/listas/cfo-sd/lista-teoria-conjuntos.pdf',
            resolucao: null
          }
        }
      ]
    },

    'correios': {
      id: 'correios',
      nome: 'Correios',
      subtitulo: 'Empresa Brasileira de Correios e Telégrafos',
      descricao: 'Preparação para o concurso dos Correios — foco em matemática e raciocínio lógico.',
      icon: '📬',
      cor: '#fb923c',
      corBg: 'rgba(251,146,60,0.12)',
      aulas: [
        {
          id: 'cr-01', numero: 1,
          titulo: 'Inteiros, Múltiplos e Divisores',
          descricao: 'Números inteiros, múltiplos e divisores — base do edital dos Correios.',
          duracao: '75min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/correios/aula-01-inteiros-multiplos.pdf',
            jogo:     'jogos/multiplos-divisores.html',
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'cr-02', numero: 2,
          titulo: 'Números Racionais',
          descricao: 'Frações e operações com números racionais.',
          duracao: '70min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/correios/aula-02-numeros-racionais.pdf',
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'cr-03', numero: 3,
          titulo: 'Porcentagem e Regra de Três',
          descricao: 'Porcentagem e regra de três — presença garantida na prova dos Correios.',
          duracao: '80min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    'assets/listas/cfo-sd/lista-razao-proporcao-porcentagem.pdf',
            resolucao: null
          }
        },
        {
          id: 'cr-04', numero: 4,
          titulo: 'Raciocínio Lógico',
          descricao: 'Lógica proposicional e argumentação — específico dos Correios.',
          duracao: '90min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'cr-05', numero: 5,
          titulo: 'Geometria e Estatística',
          descricao: 'Geometria básica e interpretação de gráficos e tabelas.',
          duracao: '85min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     null,
            lista:    null,
            resolucao: null
          }
        }
      ]
    }

  }, // end cursos

  /* ── Definições de atividades ──────────────────────────── */
  ATIVIDADES: [
    { key: 'video',     icon: '🎥', label: 'Vídeo da Aula',         cor: '#60a5fa' },
    { key: 'pdf',       icon: '📄', label: 'PDF da Aula',            cor: '#34d399' },
    { key: 'jogo',      icon: '🎮', label: 'Jogo Interativo',        cor: '#a78bfa' },
    { key: 'lista',     icon: '📋', label: 'Lista de Questões',      cor: '#fb923c' },
    { key: 'resolucao', icon: '✏️', label: 'Resolução de Questões',  cor: '#f472b6' }
  ],

  /* ── Helpers ───────────────────────────────────────────── */
  getCurso(id) {
    return this.cursos[id] || null;
  },

  getAula(cursoId, aulaId) {
    const c = this.getCurso(cursoId);
    return c ? (c.aulas.find(a => a.id === aulaId) || null) : null;
  },

  getAulaIndex(cursoId, aulaId) {
    const c = this.getCurso(cursoId);
    return c ? c.aulas.findIndex(a => a.id === aulaId) : -1;
  },

  /* Atividades disponíveis (não-null) de uma aula */
  atividadesDisponiveis(materiais) {
    return this.ATIVIDADES.filter(a => materiais[a.key] !== null);
  },

  /* Quantas atividades disponíveis foram concluídas */
  contarConcluidas(materiais, progAula = {}) {
    return this.ATIVIDADES.filter(a => materiais[a.key] !== null && progAula[a.key]).length;
  },

  /* Aula está completa? */
  aulaCompleta(materiais, progAula = {}) {
    const disponiveis = this.ATIVIDADES.filter(a => materiais[a.key] !== null);
    if (disponiveis.length === 0) return true; // sem material = auto-completa
    return disponiveis.every(a => progAula[a.key]);
  }

};

/* ──────────────────────────────────────────
   OVERRIDES DO ADMIN (localStorage)
   O painel admin salva em 'pl_catalog_custom'.
   Aplicamos aqui APÓS definir o catálogo base,
   para que todos os métodos (getCurso, etc.)
   continuem funcionando com os dados editados.
────────────────────────────────────────── */
(function _applyAdminOverrides() {
  try {
    const raw = localStorage.getItem('pl_catalog_custom');
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && saved.cursos) {
      PL_CATALOG.cursos = saved.cursos;
    }
    if (saved && Array.isArray(saved.ATIVIDADES)) {
      PL_CATALOG.ATIVIDADES = saved.ATIVIDADES;
    }
  } catch (e) {
    console.warn('[PL] Erro ao aplicar overrides do admin:', e);
  }
})();
