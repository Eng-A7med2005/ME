'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'Technocolabs',
    location: 'Remote',
    period: 'July 2025 – August 2025',
    description: 'Collaborated with a cross-functional team to design and implement a predictive analytics model for a logistics company. Optimized delivery times and operational efficiency, ensuring the solution delivered actionable insights and measurable business impact.',
    achievements: [
      'Designed and implemented predictive analytics model for logistics optimization',
      'Improved delivery times and operational efficiency',
      'Delivered actionable insights with measurable business impact',
      'Collaborated with cross-functional teams'
    ],
    type: 'Internship',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Data Science Intern',
    company: 'Uneeq',
    location: 'Remote',
    period: 'May 2025 – June 2025',
    description: 'Developed and applied skills in real-world projects from data preprocessing and analysis to model building and deployment.',
    achievements: [
      'Applied data preprocessing and analysis techniques',
      'Built and deployed machine learning models',
      'Gained hands-on experience with real-world datasets',
      'Developed end-to-end data science solutions'
    ],
    type: 'Internship',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Data Science Intern',
    company: 'Coding Samurai',
    location: 'Remote',
    period: 'May 2025 – June 2025',
    description: 'Gained practical data science experience through end-to-end projects involving data analysis, machine learning model development, and performance optimization.',
    achievements: [
      'Completed end-to-end data science projects',
      'Developed machine learning models',
      'Optimized model performance',
      'Analyzed complex datasets'
    ],
    type: 'Internship',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  }
];

const projects = [
  {
    title: 'CurinAI – AI-Powered Digital Health Platform',
    role: 'Founder',
    period: '2025 – Present',
    description: 'Developed a healthcare platform with secure user management, digital medical record storage, and AI-based health predictions using modern web technologies and SQL databases.',
    technologies: ['AI/ML', 'Web Technologies', 'SQL', 'Healthcare'],
    status: 'Active',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    title: 'Sellio',
    role: 'Co-Founder',
    period: '2025 – Present',
    description: 'Developing an AI-powered platform that creates intelligent agents to automatically respond to customer messages on sales pages, streamlining operations and boosting sales.',
    technologies: ['AI Agents', 'Automation', 'Sales', 'Customer Service'],
    status: 'In Development',
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{
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
            💼 Experience & Projects
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
            Professional experience and personal projects that showcase my expertise in AI and Data Science
          </p>
        </div>

        {/* Professional Experience */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'var(--color-text)',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Briefcase size={32} style={{ color: '#64FFDA' }} />
            Professional Experience
          </h3>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '2rem',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--color-accent), var(--color-secondary))'
            }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem'
                  }}
                >
                  {/* Timeline Dot */}
                  <div style={{
                    position: 'relative',
                    zIndex: 10,
                    flexShrink: 0
                  }}>
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      background: exp.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
                    }}>
                      <Briefcase size={24} style={{ color: 'white' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
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
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div>
                        <h4 style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: 'var(--color-text)',
                          marginBottom: '0.5rem'
                        }}>
                          {exp.title}
                        </h4>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '0.5rem',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{
                            fontWeight: '600',
                            color: '#64FFDA',
                            fontSize: '1.1rem'
                          }}>
                            {exp.company}
                          </span>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: '#8892B0'
                          }}>
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: '#8892B0'
                        }}>
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        background: exp.color,
                        color: 'white',
                        alignSelf: 'flex-start'
                      }}>
                        {exp.type}
                      </span>
                    </div>

                    <p style={{
                      color: 'var(--color-text-secondary)',
                      marginBottom: '1.5rem',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      {exp.description}
                    </p>

                    <div>
                      <h5 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--color-text)',
                        marginBottom: '0.75rem'
                      }}>
                        Key Achievements:
                      </h5>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            marginBottom: '0.5rem'
                          }}>
                            <div style={{
                              width: '0.5rem',
                              height: '0.5rem',
                              background: '#64FFDA',
                              borderRadius: '50%',
                              marginTop: '0.5rem',
                              flexShrink: 0
                            }}></div>
                            <span style={{
                              color: 'var(--color-text-secondary)',
                              lineHeight: '1.5'
                            }}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'var(--color-text)',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Briefcase size={32} style={{ color: '#64FFDA' }} />
            Personal Projects
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
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
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem'
                    }}>
                      {project.title}
                    </h4>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        fontWeight: '600',
                        color: '#64FFDA'
                      }}>
                        {project.role}
                      </span>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: '#8892B0'
                      }}>
                        <Calendar size={16} />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    background: project.color,
                    color: 'white'
                  }}>
                    {project.status}
                  </span>
                </div>

                <p style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>

                <div>
                  <h5 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    marginBottom: '0.75rem'
                  }}>
                    Technologies:
                  </h5>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
