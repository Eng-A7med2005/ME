'use client';

import { Github, Linkedin, MessageCircle, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Eng-A7med2005',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/a7med-fouda-gt3rs',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/201151508503',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-primary) 100%)',
      borderTop: '1px solid rgba(100, 255, 218, 0.1)',
      padding: '3rem 0 2rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--color-text)',
              marginBottom: '1rem'
            }}>
              Ahmed Salah Fouda
            </h3>
            <p style={{
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              AI & Data Science Engineer building intelligent systems that transform data into impact. 
              Passionate about creating scalable AI solutions and automation systems.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: social.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <social.icon size={16} style={{ color: 'white' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#64FFDA';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#8892B0';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: '1rem'
            }}>
              Get In Touch
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <a
                href="mailto:a7medfouda2005@gmail.com"
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#64FFDA';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#8892B0';
                }}
              >
                a7medfouda2005@gmail.com
              </a>
              <a
                href="tel:+201151508503"
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#64FFDA';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#8892B0';
                }}
              >
                +20 115 150 8503
              </a>
              <p style={{
                color: 'var(--color-text-secondary)',
                margin: 0
              }}>
                Meet Hashim - Samanood, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid rgba(100, 255, 218, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: 'var(--color-text-secondary)',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            © 2025 Ahmed Salah Fouda — All Rights Reserved. Made with
            <Heart size={16} style={{ color: '#EF4444' }} />
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            style={{
              width: '3rem',
              height: '3rem',
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.1)';
              e.target.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(100, 255, 218, 0.3)';
            }}
          >
            <ArrowUp size={20} style={{ color: '#0A192F' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
