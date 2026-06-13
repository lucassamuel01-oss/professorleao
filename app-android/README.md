# Professor Leão — App Android dedicado (TWA)

Este guia transforma a plataforma **www.professorleao.com** em um **app
Android instalável e publicável na Google Play**, usando **TWA** (Trusted
Web Activity).

## O que é (e por que é o caminho certo)

O app é a **própria plataforma**, rodando em tela cheia dentro de um app
nativo — **sem a barra do navegador**. Ele carrega o site ao vivo, então
**já vem com tudo**: as aulas, todos os materiais, listas, minissimulados,
os **27 jogos**, o Leão IA, o login do aluno e a loja. Como a plataforma é
uma **PWA**, as páginas e os jogos já abertos também funcionam **offline**.

Vantagens sobre reescrever em nativo:

- **Zero duplicação:** o app sempre reflete o site. Você publica conteúdo
  uma vez (no site) e ele aparece no app na hora, sem nova versão na loja.
- **Uma base de código** para web + app.
- Atualizar conteúdo **não exige** republicar na Play Store.

## O que já está pronto (no servidor / repositório)

- `manifest.json` — nome, ícones, cores, `display: standalone`, atalhos
  (Área do Aluno, Jogos, Planos).
- `sw.js` — service worker (offline; `/api/*` nunca é cacheado).
- `icon.svg` (maskável) + a logo real como ícone.
- **Endpoint `/.well-known/assetlinks.json`** servido pelo servidor, com o
  fingerprint vindo da variável de ambiente `TWA_SHA256_FINGERPRINTS`.
- `app-android/twa-manifest.json` — configuração de referência para o
  Bubblewrap (pacote `com.professorleao.app`, host, cores, ícones).

---

## Caminho A — PWABuilder (recomendado, sem instalar nada)

A forma mais simples. Não precisa de Android Studio nem de programar.

1. Acesse **https://www.pwabuilder.com**.
2. Digite **`https://www.professorleao.com`** e clique em **Start**.
   (Os indicadores de PWA devem ficar verdes — manifest, service worker e
   segurança.)
3. Clique em **Package For Stores → Android → Generate Package**.
4. Em opções, confirme:
   - **Package ID:** `com.professorleao.app`
   - **App name:** `Professor Leão`
   - **Launcher name:** `Prof. Leão`
   - Mantenha **"Signing key: Create new"** na primeira vez (o PWABuilder
     gera a chave de upload e mostra o **SHA-256** — guarde o arquivo
     `.keystore`/`signing.keystore` e as senhas com muito cuidado).
5. Baixe o `.zip`. Dentro vêm:
   - `app-release-signed.aab` → é o que sobe para a Play Console;
   - `assetlinks.json` → contém o **SHA-256** do app (use no passo crítico
     abaixo);
   - a chave de assinatura + as senhas (`signing-key-info.txt`).

> Pule para **“Passo crítico — assetlinks”** e depois **“Publicar”**.

---

## Caminho B — Bubblewrap (linha de comando, automatizável)

Para quem prefere CLI/CI. Pré-requisitos: **Node 18+** e **JDK 17**
(o Bubblewrap baixa o Android SDK sozinho na primeira vez).

```bash
npm install -g @bubblewrap/cli

# 1) Gera o projeto a partir do manifesto web (responda às perguntas;
#    os valores já vêm pré-preenchidos pelo manifest.json do site)
bubblewrap init --manifest https://www.professorleao.com/manifest.json

#    Dica: use o app-android/twa-manifest.json deste repo como referência
#    dos valores (packageId com.professorleao.app, cores, ícones).

# 2) Gera a chave de assinatura (uma única vez — guarde com segurança!)
keytool -genkeypair -v -keystore android.keystore -alias professorleao \
  -keyalg RSA -keysize 2048 -validity 9125

# 3) Compila o app assinado (.aab para a loja e .apk para teste)
bubblewrap build

# 4) Mostra o SHA-256 da sua chave (para o assetlinks)
keytool -list -v -keystore android.keystore -alias professorleao \
  | grep "SHA256:"
```

Gera `app-release-bundle.aab` (loja) e `app-release-signed.apk` (teste no
celular).

---

## Passo crítico — `assetlinks.json` (tela cheia)

Sem isto, o app abre **com a barra do navegador**. Com isto, abre em
**tela cheia**, como um app de verdade.

1. Pegue o **SHA-256 da chave que ASSINA o app**:
   - **Se usar o Play App Signing** (o padrão, recomendado): só depois do
     primeiro upload do `.aab`, vá em **Play Console → seu app →
     Configuração → Assinatura do app** e copie o **“Certificado da chave
     de assinatura do app” → SHA-256**.
   - Para **testar antes** de publicar, use o SHA-256 da chave de upload
     (do PWABuilder ou do `keytool` acima).
2. No **Railway → seu serviço → Variables**, crie:
   ```
   TWA_SHA256_FINGERPRINTS = AB:CD:EF:...:99
   ```
   (Pode colocar **mais de um** fingerprint separando por vírgula — útil
   para manter a chave de upload e a do Play App Signing ao mesmo tempo.)
3. Após o redeploy, confira no navegador:
   `https://www.professorleao.com/.well-known/assetlinks.json`
   deve listar `com.professorleao.app` com o seu SHA-256.

> O nome do pacote pode ser trocado pela env `TWA_PACKAGE_ID` (padrão
> `com.professorleao.app`).

---

## Publicar na Google Play

1. Crie a conta de desenvolvedor (**play.google.com/console**, taxa única
   de US$ 25).
2. **Criar app** → idioma pt-BR → app/gratuito.
3. **Produção → Criar nova versão** → envie o `.aab`.
   - Aceite o **Play App Signing** (recomendado).
4. Preencha a ficha: nome, descrição, ícone (512×512 — pode usar
   `assets/img/logo-azul.png`), capturas de tela (tire dos jogos e da Área
   do Aluno), política de privacidade → aponte para
   **`https://www.professorleao.com/termos.html`**.
5. Atualize o `assetlinks` com o **SHA-256 do Play App Signing** (passo
   crítico) — senão o app abre com a barra do navegador.
6. Envie para revisão. Aprovação costuma levar de algumas horas a poucos
   dias.

## Atualizar o app depois

- **Conteúdo (aulas, materiais, jogos, preços):** publique no site como
  sempre — **não precisa** republicar na loja. O app reflete na hora.
- **Ícone, splash, permissões ou nome:** gere um novo `.aab` com
  `appVersionCode` **maior** (bump em `twa-manifest.json` ou no PWABuilder)
  e envie uma nova versão.

## iOS (iPhone)

- A plataforma já instala no iPhone por **Safari → Compartilhar →
  “Adicionar à Tela de Início”** (vira ícone em tela cheia).
- Para a **App Store**, o PWABuilder também gera um pacote iOS — é um passo
  opcional para depois (exige conta Apple Developer, US$ 99/ano).
