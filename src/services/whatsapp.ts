/**
 * Generates a WhatsApp message URL with the order details.
 *
 * @param phoneNumber The pizzeria's WhatsApp phone number.
 * @param message The message to send.
 * @returns A URL string for the WhatsApp message.
 */
export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return url;
}
