import { motion } from "framer-motion";

export const ShimmerText = ({ children }: { children: string }) => {
  return (
    <motion.h2
      className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#E8C14B] via-[#46E2A1] to-[#9B4CC2] bg-[length:200%_100%] text-3xl font-bold"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.h2>
  );
};

