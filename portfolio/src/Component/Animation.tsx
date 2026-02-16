"use client";

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function VantaNet() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const initVanta = () => {
    if (typeof window !== 'undefined' && window.VANTA && vantaRef.current) {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }

      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 16727937,
        backgroundColor: 2299196,
        points: 10.00,
        maxDistance: 20.00,
        spacing: 15.00,
        showDots: true
      });
    }
  };

  useEffect(() => {
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js" 
        strategy="afterInteractive"
        onReady={initVanta}
      />
      <div ref={vantaRef} className="w-full h-full absolute top-0 left-0 -z-10" style={{ height: '100vh' }} />
    </>
  );
}