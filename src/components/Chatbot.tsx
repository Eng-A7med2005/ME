'use client';

import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I&apos;m Ahmed's AI assistant. How can I help you today?";
    } else if (message.includes('project') || message.includes('work')) {
      return "Ahmed has worked on various projects including web applications, data analysis tools, and machine learning models. You can check out his portfolio for more details.";
    } else if (message.includes('experience') || message.includes('background')) {
      return "Ahmed has experience in full-stack development, data science, and machine learning. He has worked with technologies like React, Node.js, Python, and TensorFlow.";
    } else if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return "You can contact Ahmed through the contact form on his website or connect with him on LinkedIn.";
    } else {
      return "I'm sorry, I didn't understand that. Could you rephrase your question?";
    }
  };

  const handleSendMessage = (): void => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '4rem',
          height: '4rem',
          background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)',
          transition: 'all 0.3s',
          zIndex: 1000
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.currentTarget as HTMLButtonElement;
          target.style.transform = 'scale(1.1)';
          target.style.boxShadow = '0 15px 40px rgba(100, 255, 218, 0.4)';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.currentTarget as HTMLButtonElement;
          target.style.transform = 'scale(1)';
          target.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.3)';
        }}
      >
        {isOpen ? (
          <X size={24} style={{ color: '#0A192F' }} />
        ) : (
          <MessageCircle size={24} style={{ color: '#0A192F' }} />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '6rem',
          right: '2rem',
          width: '350px',
          height: '500px',
          background: 'rgba(var(--color-background), 0.95)',
          borderRadius: '1rem',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(100, 255, 218, 0.2)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1001,
          overflow: 'hidden'
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
            color: '#0A192F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={20} />
              <span style={{ fontWeight: '600' }}>Ahmed's AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#0A192F',
                cursor: 'pointer',
                padding: '0.25rem'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
                }}
              >
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  background: message.sender === 'user' 
                    ? 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
                    : 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {message.sender === 'user' ? (
                    <User size={14} style={{ color: '#0A192F' }} />
                  ) : (
                    <Bot size={14} style={{ color: 'white' }} />
                  )}
                </div>
                <div style={{
                  maxWidth: '80%',
                  padding: '0.75rem 1rem',
                  borderRadius: '1rem',
                  background: message.sender === 'user' 
                    ? 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: message.sender === 'user' ? '#0A192F' : '#CCD6F6',
                  fontSize: '0.875rem',
                  lineHeight: '1.4'
                }}>
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Bot size={14} style={{ color: 'white' }} />
                </div>
                <div style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '0.25rem'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#64FFDA',
                      animation: 'typing 1.4s infinite ease-in-out'
                    }}></div>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#64FFDA',
                      animation: 'typing 1.4s infinite ease-in-out 0.2s'
                    }}></div>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#64FFDA',
                      animation: 'typing 1.4s infinite ease-in-out 0.4s'
                    }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '1rem',
            borderTop: '1px solid rgba(100, 255, 218, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'flex-end'
            }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Ahmed..."
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  borderRadius: '0.5rem',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                style={{
                  padding: '0.75rem',
                  background: inputValue.trim() 
                    ? 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
                    : 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <Send size={16} style={{ 
                  color: inputValue.trim() ? '#0A192F' : '#8892B0' 
                }} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
