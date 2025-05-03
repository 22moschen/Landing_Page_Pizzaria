'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import Image from 'next/image';

const Header: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
           {/* Placeholder Logo */}
           <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
             PZ
           </div>
          <span className="text-lg font-bold">PizzaZap</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="#menu"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Menu
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Why Us?
          </Link>
          <Link
            href="#how-to-order"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How to Order
          </Link>
          <Button
            onClick={openCart}
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Open shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartQuantity > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs"
              >
                {cartQuantity}
              </Badge>
            )}
          </Button>
        </nav>
        <div className="md:hidden flex items-center">
           <Button
            onClick={openCart}
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Open shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartQuantity > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs"
              >
                {cartQuantity}
              </Badge>
            )}
          </Button>
          {/* Add a mobile menu toggle button here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
