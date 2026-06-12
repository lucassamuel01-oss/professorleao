/* ============================================================
   PROFESSOR LEÃO – CATÁLOGO DE CURSOS E AULAS
   data.js — incluído em minha-area.html, curso.html e aula.html
   Atualizado conforme editais:
     SAEB/05/2022 (FCC)  → SD PMBA / SD CBMBA
     CFOPM/2024  (UNEB)  → CFO PMBA / CFO CBMBA
   Metodologia Pomodoro: 25 min por vídeo-aula
   ============================================================ */

'use strict';

/* ── atalhos de path para não repetir strings longas ─────── */
const _V  = '_fontes/cfo-sd/videos/aulas-cfsd/';
const _VG = '_fontes/cfo-sd/videos/aulas-gravadas/';
const _VQ = '_fontes/cfo-sd/videos/questoes/';
const _AP = 'assets/aulas/cfo-sd/';
const _LP = 'assets/listas/cfo-sd/';

/* ── bloco de matemática reutilizado em todos os cursos ────
   Recebe um prefixo de ID (ex: 'sdpm', 'sdbm', 'cfopm', 'cfobm')
   e um offset de numeração (ex: 5 → aula #6 … #29)
   Retorna array de 24 aulas (SD) ou 26/27 (CFO com juros+estat / CFO-BM com lógica)
─────────────────────────────────────────────────────────── */
function _matSD(pfx, offset) {
  const n = i => offset + i;
  return [
    {
      id: `${pfx}-mat-01`, numero: n(1),
      titulo: 'Conjuntos Numéricos: N, Z, Q e R',
      descricao: 'Naturais, Inteiros, Racionais e Reais — propriedades, operações e representação na reta numérica.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-01-conjuntos-numericos.mp4',
        pdf:      _AP + 'aula-01-conjuntos-numericos.pdf',
        jogo:     'jogos/conjuntos-numericos.html',
        lista:    _LP + 'lista-conjuntos-numericos.pdf',
        resolucao: _VQ + 'questoes-conjuntos-numericos.mp4'
      }
    },
    {
      id: `${pfx}-mat-02`, numero: n(2),
      titulo: 'Números Irracionais, Reais e Complexos',
      descricao: 'Irracionais (√2, π), completando os Reais e introdução aos Complexos (a + bi).',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-04-irracionais-reais.mp4',
        pdf:      _AP + 'aula-05-irracionais-complexos.pdf',
        jogo:     null,
        lista:    null,
        resolucao: null
      }
    },
    {
      id: `${pfx}-mat-03`, numero: n(3),
      titulo: 'Progressão Aritmética (PA)',
      descricao: 'Termo geral, soma dos termos e propriedades das PAs — muito cobrado em concursos militares.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-13-sequencias-pa.mp4',
        pdf:      _AP + 'aula-06-pa.pdf',
        jogo:     'jogos/pa-pg.html',
        lista:    _LP + 'lista-juros-pa-pg.pdf',
        resolucao: _VQ + 'questoes-juros-pa-pg.mp4'
      }
    },
    {
      id: `${pfx}-mat-04`, numero: n(4),
      titulo: 'Progressão Geométrica (PG)',
      descricao: 'Razão, termo geral, soma de termos finitos e PG infinita decrescente.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-14-pg.mp4',
        pdf:      _AP + 'aula-07-pg.pdf',
        jogo:     'jogos/pa-pg.html',
        lista:    _LP + 'lista-juros-pa-pg.pdf',
        resolucao: _VQ + 'questoes-juros-pa-pg.mp4'
      }
    },
    {
      id: `${pfx}-mat-05`, numero: n(5),
      titulo: 'Números Primos, MMC e MDC',
      descricao: 'Crivo de Eratóstenes, fatoração, mínimo múltiplo comum e máximo divisor comum.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-02-numeros-primos-mmc-mdc.mp4',
        pdf:      _AP + 'aula-04-mmc-mdc.pdf',
        jogo:     'jogos/multiplos-divisores.html',
        lista:    _LP + 'lista-matematica-basica.pdf',
        resolucao: null
      }
    },
    {
      id: `${pfx}-mat-06`, numero: n(6),
      titulo: 'Números Racionais e Frações',
      descricao: 'Operações com frações, dízimas periódicas e comparação de frações.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-03-numeros-racionais.mp4',
        pdf:      _AP + 'aula-02-numeros-racionais.pdf',
        jogo:     'jogos/fracoes.html',
        lista:    _LP + 'lista-numeros-racionais.pdf',
        resolucao: _VQ + 'questoes-racionais.mp4'
      }
    },
    {
      id: `${pfx}-mat-07`, numero: n(7),
      titulo: 'Potenciação e Radiciação',
      descricao: 'Propriedades das potências, raízes e simplificação de radicais.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-11-potenciacao.mp4',
        pdf:      _AP + 'aula-03-dizimas-potenciacao.pdf',
        jogo:     'jogos/potenciacao.html',
        lista:    _LP + 'lista-funcoes-exp-log.pdf',
        resolucao: null
      }
    },
    {
      id: `${pfx}-mat-08`, numero: n(8),
      titulo: 'Teoria dos Conjuntos — Parte 1',
      descricao: 'Notação, pertinência, subconjuntos, união e intersecção.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-06-teoria-conjuntos-p1.mp4',
        pdf:      null,
        jogo:     'jogos/conjuntos-operacoes.html',
        lista:    _LP + 'lista-teoria-conjuntos.pdf',
        resolucao: _VQ + 'questoes-teoria-conjuntos.mp4'
      }
    },
    {
      id: `${pfx}-mat-09`, numero: n(9),
      titulo: 'Teoria dos Conjuntos — Parte 2',
      descricao: 'Diferença, complementar, diagramas de Venn e problemas de contagem.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-07-teoria-conjuntos-p2.mp4',
        pdf:      null,
        jogo:     'jogos/conjuntos-operacoes.html',
        lista:    _LP + 'lista-teoria-conjuntos.pdf',
        resolucao: _VQ + 'questoes-teoria-conjuntos.mp4'
      }
    },
    {
      id: `${pfx}-mat-10`, numero: n(10),
      titulo: 'Álgebra: Expressões e Polinômios',
      descricao: 'Produtos notáveis, fatoração algébrica, MDC e MMC de polinômios.',
      duracao: '25min',
      materiais: {
        video:    _VG + 'aula-23-algebra-polinomios.mp4',
        pdf:      null,
        jogo:     null,
        lista:    null,
        resolucao: null
      }
    },
    {
      id: `${pfx}-mat-11`, numero: n(11),
      titulo: 'Funções do 1° Grau',
      descricao: 'Função afim, gráfico, coeficiente angular, zeros e problemas aplicados.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-15-funcao-1grau.mp4',
        pdf:      null,
        jogo:     'jogos/funcoes.html',
        lista:    _LP + 'lista-funcoes-exp-log.pdf',
        resolucao: _VQ + 'questoes-funcoes-exp-log.mp4'
      }
    },
    {
      id: `${pfx}-mat-12`, numero: n(12),
      titulo: 'Funções do 2° Grau',
      descricao: 'Parábola, vértice, discriminante, zeros e máximo/mínimo.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-16-funcao-2grau.mp4',
        pdf:      null,
        jogo:     'jogos/funcoes.html',
        lista:    _LP + 'lista-funcoes-exp-log.pdf',
        resolucao: _VQ + 'questoes-funcoes-exp-log.mp4'
      }
    },
    {
      id: `${pfx}-mat-13`, numero: n(13),
      titulo: 'Funções Exponencial e Logarítmica',
      descricao: 'Propriedades dos logaritmos, função exponencial e equações logarítmicas.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-18-funcoes-exp-log.mp4',
        pdf:      null,
        jogo:     null,
        lista:    _LP + 'lista-funcoes-exp-log.pdf',
        resolucao: _VQ + 'questoes-funcoes-exp-log.mp4'
      }
    },
    {
      id: `${pfx}-mat-14`, numero: n(14),
      titulo: 'Razão, Proporção e Regra de Três',
      descricao: 'Grandezas proporcionais, regra de três simples e composta.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-08-razao-proporcao.mp4',
        pdf:      null,
        jogo:     'jogos/regra-de-tres.html',
        lista:    _LP + 'lista-razao-proporcao.pdf',
        resolucao: _VQ + 'questoes-razao-proporcao.mp4'
      }
    },
    {
      id: `${pfx}-mat-15`, numero: n(15),
      titulo: 'Porcentagem',
      descricao: 'Cálculo percentual, acréscimos, descontos e problemas de concurso.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-10-porcentagem.mp4',
        pdf:      null,
        jogo:     'jogos/porcentagem.html',
        lista:    _LP + 'lista-razao-proporcao-porcentagem.pdf',
        resolucao: null
      }
    },
    {
      id: `${pfx}-mat-16`, numero: n(16),
      titulo: 'Sistemas Lineares, Matrizes e Determinantes',
      descricao: 'Operações com matrizes, regra de Cramer e sistemas 2×2 e 3×3.',
      duracao: '25min',
      materiais: {
        video:    _VG + 'aula-22-matrizes-determinantes.mp4',
        pdf:      null,
        jogo:     null,
        lista:    null,
        resolucao: null
      }
    },
    {
      id: `${pfx}-mat-17`, numero: n(17),
      titulo: 'Análise Combinatória',
      descricao: 'Princípio fundamental da contagem, arranjos, permutações e combinações.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-19-combinatoria.mp4',
        pdf:      null,
        jogo:     'jogos/combinatoria.html',
        lista:    _LP + 'lista-combinatoria-probabilidade.pdf',
        resolucao: _VQ + 'questoes-combinatoria.mp4'
      }
    },
    {
      id: `${pfx}-mat-18`, numero: n(18),
      titulo: 'Probabilidade e Binômio de Newton',
      descricao: 'Espaço amostral, eventos, probabilidade condicional e Binômio de Newton.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-20-probabilidade.mp4',
        pdf:      null,
        jogo:     'jogos/combinatoria.html',
        lista:    _LP + 'lista-combinatoria-probabilidade.pdf',
        resolucao: _VQ + 'questoes-combinatoria.mp4'
      }
    },
    {
      id: `${pfx}-mat-19`, numero: n(19),
      titulo: 'Geometria Plana: Triângulos e Conceitos',
      descricao: 'Ângulos, triângulos, semelhança, congruência, Pitágoras e áreas.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-24-geom-plana-triangulo.mp4',
        pdf:      null,
        jogo:     'jogos/geometria-plana.html',
        lista:    _LP + 'lista-geometria-plana.pdf',
        resolucao: _VQ + 'questoes-geometria-plana-v1.mp4'
      }
    },
    {
      id: `${pfx}-mat-20`, numero: n(20),
      titulo: 'Geometria Plana: Quadriláteros, Círculo e Thales',
      descricao: 'Paralelogramos, trapézios, círculo, arco, Teorema de Thales e áreas.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-25-geom-plana-quadrilateros.mp4',
        pdf:      null,
        jogo:     'jogos/geometria-plana.html',
        lista:    _LP + 'lista-geometria-plana-2.pdf',
        resolucao: _VQ + 'questoes-geometria-plana-v2.mp4'
      }
    },
    {
      id: `${pfx}-mat-21`, numero: n(21),
      titulo: 'Geometria Espacial: Prismas e Pirâmides',
      descricao: 'Volume e área de prismas, cubos, paralelepípedos e pirâmides.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-27-geom-espacial-intro.mp4',
        pdf:      null,
        jogo:     null,
        lista:    _LP + 'lista-geometria-espacial.pdf',
        resolucao: _VQ + 'questoes-geometria-espacial.mp4'
      }
    },
    {
      id: `${pfx}-mat-22`, numero: n(22),
      titulo: 'Geometria Espacial: Cilindro, Cone e Esfera',
      descricao: 'Área lateral, total e volume de cilindros, cones e esferas.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-29-geom-espacial-corpos.mp4',
        pdf:      null,
        jogo:     null,
        lista:    _LP + 'lista-geometria-espacial.pdf',
        resolucao: _VQ + 'questoes-geometria-espacial.mp4'
      }
    },
    {
      id: `${pfx}-mat-23`, numero: n(23),
      titulo: 'Geometria Analítica',
      descricao: 'Distância entre pontos, equação da reta, circunferência e posições relativas.',
      duracao: '25min',
      materiais: {
        video:    _V  + 'aula-30-geometria-analitica.mp4',
        pdf:      null,
        jogo:     null,
        lista:    _LP + 'lista-geometria-analitica.pdf',
        resolucao: _VQ + 'questoes-geometria-analitica.mp4'
      }
    },
    {
      id: `${pfx}-mat-24`, numero: n(24),
      titulo: 'Trigonometria',
      descricao: 'Razões trigonométricas, Lei dos Senos e Cossenos, identidades e equações.',
      duracao: '25min',
      materiais: {
        video:    _VG + 'aula-21-geom-analitica-trig.mp4',
        pdf:      null,
        jogo:     null,
        lista:    _LP + 'lista-geometria-analitica.pdf',
        resolucao: _VQ + 'questoes-geometria-analitica.mp4'
      }
    }
  ];
}

/* aulas extra somente para cursos CFO (juros + estatística) */
function _matCFOExtra(pfx, offset25, offset26) {
  return [
    {
      id: `${pfx}-mat-25`, numero: offset25,
      titulo: 'Juros Simples e Compostos',
      descricao: 'Capitalização simples e composta, montante, taxa e problemas financeiros.',
      duracao: '25min',
      materiais: {
        video:    _VG + 'aula-08-juros-pa-pg-v1.mp4',
        pdf:      null,
        jogo:     'jogos/juros.html',
        lista:    _LP + 'lista-juros-pa-pg.pdf',
        resolucao: _VQ + 'questoes-juros-pa-pg.mp4'
      }
    },
    {
      id: `${pfx}-mat-26`, numero: offset26,
      titulo: 'Estatística Descritiva e Gráficos',
      descricao: 'Média, mediana, moda, desvio padrão, tabelas e interpretação de gráficos.',
      duracao: '25min',
      materiais: {
        video:    _VG + 'aula-20-estatistica.mp4',
        pdf:      null,
        jogo:     null,
        lista:    null,
        resolucao: null
      }
    }
  ];
}

/* aula de lógica matemática (exclusivo CFO CBMBA) */
function _aulaLogica(pfx, numero) {
  return {
    id: `${pfx}-mat-lg`, numero,
    titulo: 'Lógica Matemática: Proposições e Valores Lógicos',
    descricao: 'Proposições, conectivos, tabelas-verdade, negação, tautologias e contradições.',
    duracao: '25min',
    materiais: {
      video:    null,
      pdf:      null,
      jogo:     null,
      lista:    null,
      resolucao: null
    }
  };
}

/* ── helper: aula sem material (LP, Direito, etc.) ───────── */
function _null(id, num, titulo, descricao) {
  return {
    id, numero: num, titulo, descricao, duracao: '25min',
    materiais: { video: null, pdf: null, jogo: null, lista: null, resolucao: null }
  };
}

/* ============================================================
   BLOCOS TEMÁTICOS COMPARTILHADOS
   ============================================================ */

/* Língua Portuguesa SD (5 aulas) */
function _lpSD(pfx, off) {
  return [
    _null(`${pfx}-lp-01`, off+1, 'Compreensão e Interpretação de Textos',  'Estratégias de leitura, inferência e identificação de ideias centrais em textos.'),
    _null(`${pfx}-lp-02`, off+2, 'Morfologia: Classes de Palavras',          'Substantivos, adjetivos, verbos, advérbios — formação e emprego.'),
    _null(`${pfx}-lp-03`, off+3, 'Sintaxe: Orações e Períodos',              'Análise sintática, coordenação, subordinação e regências.'),
    _null(`${pfx}-lp-04`, off+4, 'Ortografia, Acentuação e Pontuação',       'Regras ortográficas, novo acordo, acentuação gráfica e uso da vírgula.'),
    _null(`${pfx}-lp-05`, off+5, 'Semântica e Figuras de Linguagem',         'Sinonímia, antonímia, polissemia, conotação e principais figuras de linguagem.')
  ];
}

/* Língua Portuguesa CFO (6 aulas) */
function _lpCFO(pfx, off) {
  return [
    _null(`${pfx}-lp-01`, off+1, 'Compreensão e Interpretação de Textos',       'Leitura crítica, inferências e reconhecimento de estruturas argumentativas.'),
    _null(`${pfx}-lp-02`, off+2, 'Morfologia: Classes de Palavras — Parte 1',    'Substantivos, artigos, adjetivos, numerais e pronomes.'),
    _null(`${pfx}-lp-03`, off+3, 'Morfologia: Classes de Palavras — Parte 2',    'Verbos (conjugação, modos e vozes), advérbios, preposições e conjunções.'),
    _null(`${pfx}-lp-04`, off+4, 'Sintaxe: Análise Sintática e Concordância',    'Sujeito, predicado, complementos verbais e nominais, concordância verbal e nominal.'),
    _null(`${pfx}-lp-05`, off+5, 'Ortografia, Acentuação e Pontuação',           'Novo acordo ortográfico, acentuação gráfica, crase e emprego dos sinais de pontuação.'),
    _null(`${pfx}-lp-06`, off+6, 'Semântica, Coesão e Coerência Textual',        'Figuras de linguagem, recursos coesivos e produção de texto dissertativo.')
  ];
}

/* Língua Inglesa CFO (4 aulas) */
function _liCFO(pfx, off) {
  return [
    _null(`${pfx}-li-01`, off+1, 'Reading Comprehension — Nível Básico',   'Estratégias de leitura em inglês: skimming, scanning e compreensão global.'),
    _null(`${pfx}-li-02`, off+2, 'Vocabulário e Falsos Cognatos',           'Vocabulário geral, falsos cognatos e expressões idiomáticas em contexto.'),
    _null(`${pfx}-li-03`, off+3, 'Tempos Verbais e Estrutura Frasal',       'Present/past/future tenses, voz passiva e estrutura de sentenças em inglês.'),
    _null(`${pfx}-li-04`, off+4, 'Textos Técnicos e Militares em Inglês',   'Leitura de textos técnicos, militares e de atualidades em língua inglesa.')
  ];
}

/* Informática SD (2 aulas) */
function _infSD(pfx, off) {
  return [
    _null(`${pfx}-inf-01`, off+1, 'Sistemas Operacionais e Internet',            'Windows, conceitos de SO, navegadores, e-mail e segurança básica na internet.'),
    _null(`${pfx}-inf-02`, off+2, 'Pacote Office: Word, Excel e PowerPoint',      'Processador de textos, planilha eletrônica e apresentações — funções básicas.')
  ];
}

/* Informática CFO (3 aulas) */
function _infCFO(pfx, off) {
  return [
    _null(`${pfx}-inf-01`, off+1, 'Sistemas Operacionais Windows',               'Gerenciamento de arquivos, configurações e recursos do SO Windows.'),
    _null(`${pfx}-inf-02`, off+2, 'Pacote Microsoft Office',                      'Word, Excel e PowerPoint — funções intermediárias e atalhos.'),
    _null(`${pfx}-inf-03`, off+3, 'Internet, Segurança da Informação e Redes',    'Protocolos TCP/IP, firewall, antivírus, criptografia e redes sem fio.')
  ];
}

/* História do Brasil SD-PMBA (4 aulas) */
function _histPMBA(pfx, off) {
  return [
    _null(`${pfx}-hist-01`, off+1, 'Brasil Colonial e Período Imperial',           'Descobrimento, colonização, Ciclos Econômicos e o Segundo Reinado.'),
    _null(`${pfx}-hist-02`, off+2, 'República Velha e Era Vargas',                  'Proclamação da República, oligarquias, Revolução de 1930 e Estado Novo.'),
    _null(`${pfx}-hist-03`, off+3, 'Ditadura Militar e Redemocratização',           'Golpe de 1964, AI-5, abertura política, Constituição de 1988.'),
    _null(`${pfx}-hist-04`, off+4, 'História da Bahia',                             'Formação histórica da Bahia, 2 de Julho, personagens e fatos relevantes.')
  ];
}

/* Ciências Naturais SD-CBMBA (4 aulas) */
function _cnCBMBA(pfx, off) {
  return [
    _null(`${pfx}-cn-01`, off+1, 'Física: Mecânica, Calor e Eletricidade',         'Cinemática, dinâmica, termologia, eletrostática e eletrodinâmica básica.'),
    _null(`${pfx}-cn-02`, off+2, 'Química: Átomos, Ligações e Reações',             'Tabela periódica, ligações químicas, reações inorgânicas e balanceamento.'),
    _null(`${pfx}-cn-03`, off+3, 'Biologia: Citologia, Genética e Fisiologia',      'Célula, divisão celular, leis de Mendel, sistemas do corpo humano.'),
    _null(`${pfx}-cn-04`, off+4, 'Ecologia e Meio Ambiente',                        'Ecossistemas, cadeias alimentares, impactos ambientais e legislação ambiental.')
  ];
}

/* Atualidades (1 aula — compartilhada SD) */
function _atuSD(pfx, num) {
  return [ _null(`${pfx}-atu-01`, num, 'Atualidades: Política, Economia e Cidadania', 'Conjuntura nacional e internacional, fatos recentes e temas relevantes para concursos.') ];
}

/* Ciências Humanas CFO-PMBA (5 aulas) */
function _humPMBA(pfx, off) {
  return [
    _null(`${pfx}-hum-01`, off+1, 'Geografia do Brasil: Regiões e Biomas',          'Regionalização brasileira, biomas, relevo, clima e hidrografia.'),
    _null(`${pfx}-hum-02`, off+2, 'História do Brasil: Colônia e Império',           'Colonização, mineração, independência, Segundo Reinado e abolição.'),
    _null(`${pfx}-hum-03`, off+3, 'História do Brasil: República e Contemporâneo',   'República Velha, Vargas, Ditadura Militar, redemocratização e atualidade.'),
    _null(`${pfx}-hum-04`, off+4, 'História da Bahia e Atualidades',                 'Formação histórica da Bahia, 2 de Julho e acontecimentos recentes.'),
    _null(`${pfx}-hum-05`, off+5, 'Geopolítica e Relações Internacionais',           'Blocos econômicos, conflitos globais, organismos internacionais e geopolítica.')
  ];
}

/* Ciências Humanas e Naturais CFO-CBMBA (6 aulas) */
function _humnatCBMBA(pfx, off) {
  return [
    _null(`${pfx}-humn-01`, off+1, 'Geografia do Brasil: Regiões e Biomas',          'Regionalização, biomas, relevo, clima, hidrografia e recursos naturais.'),
    _null(`${pfx}-humn-02`, off+2, 'História do Brasil: Colônia e Império',           'Colonização, ciclos econômicos, independência e Segundo Reinado.'),
    _null(`${pfx}-humn-03`, off+3, 'História do Brasil: República e Contemporâneo',   'Da República Velha à redemocratização — fatos e personagens históricos.'),
    _null(`${pfx}-humn-04`, off+4, 'Física: Mecânica, Termodinâmica e Eletricidade',  'Cinemática, dinâmica, calor, termodinâmica e eletromagnetismo básico.'),
    _null(`${pfx}-humn-05`, off+5, 'Química: Reações, Substâncias e Soluções',        'Ligações, reações químicas, pH, soluções e noções de química orgânica.'),
    _null(`${pfx}-humn-06`, off+6, 'Biologia e Ecologia',                             'Célula, genética, fisiologia humana, ecossistemas e meio ambiente.')
  ];
}

/* Direito SD-PMBA (4 aulas) */
function _dirSDPM(pfx, off) {
  return [
    _null(`${pfx}-dir-01`, off+1, 'Direito Constitucional: Princípios e Direitos Fundamentais', 'Constituição de 1988, princípios, direitos e garantias individuais e coletivos.'),
    _null(`${pfx}-dir-02`, off+2, 'Direitos Humanos e Garantias Individuais',                    'Declaração Universal, tratados internacionais e aplicação nos concursos PM.'),
    _null(`${pfx}-dir-03`, off+3, 'Direito Administrativo: Princípios e Atos',                   'LIMPE, atos administrativos, poderes da Administração Pública.'),
    _null(`${pfx}-dir-04`, off+4, 'Direito Penal: Princípios Gerais e Crimes',                   'Teorias do crime, tipicidade, antijuridicidade, culpabilidade e crimes em espécie.')
  ];
}

/* Direito SD-CBMBA (4 aulas) */
function _dirSDBM(pfx, off) {
  return [
    _null(`${pfx}-dir-01`, off+1, 'Direito Constitucional: Princípios e Direitos Fundamentais', 'CF/88 — princípios fundamentais, organização do Estado e direitos individuais.'),
    _null(`${pfx}-dir-02`, off+2, 'Direitos Humanos e Proteção Internacional',                   'Instrumentos internacionais de proteção dos direitos humanos e sua aplicação.'),
    _null(`${pfx}-dir-03`, off+3, 'Direito Administrativo dos Bombeiros',                        'Organização administrativa, poder de polícia e princípios aplicados ao CBMBA.'),
    _null(`${pfx}-dir-04`, off+4, 'Estatuto e Regulamento do CBMBA',                             'Lei de Organização Básica, estatuto do Corpo de Bombeiros e deveres militares.')
  ];
}

/* Direito CFO-PMBA (7 aulas) */
function _dirCFOPM(pfx, off) {
  return [
    _null(`${pfx}-dir-01`, off+1, 'Direito Constitucional',              'CF/88: direitos fundamentais, organização dos poderes, segurança pública.'),
    _null(`${pfx}-dir-02`, off+2, 'Direitos Humanos',                    'Sistemas universal e regional de proteção, aplicação prática no contexto policial.'),
    _null(`${pfx}-dir-03`, off+3, 'Direito Administrativo',              'Atos, poderes, responsabilidade civil do Estado e servidores públicos.'),
    _null(`${pfx}-dir-04`, off+4, 'Direito Penal',                       'Teoria geral do crime, concurso de agentes, crimes contra a pessoa e o patrimônio.'),
    _null(`${pfx}-dir-05`, off+5, 'Direito Processual Penal',            'Inquérito policial, ação penal, prisão em flagrante, medidas cautelares.'),
    _null(`${pfx}-dir-06`, off+6, 'Estatuto da PMBA',                    'Lei de Organização Básica, estatuto dos militares estaduais e regulamento disciplinar.'),
    _null(`${pfx}-dir-07`, off+7, 'Ética e Legislação Policial',         'Código de Ética PM, uso da força, abordagem policial e direitos do cidadão.')
  ];
}

/* Direito CFO-CBMBA (7 aulas) */
function _dirCFOBM(pfx, off) {
  return [
    _null(`${pfx}-dir-01`, off+1, 'Direito Constitucional',              'CF/88: direitos fundamentais, organização dos poderes e defesa civil.'),
    _null(`${pfx}-dir-02`, off+2, 'Direitos Humanos',                    'Sistemas de proteção dos direitos humanos e sua aplicação pelo Corpo de Bombeiros.'),
    _null(`${pfx}-dir-03`, off+3, 'Direito Administrativo',              'Atos administrativos, poderes, licitação e contratos da Administração Pública.'),
    _null(`${pfx}-dir-04`, off+4, 'Direito Penal',                       'Teoria geral do crime, crimes ambientais e crimes de responsabilidade.'),
    _null(`${pfx}-dir-05`, off+5, 'Direito Processual Penal',            'Inquérito policial, ação penal pública e privada, medidas cautelares.'),
    _null(`${pfx}-dir-06`, off+6, 'Estatuto do CBMBA',                   'Lei de Organização Básica, estatuto dos bombeiros militares e regulamento disciplinar.'),
    _null(`${pfx}-dir-07`, off+7, 'Ética e Legislação de Bombeiros',     'Código de Ética BM, proteção e defesa civil, legislação de combate a incêndio.')
  ];
}

/* ============================================================
   CATÁLOGO
   ============================================================ */
const PL_CATALOG = {

  cursos: {

    /* ────────────────────────────────────────────────────────
       SD PMBA — SAEB/05/2022 (Banca FCC)
       24 aulas de Matemática (edital completo da disciplina)
    ──────────────────────────────────────────────────────── */
    'sd-pmba': {
      id: 'sd-pmba',
      nome: 'SD PMBA',
      subtitulo: 'Soldado da Polícia Militar da Bahia',
      descricao: 'Matemática completa para o SD PMBA (SAEB/05/2022 — Banca FCC): todo o conteúdo da disciplina em aulas Pomodoro de 25 minutos.',
      icon: '🚔',
      cor: '#60a5fa',
      corBg: 'rgba(96,165,250,0.12)',
      aulas: [
        /* Plataforma 100% Matemática — demais disciplinas removidas */
        ..._matSD('sdpm', 0)
      ]
    },

    /* ────────────────────────────────────────────────────────
       SD CBMBA — SAEB/05/2022 (Banca FCC)
       24 aulas de Matemática (edital completo da disciplina)
    ──────────────────────────────────────────────────────── */
    'sd-cbmba': {
      id: 'sd-cbmba',
      nome: 'SD CBMBA',
      subtitulo: 'Soldado do Corpo de Bombeiros Militar da Bahia',
      descricao: 'Matemática completa para o SD CBMBA (SAEB/05/2022 — Banca FCC) em aulas Pomodoro de 25 minutos.',
      icon: '🔴',
      cor: '#f87171',
      corBg: 'rgba(248,113,113,0.12)',
      aulas: [
        /* Plataforma 100% Matemática — demais disciplinas removidas */
        ..._matSD('sdbm', 0)
      ]
    },

    /* ────────────────────────────────────────────────────────
       CFO PMBA — CFOPM/2024 (Banca UNEB)
       26 aulas de Matemática (edital completo da disciplina)
    ──────────────────────────────────────────────────────── */
    'cfo-pmba': {
      id: 'cfo-pmba',
      nome: 'CFO PMBA',
      subtitulo: 'Curso de Formação de Oficiais — Polícia Militar da Bahia',
      descricao: 'Matemática do CFO PMBA (CFOPM/2024 — Banca UNEB), do básico ao avançado, em aulas Pomodoro de 25 minutos.',
      icon: '🎖️',
      cor: '#fcd34d',
      corBg: 'rgba(252,211,77,0.12)',
      aulas: [
        /* Plataforma 100% Matemática — demais disciplinas removidas */
        ..._matSD('cfopm', 0),
        ..._matCFOExtra('cfopm', 25, 26)
      ]
    },

    /* ────────────────────────────────────────────────────────
       CFO CBMBA — CFOPM/2024 (Banca UNEB)
       27 aulas de Matemática (incl. Lógica Matemática)
    ──────────────────────────────────────────────────────── */
    'cfo-cbmba': {
      id: 'cfo-cbmba',
      nome: 'CFO CBMBA',
      subtitulo: 'Curso de Formação de Oficiais — Corpo de Bombeiros Militar da Bahia',
      descricao: 'Matemática do CFO CBMBA (CFOPM/2024 — Banca UNEB), incluindo Lógica Matemática do edital BM — 25 min por aula.',
      icon: '🚒',
      cor: '#fb923c',
      corBg: 'rgba(251,146,60,0.12)',
      aulas: [
        /* Plataforma 100% Matemática (incl. Lógica Matemática do edital BM) */
        _aulaLogica('cfobm', 1),
        ..._matSD('cfobm', 1),
        ..._matCFOExtra('cfobm', 26, 27)
      ]
    },

    /* ────────────────────────────────────────────────────────
       MATEMÁTICA BÁSICA — Fundamentos para Concursos
    ──────────────────────────────────────────────────────── */
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
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-01-conjuntos-numericos.mp4',
            pdf:      _AP + 'aula-01-conjuntos-numericos.pdf',
            jogo:     'jogos/conjuntos-numericos.html',
            lista:    _LP + 'lista-conjuntos-numericos.pdf',
            resolucao: _VQ + 'questoes-conjuntos-numericos.mp4'
          }
        },
        {
          id: 'mb-02', numero: 2,
          titulo: 'MMC e MDC',
          descricao: 'Múltiplos, divisores, mínimo múltiplo e máximo divisor.',
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-02-numeros-primos-mmc-mdc.mp4',
            pdf:      _AP + 'aula-04-mmc-mdc.pdf',
            jogo:     'jogos/multiplos-divisores.html',
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'mb-03', numero: 3,
          titulo: 'Frações e Números Decimais',
          descricao: 'Operações com frações, decimais e conversões essenciais.',
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-03-numeros-racionais.mp4',
            pdf:      _AP + 'aula-02-numeros-racionais.pdf',
            jogo:     'jogos/fracoes.html',
            lista:    _LP + 'lista-numeros-racionais.pdf',
            resolucao: _VQ + 'questoes-racionais.mp4'
          }
        },
        {
          id: 'mb-04', numero: 4,
          titulo: 'Potenciação e Radiciação',
          descricao: 'Potências, raízes e dízimas periódicas.',
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-11-potenciacao.mp4',
            pdf:      _AP + 'aula-03-dizimas-potenciacao.pdf',
            jogo:     'jogos/potenciacao.html',
            lista:    null,
            resolucao: null
          }
        },
        {
          id: 'mb-05', numero: 5,
          titulo: 'Razão, Proporção e Regra de Três',
          descricao: 'Conceito central de toda matemática aplicada a concursos.',
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-08-razao-proporcao.mp4',
            pdf:      null,
            jogo:     'jogos/regra-de-tres.html',
            lista:    _LP + 'lista-razao-proporcao.pdf',
            resolucao: _VQ + 'questoes-razao-proporcao.mp4'
          }
        },
        {
          id: 'mb-06', numero: 6,
          titulo: 'PA e PG',
          descricao: 'Progressões aritméticas e geométricas — bases sólidas.',
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-13-sequencias-pa.mp4',
            pdf:      _AP + 'aula-06-pa.pdf',
            jogo:     'jogos/pa-pg.html',
            lista:    _LP + 'lista-juros-pa-pg.pdf',
            resolucao: _VQ + 'questoes-juros-pa-pg.mp4'
          }
        },
        {
          id: 'mb-07', numero: 7,
          titulo: 'Teoria dos Conjuntos',
          descricao: 'União, intersecção e diferença — fundamentos da lógica matemática.',
          duracao: '25min',
          materiais: {
            video:    _V  + 'aula-06-teoria-conjuntos-p1.mp4',
            pdf:      null,
            jogo:     'jogos/conjuntos-operacoes.html',
            lista:    _LP + 'lista-teoria-conjuntos.pdf',
            resolucao: _VQ + 'questoes-teoria-conjuntos.mp4'
          }
        }
      ]
    },

    /* ────────────────────────────────────────────────────────
       CORREIOS — mantido conforme estrutura anterior
    ──────────────────────────────────────────────────────── */
    'correios': {
      id: 'correios',
      nome: 'Correios',
      subtitulo: 'Empresa Brasileira de Correios e Telégrafos',
      descricao: 'Preparação para o concurso dos Correios — foco em matemática e raciocínio lógico.',
      icon: '📬',
      cor: '#a78bfa',
      corBg: 'rgba(167,139,250,0.12)',
      aulas: [
        {
          id: 'cr-01', numero: 1,
          titulo: 'Inteiros, Múltiplos e Divisores',
          descricao: 'Números inteiros, múltiplos e divisores — base do edital dos Correios.',
          duracao: '25min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/correios/aula-01-inteiros-multiplos.pdf',
            jogo:     'jogos/multiplos-divisores.html',
            lista:    _LP + 'lista-matematica-basica.pdf',
            resolucao: null
          }
        },
        {
          id: 'cr-02', numero: 2,
          titulo: 'Números Racionais',
          descricao: 'Frações e operações com números racionais.',
          duracao: '25min',
          materiais: {
            video:    null,
            pdf:      'assets/aulas/correios/aula-02-numeros-racionais.pdf',
            jogo:     'jogos/fracoes.html',
            lista:    _LP + 'lista-numeros-racionais.pdf',
            resolucao: null
          }
        },
        {
          id: 'cr-03', numero: 3,
          titulo: 'Porcentagem e Regra de Três',
          descricao: 'Porcentagem e regra de três — presença garantida na prova dos Correios.',
          duracao: '25min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     'jogos/porcentagem.html',
            lista:    _LP + 'lista-razao-proporcao-porcentagem.pdf',
            resolucao: null
          }
        },
        {
          id: 'cr-04', numero: 4,
          titulo: 'Raciocínio Lógico',
          descricao: 'Lógica proposicional e argumentação — específico dos Correios.',
          duracao: '25min',
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
          duracao: '25min',
          materiais: {
            video:    null,
            pdf:      null,
            jogo:     'jogos/geometria-plana.html',
            lista:    _LP + 'lista-geometria-plana.pdf',
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
    // Aula sem material ("Em produção") não conta como concluída —
    // evitava progresso fantasma no primeiro acesso do aluno.
    if (disponiveis.length === 0) return false;
    return disponiveis.every(a => progAula[a.key]);
  }

};

/* ── Admin override via localStorage ──────────────────────
   O painel admin salva o catálogo completo no formato:
     { cursos: { 'id': {...} }, ATIVIDADES: [...] }
   Esta função aplica esses dados sobre o PL_CATALOG em tempo
   de execução, sem alterar este arquivo.
─────────────────────────────────────────────────────────── */
(function _applyCustomOverrides() {
  try {
    const raw = localStorage.getItem('pl_catalog_custom');
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved) return;
    // Formato do admin: { cursos: {...}, ATIVIDADES: [...] }
    if (saved.cursos && typeof saved.cursos === 'object') {
      PL_CATALOG.cursos = saved.cursos;
    }
    if (Array.isArray(saved.ATIVIDADES) && saved.ATIVIDADES.length) {
      PL_CATALOG.ATIVIDADES = saved.ATIVIDADES;
    }
  } catch (e) { /* silently ignore */ }
})();

/* ── Normalização de fontes locais ─────────────────────────
   Os caminhos "_fontes/..." acima referenciam os arquivos de
   gravação no computador do professor (MP4s grandes) e NÃO são
   publicados no GitHub Pages. Em tempo de execução viram null:
   a aula exibe "Em produção" até o material ganhar um link
   público (ex.: YouTube), que pode ser cadastrado no admin.
   Roda após o override do admin para sanear também catálogos
   customizados salvos com esses caminhos.
─────────────────────────────────────────────────────────── */
/* ── Apostilas e materiais gerais por curso ────────────────
   Exibidos na página inicial de cada curso (curso.html).
   Aplicado após o override do admin para que catálogos salvos
   antes deste recurso também recebam as apostilas. ─────────── */
(function _addApostilas() {
  const APOSTILAS_MILITAR = [
    { titulo: 'Apostila Completa de Matemática — CFO/SD', desc: 'Teoria completa de todos os assuntos do edital de matemática.', url: 'assets/apostila-cfo.pdf' },
    { titulo: 'Conteúdo Programático — CFO/SD',           desc: 'O que cai na prova: edital de matemática detalhado.',          url: 'assets/conteudo-cfo.pdf' },
    { titulo: 'Cronograma da Mentoria',                   desc: 'Planejamento de estudos semana a semana da mentoria.',         url: 'assets/cronograma-mentoria.pdf' },
    { titulo: 'Mentoria de Matemática — Revisão',         desc: 'Material de revisão geral usado na mentoria.',                 url: 'assets/mentoria.pdf' },
  ];
  const APOSTILAS_POR_CURSO = {
    'sd-pmba':   APOSTILAS_MILITAR,
    'sd-cbmba':  APOSTILAS_MILITAR,
    'cfo-pmba':  APOSTILAS_MILITAR,
    'cfo-cbmba': APOSTILAS_MILITAR,
    'mat-basica': [
      { titulo: 'Apostila de Matemática Básica',    desc: 'Fundamentos completos — do zero ao nível de concurso.', url: 'assets/apostila-basica.pdf' },
      { titulo: 'Mentoria de Matemática — Revisão', desc: 'Material de revisão geral usado na mentoria.',          url: 'assets/mentoria.pdf' },
    ],
    'correios': [
      { titulo: 'Apostila de Matemática — Correios',  desc: 'Teoria focada no edital dos Correios.',            url: 'assets/apostila-correios.pdf' },
      { titulo: 'Conteúdo Programático — Correios',   desc: 'O que cai na prova: edital detalhado.',            url: 'assets/conteudo-correios.pdf' },
    ],
  };
  Object.entries(APOSTILAS_POR_CURSO).forEach(([id, aps]) => {
    const curso = PL_CATALOG.cursos[id];
    if (curso && !Array.isArray(curso.apostilas)) curso.apostilas = aps;
  });
})();

(function _normalizeLocalSources() {
  /* Jogos antigos (versões sem ranking, antes em assets/jogos/ ou com
     nome de exibição) → versões novas em jogos/. Catálogos salvos pelo
     admin no localStorage podem ainda apontar para os antigos. */
  const LEGACY_GAME_MAP = {
    'assets/jogos/conjuntos-numericos.html': 'jogos/conjuntos-numericos.html',
    'assets/jogos/multiplos-divisores.html': 'jogos/multiplos-divisores.html',
    'assets/jogos/teoria-conjuntos.html':    'jogos/conjuntos-operacoes.html',
    'Jogos/Jogo dos Conjuntos Numéricos - Professor Leão.html': 'jogos/conjuntos-numericos.html',
    'jogos/Jogo dos Conjuntos Numéricos - Professor Leão.html': 'jogos/conjuntos-numericos.html',
    'Jogos/Múltiplos e Divisores.html': 'jogos/multiplos-divisores.html',
    'jogos/Múltiplos e Divisores.html': 'jogos/multiplos-divisores.html',
    'Jogos/Teoria dos Conjuntos.html':  'jogos/conjuntos-operacoes.html',
    'jogos/Teoria dos Conjuntos.html':  'jogos/conjuntos-operacoes.html',
  };
  Object.values(PL_CATALOG.cursos || {}).forEach(curso => {
    (curso.aulas || []).forEach(aula => {
      const m = aula.materiais || {};
      Object.keys(m).forEach(k => {
        if (typeof m[k] !== 'string') return;
        if (m[k].indexOf('_fontes/') === 0) { m[k] = null; return; }
        if (LEGACY_GAME_MAP[m[k]]) m[k] = LEGACY_GAME_MAP[m[k]];
      });
    });
  });
})();

/* ── Aulas ocultas (admin) ─────────────────────────────────
   O admin pode ocultar uma aula da Área do Aluno (flag
   aula.oculta = true, salva no catálogo customizado). No
   painel admin a aula continua visível para ser gerenciada;
   nas demais páginas ela é removida do catálogo em tempo de
   execução e as restantes são renumeradas em sequência. ──── */
(function _ocultarAulas() {
  try {
    const path = (location.pathname || '').toLowerCase();
    if (path.indexOf('admin') !== -1) return; /* admin vê tudo */
    Object.values(PL_CATALOG.cursos || {}).forEach(curso => {
      if (!Array.isArray(curso.aulas)) return;
      const visiveis = curso.aulas.filter(a => !a.oculta);
      if (visiveis.length !== curso.aulas.length) {
        visiveis.forEach((a, i) => { a.numero = i + 1; });
        curso.aulas = visiveis;
      }
    });
  } catch (e) { /* silently ignore */ }
})();
