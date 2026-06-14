# 🔔 Notificações push — como funciona

As **notificações push** (Web Push) já estão **ativas automaticamente** — não
há mais nenhum passo manual de configuração. 🎉

- As **chaves VAPID** são **geradas e guardadas pelo próprio servidor** na
  primeira vez que ele sobe (ficam salvas no banco; a chave privada **nunca**
  vai para o código). Nos reinícios, as mesmas chaves são reaproveitadas, então
  as inscrições dos alunos continuam válidas.
- O aluno recebe o convite **"Ativar lembretes?"** ao usar a plataforma
  (no **computador e no celular**, no app instalado ou no navegador), depois de
  fazer login. Também pode ativar/desativar em **Minha Área → "Lembretes no seu
  celular"**.
- Você dispara os lembretes em **Admin → aba 📣 Avisos → "🔔 Enviar notificação
  push"** (título + mensagem + link interno). O painel mostra quantos
  dispositivos estão inscritos.

## Usar (passo a passo)

1. **Aluno:** entra na plataforma, aceita o convite **"Ativar lembretes"**
   (o navegador pede a permissão).
2. **Professor:** **Admin → Avisos → Enviar notificação push** → escreve o
   lembrete estratégico (ex.: "Saiu o minissimulado da semana! 🎯") e envia.

## Bom saber

- **Onde funciona:** Android (Chrome, Edge, Samsung Internet) e desktop
  (Chrome, Edge, Firefox). No **iPhone/iPad** funciona a partir do **iOS 16.4+**,
  mas só depois que o aluno **instalar o site na tela inicial** (PWA) — exigência
  da Apple.
- **Privacidade:** guardamos apenas o "endereço" de entrega da notificação
  (endpoint do navegador) ligado à conta do aluno. Nada de conteúdo pessoal.
  O aluno pode desativar quando quiser.
- **Inscrições expiradas** (aparelho trocado, navegador limpo) são removidas
  automaticamente no primeiro envio que falhar.

## (Opcional) Usar suas próprias chaves VAPID

Não é necessário. Mas, se você preferir gerenciar as chaves manualmente (por
exemplo, para compartilhar a mesma identidade entre ambientes), defina no
Railway as variáveis `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY` e `VAPID_SUBJECT`
(`mailto:seu-email@dominio.com`). Quando essas variáveis existem, o servidor
usa elas em vez de gerar as próprias.
