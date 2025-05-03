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
      title: `${product.name} adicionado ao carrinho!`,
      description: 'Continue comprando ou veja seu carrinho.',
      variant: 'default', // Use 'default' or 'success' if defined
      duration: 3000,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full group">
      <CardHeader className="p-0 relative aspect-video">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{}}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint="item de comida pizza" // Add AI hint for image search
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Define sizes for different screen widths
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3">{product.description}</CardDescription>
        <p className="text-lg font-bold text-primary">
          R$ {product.price?.toFixed(2).replace('.', ',')}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;