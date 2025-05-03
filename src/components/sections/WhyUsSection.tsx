import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Leaf, Clock, Smile } from 'lucide-react'; // Example icons

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'Hot pizza delivered to your doorstep in minutes.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Only the best and freshest toppings make it onto our pizzas.',
  },
  {
    icon: Clock,
    title: 'Easy WhatsApp Ordering',
    description: 'Simple and convenient ordering process via WhatsApp.',
  },
   {
    icon: Smile,
    title: 'Customer Satisfaction',
    description: 'We strive to make every pizza experience a happy one!',
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-center mb-8 md:mb-12">Why Choose PizzaZap?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                   <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
