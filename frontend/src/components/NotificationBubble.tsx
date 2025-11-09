import { motion } from "framer-motion";

export const NotificationBubble = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#9B4CC2]/20 to-[#46E2A1]/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
      <div className="relative bg-[#1B0F1F]/60 backdrop-blur-sm border border-[#9B4CC2]/30 rounded-2xl px-6 py-4 hover:border-[#E8C14B]/50 transition-all duration-300">
        <p className="text-white/80 text-sm font-light tracking-wide">
          {text}
        </p>
        <div className="absolute top-2 right-2 w-2 h-2 bg-[#46E2A1] rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
};

