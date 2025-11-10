"use client"

import "./page.css"
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Lenis from 'lenis'
import { motion, AnimatePresence } from 'framer-motion'


const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 }
  },
}

const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, delay: 0.2 }
  }
}

const text = "Welcome to cromos."

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setStartAnimation(true), 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7 }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, delay: 0.3 }
    }
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && (
          <motion.div variants={slideUp} initial="initial" exit="exit" className="preloader">
            {dimension.width > 0 && (
              <>
                <motion.p variants={opacity} initial="initial" animate="enter">
                  {text.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.p>
                <svg>
                  <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-text">crosmos</span>
        </div>
        <nav className="nav">
          <span className="nav-link">why?</span>
        </nav>
      </header>

       {/* Main hero section */}
       <main className="hero">
          <video autoPlay loop muted className="hero-video" onError={(e) => console.error('Hero video failed to load', e)}>
            <source src="/crosmos-vid.mp4" type="video/mp4" />
          </video>
          <div className="hero-content">
           {/* Top tagline */}
           <motion.div
             className="tagline"
             initial={{ opacity: 0, y: 20 }}
             animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
             transition={{ duration: 0.8, delay: 0.3 }}
           >
             FAST. PRIVATE. LOCAL.
           </motion.div>

           {/* Main heading */}
           <motion.h1
             className="heading"
             initial={{ opacity: 0, y: 50 }}
             animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
             transition={{ duration: 1 }}
           >
             <div className="heading-line">
               {"Think better,".split("").map((letter, i) => (
                 <motion.span
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                   transition={{ delay: i * 0.05, duration: 0.5 }}
                 >
                   {letter}
                 </motion.span>
               ))}
             </div>
             <div className="heading-line">
               {"not twice".split("").map((letter, i) => (
                 <motion.span
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                   transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                 >
                   {letter}
                 </motion.span>
               ))}
             </div>
           </motion.h1>

           {/* Subheading */}
           <motion.p
             className="subheading"
             initial={{ opacity: 0, y: 20 }}
             animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
             transition={{ duration: 0.8, delay: 0.5 }}
           >
             why need a second brain? when you can use your first one, better?
           </motion.p>

            {/* CTA Button */}
            <motion.button
              className="cta-button"
              initial={{ opacity: 0, y: 20 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="button-text">DOWNLOAD NOW</span>
            </motion.button>

           {/* Open source link */}
           <motion.a
             href="#"
             className="open-source-link"
             initial={{ opacity: 0, y: 20 }}
             animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
             transition={{ duration: 0.8, delay: 1.2 }}
           >
             it's open source
           </motion.a>
           </div>
        </main>

        {/* Video Container */}
         <div className="video-container">
           <video autoPlay loop muted className="container-video" onError={(e) => console.error('Container video failed to load', e)}>
             <source src="/Crosmos-updated.mp4" type="video/mp4" />
           </video>
         </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-subtext">
            <div className="sub-item">
              <div className="icons">
                <a href="https://github.com/Ethics03/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <svg className="sub-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://x.com/rachitcodes" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <svg className="sub-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <span>crafted by <a href="https://x.com/rachitcodes" target="_blank" rel="noopener noreferrer" className="footer-sub-link">@rachit</a></span>
            </div>
            <div className="sub-item">
              <div className="icons">
                <a href="https://github.com/saishankar404" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <svg className="sub-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://x.com/sa1shankar" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <svg className="sub-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <span>designed by <a href="https://x.com/saishankar" target="_blank" rel="noopener noreferrer" className="footer-sub-link">@sai</a></span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
