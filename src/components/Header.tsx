import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 max-w-[75%]">
            <Link to="/" className="flex items-center text-gold z-50">
              <img 
                src="/Logo/chimera-logo.png" 
                alt="Chimera Logo" 
                className="h-8 md:h-12 mr-2" 
              />
              <span className="text-sm md:text-2xl font-serif">
                Chimera Cabinetry & Millworks
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 hover:text-gold transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'nav-link-active' : ''}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              to="/contact"
              className="bg-gold text-white px-4 lg:px-6 py-2 rounded hover:bg-gold-dark transition text-sm lg:text-base"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <nav className="flex flex-col h-full pt-20 pb-6 px-6">
              <div className="flex-1 space-y-4">
                {navItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`mobile-nav-link ${
                      location.pathname === path ? 'text-gold' : 'text-black'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full bg-gold text-white px-6 py-3 rounded text-center hover:bg-gold-dark transition"
                >
                  Request a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}