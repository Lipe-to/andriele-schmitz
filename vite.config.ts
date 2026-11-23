import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { defineConfig } from 'vite';
import { App } from './src/App.tsx';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'render-static-page',
      transformIndexHtml(html) {
        return html.replace('<!--app-->', () => renderToStaticMarkup(createElement(App)));
      },
    },
  ],
});
