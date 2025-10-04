'use client';

import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'a7medfouda2005@gmail.com',
      link: 'mailto:a7medfouda2005@gmail.com',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20 115 150 8503',
      link: 'tel:+201151508503',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Meet Hashim - Samanood, Egypt',
      link: '#',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/a7med-fouda-gt3rs',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Eng-A7med2005',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/201151508503',
      color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
    }
  ];

  return (
    <section id="contact" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-primary) 100%)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'var(--color-text)',
            marginBottom: '1rem'
          }}>
            📞 Contact Me
          </h2>
          <div style={{
            width: '6rem',
            height: '0.25rem',
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
            margin: '0 auto 2rem'
          }}></div>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Let's connect and discuss how we can work together to build amazing AI solutions
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'var(--color-text)',
              marginBottom: '2rem'
            }}>
              Get In Touch
            </h3>
            
            <p style={{
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.6',
              fontSize: '1.1rem'
            }}>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Info Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '1rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.borderColor = 'rgba(100, 255, 218, 0.1)';
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: info.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <info.icon size={20} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--color-text)',
                      marginBottom: '0.25rem'
                    }}>
                      {info.title}
                    </h4>
                    <p style={{
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text)',
                marginBottom: '1rem'
              }}>
                Follow Me
              </h4>
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
                      width: '3rem',
                      height: '3rem',
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
                    <social.icon size={20} style={{ color: 'white' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 255, 218, 0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--color-text)',
                marginBottom: '1.5rem'
              }}>
                Send Message
              </h3>

              {isSubmitted && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  color: '#10B981',
                  textAlign: 'center',
                  fontWeight: '600'
                }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      borderRadius: '0.5rem',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.2)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    placeholder="Your Name"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      borderRadius: '0.5rem',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.2)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      borderRadius: '0.5rem',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.3s',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.2)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: isSubmitting 
                      ? 'rgba(100, 255, 218, 0.5)' 
                      : 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                    color: '#0A192F',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 20px rgba(100, 255, 218, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #0A192F',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
