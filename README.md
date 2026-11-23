# Andriele Schmitz | Corretora de Imóveis

Landing page em React e TypeScript, com CSS responsivo. O Vite transforma os componentes React em HTML estático durante o build. A página usa links nativos para a navegação e os contatos.

## Desenvolvimento local

Use Node.js 24 e a versão do pnpm indicada em `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm check` verifica os tipos. `pnpm build` gera o site em `dist/` e `pnpm preview` serve esse build localmente.

## Onde editar

- `src/content.ts` reúne os contatos, os textos de marca, os itens de navegação e os passos da seção Possibilidades.
- `src/App.tsx` reúne as seções e os demais textos da página.
- `src/components/` contém a marca, o cabeçalho e o rodapé.
- `src/styles/site.css` define as cores, a tipografia e os layouts responsivos.
- `public/media/` contém os SVGs do Figma e as fotos em WebP. Mantenha as larguras em `srcSet` coerentes ao substituir uma imagem.
- `src/components/Hero.tsx` usa a mesma foto em duas camadas. Ao trocar a foto de abertura, atualize também as máscaras `casa-silhueta*.webp`. Mantenha o recorte alinhado ao telhado e opaco abaixo dele para que o título desapareça de forma contínua.
- `index.html` contém o título e a descrição da página para busca e compartilhamento.

## Publicação

O GitHub Actions verifica os tipos, gera o site e publica `dist/` no GitHub Pages a cada push para `main`.
