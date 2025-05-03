'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import menuData from '@/data/menu.json';
import { generateWhatsAppUrl } from '@/services/whatsapp';
import { MessageSquare } from 'lucide-react';

const CheckoutButton: React.FC = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const pizzeriaPhoneNumber = process.env.NEXT_PUBLIC_PIZZERIA_PHONE_NUMBER || 'YOUR_PHONE_NUMBER'; // Get phone number

  // Combine all items for easy lookup
  const allItems = [...menuData.pizzas, ...menuData.sides, ...menuData.drinks];

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hello PizzaZap! I'd like to place an order:\n\n";
    let total = 0;

    cartItems.forEach(cartItem => {
      const item = allItems.find(i => i.id === cartItem.id);
      if (item) {
        message += `${cartItem.quantity}x ${item.name} ($${(item.price * cartItem.quantity).toFixed(2)})\n`;
        total += item.price * cartItem.quantity;
      }
    });

    message += `\nTotal: $${total.toFixed(2)}`;
    message += '\n\nPlease confirm my order.'; // Added polite closing

    const whatsappUrl = generateWhatsAppUrl(pizzeriaPhoneNumber, message);

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');

    // Optionally clear the cart after sending to WhatsApp
    // clearCart();
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={cartItems.length === 0}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      size="lg"
    >
      <MessageSquare className="mr-2 h-5 w-5" /> Finalize Order via WhatsApp
    </Button>
  );
};

export default CheckoutButton;
