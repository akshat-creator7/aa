import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About Dr. Soni', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-none">MARUTI</span>
              <span className="text-[10px] text-teal-600 font-semibold tracking-widest uppercase">Clinic</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md shadow-teal-100"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-xl text-base font-semibold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
