# AGENTS.md — Posada El Nómada

## Proyecto

Landing web de **Posada El Nómada**, una moto-posada ubicada en La Serranita, Córdoba, Argentina.

El alojamiento recibe tanto a motociclistas como a parejas, familias y viajeros en general.

**Identidad:** cálida, natural, familiar y aventurera. Inspirada en las sierras de Córdoba y la cultura de viajar en moto, sin parecer un sitio exclusivo para motociclistas.

## Stack

- Astro
- Tailwind CSS
- DaisyUI
- TypeScript
- Diseño responsive y mobile-first

Respetar las versiones y configuraciones instaladas. No agregar dependencias sin necesidad.

## Identidad visual

- Colores tierra, verde oliva, beige, crema y tonos madera.
- Estética natural, moderna, acogedora y ligeramente rústica.
- Tipografía legible, con personalidad.
- Fotografías grandes de naturaleza, alojamiento y viajes.
- Animaciones sutiles y buen uso de espacios.
- Evitar diseños corporativos, recargados o excesivamente motociclistas.

## Contenido principal

**Nombre:** Posada El Nómada  
**Ubicación:** La Serranita, Córdoba, Argentina.

**Hero:**

POSADA EL NÓMADA · LA SERRANITA

# Tu parada en el camino.

Un lugar para descansar, compartir historias y disfrutar las sierras. Llegues en moto o como quieras, acá te esperamos.

**Reservas:** https://reservas.posadaelnomada.com.ar

Incluir acceso a reservas online y WhatsApp. No inventar teléfonos, tarifas, servicios ni características del alojamiento.

## Secciones

1. Navbar con navegación y botón de reservas.
2. Hero con imagen destacada y llamados a la acción.
3. Presentación de la posada y su identidad.
4. Alojamientos y comodidades.
5. Galería de fotografías.
6. Experiencia en La Serranita y sus alrededores.
7. Ubicación y contacto.
8. Footer.

Priorizar una experiencia visual atractiva y una navegación sencilla.

## Arquitectura

- Componentes Astro reutilizables en `src/components/`.
- Páginas en `src/pages/`.
- Layouts compartidos en `src/layouts/`.
- Recursos estáticos en `public/`.
- Evitar JavaScript del lado del cliente cuando Astro pueda resolverlo.
- Usar Tailwind para estilos y DaisyUI cuando aporte valor.
- Evitar CSS duplicado y componentes innecesarios.

## SEO y rendimiento

- HTML semántico.
- SEO local para La Serranita y Córdoba.
- Metadatos y Open Graph.
- Imágenes optimizadas y lazy loading cuando corresponda.
- Accesibilidad: contraste, textos alternativos y navegación por teclado.
- Excelente rendimiento móvil.
- Evitar dependencias pesadas.

## Reglas para OpenCode

1. Revisar la estructura existente antes de modificar archivos.
2. Respetar los componentes y estilos ya implementados.
3. Realizar cambios pequeños y concretos.
4. No reescribir archivos completos si no es necesario.
5. No instalar paquetes sin autorización.
6. No inventar contenido comercial.
7. Mantener textos visibles en español argentino, naturales y cercanos.
8. Evitar sobreingeniería y abstracciones innecesarias.
9. No ejecutar despliegues ni modificar configuraciones de producción sin autorización.
10. Al finalizar, resumir brevemente los archivos modificados y los cambios realizados.

## Objetivo

Construir una landing profesional, rápida y atractiva que transmita la experiencia de alojarse en las sierras, genere confianza y convierta visitantes en reservas.

**Concepto central:** un lugar donde cualquier viajero pueda hacer una parada, descansar y sentirse bienvenido.