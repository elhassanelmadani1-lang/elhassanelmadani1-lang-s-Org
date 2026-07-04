/**
 * SEO Helper for Samira Naturale
 * Dynamically updates page metadata: title, description, canonical link, Open Graph tags, Twitter Card tags, and JSON-LD product schemas.
 */

export interface SEOData {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: "website" | "product";
  price?: number;
  currency?: string;
  availability?: "InStock" | "OutOfStock";
  sku?: string;
}

export function updateMetaTags(data: SEOData) {
  if (typeof document === "undefined") return;

  // 1. Title
  document.title = data.title;

  // Helper to get or create a meta tag
  const setMetaTag = (attrName: string, attrValue: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // 2. Standard Meta Tags
  setMetaTag("name", "description", data.description);

  // 3. Canonical Link
  let canonicalLink = document.querySelector("link[rel='canonical']");
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", data.url);

  // 4. Open Graph Meta Tags
  setMetaTag("property", "og:title", data.title);
  setMetaTag("property", "og:description", data.description);
  setMetaTag("property", "og:url", data.url);
  setMetaTag("property", "og:type", data.type || "website");
  if (data.image) {
    setMetaTag("property", "og:image", data.image);
  }

  // 5. Twitter Card Meta Tags
  setMetaTag("name", "twitter:card", data.image ? "summary_large_image" : "summary");
  setMetaTag("name", "twitter:title", data.title);
  setMetaTag("name", "twitter:description", data.description);
  if (data.image) {
    setMetaTag("name", "twitter:image", data.image);
  }

  // 6. JSON-LD Structured Data Schema
  let jsonLdScript = document.getElementById("structured-data-schema") as HTMLScriptElement | null;
  if (jsonLdScript) {
    jsonLdScript.remove();
  }

  jsonLdScript = document.createElement("script");
  jsonLdScript.id = "structured-data-schema";
  jsonLdScript.type = "application/ld+json";

  let schemaObj: any = {
    "@context": "https://schema.org",
    "@type": data.type === "product" ? "Product" : "WebSite",
    "name": data.title,
    "description": data.description,
    "url": data.url,
  };

  if (data.image) {
    schemaObj.image = [data.image];
  }

  if (data.type === "product") {
    schemaObj = {
      ...schemaObj,
      "@type": "Product",
      "sku": data.sku || data.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      "offers": {
        "@type": "Offer",
        "url": data.url,
        "priceCurrency": data.currency || "MAD",
        "price": data.price || "0.00",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": data.availability === "InStock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      },
    };
  }

  jsonLdScript.textContent = JSON.stringify(schemaObj, null, 2);
  document.head.appendChild(jsonLdScript);
}
