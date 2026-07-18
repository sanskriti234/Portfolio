'use client';

import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(false);
      }, 2200);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div 
      className="cursor-glow"
      style={{
        left: `${position.x - 160}px`,
        top: `${position.y - 160}px`,
        opacity: visible ? 1 : 0,
        transform: `translate3d(0,0,0)`,
      }}
    />
  );
}
