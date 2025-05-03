import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed font to Inter for better readability
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Use CSS variable for font
});

export const metadata: Metadata = {
  title: 'PizzaZap - Your Favorite Pizza Delivered Fast!',
  description:
    'Order delicious pizza online from PizzaZap. Fast delivery to your door. Check out our menu and order via WhatsApp!',
  keywords: 'pizza delivery, pizza online, order pizza, PizzaZap, WhatsApp order', // Added keywords
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ShoppingCartProvider>
          {children}
          <Toaster />
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
