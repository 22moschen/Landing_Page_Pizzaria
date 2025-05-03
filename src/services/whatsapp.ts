/**
 * Generates a WhatsApp message URL with the order details.
 *
 * @param phoneNumber The pizzeria's WhatsApp phone number.
 * @param message The message to send.
 * @returns A URL string for the WhatsApp message.
 */
export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  // TODO: Implement this by calling an API.
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
