"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const PixelTransition = dynamic(() => import('../components/PixelTransition'), {
  ssr: false,
  loading: () => null,
});

export default function TransitionProvider({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (pathname === '/about' || pathname === '/why') {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 2000); // Match original timing
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(false);
    }
  }, [pathname]);

  return (
    <>
      <Suspense fallback={null}>
        <PixelTransition isActive={isTransitioning} />
      </Suspense>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {children}
        </div>
      </AnimatePresence>
    </>
  );
}