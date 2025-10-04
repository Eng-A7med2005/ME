'use client';

import { Download, MapPin, Phone, Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/a7med-fouda-gt3rs', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Eng-A7med2005', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://wa.me/201151508503', label: 'WhatsApp' },
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-primary) 100%)'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364FFDA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Left Column - Content */}
          <div style={{ 
            textAlign: 'left',
            padding: '2rem 0'
          }}>
            <div style={{ marginBottom: '3rem' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: 'var(--color-text)',
                marginBottom: '0.5rem',
                lineHeight: '1.1'
              }}>
                Hello, I'm{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Ahmed Salah Fouda
                </span>
              </h1>
              <div style={{
                fontSize: '1.5rem',
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                AI & Data Science Engineer
              </div>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '2rem',
                lineHeight: '1.7',
                maxWidth: '500px'
              }}>
                Building intelligent systems that transform data into impact. 
                Passionate about creating scalable AI solutions and automation systems.
              </p>
            </div>


            {/* Contact Info */}
            <div style={{ 
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--color-text-secondary)',
                fontSize: '1rem'
              }}>
                <MapPin size={20} style={{ color: '#64FFDA' }} />
                <span>📍 Meet Hashim - Samanood</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--color-text-secondary)',
                fontSize: '1rem'
              }}>
                <Phone size={20} style={{ color: '#64FFDA' }} />
                <span>📞 +20 115 150 8503</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--color-text-secondary)',
                fontSize: '1rem'
              }}>
                <Mail size={20} style={{ color: '#64FFDA' }} />
                <span>📧 a7medfouda2005@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    color: 'var(--color-text-secondary)',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(100, 255, 218, 0.2)';
                    e.target.style.color = '#64FFDA';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = '#8892B0';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 123, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
              <a
                href="#contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 2rem',
                  border: '2px solid #64FFDA',
                  color: 'var(--color-accent)',
                  background: 'transparent',
                  borderRadius: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#64FFDA';
                  e.target.style.color = '#0A192F';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#64FFDA';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 0'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Decorative Elements */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                borderRadius: '50%',
                opacity: 0.3,
                animation: 'pulse 2s infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '-1rem',
                width: '6rem',
                height: '6rem',
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                borderRadius: '50%',
                opacity: 0.3,
                animation: 'pulse 2s infinite 1s'
              }}></div>
              
              {/* Profile Image Container */}
              <div style={{
                position: 'relative',
                width: '18rem',
                height: '18rem',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(100, 255, 218, 0.4)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Image
                  src="/profile.jpg"
                  alt="Ahmed Salah Fouda"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--color-secondary), transparent)'
                }}></div>
              </div>

              {/* Floating Elements */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '-3rem',
                background: 'rgba(10, 25, 47, 0.9)',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                animation: 'float 3s ease-in-out infinite',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--color-accent)',
                  textAlign: 'center'
                }}>
                  AI Engineer
                </div>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '-3rem',
                background: 'rgba(10, 25, 47, 0.9)',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                animation: 'float 3s ease-in-out infinite 1.5s',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--color-accent)',
                  textAlign: 'center'
                }}>
                  Data Scientist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '1.5rem',
          height: '2.5rem',
          border: '2px solid #64FFDA',
          borderRadius: '9999px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '0.5rem'
        }}>
          <div style={{
            width: '0.25rem',
            height: '0.75rem',
            background: '#64FFDA',
            borderRadius: '9999px',
            animation: 'scroll 2s infinite'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
