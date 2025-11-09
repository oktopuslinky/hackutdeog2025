"use client"

import React from "react"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const orbitalLoaderVariants = cva("flex gap-2 items-center justify-center", {
  variants: {
    messagePlacement: {
      bottom: "flex-col",
      top: "flex-col-reverse",
      right: "flex-row",
      left: "flex-row-reverse",
    },
  },
  defaultVariants: {
    messagePlacement: "bottom",
  },
})

export interface OrbitalLoaderProps {
  message?: string
  /**
   * Position of the message relative to the spinner.
   * @default bottom
   */
  messagePlacement?: "top" | "bottom" | "left" | "right"
}

export function OrbitalLoader({
  className,
  message,
  messagePlacement,
  ...props
}: React.ComponentProps<"div"> & OrbitalLoaderProps) {
  return (
    <div className={cn(orbitalLoaderVariants({ messagePlacement }))}>
      <div className={cn("relative w-16 h-16", className)} {...props}>
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-[#9B4CC2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-2 border-2 border-transparent border-t-[#46E2A1] rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-4 border-2 border-transparent border-t-[#E8C14B] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      {message && <div className="text-white/80 text-sm">{message}</div>}
    </div>
  )
}

