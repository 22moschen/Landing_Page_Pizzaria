import React from 'react';
import { ListChecks, ShoppingCart, MessageSquare, Pizza } from 'lucide-react'; // Example icons
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: ListChecks,
    title: '1. Browse the Menu',
    description: 'Explore our delicious variety of pizzas and sides.',
  },
  {
    icon: ShoppingCart,
    title: '2. Add to Cart',
    description: 'Select your favorite items and add them to your shopping cart.',
  },
  {
    icon: MessageSquare,
    title: '3. Checkout via WhatsApp',
    description: 'Click "Finalize Order" to send your order details directly to us on WhatsApp.',
  },
  {
    icon: Pizza,
    title: '4. Enjoy!',
    description: 'Sit back, relax, and wait for your hot pizza to arrive!',
  },
];

const HowToOrderSection: React.FC = () => {
  return (
    <section id="how-to-order" className="container px-4 md:px-6">
      <h2 className="text-center mb-8 md:mb-12">Order in 4 Easy Steps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow bg-card">
             <CardContent className="pt-6">
               <div className="mx-auto bg-accent text-accent-foreground rounded-full p-3 w-fit mb-4">
                  <step.icon className="h-6 w-6" />
               </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowToOrderSection;
