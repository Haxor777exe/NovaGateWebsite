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
          // Reduced easing factor from 0.2 to 0.08 for slower movement
          const newX = prev.x + (targetX - prev.x) * 0.08;
          const newY = prev.y + (targetY - prev.y) * 0.08;

          setTrail(prevTrail => {
            // Added delay between trail elements by only updating every 2nd frame
            if (prevTrail.length === 0 || 
                Math.abs(prevTrail[0].x - newX) > 5 || 
                Math.abs(prevTrail[0].y - newY) > 5) {
              return [{ x: newX, y: newY }, ...prevTrail.slice(0, 7)];
            }
            return prevTrail;
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
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)' // Increased transition duration
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

      {/* Trail with longer fade */}
      {trail.map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            opacity: 0.3 - (i * 0.04), // Adjusted opacity for longer fade
            transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)' // Increased transition duration
          }}
        >
          <Terminal
            className="text-blue-400 transform -translate-x-1/2 -translate-y-1/2"
            size={24 - (i * 2)} // Slightly larger trail elements
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
};

export default MatrixCursor;