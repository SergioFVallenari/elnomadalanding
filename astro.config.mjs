import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://posadaelnomada.com.ar',
  vite: {
    plugins: [tailwind()],
  },
});
