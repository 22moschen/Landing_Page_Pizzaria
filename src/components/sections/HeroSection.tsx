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
      {/* Background Image */}
      <Image
        src="https://picsum.photos/1600/900"
        alt="Delicious pizza background"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority // Load the hero image first
        className="absolute inset-0 z-0 opacity-80"
        data-ai-hint="pizza food background"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
          Hot & Fresh Pizza, Right to Your Door!
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
          Experience the taste of authentic pizza made with the finest ingredients. Order now for quick delivery via WhatsApp.
        </p>
        <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
          <Link href="#menu">Order Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
