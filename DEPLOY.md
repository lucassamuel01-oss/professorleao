# 🚀 Deploy da Plataforma Professor Leão (Railway)

O site continua funcionando no GitHub Pages como sempre. Para ativar os
recursos de servidor — **convites únicos, banco de dados, progresso dos
alunos no admin e o Leão IA real (Claude)** — publique este mesmo
repositório no Railway. Leva ~10 minutos.

## Passo 1 — Criar o serviço

1. Acesse [railway.app](https://railway.app) e faça login (mesma conta do
   Elite Feminina).
2. **New Project → Deploy from GitHub repo** → escolha
   `lucassamuel01-oss/professorleao`.
3. O Railway detecta o `railway.json` e roda `node server.js`
   automaticamente.

## Passo 2 — Variáveis de ambiente

No serviço criado, abra **Variables** e adicione:

| Variável | Valor | Obrigatória? |
|---|---|---|
| `MONGODB_URI` | String de conexão do MongoDB Atlas (pode usar o mesmo cluster do Elite Feminina — o banco usado se chama `professor-leao`, não conflita) | ✅ Sim |
| `ANTHROPIC_API_KEY` | Chave criada em [console.anthropic.com](https://console.anthropic.com/) → API Keys | Para o Leão IA real |
| `SESSION_SECRET` | Qualquer texto longo aleatório | Recomendada |
| `IA_MODEL` | Modelo do Leão IA (padrão: `claude-haiku-4-5-20251001`, rápido e barato) | Opcional |
| `IA_LIMITE_DIA` | Perguntas por aluno/dia ao IA real (padrão: 40) | Opcional |

> ⚠️ **Crie e cole a `ANTHROPIC_API_KEY` você mesmo** — nunca compartilhe
> a chave em chats, prints ou commits. Em
> console.anthropic.com → **API Keys → Create Key**, copie e cole direto
> no Railway.

## Passo 3 — Gerar o domínio

Em **Settings → Networking → Generate Domain**. A URL gerada
(ex.: `professorleao.up.railway.app`) é a plataforma completa:

- `…/admin.html` → admin com convites, progresso e WhatsApp dos alunos
- `…/cadastro.html?convite=…` → links que você gera para cada aluno
- Login admin inicial: `samuel@professorleao.com` / `leao2024`
  (**troque a senha** pela aba Alunos após o primeiro login)

## Como saber que funcionou

1. `https://SEU-DOMINIO/health` deve responder `{"ok":true,…,"db":true}`.
2. Na **Minha Área**, o painel do Leão IA mostra o selo
   **“⚡ IA real ativa (Claude)”** quando a chave está configurada.
3. No admin, a faixa “⚠️ …sem backend” desaparece e os convites passam a
   ser gerados.

## Observações

- Sem `ANTHROPIC_API_KEY`, tudo continua funcionando — o Leão IA usa o
  motor de análise local automaticamente.
- O GitHub Pages pode continuar no ar como vitrine; os alunos usam a URL
  do Railway (onde existe login de verdade e progresso sincronizado).
