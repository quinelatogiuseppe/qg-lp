## Escopo

Ajustar **apenas** a seção `HowItWorks` (`src/components/landing/HowItWorks.tsx`) para apresentar o **Método R.E.A.L** — o método oficial do QG conforme PUV enviada. Nenhuma outra seção da LP será tocada.

## Mudanças em `src/components/landing/HowItWorks.tsx`

### 1. Eyebrow e título

- Eyebrow: `O método` → **`Método R.E.A.L`**
- Título mantém o tom editorial atual, ajustado para introduzir o acrônimo:
  > "O método do QG para **transformar perfis em ativos de aquisição**."
  (com "transformar perfis em ativos de aquisição" em Playfair italic dourado, mantendo o padrão visual existente)

### 2. Os 4 passos (substituir conteúdo atual)

| # | Letra | Título | Texto | Ícone (lucide) |
|---|-------|--------|-------|----------------|
| 01 | **R** | Raiz | Diagnóstico profundo do perfil e identificação dos fatores que impedem o negócio de aparecer no Google. | `Search` |
| 02 | **E** | Estrutura | Otimização completa do Google Business Profile para gerar confiança, relevância e profissionalismo. | `LayoutGrid` |
| 03 | **A** | Autoridade | Construção de reputação com avaliações, conteúdo e sinais locais que comprovam excelência. | `Award` |
| 04 | **L** | Lapidação | Ajustes contínuos para subir no ranking e sustentar crescimento previsível mês a mês. | `Gem` |

### 3. Tratamento visual do badge numérico

Hoje o badge mostra apenas `01..04` em Playfair dourado. Para fortalecer o acrônimo R.E.A.L sem quebrar o ritmo visual:

- Letra grande (R / E / A / L) em **Playfair italic dourado**, no centro do círculo.
- Numeração `01..04` movida para um micro-rótulo acima da letra (Inter, uppercase, tracking 0.32em, `text-muted-foreground`).
- Ícone permanece abaixo, mantendo a hierarquia atual.

### 4. Reforço sutil do acrônimo (microcopy)

Logo abaixo do título, adicionar uma linha de apoio discreta:
> `R.E.A.L — Raiz · Estrutura · Autoridade · Lapidação`

Estilo: Inter, uppercase, tracking 0.32em, cor `text-muted-foreground`, separador `·` em `text-gold/60`. Aparece centralizada entre o título e a grade de passos.

## Arquivos modificados

```text
src/components/landing/HowItWorks.tsx   (única alteração)
```

Imports atualizados de `lucide-react`: trocar `Compass, Rocket, Compass, LineChart` pelo conjunto novo (`Search, LayoutGrid, Award, Gem`).

Nenhum token de design, animação, copy de outras seções, cor ou espaçamento global será modificado.