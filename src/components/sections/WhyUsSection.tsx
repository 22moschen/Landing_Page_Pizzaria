import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Leaf, Clock, Smile } from 'lucide-react'; // Example icons

const diferenciais = [
  {
    icon: Zap,
    title: 'Entrega Super Rápida',
    description: 'Pizza quentinha entregue na sua porta em minutos.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes Frescos',
    description: 'Apenas os melhores e mais frescos ingredientes vão nas nossas pizzas.',
  },
  {
    icon: Clock,
    title: 'Pedido Fácil pelo WhatsApp',
    description: 'Processo de pedido simples e conveniente via WhatsApp.',
  },
  {
    icon: Smile,
    title: 'Satisfação do Cliente',
    description: 'Nos esforçamos para que cada experiência com nossa pizza seja uma alegria!',
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section id="porque-nos" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-center mb-8 md:mb-12">Por Que Escolher a [Nome da Pizzaria]?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {diferenciais.map((diferencial, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                  <diferencial.icon className="h-6 w-6" />
                </div>
                <CardTitle>{diferencial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{diferencial.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;