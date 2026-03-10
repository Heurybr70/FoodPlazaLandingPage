# FoodPlazaSaaS Landing Page

Landing page comercial construida con Astro para presentar FoodPlazaSaaS, una plataforma SaaS orientada a plazas gastronomicas, food courts y plazas de foodtrucks.

El objetivo del sitio es comunicar la propuesta de valor del producto, explicar el flujo principal del MVP, presentar funcionalidades y planes comerciales, y dirigir a los usuarios interesados hacia la app principal o el canal de contacto comercial.

## Stack

- Astro
- TypeScript
- CSS global con variables de tema
- Lucide Icons via `lucide-static`

## Que incluye

- Hero comercial con propuesta de valor y CTAs
- Secciones de problema, solucion, funcionalidades, beneficios y como funciona
- Pricing comercial con planes Starter, Growth y Pro
- FAQ orientado a objeciones del MVP
- CTA final y footer con enlaces clave
- Dark mode con persistencia local
- Configuracion centralizada de URLs externas y SEO

## Estructura principal

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

## Configuracion

Las URLs externas del sitio se manejan desde:

- `src/config/site.ts`

Variables relevantes:

- `APP_MAIN_URL`
- `BILLING_URL`
- `CONTACT_URL`
- `TERMS_URL`
- `PRIVACY_URL`
- `commercialActionMode`

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Levantar el entorno de desarrollo:

```bash
npm run dev
```

Validar el proyecto:

```bash
npm run check
```

Generar build de produccion:

```bash
npm run build
```

## Enfoque del MVP

Esta landing no implementa la aplicacion operativa principal. El sitio se limita al alcance comercial del producto.

El MVP descrito en la landing contempla:

- pedidos por QR o URL de mesa
- visualizacion de restaurantes y menus
- carrito y creacion de pedidos
- seguimiento de estado en tiempo real
- login y operacion para restaurantes
- pagos presenciales
- recibos simples
- estadisticas basicas

No se promocionan pagos online dentro del flujo operativo del MVP actual.

## Estado del proyecto

- Build valido
- `astro check` sin errores ni warnings
- Landing lista para evolucionar con branding, URLs reales o nuevas referencias visuales
