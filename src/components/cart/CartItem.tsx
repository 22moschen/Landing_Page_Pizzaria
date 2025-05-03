'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  // Combine all items for easy lookup
  const allItems = [...menuData.pizzas, ...menuData.sides, ...menuData.drinks];
  const item = allItems.find((i) => i.id === id) as Product | undefined;

  if (!item) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 py-2">
      <div className="relative w-20 h-20 overflow-hidden rounded-md">
        <Image
          src={item.imageUrl || '/images/placeholder.png'}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          data-ai-hint="pizza food item"
        />
      </div>
      <div className="flex-grow">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">
          R$ {item.price?.toFixed(2).replace('.', ',')}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => decreaseCartQuantity(id)}
          aria-label={`Diminuir quantidade de ${item.name}`}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium w-6 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => increaseCartQuantity(id)}
          aria-label={`Aumentar quantidade de ${item.name}`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-muted-foreground hover:text-destructive"
        onClick={() => removeFromCart(id)}
        aria-label={`Remover ${item.name} do carrinho`}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
