'use client';

import React from 'react';
import ProductCard from '@/components/menu/ProductCard';
import menuData from '@/data/menu.json'; // Import menu data

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="container px-4 md:px-6">
      <h2 className="text-center mb-8 md:mb-12">Our Delicious Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {menuData.pizzas.map((pizza) => (
          <ProductCard key={pizza.id} product={pizza} />
        ))}
      </div>
       {/* Optional: Add sections for other menu items like drinks, sides etc. */}
        {/*
         <h3 className="text-center mt-12 mb-8 md:mb-12">Sides & Drinks</h3>
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
           {menuData.sides.map(side => <ProductCard key={side.id} product={side} />)}
           {menuData.drinks.map(drink => <ProductCard key={drink.id} product={drink} />)}
         </div>
        */}
    </section>
  );
};

export default MenuSection;
