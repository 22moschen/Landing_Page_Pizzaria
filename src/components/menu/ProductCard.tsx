'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import type { Product } from '@/types'; // Import Product type
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { increaseCartQuantity } = useShoppingCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    increaseCartQuantity(product.id);
    toast({
      title: `${product.name} added to cart!`,
      description: 'Continue shopping or view your cart.',
      variant: 'default', // Use 'default' or 'success' if defined
      duration: 3000,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
      <CardHeader className="p-0 relative aspect-video">
        <Image
          src={product.imageUrl || 'https://picsum.photos/400/300'} // Use provided URL or placeholder
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint="pizza food item" // Add AI hint for image search
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3">{product.description}</CardDescription>
         <p className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
