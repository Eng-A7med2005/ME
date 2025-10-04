'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

const projects = [
  {
    title: 'Heart Disease Prediction System',
    description: 'A machine learning model that analyzes medical input data and predicts the likelihood of heart disease. Built with custom interface and advanced ML algorithms.',
    date: '2024',
    technologies: ['Python', 'Machine Learning', 'Jupyter Notebook', 'Medical Data'],
    github: 'https://github.com/Eng-A7med2005/Heart_Project',
    demo: '#',
    image: '/api/placeholder/400/250',
    category: 'AI/ML',
    status: 'Completed',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Egyptian Car Plates Recognition',
    description: 'Built a YOLO-based model to detect and recognize Egyptian car plates in real time. Applied preprocessing techniques to improve detection accuracy under different conditions.',
    date: '2024',
    technologies: ['YOLO', 'Computer Vision', 'OpenCV', 'Python'],
    github: 'https://github.com/Eng-A7med2005/Egyptian-Car-Plates-Recognition',
    demo: '#',
    image: '/api/placeholder/400/250',
    category: 'Computer Vision',
    status: 'Completed',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Sentiment Analysis',
    description: 'Built a machine learning model to classify text sentiment as positive, negative, or neutral. Collected, cleaned, and processed textual data to improve model accuracy and reliability.',
    date: '2024',
    technologies: ['NLP', 'Machine Learning', 'Python', 'Text Processing'],
    github: 'https://github.com/Eng-A7med2005/Sentiment-Analysis',
    demo: '#',
    image: '/api/placeholder/400/250',
    category: 'NLP',
    status: 'Completed',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'Developed a neural network model to recognize handwritten digits using deep learning techniques. Implemented with Python and machine learning frameworks.',
    date: '2024',
    technologies: ['Deep Learning', 'Neural Networks', 'Python', 'Computer Vision'],
    github: 'https://github.com/Eng-A7med2005/Handwritten-Digit-Recognition',
    demo: '#',
    image: '/api/placeholder/400/250',
    category: 'Deep Learning',
    status: 'Completed',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'AI-Powered Netflix Movie Recommender',
    description: 'An intelligent movie recommendation system that uses machine learning algorithms to suggest movies based on user preferences and viewing history.',
    date: '2024',
    technologies: ['Machine Learning', 'Recommendation Systems', 'Python', 'Data Analysis'],
    github: 'https://github.com/Eng-A7med2005/AI-Powered-Netflix-Movie-Recommender',
    demo: '#',
    image: '/api/placeholder/400/250',
    category: 'AI/ML',
    status: 'Completed',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  }
];

const categories = ['All', 'AI/ML', 'Computer Vision', 'NLP', 'Deep Learning'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" style={{
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
            🚀 Projects
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
            A showcase of my technical projects and contributions to the AI and Data Science community
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

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s'
              }}
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
              {/* Project Image */}
              <div style={{
                height: '200px',
                background: project.color,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '3rem'
                }}>
                  <Code style={{ color: 'white', opacity: 0.3 }} />
                </div>
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
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    background: project.color,
                    color: 'white'
                  }}>
                    {project.category}
                  </span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.875rem'
                  }}>
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'var(--color-text)',
                  marginBottom: '1rem'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '0.5rem 0.75rem',
                          background: 'rgba(100, 255, 218, 0.1)',
                          color: '#64FFDA',
                          borderRadius: '9999px',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: 'rgba(100, 255, 218, 0.1)',
                      color: '#64FFDA',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      border: '1px solid rgba(100, 255, 218, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(100, 255, 218, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(100, 255, 218, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                      color: '#0A192F',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s'
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
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
