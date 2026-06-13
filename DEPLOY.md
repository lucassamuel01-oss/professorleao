# 🚀 Deploy da Plataforma Professor Leão (Railway)

O site continua funcionando no GitHub Pages como sempre. Para ativar os
recursos de servidor — **convites únicos, banco de dados, progresso dos
alunos no admin e o Leão IA real (Claude)** — publique este mesmo
repositório no Railway. Leva ~10 minutos.

## Passo 1 — Criar o serviço

1. Acesse [railway.app](https://railway.app) e faça login.
2. **New Project → Deploy from GitHub repo** → escolha
   `lucassamuel01-oss/professorleao`.
3. O Railway detecta o `railway.json` e roda `node server.js`
   automaticamente.

## Passo 2 — Variáveis de ambiente

No serviço criado, abra **Variables** e adicione:

| Variável | Valor | Obrigatória? |
|---|---|---|
| `MONGODB_URI` | String de conexão do MongoDB Atlas (o banco usado se chama `professor-leao`) | ✅ Sim |
| `GEMINI_API_KEY` | 🆓 **IA GRATUITA** — chave do Google AI Studio (veja abaixo) | Para o Leão IA real |
| `GROQ_API_KEY` | 🆓 Alternativa gratuita — chave de [console.groq.com](https://console.groq.com) | Opcional |
| `ANTHROPIC_API_KEY` | 💰 Alternativa paga (Claude) — [console.anthropic.com](https://console.anthropic.com/) | Opcional |
| `SESSION_SECRET` | Qualquer texto longo aleatório | Recomendada |
| `IA_PROVIDER` | Força um provedor: `gemini`, `groq` ou `anthropic` (padrão: o primeiro com chave, nesta ordem) | Opcional |
| `IA_MODEL` | Modelo (padrões: `gemini-2.0-flash` / `llama-3.3-70b-versatile` / `claude-haiku-4-5-20251001`) | Opcional |
| `IA_LIMITE_DIA` | Perguntas por aluno/dia (padrão: 40 — com Gemini grátis, use ~20 se tiver muitos alunos) | Opcional |

### 🆓 IA gratuita por aluno (Gemini — recomendado)

O nível gratuito do Google Gemini não pede cartão de crédito e dá
**~1.500 perguntas por dia** no total da plataforma — de graça:

1. Acesse [aistudio.google.com](https://aistudio.google.com) com sua
   conta Google.
2. Clique em **Get API key → Create API key** e copie a chave.
3. Cole no Railway como `GEMINI_API_KEY`. Pronto — sem fatura.

> ⚠️ **Crie e cole as chaves você mesmo** — nunca compartilhe chave de
> API em chats, prints ou commits. O servidor escolhe automaticamente:
> Gemini (grátis) → Groq (grátis) → Claude (pago), o primeiro que tiver
> chave configurada.

## Passo 3 — Gerar o domínio

Em **Settings → Networking → Generate Domain**. A URL gerada
(ex.: `professorleao.up.railway.app`) é a plataforma completa:

- `…/admin.html` → admin com convites, progresso e WhatsApp dos alunos
- `…/cadastro.html?convite=…` → links que você gera para cada aluno
- Login admin: e-mail definido em `ADMIN_EMAIL` e senha em `ADMIN_PASSWORD`
  (variáveis de ambiente do Railway — **nunca** ponha a senha no código ou
  na documentação, pois o repositório é público).

## Como saber que funcionou

1. `https://SEU-DOMINIO/health` deve responder `{"ok":true,…,"db":true}`.
2. Na **Minha Área**, o painel do Leão IA mostra o selo
   **“⚡ IA real ativa (Gemini)”** (ou Groq/Claude) quando há chave
   configurada.
3. No admin, a faixa “⚠️ …sem backend” desaparece e os convites passam a
   ser gerados.

## Observações

- Sem `ANTHROPIC_API_KEY`, tudo continua funcionando — o Leão IA usa o
  motor de análise local automaticamente.
- O GitHub Pages pode continuar no ar como vitrine; os alunos usam a URL
  do Railway (onde existe login de verdade e progresso sincronizado).
