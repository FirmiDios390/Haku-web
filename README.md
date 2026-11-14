# HAKU HOSTEL

Primera versión local de la web oficial, desarrollada con Next.js, React, TypeScript y CSS personalizado.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:3000](http://127.0.0.1:3000).

Para verificar la compilación:

```bash
npm run typecheck
npm run build
```

## Actualizar contenido

- El enlace temporal de BananaDesk está en [`src/config/site.ts`](src/config/site.ts), en `bookingUrl`. Instagram ya apunta a la cuenta oficial `@haku.hostel`.
- En el mismo archivo se editan nombre, descripción y datos de cada sede en `destinations`. Lima está activa y Cusco queda preparado sin contenido inventado.
- Las fotografías originales están en `public/images`. Para sustituirlas, coloca el archivo nuevo allí y actualiza su ruta en la configuración.
- La portada (`/`) presenta los destinos. La página de Lima (`/lima`) reúne habitaciones, espacios, galería, ubicación, opiniones y contacto. La página de Cusco se añadirá cuando exista contenido oficial.
- El carrusel de la portada está preparado en [`src/components/MediaCarousel.tsx`](src/components/MediaCarousel.tsx). Añade sus fotografías oficiales a [`src/config/media.ts`](src/config/media.ts); mientras la lista esté vacía muestra un espacio editorial sin imágenes ficticias.
- La dirección, el teléfono y el correo permanecen vacíos hasta recibir los datos oficiales. El mapa y las opiniones reales se incorporarán entonces.

Los briefs recibidos en este checkout están en `docs/PROJECT_BRIEF.txt` y `docs/DESIGN_BRIEF.txt`; el logo oficial está en `public/logo.png`. Si se publica más adelante, define `NEXT_PUBLIC_SITE_URL` con el dominio definitivo para los metadatos sociales.
