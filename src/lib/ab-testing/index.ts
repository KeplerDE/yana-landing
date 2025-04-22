import { v4 as uuidv4 } from 'uuid';

export type Variant = {
  id: string;
  weight: number;
};

export type ExperimentConfig = {
  id: string;
  variants: Variant[];
};

const COOKIE_NAME_PREFIX = 'ab-test-';

// Client-side utility for handling cookies
function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
}

export function createExperiment(config: ExperimentConfig) {
  return {
    ...config,
    getVariant: () => {
      const cookieValue = getCookie(`${COOKIE_NAME_PREFIX}${config.id}`);
      
      if (cookieValue) {
        return cookieValue;
      }
      
      // Assign variant based on weight
      const random = Math.random();
      let cumulativeWeight = 0;
      
      for (const variant of config.variants) {
        cumulativeWeight += variant.weight;
        if (random <= cumulativeWeight) {
          const variantId = variant.id;
          setCookie(`${COOKIE_NAME_PREFIX}${config.id}`, variantId, 30); // 30 days
          return variantId;
        }
      }
      
      // Fallback to first variant
      const defaultVariant = config.variants[0].id;
      setCookie(`${COOKIE_NAME_PREFIX}${config.id}`, defaultVariant, 30);
      return defaultVariant;
    }
  };
}

export function getUserId(): string {
  const userIdCookie = getCookie('user-id');
  
  if (userIdCookie) {
    return userIdCookie;
  }
  
  const newUserId = uuidv4();
  setCookie('user-id', newUserId, 365); // 1 year
  return newUserId;
} 
