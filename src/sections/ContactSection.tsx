import React, { useState } from 'react';
import { Send, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind or want to discuss a potential collaboration? 
              I'm always open to new opportunities and challenges in the AI space.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="text-accent">johndoe@example.com</p>
              </div>
              <div>
                <p className="text-gray-400">Location:</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex space-x-6 mb-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="btn btn-outline inline-flex items-center gap-2"
              download
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary bg-opacity-20 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary bg-opacity-20 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary bg-opacity-20 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-secondary bg-opacity-20 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text resize-none"
                ></textarea>
              </div>
              
              {submitStatus.type && (
                <div 
                  className={`p-4 mb-4 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-success bg-opacity-20 text-success' : 'bg-error bg-opacity-20 text-error'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
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
    </section>
  );
};

export default ContactSection;