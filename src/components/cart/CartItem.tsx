'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Use Input for quantity display/adjustment
import { useShoppingCart } from '@/context/ShoppingCartContext';
import menuData from '@/data/menu.json';
import { X, Plus, Minus } from 'lucide-react';
import type { Product } from '@/types';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  // Combine all items for easy lookup
  const allItems = [...menuData.pizzas, ...menuData.sides, ...menuData.drinks];
  const item = allItems.find(i => i.id === id) as Product | undefined; // Added type assertion

  if (item == null) return null; // Don't render if item not found

  return (
    <div className="flex items-center gap-4 py-2">
      <Image
        src={item.imageUrl || 'https://picsum.photos/100/100'}
        alt={item.name}
        width={64}
        height={64}
        className="rounded-md object-cover"
        data-ai-hint="pizza food item"
      />
      <div className="flex-grow">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => decreaseCartQuantity(id)}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium w-6 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => increaseCartQuantity(id)}
          aria-label={`Increase quantity of ${item.name}`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
       <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-muted-foreground hover:text-destructive"
        onClick={() => removeFromCart(id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
