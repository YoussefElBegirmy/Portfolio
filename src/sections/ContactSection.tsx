// src/sections/ContactSection.tsx

import React, { useState } from 'react';
import { Send, Github, Linkedin, /* Twitter, */ FileText } from 'lucide-react'; // Removed Twitter as it's not in your provided links
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
    
    // Replace this with your actual form submission logic (e.g., Formspree, Netlify Forms, backend API)
    console.log("Form Data Submitted:", formData); 
    setTimeout(() => {
      setIsSubmitting(false);
      // This is a success simulation. In a real app, the success/error would come from the submission attempt.
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Added items-start for better alignment */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind, a question, or want to discuss a potential collaboration? 
              I'm always open to new opportunities and challenges in the AI and Data Science space.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div>
                <p className="text-gray-400 text-sm">Email:</p>
                <a href="mailto:yelbegermy@gmail.com" className="text-accent hover:underline">
                  yelbegermy@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location:</p>
                <p className="text-gray-200">Cairo, Egypt</p> {/* Updated from CV */}
              </div>
            </div>
            
            <div className="flex space-x-6 mb-8">
              <a 
                href="https://github.com/YoussefElBegirmy" // Updated from CV
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={28} /> {/* Slightly larger icons */}
              </a>
              <a 
                href="https://www.linkedin.com/in/youssef-elbegermy/" // Updated from CV
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} /> {/* Slightly larger icons */}
              </a>
              {/* Twitter link removed as not provided for your CV */}
            </div>
            
            {/* Make sure you have a resume.pdf in your public folder for this to work */}
            <a 
              href="/YoussefElbegermy_CV.pdf" // Consider naming your resume PDF consistently
              className="btn btn-outline inline-flex items-center gap-2"
              download
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
          
          <div className="card p-6 md:p-8"> {/* Consistent padding with other cards */}
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Jane Doe"
                  className="w-full px-4 py-2.5 bg-secondary bg-opacity-30 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder-gray-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g., jane@example.com"
                  className="w-full px-4 py-2.5 bg-secondary bg-opacity-30 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder-gray-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Project Collaboration"
                  className="w-full px-4 py-2.5 bg-secondary bg-opacity-30 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder-gray-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Youssef, I'd like to discuss..."
                  className="w-full px-4 py-2.5 bg-secondary bg-opacity-30 rounded-md border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              
              {submitStatus.type && (
                <div 
                  className={`p-3 mb-4 rounded-md text-sm ${ // Adjusted padding and text size
                    submitStatus.type === 'success' ? 'bg-success bg-opacity-20 text-success-content' : 'bg-error bg-opacity-20 text-error-content' // Assuming you might have text-success-content, or use text-success if directly
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
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
