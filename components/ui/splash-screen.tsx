"use client";
import React, { useState, useEffect } from 'react';

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start animation of words
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach((word) => {
        const delay = parseInt(word.getAttribute('data-delay') || '0');
        setTimeout(() => {
          if (word) (word as HTMLElement).style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    
    // Slight delay before starting the text animation
    const timeoutId = setTimeout(animateWords, 300);

    // After 4.5 seconds, fade out the splash screen
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      // Remove from DOM after fade out completes
      setTimeout(() => setShowSplash(false), 1000);
    }, 4500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!showSplash) return null;

  const pageStyles = `
    @keyframes word-appear { 
      0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 
      50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } 
    }
    @keyframes grid-draw { 
      0% { stroke-dashoffset: 1000; opacity: 0; } 
      50% { opacity: 0.3; } 
      100% { stroke-dashoffset: 0; opacity: 0.15; } 
    }
    .word-animate { 
      display: inline-block; 
      opacity: 0; 
      margin: 0 0.1em; 
      transition: color 0.3s ease, transform 0.3s ease; 
    }
    .grid-line { 
      stroke: rgba(124, 58, 237, 0.4); /* primary color */
      stroke-width: 1; 
      opacity: 0; 
      stroke-dasharray: 5 5; 
      stroke-dashoffset: 1000; 
      animation: grid-draw 2s ease-out forwards; 
    }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className={`fixed inset-0 z-[100] flex flex-col justify-center items-center bg-background text-slate-100 overflow-hidden transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
        </svg>

        {/* Floating Accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        {/* Main Content */}
        <div className="text-center z-10 relative px-4">
          <h2 className="text-xs sm:text-sm font-mono font-light text-primary uppercase tracking-[0.3em] opacity-80 mb-6">
            <span className="word-animate" data-delay="0">Initializing</span>
            <span className="word-animate" data-delay="300">Environment...</span>
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight text-white mb-8">
            <div className="mb-4">
              <span className="word-animate" data-delay="700">Engineering</span>
              <span className="word-animate" data-delay="850">Intelligence,</span>
            </div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-thin text-white/70 tracking-wide">
              <span className="word-animate" data-delay="1200">Building</span>
              <span className="word-animate" data-delay="1350">the</span>
              <span className="word-animate" data-delay="1500">Future.</span>
            </div>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '2s' }}></div>
        </div>
      </div>
    </>
  );
}
