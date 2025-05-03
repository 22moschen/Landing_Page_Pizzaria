'use client'; // Ensure client-side rendering for context and interaction

import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import MenuSection from '@/components/sections/MenuSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import HowToOrderSection from '@/components/sections/HowToOrderSection';
import Footer from '@/components/layout/Footer';
import ShoppingCartSidebar from '@/components/cart/ShoppingCartSidebar';
import { useShoppingCart } from '@/context/ShoppingCartContext';

export default function Home() {
  const { isCartOpen, closeCart } = useShoppingCart();

  return (
    <>
      {/* SEO handled in layout.tsx */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <MenuSection />
          <WhyUsSection />
          <HowToOrderSection />
          {/* Optional Sections (AboutUs, Testimonials) can be added here */}
        </main>
        <Footer />
        <ShoppingCartSidebar isOpen={isCartOpen} onClose={closeCart} />
      </div>
    </>
  );
}
