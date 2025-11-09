import { useEffect, useRef, useState } from 'react';

interface VariableProximityProps {
  text: string;
  radius?: number;
  maxFontSize?: number;
  minFontSize?: number;
  className?: string;
}

export default function VariableProximity({
  text,
  radius = 150,
  maxFontSize = 1.8,
  minFontSize = 1,
  className = ''
}: VariableProximityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [charRects, setCharRects] = useState<DOMRect[]>([]);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const updateCharRects = () => {
      const rects = charsRef.current
        .filter(Boolean)
        .map(span => span!.getBoundingClientRect());
      setCharRects(rects);
    };

    updateCharRects();
    window.addEventListener('resize', updateCharRects);
    
    return () => window.removeEventListener('resize', updateCharRects);
  }, [text]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const calculateScale = (charIndex: number): number => {
    if (charRects.length === 0) return minFontSize;
    
    const rect = charRects[charIndex];
    if (!rect) return minFontSize;

    const charCenterX = rect.left + rect.width / 2;
    const charCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mousePos.x - charCenterX, 2) + 
      Math.pow(mousePos.y - charCenterY, 2)
    );

    if (distance > radius) return minFontSize;

    const scale = 1 - distance / radius;
    const fontSize = minFontSize + (maxFontSize - minFontSize) * scale;
    
    return fontSize;
  };

  const chars = text.split('');

  return (
    <div 
      ref={containerRef} 
      className={`inline-flex ${className}`}
      style={{ 
        whiteSpace: 'pre',
        lineHeight: 1.2,
        pointerEvents: 'none'
      }}
    >
      {chars.map((char, index) => {
        const scale = calculateScale(index);
        
        return (
          <span
            key={index}
            ref={el => charsRef.current[index] = el}
            style={{
              display: 'inline-block',
              fontSize: `${scale}em`,
              transition: 'font-size 0.2s ease-out',
              transformOrigin: 'center',
              fontWeight: scale > 1.3 ? '900' : 'inherit'
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

