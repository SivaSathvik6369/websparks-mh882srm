import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to revolutionize your business with AI? Contact us to be among the first to experience the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <i className="bi bi-envelope text-primary-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <a 
                  href="mailto:trimergtechsolutions@gmail.com" 
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  trimergtechsolutions@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <i className="bi bi-clock text-accent-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Launch Timeline</h3>
                <p className="text-gray-400">Coming Soon - Stay Tuned</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <i className="bi bi-globe text-primary-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Global Reach</h3>
                <p className="text-gray-400">Worldwide AI Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <i className="bi bi-check-circle mr-2"></i>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <i className="bi bi-send mr-2"></i>
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
