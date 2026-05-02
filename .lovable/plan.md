## Escopo

Três alterações pontuais na LP. Nada mais será tocado.

### 1. Logo oficial + tipografia conforme manual de marca

**Manual de marca (resumo do PDF enviado):**
- Monograma "QG" dourado entrelaçado é o selo da marca — deve ser usado com reverência, sem efeitos.
- Tipografia institucional: **Garamond Premier Pro** para títulos/destaques (substituto web próximo: **Cormorant Garamond**, serifa clássica de mesma família visual) e **Helvetica Neue** para subtítulos/apoio (substituto web: **Inter**, já neutra geométrica equivalente).
- Fundo escuro é a aplicação preferencial — nossa LP já está nessa diretriz.

**Ações:**
- Copiar `user-uploads://Logo-quinelato-giuseppe-2026.png` para `src/assets/logo-qg.png`.
- Reescrever `src/components/landing/Logo.tsx`:
  - Substituir o monograma CSS atual (círculo com "QG" em Playfair) pelo PNG oficial dourado entrelaçado, respeitando a margem de respiro do manual.
  - Trocar a wordmark "Quinelato·Giuseppe" do tratamento Playfair italic atual para **Cormorant Garamond** (peso 500, tracking levemente aberto), refletindo o Garamond Premier Pro institucional. O ponto dourado entre as palavras é removido para honrar o manual ("nunca distorça/aplicar efeitos").
  - Subtítulo passa a "MARKETING DIGITAL" em Inter, uppercase, tracking 0.32em (mantém o ritmo editorial existente em Helvetica Neue).
- Adicionar **Cormorant Garamond** ao `<link>` do Google Fonts em `index.html` (Inter já vem incluso via Plus Jakarta — adicionaremos Inter também para o subtítulo institucional).
- Estender `tailwind.config.ts` com `fontFamily.serif: ['"Cormorant Garamond"', 'serif']` e `fontFamily.institutional: ['Inter', 'sans-serif']` para uso exclusivo da wordmark — sem mexer no resto da tipografia da LP.

> Observação: a diretriz pediu para alterar **somente** a logo e sua tipografia. Os demais títulos da LP (Playfair italic dourado) permanecem inalterados.

### 2. Substituir "Marketing of Excellence" → "MARKETING DIGITAL"

Três ocorrências encontradas, todas serão atualizadas para `MARKETING DIGITAL`:
- `src/components/landing/Logo.tsx` linha 27 (subtítulo da wordmark)
- `src/components/landing/Footer.tsx` linha 45 (linha inferior do rodapé)
- `src/components/landing/Hero.tsx` linha 18 (eyebrow do hero: "Agência · High-Ticket · MARKETING DIGITAL")

### 3. WhatsApp oficial

- Atualizar `WHATSAPP_NUMBER` em `src/lib/site.ts` de `5500000000000` para **`5527996271916`** (55 = Brasil, 27 = ES, 996271916).
- Todos os CTAs (Header, Hero, Services, Footer, StickyMobileCTA) já consomem essa constante — propagação automática.

## Arquivos modificados

```text
src/lib/site.ts                       (1 linha — número)
src/components/landing/Logo.tsx       (reescrita: PNG + tipografia + texto)
src/components/landing/Footer.tsx     (1 linha — texto)
src/components/landing/Hero.tsx       (1 linha — texto)
index.html                            (link Google Fonts: + Cormorant Garamond + Inter)
tailwind.config.ts                    (+ fontFamily.serif e .institutional)
src/assets/logo-qg.png                (novo — copiado do upload)
```

Nenhuma outra parte da LP — seções, animações, cores, copy, espaçamentos — será alterada.