import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const pizzeriaPhoneNumber = process.env.NEXT_PUBLIC_PIZZERIA_PHONE_NUMBER || 'YOUR_PHONE_NUMBER'; // Replace with your number or env var

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
      <div className="container px-4 md:px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Contact Us</h4>
            <p className="text-sm mb-1">123 Pizza Street, Flavor Town</p>
            <p className="text-sm mb-1">Phone: <a href={`tel:${pizzeriaPhoneNumber}`} className="hover:text-primary">{pizzeriaPhoneNumber}</a></p>
            <p className="text-sm">Email: <a href="mailto:info@pizzazap.com" className="hover:text-primary">info@pizzazap.com</a></p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#menu" className="text-sm hover:text-primary">Menu</Link></li>
              <li><Link href="#why-us" className="text-sm hover:text-primary">Why Us?</Link></li>
              <li><Link href="#how-to-order" className="text-sm hover:text-primary">How to Order</Link></li>
              {/* Add links to Terms of Service, Privacy Policy if needed */}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-secondary-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-secondary-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} PizzaZap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
