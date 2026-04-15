/**
 * ANALYTICS SERVICE (GA4 & CLARITY)
 * 
 * Standardized event tracking for Business Intelligence.
 * @author Senior Soft Engineer
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Capture custom events for GA4
 */
export const trackEvent = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }
  
  // Also push to Clarity if needed for specific event filtering
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity("event", action);
  }
};

/**
 * Capture specific conversion: Contact Form
 */
export const trackContactFormSubmission = (status: 'success' | 'error') => {
  trackEvent({
    action: 'form_submission',
    category: 'conversion',
    label: 'contact_form',
    status: status
  });
};

/**
 * Capture UI interactions: Button Clicks
 */
export const trackButtonClick = (buttonName: string) => {
  trackEvent({
    action: 'click',
    category: 'ui_interaction',
    label: buttonName
  });
};

/**
 * Capture UI interactions: Modal Opens
 */
export const trackModalOpen = (modalName: string) => {
  trackEvent({
    action: 'modal_open',
    category: 'ui_interaction',
    label: modalName
  });
};
