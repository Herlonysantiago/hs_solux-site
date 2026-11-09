# Decisões do site HS Solux

## 2026-11-09 — Reformulação institucional

**Contexto:** o site apresentava a HS Solux de forma visualmente coerente, mas com conteúdo genérico, poucas evidências sobre sua atuação e lacunas de acessibilidade e SEO.

**Decisão:** manter a arquitetura estática em HTML, CSS e JavaScript e reformular a experiência como uma página institucional completa. A nova estrutura apresenta proposta de valor, áreas gerais de atuação, processo de trabalho, informações sobre a marca e contato por e-mail.

**Motivo:** a arquitetura atual é leve, segura e suficiente para o estágio do site. O ganho prioritário está na clareza da mensagem, na experiência móvel, na acessibilidade e na indexação.

**Consequências:**

- O domínio e o contato por e-mail são preservados.
- Nenhum produto é apresentado como lançado ou disponível sem confirmação.
- A identidade passa a usar apenas `assets/hs-mark.svg` como símbolo oficial.
- O site inclui URL canônica, metadados sociais, dados estruturados, `robots.txt` e `sitemap.xml`.
- O menu móvel passa a gerenciar foco e bloqueio de rolagem.

**Pendências:**

- Confirmar nomes, descrições, imagens e disponibilidade de produtos antes de criar páginas próprias.
- Avaliar redirecionamento definitivo de `www` para o domínio principal.
- Avaliar uma camada configurável, como Cloudflare, caso sejam necessários cabeçalhos HTTP avançados de segurança.
