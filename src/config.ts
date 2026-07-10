/**
 * Shanva Media Integration & Settings Configuration
 * Customize these endpoints to connect your landing page to live services.
 */
export const INTEGRATION_CONFIG = {
  // Toggle: If true, clicking booking CTAs opens a Calendly scheduler widget.
  // If false, it scrolls directly to the inline inquiry form.
  preferCalendly: false,

  // Paste your Calendly or TidyCal booking page URL here.
  calendlyUrl: "https://calendly.com/your-brand-account",

  // Paste your Google Sheets Webhook URL, SheetDB URL, or Formspree endpoint here.
  // When visitors submit the inquiry form, the data is POSTed to this endpoint.
  googleSheetsWebhookUrl: "https://script.google.com/macros/s/AKfycbzMockAppScriptWebhook/exec",
};
