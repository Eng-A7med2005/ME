'use client';

import { Award, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    title: 'Data Science Course',
    provider: 'Optical Soft',
    date: '2024',
    description: 'Comprehensive data science course covering statistical analysis, machine learning, and data visualization techniques.',
    category: 'Data Science',
    certificate: '/api/placeholder/400/300',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'SQL Courses',
    provider: 'DataCamp',
    date: '2024',
    description: 'Advanced SQL courses covering database design, query optimization, and data manipulation.',
    category: 'Database',
    certificate: '/api/placeholder/400/300',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'DeepLearning.AI',
    date: '2024',
    description: 'Comprehensive deep learning specialization covering neural networks, CNNs, RNNs, and advanced architectures.',
    category: 'Deep Learning',
    certificate: '/api/placeholder/400/300',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Data Science Professional Certificate',
    provider: 'Coursera',
    date: '2024',
    description: 'Professional certificate in data science covering the complete data science workflow from data collection to deployment.',
    category: 'Data Science',
    certificate: '/api/placeholder/400/300',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Statistics, Linear Algebra, and Calculus',
    provider: 'YouTube & Various Platforms',
    date: '2023-2024',
    description: 'Self-paced learning covering essential mathematical foundations for machine learning and data science.',
    category: 'Mathematics',
    certificate: '/api/placeholder/400/300',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  }
];

const categories = ['All', 'Data Science', 'Deep Learning', 'Database', 'Mathematics'];

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" style={{
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
            🎓 Certifications
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
            Professional certifications and courses that validate my expertise in AI and Data Science
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
                  : 'rgba(255, 255, 255, 0.1)',
                color: selectedCategory === category ? '#0A192F' : '#CCD6F6',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'rgba(100, 255, 218, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedCert(cert)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(100, 255, 218, 0.1)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Certificate Header */}
              <div style={{
                height: '120px',
                background: cert.color,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={48} style={{ color: 'white', opacity: 0.8 }} />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {cert.category}
                </div>
              </div>

              {/* Certificate Content */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'var(--color-text)',
                  marginBottom: '0.5rem'
                }}>
                  {cert.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  color: '#64FFDA',
                  fontWeight: '600'
                }}>
                  <BookOpen size={16} />
                  <span>{cert.provider}</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  color: '#8892B0'
                }}>
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                <p style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {cert.description}
                </p>

                <button
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                    color: '#0A192F',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 20px rgba(100, 255, 218, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <ExternalLink size={18} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setSelectedCert(null)}
          >
            <div style={{
              background: 'rgba(10, 25, 47, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              backdropFilter: 'blur(20px)'
            }}
            onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#CCD6F6'
                }}>
                  {selectedCert.title}
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-secondary)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem'
                  }}
                >
                  ×
                </button>
              </div>

              <div style={{
                height: '300px',
                background: selectedCert.color,
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={64} style={{ color: 'white', opacity: 0.8 }} />
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: '#64FFDA',
                fontWeight: '600'
              }}>
                <BookOpen size={16} />
                <span>{selectedCert.provider}</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: '#8892B0'
              }}>
                <Calendar size={16} />
                <span>{selectedCert.date}</span>
              </div>

              <p style={{
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {selectedCert.description}
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  style={{
                    flex: 1,
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                    color: '#0A192F',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ExternalLink size={18} />
                  Download Certificate
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'var(--color-text)',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
