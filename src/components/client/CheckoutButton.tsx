'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import menuData from '@/data/menu.json';
import { generateWhatsAppUrl } from '@/services/whatsapp';
import { MessageSquare } from 'lucide-react';

const CheckoutButton: React.FC = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const pizzeriaPhoneNumber = process.env.NEXT_PUBLIC_PIZZERIA_PHONE_NUMBER; // Get phone number

    if (!pizzeriaPhoneNumber || pizzeriaPhoneNumber === 'undefined') {
        console.error(
            'Pizzeria phone number not defined in environment variables.'
        );
        return null; // Don't render the button if the phone number is missing
  }

    // Function to format phone number
    const formatPhoneNumber = (phoneNumber: string) => {
        // Remove '-', '(', and ')' characters
        const cleanedNumber = phoneNumber.replace(/[-()]/g, '');
       
        return `${cleanedNumber}`;
    };

    //Format phone number
    const formattedPhoneNumber =  formatPhoneNumber(pizzeriaPhoneNumber);

    //Combine all items for easy lookup
    const allItems = [...menuData.pizzas, ...menuData.sides, ...menuData.drinks];

  const handleCheckout = () => {
    let message = "Hello PizzaZap! I'd like to place an order:\n\n";
    let total = 0;

    cartItems.forEach(cartItem => {
      const item = allItems.find(i => i.id === cartItem.id);
      if (item) {
        message += `${cartItem.quantity}x ${item.name} ($${(item.price * cartItem.quantity).toFixed(2)}) \n`;
        total += item.price * cartItem.quantity;
      }
    });

    message += `\nTotal: $${total.toFixed(2)}`;
    message += '\n\nPlease confirm my order.'; // Added polite closing

    const whatsappUrl = generateWhatsAppUrl(formattedPhoneNumber, message);

    // Create a hidden link
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.style.display = 'none';
    document.body.append(link);

    // Simulate a click on the link
    link.click();

    // Remove the link after the click
    document.body.removeChild(link);


   
    // clear the cart after sending to WhatsApp
    clearCart();
  };
  
  

  return (
    <Button
      onClick={handleCheckout}
      disabled={cartItems.length === 0}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      size="lg"
    >
      <MessageSquare className="mr-2 h-5 w-5" /> Finalize o pedido via WhatsApp
    </Button>
  );
};
export default CheckoutButton;

