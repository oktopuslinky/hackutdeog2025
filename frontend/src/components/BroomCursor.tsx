import { useEffect, useRef } from "react";

const BroomCursor = () => {
  const broomRef = useRef<HTMLDivElement>(null);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const lastAngleRef = useRef(0);
  const particleCountRef = useRef(0);
  const maxParticles = 50; // Limit active particles for performance
  
  useEffect(() => {
    // Check if device has fine pointer (desktop/laptop with mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    
    if (!hasFinePointer) {
      return; // Don't activate custom cursor on touch devices
    }

    const broom = broomRef.current;
    if (!broom) return;

    let lastTime = Date.now();
    const throttleDelay = 16; // ~60fps

    const handlePointerMove = (e: PointerEvent) => {
      const now = Date.now();
      
      // Update broom position
      const x = e.clientX;
      const y = e.clientY;
      
      broom.style.left = `${x}px`;
      broom.style.top = `${y}px`;

      // Calculate rotation angle based on movement
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      
      // Only update rotation if there's significant movement
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Smooth rotation transition with flip effect
        lastAngleRef.current = angle;
        
        // Flip the broom when moving left vs right for more natural movement
        const flipScale = dx < 0 ? 'scaleX(-1)' : 'scaleX(1)';
        broom.style.transform = `translate(-50%, -50%) ${flipScale} rotate(${angle + 45}deg)`;
      }

      // Throttle particle creation
      if (now - lastTime > throttleDelay && particleCountRef.current < maxParticles) {
        createParticle(x, y, dx, dy);
        lastTime = now;
      }

      lastPosRef.current = { x, y };
    };

    const createParticle = (x: number, y: number, dx: number, dy: number) => {
      // Create particle slightly behind the movement direction
      const particle = document.createElement("div");
      particle.className = "broom-spark";
      
      // Offset particle behind the broom
      const offsetX = dx !== 0 ? -dx * 0.5 : (Math.random() - 0.5) * 10;
      const offsetY = dy !== 0 ? -dy * 0.5 : (Math.random() - 0.5) * 10;
      
      particle.style.left = `${x + offsetX}px`;
      particle.style.top = `${y + offsetY}px`;
      
      // Random size variation for more organic feel
      const size = 6 + Math.random() * 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      document.body.appendChild(particle);
      particleCountRef.current++;

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
        particleCountRef.current--;
      }, 500);
    };

    // Attach listener
    window.addEventListener("pointermove", handlePointerMove);

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      // Clean up any remaining particles
      document.querySelectorAll(".broom-spark").forEach(el => el.remove());
    };
  }, []);

  // Only render if fine pointer is available
  const hasFinePointer = typeof window !== "undefined" && 
    window.matchMedia("(pointer: fine)").matches;

  if (!hasFinePointer) {
    return null;
  }

  return (
    <div 
      ref={broomRef}
      className="broom-cursor"
      aria-hidden="true"
    />
  );
};

export default BroomCursor;

