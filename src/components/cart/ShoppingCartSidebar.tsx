'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import CartItem from './CartItem';
import CheckoutButton from '../client/CheckoutButton';
import menuData from '@/data/menu.json'; // Import menu data to get item details

interface ShoppingCartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCartSidebar: React.FC<ShoppingCartSidebarProps> = ({ isOpen, onClose }: ShoppingCartSidebarProps) => {
  const { cartItems } = useShoppingCart();

  // Combine all items for easy lookup
  const allItems = [...menuData.pizzas, ...menuData.sides, ...menuData.drinks];

  interface CartItemType {
    id: number;
    quantity: number;
  }

  const subtotal = cartItems.reduce((total, cartItem) => {
    const item = allItems.find(i => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex-1 overflow-y-auto pr-4 -mr-4"> {/* Added padding compensation for scrollbar */}
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground mt-8">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item: CartItemType) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <>
            <Separator className="my-4" />
            <SheetFooter className="mt-auto">
              <div className="w-full space-y-4">
                 <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                 </div>
                 <CheckoutButton />
                <SheetClose asChild>
                    <Button variant="outline" className="w-full">Continue Shopping</Button>
                  </SheetClose>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSidebar;

