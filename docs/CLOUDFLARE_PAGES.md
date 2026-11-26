# Publicación de HAKU HOSTEL en Cloudflare Pages

## Validación local

Usar Node.js 24 y las dependencias del lockfile, incluidas las opcionales de Next.js. Ejecutar `npm run typecheck`, `npm run build` y `npm run test:export`. El build genera `out/` con HTML, fotos WebP responsive, sitemap, robots y cabeceras.

- `npm start` sirve `out/` en `127.0.0.1:4173` y ejecuta el mismo handler de idioma que Pages. `npm start -- --static-only` sirve las entradas sin Functions. Cambiar `PORT` permite ejecutar ambos en paralelo. Este servidor replica el comportamiento necesario para la prueba local. Las reglas del CDN y del panel se confirman en una vista previa autorizada.
- Sin `NEXT_PUBLIC_SITE_URL`, las canónicas locales usan `http://localhost:3000` y las páginas salen con `noindex`. Para una prueba de producción, definir un origen HTTPS de prueba en esa variable antes de compilar. El valor no lleva ruta, consulta ni fragmento.
- Revisar fotos y encuadres en escritorio, tablet y móvil. Probar enlaces directos, recargas, navegación con teclado, Escape, movimiento reducido y el acceso al motor externo. Verificar carga del iframe con el origen definitivo. La prueba de pago requiere un entorno autorizado del proveedor.
- Revisar [los datos pendientes de publicación](PENDIENTES_VALIDACION.md) antes de hacer indexable el contenido.

## Panel de Cloudflare y dominio

1. Activar 2FA en Cloudflare y GoDaddy y guardar los códigos de recuperación. Conservar una copia de los registros DNS y de los ajustes actuales de Netlify.
2. Configurar Pages con `npm run build`, directorio de salida `out` y `NODE_VERSION=24`. Definir `NEXT_PUBLIC_SITE_URL` con el origen HTTPS canónico en los entornos que se compilen en Pages. Los handlers viven en `functions/` en la raíz del proyecto. El archivo generado `out/_routes.json` limita sus invocaciones a `/`, `/lima` y `/lima/`.
3. En **Settings → Runtime**, seleccionar **Fail open**. Confirmar que las rutas con idioma explícito y los archivos estáticos no invocan Functions. La protección de las previews privadas debe hacerse en Cloudflare Access, por fuera de los handlers de idioma. Comprobar `X-Robots-Tag: noindex` en previews y en el hostname público de Pages.
4. Mantener el dominio registrado en GoDaddy. Para el dominio raíz, añadir la zona a Cloudflare y, al autorizar el corte, delegar los nameservers desde GoDaddy. Para usar solo un subdominio con DNS externo, asociarlo primero en Pages y configurar después el CNAME correspondiente. Verificar registros MX/TXT, certificado, redirecciones y hostname canónico. Forzar HTTPS tras verificar el certificado. Dejar HSTS para después de comprobar también la ruta de recuperación por HTTPS.
5. Verificar DDoS y el Free Managed Ruleset. Empezar sin desafíos globales. Si el tráfico lo requiere, limitar la regla de rate limiting a las entradas de idioma y revisar falsos positivos. En AI Crawl Control, mantener accesible OAI-SearchBot y alinear la decisión sobre GPTBot con `robots.txt`.
6. Probar CSP Report-Only en la preview y revisar la consola durante el uso normal. El build calcula hashes de los scripts inline exportados. Esta versión no envía reportes a un colector externo. La CSP aplicada y HSTS requieren una validación separada. `_headers` cubre los archivos estáticos y los handlers adjuntan sus propias cabeceras.
7. Ya en producción, verificar la propiedad de dominio en Search Console mediante DNS, enviar el sitemap y revisar las cuatro URLs. Observar errores de Functions, eventos del WAF y estado de Cloudflare. Conservar Netlify como respaldo hasta que se compruebe la recuperación de una versión estable en Pages y se valide el regreso al hosting anterior por HTTPS.

## Analítica posterior

La web deja preparados `booking_modal_open`, `booking_engine_open` y `booking_external_click`. Cada interacción solo se comunica si existe una etiqueta `gtag` inicializada. No se carga GA4 en esta fase. La integración futura deberá definir consentimiento, visitas de navegación sin duplicados, orígenes de CSP y una propiedad de prueba para DebugView. El informe en Looker Studio puede usar el conector de GA4. Las reservas confirmadas requieren una señal oficial de BananaDesk.
