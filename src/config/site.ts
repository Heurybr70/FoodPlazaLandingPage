export type CommercialActionMode = "contact" | "billing";

export interface ExternalAction {
  label: string;
  url: string;
  external: boolean;
}

interface SiteConfig {
  APP_MAIN_URL: string;
  BILLING_URL: string;
  CONTACT_URL: string;
  TERMS_URL: string;
  PRIVACY_URL: string;
  commercialActionMode: CommercialActionMode;
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    supportEmail: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

export const siteConfig: SiteConfig = {
  // Replace these placeholder URLs with production hosts before launch.
  APP_MAIN_URL: "https://app.foodplazasaas.com",
  BILLING_URL: "https://billing.foodplazasaas.com",
  CONTACT_URL: "https://www.foodplazasaas.com/contacto",
  TERMS_URL: "https://www.foodplazasaas.com/terminos",
  PRIVACY_URL: "https://www.foodplazasaas.com/privacidad",
  commercialActionMode: "contact",
  brand: {
    name: "FoodPlazaSaaS",
    shortName: "FoodPlaza",
    tagline: "Pedidos por QR y operación más clara para plazas gastronómicas.",
    description:
      "Plataforma SaaS para plazas gastronómicas, food courts y plazas de foodtrucks con pedidos por QR, gestión multi-restaurante y estados en tiempo real.",
    supportEmail: "hola@foodplazasaas.com"
  },
  seo: {
    title:
      "FoodPlazaSaaS | SaaS para plazas gastronómicas, food courts y foodtrucks",
    description:
      "Centraliza pedidos por QR, menús, estados en tiempo real y operación multi-restaurante para plazas gastronómicas, food courts y plazas de foodtrucks.",
    ogTitle: "FoodPlazaSaaS para plazas gastronómicas y food courts",
    ogDescription:
      "Landing comercial para presentar FoodPlazaSaaS, sus beneficios, funcionalidades clave y planes de suscripción."
  }
};

export function getCommercialAction(config: SiteConfig = siteConfig): ExternalAction {
  const useBilling = config.commercialActionMode === "billing";

  return {
    label: useBilling ? "Suscribirme" : "Solicitar demo",
    url: useBilling ? config.BILLING_URL : config.CONTACT_URL,
    external: true
  };
}

export function getPlanAction(config: SiteConfig = siteConfig): ExternalAction {
  const useBilling = config.commercialActionMode === "billing";

  return {
    label: useBilling ? "Suscribirme" : "Solicitar onboarding",
    url: useBilling ? config.BILLING_URL : config.CONTACT_URL,
    external: true
  };
}

export function getAppAction(config: SiteConfig = siteConfig): ExternalAction {
  return {
    label: "Ingresar a la app",
    url: config.APP_MAIN_URL,
    external: true
  };
}
