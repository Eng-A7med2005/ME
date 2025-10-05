'use client';

import { 
  Code, 
  Database, 
  Brain, 
  Eye, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Cpu,
  GraduationCap,
  Globe,
  Users,
  Clock,
  MessageCircle
} from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'C++'],
    icon: Code,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'Machine Learning',
    items: ['Supervised & Unsupervised Learning', 'Model Evaluation'],
    icon: Brain,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'Deep Learning',
    items: ['Neural Networks', 'TensorFlow & Keras'],
    icon: Cpu,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'Computer Vision',
    items: ['Face Recognition', 'Object Detection (YOLOv8)', 'OpenCV'],
    icon: Eye,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'Natural Language Processing',
    items: ['Text Classification', 'Sentiment Analysis', 'Named Entity Recognition'],
    icon: MessageSquare,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'AI Automation',
    items: ['Intelligent Process Automation', 'AI Agents', 'Workflow Integration'],
    icon: Zap,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'Data Analysis & Visualization',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    icon: BarChart3,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  },
  {
    category: 'Tools & Frameworks',
    items: ['Scikit-learn', 'OpenCV', 'TensorFlow', 'Keras'],
    icon: Database,
    color: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
  }
];

const softSkills = [
  { name: 'Problem-Solving', icon: Brain },
  { name: 'Teamwork', icon: Users },
  { name: 'Time Management', icon: Clock },
  { name: 'Communication', icon: MessageCircle }
];

const languages = [
  { name: 'Arabic', level: 'Native', flag: '🇪🇬' },
  { name: 'English', level: 'Fluent', flag: '🇺🇸' }
];

export default function About() {
  return (
    <section id="about" style={{
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
            About Me
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
            Passionate AI & Data Science Engineer with expertise in building intelligent systems that solve real-world problems
          </p>
        </div>

        {/* Education Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '4rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 255, 218, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '0.75rem',
              background: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)'
            }}>
              <GraduationCap size={32} style={{ color: 'white' }} />
            </div>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--color-text)',
                marginBottom: '0.25rem'
              }}>
                🎓 Education
              </h3>
              <p style={{ color: '#8892B0', fontSize: '0.95rem' }}>Academic Background</p>
            </div>
          </div>
          <div style={{
            borderLeft: '4px solid #64FFDA',
            paddingLeft: '1.5rem',
            background: 'rgba(100, 255, 218, 0.05)',
            borderRadius: '0 0.5rem 0.5rem 0',
            padding: '1.5rem'
          }}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: '0.5rem'
            }}>
              Bachelor of Artificial Intelligence
            </h4>
            <p style={{
              color: '#64FFDA',
              fontWeight: '500',
              marginBottom: '0.5rem',
              fontSize: '1rem'
            }}>
              Kafr El Sheikh University, Faculty of Artificial Intelligence
            </p>
            <p style={{
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem',
              fontSize: '0.95rem'
            }}>
              📆 Oct 2023 – June 2027
            </p>
            <p style={{
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              Relevant coursework in Machine Learning, Data Science, and Computer Vision.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'var(--color-text)',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            🧠 Technical Skills
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translateY(-5px)';
                  target.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                  target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translateY(0)';
                  target.style.borderColor = 'rgba(100, 255, 218, 0.1)';
                  target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: skill.color,
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <skill.icon size={24} style={{ color: 'white' }} />
                </div>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--color-text)',
                  marginBottom: '0.75rem'
                }}>
                  {skill.category}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      lineHeight: '1.4'
                    }}>
                      <div style={{
                        width: '0.375rem',
                        height: '0.375rem',
                        background: '#64FFDA',
                        borderRadius: '50%',
                        marginRight: '0.5rem',
                        marginTop: '0.4rem',
                        flexShrink: 0
                      }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills and Languages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Soft Skills */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 255, 218, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--color-text)',
              marginBottom: '1.5rem'
            }}>
              Soft Skills
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: 'rgba(100, 255, 218, 0.1)',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(100, 255, 218, 0.2)';
                    target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(100, 255, 218, 0.1)';
                    target.style.transform = 'scale(1)';
                  }}
                >
                  <skill.icon size={20} style={{ color: '#64FFDA' }} />
                  <span style={{
                    color: 'var(--color-text)',
                    fontWeight: '500',
                    fontSize: '0.875rem'
                  }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 255, 218, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--color-text)',
              marginBottom: '1.5rem'
            }}>
              Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    background: 'rgba(100, 255, 218, 0.1)',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(100, 255, 218, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(100, 255, 218, 0.1)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{language.flag}</span>
                    <span style={{
                      color: 'var(--color-text)',
                      fontWeight: '500'
                    }}>
                      {language.name}
                    </span>
                  </div>
                  <span style={{
                    color: '#64FFDA',
                    fontWeight: '600',
                    fontSize: '0.875rem'
                  }}>
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
