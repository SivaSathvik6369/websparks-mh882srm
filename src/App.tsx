import React, { useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
