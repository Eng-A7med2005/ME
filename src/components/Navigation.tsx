'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// ThemeToggle removed - using fixed blue dark theme

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(10, 25, 47, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--color-accent)'
          }}>
            Ahmed Fouda
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem'
          }} className="md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = 'var(--color-text)';
                }}
              >
                {item.name}
              </a>
            ))}
            {/* ThemeToggle removed */}
          </div>

          {/* Mobile menu button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }} className="md:hidden">
            {/* ThemeToggle removed */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                color: '#CCD6F6',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(8px)',
              zIndex: 40,
              animation: 'fadeIn 0.3s ease'
            }} onClick={() => setIsOpen(false)}></div>
            
            <div style={{
              position: 'relative',
              background: 'rgba(10, 25, 47, 0.95)',
              borderRadius: '0.5rem',
              marginTop: '0.5rem',
              overflow: 'hidden',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              zIndex: 50,
              animation: 'slideDown 0.3s ease'
            }}>
            <div style={{ padding: '0.5rem' }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    borderRadius: '0.375rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(100, 255, 218, 0.1)';
                    target.style.color = '#64FFDA';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'transparent';
                    target.style.color = '#CCD6F6';
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            </div>
          </>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
