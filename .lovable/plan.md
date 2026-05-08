# Plano de Performance — Mobile PageSpeed

Meta: subir nota mobile sem alterar layout, cores, textos ou identidade visual. Desktop permanece idêntico (com shader). Mobile recebe um fundo CSS estático equivalente em paleta dourada (sem WebGL).

## 1. Hero — desabilitar shader no mobile
- Em `Hero.tsx`, detectar mobile via `matchMedia("(max-width: 768px)")` antes do `Suspense`.
- Mobile: renderizar apenas um fundo CSS dourado (radial-gradient com tokens existentes `--gold` + `grain` + vignette) — mesmo visual do shader em estado "estático", já que o shader gera padrão sutil. Nada de Three.js carregado/baixado em mobile.
- Desktop: mantém `lazy(ShaderBackground)` como hoje.
- Resultado: bundle `three` (~150KB gzip) **não baixa** em mobile, eliminando boa parte do TBT e do JS não usado.

**Preloader**: NÃO adicionar. Sem o Three.js no mobile, o LCP cai naturalmente; um preloader só atrasaria o First Paint. Mantemos sem preloader.

## 2. Reduzir JavaScript não usado
- Remover `src/components/landing/AuroraBackground.tsx` (não importado em lugar nenhum).
- Remover dependências não usadas do `package.json`:
  `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`, `vaul`, `cmdk`, `input-otp`, `recharts`, `react-hook-form`, `@hookform/resolvers`, `date-fns`, `next-themes`, e os Radix não usados pela LP (`accordion` é usado pelo FAQ — manter; verificar e manter só os realmente importados pela landing + toasts).
- Remover componentes UI shadcn correspondentes que dependem dessas libs (carousel, chart, sidebar, calendar, drawer, command, input-otp, form, resizable). Eles não são tree-shaken porque o Vite só remove módulos não importados — eles JÁ não são importados pela LP, mas removê-los do repo evita ruído. Verificação: `rg` confirma que nenhum é usado fora dos próprios arquivos `ui/`.
- `Sonner` toaster em `App.tsx`: manter (usado), mas avaliar remoção se não houver chamada `toast()` na LP. Conferir antes.

## 3. Adiar scripts de terceiros (Meta Pixel)
- Hoje carrega em `window.load`. Trocar por: carregar no primeiro `requestIdleCallback` OU após `setTimeout(2500)` + na primeira interação (`scroll`/`pointerdown`/`keydown`, once). Isso libera a thread principal durante o LCP.

## 4. CSS / fontes
- Hoje carregamos 4 famílias com 11 pesos. Reduzir para os pesos realmente usados:
  - Plus Jakarta Sans: 400, 500, 600, 700 (remover 300, 800)
  - Playfair Display: italic 400, 500 (remover 600, 700)
  - Cormorant Garamond: 500, 600 (remover 400, 700)
  - Inter: remover totalmente se não usada (verificar `rg "Inter"` em components/css). Se não usada, retirar.
- Adicionar `font-display: swap` já está no `&display=swap`.
- Trocar `<link rel="preload" as="style">` + `<link rel="stylesheet">` por apenas `<link rel="stylesheet" media="print" onload="this.media='all'">` para não bloquear render. Manter `<noscript>` fallback.

## 5. Reflow forçado
- `CustomCursor`: substituir `mouseover` global (causa reflow ao consultar `closest`) por delegação leve com cache; já usa `requestAnimationFrame`. Remover atualizações quando `dx/dy` < 0.1 (já feito).
- `useIsMobile`: usar `matchMedia` puro sem ler `window.innerWidth` (evita layout read). Trocar `setIsMobile(window.innerWidth < ...)` por `setIsMobile(mql.matches)`.

## 6. Imagens
- Garantir `loading="lazy"` + `decoding="async"` em todas imagens fora do hero (Services, ForWhom, Footer etc.) — varrer e aplicar.
- Logo do header já é WebP 6.5KB com `width/height` explícitos — manter.
- Não há `<img>` LCP; o LCP é o H1 do hero (texto), que ganha prioridade automaticamente ao remover o canvas no mobile.

## 7. Build / code-splitting
- `vite.config.ts`: adicionar `chunkSizeWarningLimit`, manter `manualChunks`. Adicionar split do `framer-motion`/recharts? Não usados — irrelevantes após poda.
- Lazy-load das seções abaixo da dobra: envolver `PainSection`, `HowItWorks`, `Services`, `ForWhom`, `Marquee`, `FAQ`, `Footer` com `React.lazy` em `Index.tsx`, com `Suspense fallback={null}`. Pequenos por seção, mas reduzem JS inicial e long tasks.

## 8. CSS não utilizado
- Tailwind já purga via `content` no `tailwind.config.ts`. Após remover os componentes UI não usados, o CSS final cai mais.

## Arquivos afetados
- `src/components/landing/Hero.tsx` (mobile sem shader)
- `src/components/landing/CustomCursor.tsx` (delegação)
- `src/hooks/use-mobile.tsx` (sem reflow)
- `src/pages/Index.tsx` (lazy sections)
- `src/components/landing/AuroraBackground.tsx` (deletar)
- `src/components/ui/{carousel,chart,sidebar,calendar,drawer,command,input-otp,form,resizable,pagination,menubar,context-menu,navigation-menu,hover-card}.tsx` (deletar os não usados após verificação)
- `package.json` (remover deps não usadas)
- `index.html` (Meta Pixel idle, fonts non-blocking, pesos reduzidos)
- `vite.config.ts` (ajustes finais)

## O que NÃO muda
- Layout, cores, tipografia visível, textos, seções, responsividade.
- Desktop: experiência idêntica (shader continua).
- Mobile: hero passa a usar fundo dourado CSS estático (visual pouquíssimo distinguível do shader em frame parado).

Aprove para eu aplicar.