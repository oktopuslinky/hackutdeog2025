import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GooeyButtonProps {
  onClick?: () => void;
  label: string;
  icon?: LucideIcon;
  variant?: "default" | "compact";
  initialAnimation?: { y: number; x: number; opacity: number };
}

export const GooeyButton = ({ 
  onClick, 
  label, 
  icon: Icon, 
  variant = "default",
  initialAnimation = { y: 100, x: 0, opacity: 0 }
}: GooeyButtonProps) => {
  const isCompact = variant === "compact";
  
  return (
    <motion.button
      onClick={onClick}
      className="relative group pointer-events-auto"
      initial={initialAnimation}
      animate={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* SVG filter for gooey effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={`gooey-effect-${variant}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Main button container */}
      <div 
        className={`relative rounded-full bg-black/40 backdrop-blur-xl border border-purple-500/30 ${
          isCompact ? "px-4 py-2" : "px-8 py-4"
        }`}
        style={{ filter: `url(#gooey-effect-${variant})` }}
      >
        {/* Animated blobs */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary blob */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-pink-500 to-purple-500 rounded-full opacity-60"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Content */}
        <div className={`relative z-10 flex items-center gap-2 ${isCompact ? "gap-2" : "gap-3"}`}>
          {Icon && <Icon className={`text-white ${isCompact ? "w-4 h-4" : "w-5 h-5"}`} />}
          <span className={`text-white font-semibold tracking-wide ${isCompact ? "text-sm" : ""}`}>
            {label}
          </span>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-xl -z-10 group-hover:blur-2xl transition-all duration-300" />
      </div>

      {/* Pulsing ring */}
      <motion.div
        className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.button>
  );
};

