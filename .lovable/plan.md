
# Performance + Social Sharing (Open Graph)

Objetivo: deixar a LP mais leve e rápida, sem alterar layout, copy ou elementos visuais, e estruturar metatags para que o link gere cartão rico em WhatsApp, Facebook e LinkedIn.

## 1) Performance — sem mudanças visuais

### a) ShaderBackground (Three.js) — maior gargalo
O Three.js sozinho representa ~600KB no bundle e o shader roda 35 iterações por pixel a 60fps. Otimizações sem alterar visual:

- **Code-split via `React.lazy` + `Suspense`** com fallback em `bg-background` (mesmo background base já usado no componente). O Three só carrega após o JS principal hidratar — melhora LCP/TTI imediatamente.
- **Pausar animação quando fora do viewport** com `IntersectionObserver` (não renderiza frames quando o usuário rolou para baixo). Pausa também em `document.visibilitychange` (aba oculta).
- **Cap de FPS em 30fps**: para um shader ambiente esse delta é imperceptível e reduz GPU/CPU pela metade.
- **Reduzir pixelRatio para 1.25** (atual 1.5). Diferença visual nula em telas comuns; ganho de ~30% em fragment shader.
- **Diminuir resolução do canvas em telas pequenas** (escala 0.85 em mobile via `setSize` com `updateStyle=false`) — mantém o tamanho CSS, só reduz pixels processados.

### b) Custom Cursor
- Continuar montando, mas o `requestAnimationFrame` do ring só anda quando o mouse moveu desde o último frame (early-return) — corta loop ocioso.

### c) Carregamento de fontes
`index.html` carrega 4 famílias Google Fonts com muitos pesos. Sem mudar tipografia visível:
- Adicionar `&display=swap` (já presente) + `<link rel="preload" as="style">` para o CSS de fontes.
- Manter exatamente os mesmos pesos e famílias usados na LP. (Nada removido — só preconnect/preload melhorados.)

### d) Imagens / assets
- Não há imagens pesadas no DOM da LP atual. Nada a fazer aqui além de garantir `loading="lazy"` e `decoding="async"` em qualquer `<img>` futuro (não há agora).

### e) Bundle/Vite
- Configurar `build.rollupOptions.output.manualChunks` para isolar `three`, `recharts`, Radix em chunks separados — reduz o JS inicial.
- Confirmar `componentTagger` apenas em dev (já está).

### f) Hints no HTML
- `<link rel="dns-prefetch">` + `preconnect` para `connect.facebook.net` (Pixel) e o storage do OG image.
- Mover o script do Meta Pixel para carregar com `defer` ou após `load`, para não competir com o LCP. (Sem remover o pixel.)

### g) CSS
- Adicionar `content-visibility: auto` + `contain-intrinsic-size` nas seções abaixo da hero (`PainSection`, `HowItWorks`, `Services`, `ForWhom`, `Marquee`, `FAQ`, `Footer`). O navegador pula layout/paint até a seção entrar no viewport. Zero impacto visual.
- Marquee: já tem `will-change: transform`. Manter.

## 2) Open Graph / Cartões ricos

`index.html` já tem og:image, og:title, og:description, twitter:card. Falta para cobrir bem WhatsApp, Facebook e LinkedIn:

Adicionar em `<head>`:
- `<meta property="og:url" content="https://qg-lp.lovable.app/">`
- `<meta property="og:site_name" content="Quinelato Giuseppe">`
- `<meta property="og:locale" content="pt_BR">`
- `<meta property="og:image:secure_url" content="...">` (mesma URL https)
- `<meta property="og:image:type" content="image/webp">`
- `<meta property="og:image:width" content="1200">`
- `<meta property="og:image:height" content="630">`
- `<meta property="og:image:alt" content="Quinelato Giuseppe — Presença digital de excelência">`
- `<meta name="twitter:site" content="@quinelatogiuseppe">` (placeholder; remover se não houver conta)
- `<meta name="twitter:image:alt" content="...">`
- `<link rel="canonical">` já existe.

Observação WhatsApp: prefere imagens < 300KB e proporção próxima a 1.91:1. A imagem atual no GCS já é webp 1200×630-ish — apenas confirmar dimensões nos metadados. Se for maior, substituir pela URL atual está OK; não criamos nova imagem.

Observação LinkedIn: usa `og:title`, `og:description`, `og:image`. Após deploy, recomendar passar pelo Post Inspector da LinkedIn para limpar cache.

## 3) Arquivos afetados

- `index.html` — defer no Pixel, preload de fontes, dns-prefetch, metatags OG completas.
- `vite.config.ts` — `manualChunks` para `three`, `recharts`, `@radix-ui/*`.
- `src/components/landing/Hero.tsx` — `lazy(() => import('./ShaderBackground'))` + `<Suspense fallback={<div className="absolute inset-0 bg-background"/>}>`.
- `src/components/landing/ShaderBackground.tsx` — IntersectionObserver pausa, visibilitychange pausa, FPS cap 30, pixelRatio 1.25, escala mobile.
- `src/components/landing/CustomCursor.tsx` — early-return no rAF quando mouse parado.
- `src/index.css` — `content-visibility: auto` em `section[id]:not(#top)`.

Nenhum elemento, copy, cor, fonte, espaçamento ou comportamento visual é alterado. Apenas mecânicas internas de carregamento e renderização.

## 4) Validação após implementação

- Rodar `browser--performance_profile` antes/depois para comparar LCP, TBT e long tasks.
- Testar OG com:
  - Facebook Sharing Debugger
  - LinkedIn Post Inspector
  - WhatsApp (enviar link a si mesmo após deploy)
- Confirmar visualmente que a LP está idêntica.
