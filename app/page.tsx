"use client";

import "./page.css";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

const slideUp = {
  initial: { top: 0 },
  exit: { top: "-100vh", transition: { duration: 0.8, delay: 0.2 } },
};

const text = "Welcome to cromos.";

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
    initial: { d: initialPath, transition: { duration: 0.7 } },
    exit: { d: targetPath, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <>
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="preloader"
          >
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
                  <motion.path
                    variants={curve}
                    initial="initial"
                    exit="exit"
                  ></motion.path>
                </svg>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-container">
        {/* Main hero section */}
        <main className="hero">
          <header className="header">
            <div className="logo flex items-center gap-3">
              <Image
                src="/crosmosnobg.png"
                alt="Crosmos Logo"
                width={90}
                height={90}
                className="object-contain"
                priority
              />
            </div>
            <nav className="nav">
              <a href="/about" className="nav-link">about</a>
              <a href="/why" className="nav-link">why?</a>
            </nav>
          </header>
          <video
            autoPlay
            loop
            muted
            className="hero-video"
            onError={(e) => console.error("Hero video failed to load", e)}
          >
            <source src="/crosmos-vid.mp4" type="video/mp4" />
          </video>

          <div className="hero-content">
            {/* Tagline */}
            <motion.div
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={
                startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              FAST. LOCAL. AGENTIC AF
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="heading"
              initial={{ opacity: 0, y: 50 }}
              animate={
                startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 1 }}
            >
              <div className="heading-line">
                {"Think better,".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      startAnimation
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
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
                    animate={
                      startAnimation
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
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
              animate={
                startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              why need a second brain? when you can use your first one, better?
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="https://tally.so/r/aQNo9y"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mt-6 inline-flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={
                startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="button-text">JOIN WAITLIST</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Community Link */}
            <motion.div
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={
                startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="https://discord.gg/UnrQwtPHSw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline"
                style={{ color: "#ffffff" }}
              >
                join the community!
              </a>
            </motion.div>
          </div>
        </main>

        {/* Video Container */}
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            className="container-video"
            onError={(e) => console.error("Container video failed to load", e)}
          >
            <source src="/crosmos-2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-subtext">
            <div className="sub-item">
              <div className="icons">
                <a
                  href="https://github.com/Ethics03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <svg
                    className="sub-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                  </svg>
                </a>
              </div>
              <span>
                crafted by{" "}
                <a
                  href="https://x.com/rachitcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-sub-link"
                >
                  @rachit
                </a>
              </span>
            </div>

            <div className="sub-item">
              <span>
                designed by{" "}
                <a
                  href="https://x.com/sa1shankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-sub-link"
                >
                  @sai
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
