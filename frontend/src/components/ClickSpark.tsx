import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  color: string;
  size: number;
}

const ClickSpark = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const colors = [
      "#E8C14B", // Golden
      "#9B4CC2", // Purple
      "#46E2A1", // Mint green
      "#E8C14B", // Golden (repeat for more frequency)
      "#9B4CC2", // Purple (repeat)
    ];

    const handleClick = (e: MouseEvent) => {
      const sparkCount = 8; // Number of sparks per click
      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        newSparks.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          angle: (360 / sparkCount) * i,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 4 + Math.random() * 4, // Random size between 4-8px
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);

      // Remove sparks after animation completes
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => !newSparks.includes(spark)));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute rounded-full"
            style={{
              left: spark.x,
              top: spark.y,
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              boxShadow: `0 0 ${spark.size * 2}px ${spark.color}`,
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: Math.cos((spark.angle * Math.PI) / 180) * (40 + Math.random() * 20),
              y: Math.sin((spark.angle * Math.PI) / 180) * (40 + Math.random() * 20),
              scale: [0, 1, 0.8, 0],
              opacity: [1, 1, 0.5, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickSpark;

