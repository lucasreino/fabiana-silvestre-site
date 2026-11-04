# Site — Fabiana Silvestre, Psicóloga Clínica

Site institucional (one-page) hospedado no **Cloudflare Workers** com Static Assets.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar

```bash
npx wrangler login
npm run deploy
```

Ou conecte este repositório no painel da Cloudflare (Workers & Pages → Create → Import a repository) para deploy automático a cada push na `main`.

## Estrutura

- `public/index.html` — conteúdo da página
- `public/styles.css` — estilos (paleta terrosa em `:root`)
- `public/img/` — fotos (substituir o placeholder do hero por `img/fabiana.jpg`)
- `wrangler.jsonc` — configuração da Cloudflare

## Observações éticas (CFP)

Sem depoimentos de pacientes, sem promessa de resultados, CRP visível em toda a página.
