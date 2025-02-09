"use client";
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const MatrixCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      let frameId: number;
      let targetX = 0;
      let targetY = 0;

      const moveCursor = (e:any) => {
        targetX = e.clientX;
        targetY = e.clientY;
      };

      const updatePosition = () => {
        setPosition(prev => {
          const newX = prev.x + (targetX - prev.x) * 0.2;
          const newY = prev.y + (targetY - prev.y) * 0.2;
          
          setTrail(prevTrail => {
            const newTrail = [{ x: newX, y: newY }, ...prevTrail.slice(0, 5)];
            return newTrail;
          });

          return { x: newX, y: newY };
        });
        
        frameId = requestAnimationFrame(updatePosition);
      };

      window.addEventListener('mousemove', moveCursor);
      frameId = requestAnimationFrame(updatePosition);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        cancelAnimationFrame(frameId);
      };
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed left-0 top-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="absolute"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="relative transform -translate-x-1/2 -translate-y-1/2">
          <Terminal 
            className="text-blue-500" 
            size={30}
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Simple trail */}
      {trail.map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            opacity: 0.2 - (i * 0.03),
            transition: 'all 0.1s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <Terminal 
            className="text-blue-400 transform -translate-x-1/2 -translate-y-1/2" 
            size={20 - (i * 2)}
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
};

export default MatrixCursor;