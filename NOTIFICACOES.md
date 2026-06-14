# 🔔 Notificações push — guia de ativação

A plataforma já tem todo o código de **notificações push** (Web Push) pronto:
o aluno ativa em **Minha Área → "Ativar lembretes"** e você dispara avisos em
**Admin → aba Avisos → "Enviar notificação push"** — chega no celular/PC mesmo
com o app fechado.

Falta só **um passo único de configuração**: gerar as chaves VAPID e colocá-las
no Railway. Sem isso, o recurso fica desativado de forma segura (o botão some
para o aluno e o painel do admin avisa que falta configurar).

---

## Passo 1 — Gerar as chaves VAPID (uma vez)

No seu computador, dentro da pasta do projeto, rode:

```bash
npx web-push generate-vapid-keys
```

Vai aparecer algo assim:

```
Public Key:
BNc...muito-longa...A8
Private Key:
kFp...mais-curta...3o
```

> A **Private Key é secreta** — trate como senha. Nunca a coloque no código nem
> a envie por mensagem. Ela vai **apenas** nas variáveis do Railway (passo 2).

## Passo 2 — Configurar no Railway

No projeto do Railway → **Variables**, adicione:

| Variável | Valor |
|---|---|
| `VAPID_PUBLIC_KEY` | a *Public Key* gerada |
| `VAPID_PRIVATE_KEY` | a *Private Key* gerada |
| `VAPID_SUBJECT` | `mailto:seu-email@dominio.com` (um e-mail de contato seu) |

Salve e deixe o Railway fazer o **redeploy**. No log de inicialização deve
aparecer: `[PUSH] Web Push ativo ✓`.

## Passo 3 — Usar

1. **Aluno:** entra na **Minha Área**, vê o card **"🔔 Lembretes no seu celular"**
   e toca em **Ativar lembretes** (o navegador pede permissão).
2. **Professor (admin):** vai em **Admin → aba 📣 Avisos → "🔔 Enviar notificação push"**,
   escreve título + mensagem, escolhe o link interno de destino (ex.: `/jogos.html`)
   e clica em **Enviar para os inscritos**. O painel mostra quantos dispositivos
   estão inscritos e o resultado do envio.

Ótimos usos: avisar o **minissimulado da semana**, uma **aula ao vivo** ou lembrar
de revisar o **caderno de erros**.

---

## Bom saber

- **Onde funciona:** Android (Chrome, Edge, Samsung Internet), e desktop
  (Chrome, Edge, Firefox). No **iPhone/iPad** funciona a partir do **iOS 16.4+**,
  mas só depois que o aluno **instalar o site na tela inicial** (PWA) — é uma
  exigência da Apple.
- **Privacidade:** guardamos apenas o "endereço" de entrega da notificação
  (endpoint do navegador) ligado à conta do aluno. Nada de conteúdo pessoal.
  O aluno pode **desativar** a qualquer momento no mesmo card.
- **Inscrições expiradas** (aparelho trocado, navegador limpo) são removidas
  automaticamente no primeiro envio que falhar com 404/410.
- **Dependência:** o pacote `web-push` já está no `package.json`; o Railway o
  instala sozinho no deploy. Localmente, rode `npm install` se for testar.

> Resumo: **gerar as chaves (passo 1) e colá-las no Railway (passo 2)** — só isso.
> Todo o resto já está implementado e testado.
