'use client';

import { getUserId } from './ab-testing';

// Conversion event types
export type ConversionEvent = 
  | 'page_view'
  | 'cta_click'
  | 'form_submit'
  | 'pricing_view'
  | 'trial_signup'
  | 'feature_engagement';

// Event properties interface
export interface EventProperties {
  [key: string]: string | number | boolean | null;
}

// Analytics class to track user events and conversions
class Analytics {
  private userId: string | null = null;
  private sessionId: string | null = null;
  private endpoint: string = '/api/analytics'; // This would be your actual analytics endpoint
  
  constructor() {
    // Initialize on client-side only
    if (typeof window !== 'undefined') {
      this.initSession();
    }
  }
  
  private initSession() {
    try {
      this.userId = getUserId();
      this.sessionId = this.generateSessionId();
      
      // Track page view on initialization
      this.trackEvent('page_view', {
        url: window.location.href,
        referrer: document.referrer || null,
        title: document.title,
      });
      
      // Add listeners for common events
      this.addEventListeners();
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }
  
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  }
  
  private addEventListeners() {
    // Track when user is about to leave the page
    window.addEventListener('beforeunload', () => {
      this.trackEvent('page_exit', {
        timeOnPage: Math.floor((Date.now() - this.getPageLoadTime()) / 1000),
      });
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor((scrollTop / (docHeight - winHeight)) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if (maxScrollDepth % 25 === 0) { // Track every 25% scroll
          this.trackEvent('scroll_depth', { depth: maxScrollDepth });
        }
      }
    });
  }
  
  private getPageLoadTime(): number {
    return window.performance?.timing?.navigationStart || Date.now();
  }
  
  // Public method to track events
  public trackEvent(eventName: ConversionEvent | string, properties: EventProperties = {}) {
    if (!this.userId || !this.sessionId) return;
    
    const eventData = {
      event: eventName,
      userId: this.userId,
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      properties: {
        ...properties,
        url: window.location.href,
        path: window.location.pathname,
      },
    };
    
    // For development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventData);
    }
    
    // In a real implementation, you would send this to your analytics endpoint
    // This is just a placeholder that logs to console in development
    if (process.env.NODE_ENV !== 'development') {
      this.sendToAnalyticsServer(eventData);
    }
  }
  
  // Track form submissions
  public trackFormSubmission(formId: string, formData: Record<string, unknown>) {
    this.trackEvent('form_submit', {
      formId,
      ...formData as EventProperties,
    });
  }
  
  // Track CTA clicks
  public trackCTAClick(ctaId: string, ctaText: string) {
    this.trackEvent('cta_click', {
      ctaId,
      ctaText,
    });
  }
  
  // Send data to analytics server
  private sendToAnalyticsServer(data: Record<string, unknown>) {
    // In a real implementation, this would send the data to your analytics endpoint
    fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // Using keepalive to ensure the request completes even if page is unloading
      keepalive: true,
    }).catch(error => {
      console.error('Failed to send analytics data:', error);
    });
  }
}

// Singleton instance
export const analytics = typeof window !== 'undefined' ? new Analytics() : null;

// Helper hook for React components
export function trackEvent(eventName: ConversionEvent, properties: EventProperties = {}) {
  if (analytics) {
    analytics.trackEvent(eventName, properties);
  }
}

export default analytics; 
