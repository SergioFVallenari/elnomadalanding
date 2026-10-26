import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://posadaelnomada.com.ar',
  // Evita que la auditoría vuelva a consultar todas las imágenes al cambiar el carrusel.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwind()],
  },
});
