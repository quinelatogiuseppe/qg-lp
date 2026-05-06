## Escopo

Três ajustes pontuais na landing page, sem mexer em outras seções/copy.

---

### 1. Remover o badge "Agência · High-Ticket · Marketing Digital"

Arquivo: `src/components/landing/Hero.tsx` (linhas 14–20)

Remover o bloco `<div className="mb-8 inline-flex ...">...</div>` por completo. O H1 passa a ser o primeiro elemento do bloco central. Nenhum outro ajuste de espaçamento (o `mb-8` sai junto com o badge).

---

### 2. Redesenhar os cards do Método R.E.A.L (referência: imagem enviada)

Arquivo: `src/components/landing/HowItWorks.tsx`

Mudanças:

- **Layout do card**: substituir o badge circular grande pela estrutura vista na referência:
  - Card retangular com `rounded-2xl`, fundo `glass` (mesmo padrão usado no FAQ), borda sutil `border-foreground/10`, padding generoso (`p-7 sm:p-8`).
  - Letra grande (`R / E / A / L`) renderizada **no canto superior direito**, em `font-display italic`, tamanho enorme (`text-7xl sm:text-8xl`), cor `text-gold/15` (marca d'água dourada).
  - Eyebrow `ETAPA 0X` em uppercase tracking-wide no topo esquerdo (substitui o número atual).
  - Título (`Raiz`, `Estrutura`...) em `font-display` (Playfair) tamanho `text-3xl`, abaixo do eyebrow.
  - Descrição em `text-sm text-muted-foreground` abaixo do título.
  - Remover ícones Lucide (`Search/LayoutGrid/Award/Gem`) — não aparecem na referência.
- **Connector line desktop**: remover (a referência não tem).
- **Efeito 3D tilt no hover**: criar novo hook `src/hooks/use-tilt.ts` que aplica `rotateX/rotateY` baseado na posição do mouse via `requestAnimationFrame`, com `perspective` no container e `transform-style: preserve-3d`. Reset suave em `mouseleave`. Desativado em `(hover: none)` (touch).
  - Aplicar via `ref={tiltRef}` em cada card, com `style={{ transformStyle: "preserve-3d", willChange: "transform" }}`.
  - Adicionar destaque sutil: ao hover, a borda muda para `border-gold/40` e a letra de fundo passa de `text-gold/15` para `text-gold/30` via `group-hover`. O primeiro card da referência mostra esse estado destacado.
  - Inclinação máxima: ~8 graus, com transição `transition-transform duration-200 ease-out`.

Estrutura final de cada card (esquemática):

```text
┌─────────────────────────────┐
│ ETAPA 01            R       │
│                             │
│ Raiz                        │
│                             │
│ Diagnóstico profundo do...  │
└─────────────────────────────┘
```

---

### 3. Ampliar o FAQ

Arquivo: `src/components/landing/FAQ.tsx`

Manter as 3 perguntas existentes e **adicionar 4 novas** (extraídas dos PDFs já enviados — qualificação, serviços, método). Total: 7 itens.

Novas perguntas (seguem o tom já estabelecido):

1. **Quanto tempo leva para ver os primeiros resultados?**  
   "Os primeiros sinais (aumento de visualizações, ligações e pedidos de rota no Google) costumam aparecer entre 60 e 90 dias. Resultados consistentes de ranking e autoridade exigem o ciclo completo de 6 meses do Método R.E.A.L."

2. **A Quinelato Giuseppe atende qualquer tipo de negócio?**  
   "Trabalhamos com empresas que têm ticket médio compatível com investimento em presença digital de longo prazo e que estejam dispostas a seguir o método. Negócios sem operação estruturada ou que buscam resultado imediato não são perfil."

3. **Vocês oferecem contrato fechado ou pacotes prontos?**  
   "Não trabalhamos com pacotes prontos. Cada operação é desenhada após o diagnóstico, com escopo, prazos e investimento definidos de forma personalizada para o seu modelo de negócio."

4. **O que acontece depois dos 6 meses iniciais?**  
   "Ao final do ciclo R.E.A.L, avaliamos a maturidade da presença digital e desenhamos a próxima fase: manutenção da autoridade, expansão para tráfego pago qualificado ou novos canais — sempre com base em dados reais da sua operação."

---

## Arquivos modificados

```text
src/components/landing/Hero.tsx          (remover badge)
src/components/landing/HowItWorks.tsx    (redesign cards + tilt)
src/components/landing/FAQ.tsx           (4 novas Q&A)
src/hooks/use-tilt.ts                    (novo hook 3D tilt)
```

Sem alterações em design tokens, tipografia global, copy de outras seções ou animações existentes.
