/**
 * Meta Pixel helper utility for Samira Naturale
 * Pixel ID: 1565417911764749
 */

const PIXEL_ID = '1565417911764749';

// Declare fbq globally on window
declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

/**
 * Initializes the Meta Pixel script dynamically in the document head.
 * Guarantees a single-initialization instance by checking if window.fbq already exists.
 */
export const initPixel = (): void => {
  if (typeof window === 'undefined') return;

  const anyWindow = window as any;
  if (anyWindow.fbq) return;

  // Initialize standard fbq queue wrapper
  anyWindow.fbq = function (...args: any[]) {
    if (anyWindow.fbq.callMethod) {
      anyWindow.fbq.callMethod.apply(anyWindow.fbq, args);
    } else {
      anyWindow.fbq.queue.push(args);
    }
  };

  if (!anyWindow._fbq) {
    anyWindow._fbq = anyWindow.fbq;
  }
  anyWindow.fbq.push = anyWindow.fbq;
  anyWindow.fbq.loaded = true;
  anyWindow.fbq.version = '2.0';
  anyWindow.fbq.queue = [];

  // Create the official script element
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';

  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  // Set up Pixel credentials and perform baseline track
  anyWindow.fbq('init', PIXEL_ID);
};

/**
 * Track virtual page views (especially relevant in Single Page Applications when activeView state updates).
 */
export const trackPageView = (): void => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

/**
 * Tracks content views, e.g., viewing specific products or packs.
 */
export const trackViewContent = (name: string, id?: string, value?: number, currency = 'MAD'): void => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: name,
      content_ids: id ? [id] : undefined,
      value: value,
      currency: currency,
    });
  }
};

/**
 * Tracks add to cart events.
 */
export const trackAddToCart = (name: string, id?: string, value?: number, currency = 'MAD'): void => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'AddToCart', {
      content_name: name,
      content_ids: id ? [id] : undefined,
      value: value,
      currency: currency,
    });
  }
};

/**
 * Tracks initiating checkout sequence.
 */
export const trackInitiateCheckout = (numItems?: number, value?: number, currency = 'MAD'): void => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', {
      num_items: numItems,
      value: value,
      currency: currency,
    });
  }
};

/**
 * Tracks successful purchase conversions.
 */
export const trackPurchase = (value: number, currency = 'MAD', contentIds?: string[]): void => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_ids: contentIds,
      content_type: 'product',
    });
  }
};
