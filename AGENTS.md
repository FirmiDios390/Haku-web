# AGENTS.md — HAKU HOSTEL

## Contexto del proyecto

HAKU HOSTEL es una web promocional de un hostel real ubicado en Miraflores, Lima, Perú.

Su objetivo es presentar el alojamiento, transmitir confianza, mostrar habitaciones y espacios reales, facilitar la consulta de información importante y dirigir a los huéspedes al sistema externo de reservas.

El proyecto ya existe y funciona. No debe reconstruirse desde cero salvo autorización explícita.

## Dirección de diseño

La web debe tener una identidad visual propia, moderna, editorial, cálida y acogedora.

El diseño debe reflejar el carácter real de HAKU HOSTEL y aprovechar elementos reconocibles como su logo azul, la entrada con arco azul, los ladrillos y las plantas.

Paleta de referencia:
- Azul HAKU: #0045FF
- Blanco cálido: #F7F4EE
- Negro suave: #17191F
- Terracota: #C47C61
- Arena: #E7E1D7

Respetar la tipografía y el sistema visual existente cuando funcionen correctamente.

## Evitar diseños genéricos

No utilizar automáticamente patrones visuales típicos de sitios generados con IA.

Evitar:
- Exceso de tarjetas idénticas.
- Iconos decorativos sin utilidad.
- Gradientes y sombras innecesarios.
- Animaciones exageradas.
- Espacios vacíos desproporcionados.
- Secciones repetitivas.
- Textos publicitarios genéricos.
- Componentes visuales que no aporten información.
- Diseños que parezcan plantillas estándar de hoteles.

Priorizar una composición intencional, una jerarquía tipográfica clara, fotografías reales, espaciado consistente y decisiones de diseño justificables.

No significa eliminar todas las tarjetas, sombras o animaciones. Utilizarlas solamente cuando mejoren la experiencia.

## Experiencia de usuario

Diseñar mobile-first.

Las funciones principales deben ser cómodas en celulares pequeños, tablets y computadoras.

Priorizar:
- Navegación clara.
- Acceso fácil a reservas.
- Información importante visible.
- Accesibilidad.
- Buen contraste y legibilidad.
- Botones cómodos para pantallas táctiles.
- Rendimiento y carga rápida.

## Contenido

No inventar habitaciones, instalaciones, servicios, precios, reseñas, reglas, políticas ni fotografías.

Reutilizar la información real existente.

Si falta algún dato, señalarlo claramente y solicitar confirmación antes de publicarlo.

Conservar el soporte de idiomas existente.

## Sistema de reservas

La web utiliza un enlace externo hacia BananaDesk.

No construir un motor de reservas propio.

No mostrar innecesariamente el nombre del proveedor al huésped.

La información importante debe poder consultarse antes de continuar al sistema externo.

No presentar una casilla de aceptación como prueba contractual si no existe un mecanismo real para registrar esa aceptación.

## Calidad del código

- Respetar la arquitectura y las tecnologías existentes.
- Reutilizar componentes cuando tenga sentido.
- Evitar dependencias innecesarias.
- Mantener el código legible y mantenible.
- No duplicar reglas, enlaces ni configuraciones.
- Respetar las prácticas de accesibilidad.
- Verificar el comportamiento responsive.
- Ejecutar las comprobaciones disponibles.

## Forma de trabajo

Antes de realizar cambios importantes:
1. Inspeccionar la estructura existente.
2. Identificar componentes y archivos afectados.
3. Explicar brevemente la propuesta.
4. Esperar aprobación cuando se solicite.

No modificar funcionalidades ajenas a la tarea.

No hacer push, merge, despliegues ni cambios de infraestructura sin autorización explícita.

El usuario debe poder revisar el resultado visual antes de aprobarlo definitivamente.
