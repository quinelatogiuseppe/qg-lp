## Escopo

Substituir o `AuroraBackground` (CSS) da Hero por um background animado em WebGL (Three.js) baseado no shader fornecido, com paleta retonalizada para a identidade visual da LP (preto profundo + dourado `#C5A059`), em vez do azul/púrpura aurora do snippet original.

Sem alterações de copy, layout, CTAs ou tipografia da Hero.

---

### 1. Dependências

Instalar:

```text
three
@types/three (dev)
```

`lucide-react` já está no projeto. Não usar `tw-animate-css` nem alterar o Tailwind (estamos em Tailwind 3, não 4 — a instrução do snippet é genérica).

---

### 2. Novo componente: `src/components/landing/ShaderBackground.tsx`

Componente client-side que monta um canvas Three.js full-bleed (`absolute inset-0`), com:

- `OrthographicCamera` + `PlaneGeometry(2,2)` + `ShaderMaterial`
- `iTime` e `iResolution` como uniforms
- `requestAnimationFrame` loop, cleanup completo no unmount (cancel frame, remove listener, `dispose()` geometry/material/renderer, remove canvas do DOM)
- `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))` para performance
- Tamanho baseado no **container pai** (`clientWidth/clientHeight`), não em `window`, para o canvas preencher só a Hero
- Respeitar `prefers-reduced-motion`: se reduzido, renderiza um único frame estático e não anima

**Retonalização para a identidade dourada:**

No fragment shader original, a cor por iteração é:

```glsl
vec4 auroraColors = vec4(
  0.1 + 0.3 * sin(...),   // R baixo
  0.3 + 0.5 * cos(...),   // G médio
  0.7 + 0.3 * sin(...),   // B alto → puxa azul/roxo
  1.0
);
```

Trocar por uma paleta dourada (gold `#C5A059` ≈ `vec3(0.77, 0.63, 0.35)`, gold-bright ≈ `vec3(0.85, 0.72, 0.45)`, gold-deep ≈ `vec3(0.55, 0.42, 0.22)`):

```glsl
vec3 goldA = vec3(0.85, 0.72, 0.45);  // gold-bright
vec3 goldB = vec3(0.77, 0.63, 0.35);  // gold
vec3 goldC = vec3(0.40, 0.28, 0.12);  // deep amber
float t = 0.5 + 0.5 * sin(i * 0.25 + iTime * 0.4);
vec3 col = mix(goldC, mix(goldB, goldA, t), 0.5 + 0.5 * cos(i * 0.3 + iTime * 0.3));
vec4 auroraColors = vec4(col, 1.0);
```

Manter a estrutura de loop, fbm, tail noise e tonemap (`tanh(pow(o/100.0, 1.6))`). Reduzir o multiplicador final de `1.5` para `~1.1` para não estourar o branco e preservar o look "dark luxury".

Adicionar um leve fundo preto base no fragment (`o.rgb += vec3(0.0)` — manter), e fora do shader, sobrepor camadas para integrar com o resto da seção:

- Vinheta radial preta nas bordas (mesma do `AuroraBackground` atual)
- Fade superior/inferior para `bg-background` (transição suave para a próxima seção)
- Camada `.grain` reaproveitada do `index.css`

---

### 3. Integração na Hero

`src/components/landing/Hero.tsx`:

- Remover import e uso de `AuroraBackground`
- Adicionar `<ShaderBackground />` no mesmo lugar (primeiro filho dentro da `<section>`, com `pointer-events-none`)
- Manter intactos: H1, subtítulo, CTAs, trust line, scroll indicator, IDs, classes do container

O `AuroraBackground.tsx` continua existindo no projeto (não é removido) — só deixa de ser usado na Hero.

---

### 4. Fallback / Performance

- Canvas com `pointer-events-none` para não interferir nos cliques
- `aria-hidden="true"` no wrapper
- Em telas muito pequenas (`< 640px`) ou se `prefers-reduced-motion: reduce`, render estático (1 frame) — economiza bateria mobile
- Renderer com `alpha: false`, `antialias: true`, `powerPreference: "high-performance"`

---

## Arquivos

```text
src/components/landing/ShaderBackground.tsx   (novo)
src/components/landing/Hero.tsx               (trocar background)
package.json                                  (deps: three, @types/three)
```

Sem mudanças em `index.css`, `tailwind.config.ts`, design tokens ou demais seções.