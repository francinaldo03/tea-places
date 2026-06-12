# TEAcolhe Turismo

Protótipo de aplicativo React que lista locais turísticos da cidade com indicador de tranquilidade, para auxiliar pessoas com TEA e seus tutores a planejar visitas.

## Tecnologias

- React 18 + TypeScript
- Vite
- TailwindCSS

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `tea-places`)
2. Abra `vite.config.ts` e confirme que `base` é `/tea-places/` (ou o nome do seu repositório)
3. Execute:

```bash
git init
git remote add origin https://github.com/SEU_USUARIO/tea-places.git
git add .
git commit -m "feat: initial commit"
git push -u origin main
npm run deploy
```

O deploy publica a pasta `dist` no branch `gh-pages`. Ative o GitHub Pages nas configurações do repositório apontando para esse branch.
