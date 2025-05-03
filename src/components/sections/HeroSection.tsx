import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <Image
        src="/images/pizza-margherita.jpg" // Added placeholder src
        alt="Fundo de pizza deliciosa"
        style={{ objectFit: 'cover' }}
        quality={80}
        priority // Carregar a imagem principal primeiro
        fill
        sizes="100vw"
        className=" z-0 opacity-80"
        data-ai-hint="fundo de comida pizza" // Updated hint to Portuguese
      />
      {/* Camada Escura */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20 container px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
          Pizza Quente e Fresquinha, Direto na Sua Porta!
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
          Experimente o sabor da autêntica pizza feita com os melhores ingredientes. Peça agora e receba sua pizza rapidinho pelo WhatsApp.
        </p>
        <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
          <Link href="#menu">Peça Agora</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
