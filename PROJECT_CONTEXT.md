# FoodPlazaSaaS Project Context

Este archivo resume el contexto funcional, tecnico y visual de la landing para poder retomar el proyecto en otro entorno sin perder decisiones clave.

## Producto

FoodPlazaSaaS es una plataforma SaaS para:

- plazas gastronomicas
- food courts
- plazas de foodtrucks

La landing es un sitio comercial. No es la app operativa principal.

## Que hace la app principal

### Cliente final

- escanea un QR de mesa
- entra al sistema web por mesa
- ve restaurantes disponibles
- ve menus
- agrega productos al carrito
- realiza pedidos
- da seguimiento al estado del pedido
- recibe aviso cuando el pedido esta listo

### Restaurante

- inicia sesion
- administra menu
- recibe pedidos en cola
- cambia estados de pedidos
- gestiona pagos presenciales
- genera recibos simples
- ve estadisticas basicas

### Sistema

- multi-tenant por plaza
- realtime con SignalR
- pagos presenciales en el MVP
- recibos simples
- estadisticas basicas

## Objetivo de la landing

La landing debe:

- explicar que es FoodPlazaSaaS
- mostrar el problema que resuelve
- presentar beneficios y funcionalidades reales
- explicar como funciona
- mostrar planes comerciales
- convertir interesados en clientes
- dirigir al usuario a la app principal o al canal comercial

## Alcance obligatorio de la landing

Secciones incluidas:

- Hero
- Problema / oportunidad
- Solucion
- Funcionalidades por tipo de usuario
- Como funciona
- Beneficios
- Planes
- FAQ
- CTA final
- Footer

## Reglas de producto que no se deben romper

- La landing no debe convertirse en dashboard ni app de operacion.
- No inventar pagos online dentro del MVP actual.
- No inventar integraciones o funcionalidades tecnicas no definidas.
- Los planes comerciales pueden existir, pero sin prometer capacidades irreales.
- Si se menciona algo futuro, debe quedar claro que no pertenece al MVP actual.

## Stack y arquitectura

- Frontend: Astro
- TypeScript
- CSS global con variables
- Lucide Icons via `lucide-static`

No agregar dependencias innecesarias.

## Estructura actual

```text
src/
  components/
    landing/
    layout/
    ui/
  config/
    site.ts
  data/
    landing.ts
  layouts/
    MarketingLayout.astro
  pages/
    index.astro
  styles/
    global.css
```

## Archivos clave

- `src/config/site.ts`
  Contiene URLs externas, branding, SEO y modo de accion comercial.

- `src/data/landing.ts`
  Contiene todo el contenido editable de la landing.

- `src/styles/global.css`
  Contiene la paleta, layout global, responsive y dark mode.

- `src/layouts/MarketingLayout.astro`
  Maneja fuentes, SEO base e inicializacion/persistencia del tema.

- `src/components/layout/Navbar.astro`
  Header principal con CTAs y toggle de tema.

## Configuracion de URLs

No hardcodear enlaces nuevos si se puede evitar.

Variables existentes en `src/config/site.ts`:

- `APP_MAIN_URL`
- `BILLING_URL`
- `CONTACT_URL`
- `TERMS_URL`
- `PRIVACY_URL`
- `commercialActionMode`

Estado actual:

- `APP_MAIN_URL` placeholder
- `CONTACT_URL` placeholder
- `BILLING_URL` placeholder
- `commercialActionMode = "contact"`

Eso significa que por ahora la conversion comercial va por contacto/demo, no por checkout publico.

## Direccion visual actual

La landing sigue un enfoque:

- SaaS claro editorial
- contraste alto
- look profesional y limpio
- mobile first
- dark mode disponible

Decisiones ya implementadas:

- tipografia display con `Fraunces`
- tipografia de interfaz con `Manrope`
- tema claro y oscuro con variables CSS
- toggle de tema en header
- persistencia del tema en `localStorage`
- responsive para mobile y tablet

## Responsive

Ya se ajusto para:

- mobile pequeno
- mobile general
- tablet
- desktop

Si se toca el layout, revisar especialmente:

- header
- hero
- action buttons
- mockup visual
- grids de funcionalidades
- cards de pricing
- footer

## SEO y accesibilidad base

Ya implementado:

- `title`
- `meta description`
- `og:title`
- `og:description`
- estructura semantica base
- focus visible
- skip link

## Validacion tecnica esperada

Antes de cerrar cambios, correr:

```bash
npm run check
npm run build
```

El objetivo es:

- 0 errores
- 0 warnings
- build valido

## Comandos utiles

Instalar dependencias:

```bash
npm install
```

Levantar entorno local:

```bash
npm run dev
```

## Estado funcional actual

Ya implementado:

- landing comercial completa en Astro
- dark mode
- mejora de contraste en tema claro
- header ajustado
- responsive mobile y tablet
- README del proyecto

## Si se continua el proyecto despues

Mantener estas prioridades:

1. No romper el enfoque comercial de la landing.
2. No prometer funcionalidades fuera del MVP real.
3. Conservar URLs externas centralizadas en `site.ts`.
4. Mantener contenido editable en `landing.ts`.
5. Validar siempre con `npm run check` y `npm run build`.

## Posibles siguientes pasos

- reemplazar placeholders por URLs reales
- adaptar el look a referencias visuales nuevas
- agregar imagenes reales o mockups de producto si el negocio las entrega
- refinar copy comercial o pricing final
- agregar pagina legal real si luego se necesita
