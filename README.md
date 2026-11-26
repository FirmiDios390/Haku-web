# HAKU HOSTEL

Prototipo local bilingüe de la web oficial, desarrollado con Next.js, React, TypeScript, Lucide y CSS personalizado.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:3000](http://127.0.0.1:3000).

Para verificar y servir la exportación estática con Node.js 24:

```bash
npm run typecheck
npm run build
npm run test:export
npm start
```

Abre [http://127.0.0.1:4173](http://127.0.0.1:4173) para probar el HTML de `out/` con el mismo handler de idioma que se usará en Pages. Para probar en el mismo puerto sin ese handler, detén el servidor y ejecuta `npm start -- --static-only`. `npm run dev` muestra la entrada estática en `/`.

Los comandos de desarrollo y compilación generan variantes de fotografía con el codificador incluido en Next.js. Conserva las dependencias opcionales del lockfile para que el codificador disponga de su binario nativo. Configuración de producción y pruebas en [Cloudflare Pages](docs/CLOUDFLARE_PAGES.md).

## Actualizar contenido

- El enlace temporal de BananaDesk está en [`src/config/site.ts`](src/config/site.ts), en `bookingUrl`. Instagram ya apunta a la cuenta oficial `@haku.hostel`.
- En el mismo archivo se editan dirección, Google Maps, fotografías, habitaciones, premio, fuentes y estado de cada sede. Lima está activa y Cusco permanece oculto.
- Las fotografías originales están en `public/images`. Para sustituirlas, coloca el archivo nuevo allí y actualiza su ruta en la configuración.
- Los textos en español e inglés se mantienen en [`src/i18n/dictionaries.ts`](src/i18n/dictionaries.ts).
- En Pages, `/` y `/lima` negocian el idioma y redirigen a `/es` o `/en`. Ambas entradas tienen un selector estático como respaldo. Las páginas de habitaciones son `/es/habitaciones` y `/en/rooms`.
- La landing reúne experiencia, resumen de habitaciones, espacios, galería, ubicación, reglas y reserva. Las reseñas están preparadas en configuración pero desactivadas hasta contar con contenido aprobado.
- Antes de publicar, revisar los datos operativos pendientes en [Pendientes de validación](docs/PENDIENTES_VALIDACION.md).
- Los iconos de interfaz provienen de Lucide, bajo licencia ISC. El logo y el icono de Instagram se mantienen como recursos propios.

Los briefs recibidos en este checkout están en `docs/PROJECT_BRIEF.txt` y `docs/DESIGN_BRIEF.txt`; el logo oficial está en `public/logo.png`. Si se publica más adelante, define `NEXT_PUBLIC_SITE_URL` con el dominio definitivo para los metadatos sociales.
