
# Landing Page Quinelato Giuseppe — High-Conversion

Página única (`/`) em React + Tailwind, totalmente responsiva, com identidade "Tech-Lux / Modern Editorial" e foco em direcionar leads qualificados para o WhatsApp.

---

## 1. Design System (tailwind.config.ts + index.css)

**Paleta semântica (HSL):**
- `--background` Dark Charcoal profundo `#050505`
- `--surface` elevado `#0B0B0C` (para contraste sutil)
- `--gold` Dourado QG `#C5A059` + `--gold-soft` (10% opacidade) para glows
- `--foreground` off-white `#F5F2EC`
- `--muted-foreground` cinza editorial
- `--border-glass` branco a 8% para bordas finíssimas iluminadas

**Tipografia (Google Fonts):**
- `font-sans` → Plus Jakarta Sans (corpo, UI, subtítulos)
- `font-display` → Playfair Display *Italic* (palavras-chave em H1/H2)
- Tracking negativo nos títulos grandes, leading apertado — vibe editorial.

**Tokens utilitários customizados:**
- `.glass` → `bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]`
- `.glow-gold` → box-shadow dourado difuso para hover
- `.text-gradient-gold` → gradiente dourado em palavras de destaque
- `.grain` → overlay SVG noise sutil sobre o hero

**Animações (tailwind keyframes):**
- `fade-up`, `fade-in`, `aurora-drift` (gradiente radial dourado se movendo lentamente), `marquee`, `glow-pulse`.
- Scroll reveal via IntersectionObserver hook (`useReveal`) aplicando `fade-up`.

---

## 2. Estrutura da Página

```text
┌─ Header (glass, fixo) ─────────────────────────────┐
│  [Logo QG]                  [CTA WhatsApp dourado] │
├─ Hero (100vh) ─────────────────────────────────────┤
│  Aurora dourada radial + grain animado             │
│  H1 editorial com itálico serifado                 │
│  Subtítulo + CTA principal magnético               │
├─ Conexão & Dor                                     │
├─ Como Funciona (4 passos numerados)                │
├─ Serviços (2 cards glass lado a lado)              │
├─ Para quem É / Para quem NÃO é (2 colunas)         │
├─ Marquee "A consistência é a assinatura..."        │
├─ FAQ (accordions glass)                            │
├─ CTA Final + Footer                                │
└─ Sticky CTA bar (somente mobile)                   ┘
```

### Hero
- Background: gradiente radial `--gold-soft` no centro + camada `grain` animada + leve "aurora-drift".
- H1: *"O tráfego pago não vai salvar a sua empresa."* (sans bold) + nova linha *"Uma presença digital de* ***excelência****, sim."* (palavra "excelência" em Playfair italic com gradiente dourado).
- Subtítulo conforme briefing.
- CTA primário: pill dourado, texto preto, `glow-pulse` discreto, magnético.
- CTA secundário (ghost): "Ver como funciona" → scroll suave.

### Conexão & Dor
- Bloco editorial centralizado, max-width estreito (medida de leitura), título com palavra "escalar" em itálico serifado dourado.

### Como Funciona (nova seção)
4 passos em linha (vira coluna no mobile), conectados por uma linha fina dourada: **01 Diagnóstico → 02 Estruturação → 03 Otimização → 04 Escala**. Cada passo é um mini-card glass com ícone de linha fina.

### Serviços
Dois cards glass grandes, lado a lado, com:
- Tag dourada superior ("Plano 6 meses" / "Personalizado")
- Título + descrição do briefing
- Bloco de investimento destacado (Card 1) / "Sob diagnóstico" (Card 2)
- Botão "Quero esse plano" → WhatsApp com mensagem específica do serviço
- Hover: card sobe 4px, borda dourada acende, glow dourado aparece atrás.

### Para quem É / Para quem NÃO é
Duas colunas glass:
- ✓ Empresas com operação validada, ticket médio relevante, prontas para escalar.
- ✕ Quem busca "fórmula mágica", pacote pronto ou resultado em 7 dias.
(Texto final pode ser ajustado por você antes do build.)

### Social Proof / Marquee
Faixa horizontal em loop infinito (`marquee`) com a frase *"A consistência é a assinatura da excelência."* repetida, separada por um ponto dourado. Tipografia mista sans + serif italic.

### FAQ
Accordions com fundo glass, ícone "+" dourado que rotaciona, conteúdo das 3 perguntas do briefing. Marcação `<FAQPage>` schema.org via JSON-LD para otimização IA/SEO.

### Footer
- Wordmark central + linha fina horizontal dourada
- CTA final grande: "Agendar Diagnóstico Estratégico no WhatsApp"
- Linha inferior: © 2026 Quinelato Giuseppe • Todos os direitos reservados

### Sticky Mobile CTA
Barra fixa no rodapé (apenas `<md`) com botão WhatsApp dourado full-width, glass acima.

---

## 3. Microinterações Premium

- **Cursor customizado**: ponto dourado pequeno + anel maior com lag, vira cor de destaque sobre links/botões. Desativado em touch devices.
- **Magnetic buttons**: CTAs principais "puxam" o cursor (~12px) com transição spring.
- **Scroll reveal**: todo bloco principal entra com `fade-up` ao cruzar 15% do viewport, stagger entre filhos.
- **Hover cards**: translate-y -4px + borda `--gold` acesa + glow externo.
- **Botões**: glow dourado pulsante sutil + brilho de varredura no hover.

---

## 4. Integração WhatsApp

Todos os CTAs apontam para `https://wa.me/<NUMERO>?text=<mensagem>` com mensagens contextuais:
- Hero / Header / Footer → "Olá, quero falar com um especialista da Quinelato Giuseppe."
- Card GMB → "Quero o plano de Dominação no Google Meu Negócio."
- Card Tráfego → "Quero agendar o diagnóstico de Tráfego Pago."

> Pendente: você me envia o **número** + **logo SVG/PNG**. Até lá uso placeholders bem identificados (`WHATSAPP_NUMBER`, `/logo-qg.svg`) — troca em 1 edição.

---

## 5. Performance & SEO

- Fontes via `<link rel="preconnect">` + `display=swap`.
- Imagens otimizadas, sem libs pesadas de animação (uso CSS + IntersectionObserver + um util leve para magnetic).
- Meta tags: title, description, OG image dourada, favicon.
- JSON-LD `Organization` + `FAQPage`.
- Lighthouse alvo: 95+ em performance e acessibilidade.

---

## 6. Detalhes Técnicos (para referência)

- Stack atual: React 18 + Vite + Tailwind + shadcn (já tem Accordion, Button — reaproveitamos).
- Novos componentes em `src/components/landing/`: `Header`, `Hero`, `AuroraBackground`, `PainSection`, `HowItWorks`, `Services`, `ForWhom`, `Marquee`, `FAQ`, `FinalCTA`, `Footer`, `StickyMobileCTA`, `CustomCursor`, `MagneticButton`.
- Hooks: `useReveal`, `useMagnetic`, `useIsTouch`.
- `index.css` recebe os tokens HSL e utilitários (`.glass`, `.glow-gold`, `.grain`, `.text-gradient-gold`).
- `tailwind.config.ts` ganha `fontFamily.display`, cor `gold`, keyframes/animations novos.
- `index.html` recebe fontes, meta tags, JSON-LD.
- Página única renderizada em `src/pages/Index.tsx` montando os blocos na ordem acima.
