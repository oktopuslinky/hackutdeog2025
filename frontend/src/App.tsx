"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, AlertTriangle, Droplet, Flame, TrendingUp } from "lucide-react";


const ShimmerText = ({ children }: { children: string }) => {
  return (
    <motion.h2
      className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-green-300 to-purple-200 bg-[length:200%_100%]"
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

const NotificationBubble = ({
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
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
      <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-6 py-4 hover:border-green-400/50 transition-all duration-300">
        <p className="text-white/80 text-sm font-light tracking-wide">
          {text}
        </p>
        <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
};

const MysticDashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Static layout; no parallax

  const [shimmerPosition, setShimmerPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const fraudTickets = [
    "Suspicious Brew ID #124 - Double Eye of Newt found",
    "Invalid cauldron refill detected in Chamber 3",
    "Phantom purchase — flagged for review",
    "Unauthorized spell component access logged",
  ];

  const missingPotions = [
    "Vanishing Elixir not logged in inventory",
    "Healing Draught supply missing — 2 units",
    "Potion of Luck bottle shattered",
    "Moonlight Essence vial unaccounted for",
  ];

  const overflowAlerts = [
    "Cauldron 7 exceeded safe volume limit",
    "Green Mist containment threshold surpassed",
    "Brewing vat overflow detected at 03:42 AM",
    "Crystal chamber pressure critical",
  ];

  const graphData = [
    { day: "Mon", energy: 45 },
    { day: "Tue", energy: 72 },
    { day: "Wed", energy: 58 },
    { day: "Thu", energy: 85 },
    { day: "Fri", energy: 91 },
    { day: "Sat", energy: 68 },
    { day: "Sun", energy: 77 },
  ];

  const maxEnergy = Math.max(...graphData.map((d) => d.energy));

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] bg-gradient-to-b from-[#240046] via-[#3a0ca3] to-[#240046] relative overflow-x-hidden"
    >
      <div className="fixed inset-0 opacity-30">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-purple-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-green-400" />
            <h1 className="text-2xl font-serif text-white tracking-wide">
              Cauldron Control Center 🪄
            </h1>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-green-500/30 border border-purple-400/40 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"
          style={{
            width: "30%",
            left: `${shimmerPosition}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.header>

      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 space-y-10">
          {/* Forecast spans full width */}
          <motion.div
            className="relative bg-gradient-to-br from-purple-900/30 to-green-900/20 backdrop-blur-xl border border-purple-400/40 rounded-3xl p-8 shadow-2xl h-[650px] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <ShimmerText>Mystical Energy Forecast</ShimmerText>
                  <p className="text-purple-300/60 text-sm mt-2 font-light tracking-widest">
                    Weekly arcane power levels across all cauldrons
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </motion.div>
              </div>
              <div className="mt-10 flex-1 overflow-y-auto">
                <div className="relative h-[28rem] bg-black/30 rounded-2xl border border-purple-500/20 p-6">
                  <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-purple-300/50">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>
                  <div className="ml-8 h-full flex items-end justify-around gap-4">
                    {graphData.map((data, i) => {
                      const heightPercent = (data.energy / maxEnergy) * 100;
                      return (
                        <div key={data.day} className="flex-1 flex flex-col items-center gap-3">
                          <motion.div
                            className="w-full relative group cursor-pointer"
                            style={{ height: `${heightPercent}%` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${heightPercent}%` }}
                            transition={{ duration: 1.5, delay: i * 0.1 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/40 via-purple-500/40 to-green-400/60 rounded-t-lg blur-sm group-hover:blur-md transition-all" />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-purple-600/70 to-green-400/90 rounded-t-lg border border-green-400/30" />
                            <motion.div
                              className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ y: 10 }}
                              whileHover={{ y: 0 }}
                            >
                              <div className="bg-black/80 border border-green-400/50 rounded-lg px-3 py-1 text-green-300 text-xs font-semibold whitespace-nowrap">
                                {data.energy}%
                              </div>
                            </motion.div>
                            <motion.div
                              className="absolute -top-2 left-1/2 -translate-x-1/2"
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            >
                              <Sparkles className="w-4 h-4 text-green-300" />
                            </motion.div>
                          </motion.div>
                          <span className="text-purple-200/70 text-sm font-serif tracking-wider">
                            {data.day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="absolute left-8 right-0 top-6 bottom-16 pointer-events-none">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="absolute w-full border-t border-purple-500/10" style={{ top: `${i * 25}%` }} />
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-6 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-t from-green-600 to-green-400 border border-green-400/50" />
                    <span className="text-purple-200/60">Active Brewing Energy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-t from-purple-600 to-purple-400 border border-purple-400/50" />
                    <span className="text-purple-200/60">Dormant Reserve</span>
                  </div>
                </div>
              </div>
            </motion.div>

          {/* Three proportionate boxes below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fraud Tickets */}
            <motion.div
              className="relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl h-[460px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <ShimmerText>Fraud Tickets</ShimmerText>
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div className="mt-4 space-y-4 flex-1 overflow-y-auto pr-1">
                {fraudTickets.map((ticket, i) => (
                  <NotificationBubble key={i} text={ticket} delay={i * 0.05} />
                ))}
                {fraudTickets.map((ticket, i) => (
                  <NotificationBubble key={`dup-${i}`} text={ticket} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>

            {/* Missing Potions */}
            <motion.div
              className="relative bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-2xl h-[460px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div className="flex items-center justify-between">
                <ShimmerText>Missing Potions</ShimmerText>
                <Droplet className="w-6 h-6 text-blue-400" />
              </div>
              <div className="mt-4 space-y-4 flex-1 overflow-y-auto pr-1">
                {missingPotions.map((potion, i) => (
                  <NotificationBubble key={i} text={potion} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>

            {/* Overflow Alerts */}
            <motion.div
              className="relative bg-gradient-to-br from-orange-900/20 to-black/40 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 shadow-2xl h-[460px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <ShimmerText>Overflow Alerts</ShimmerText>
                <Flame className="w-6 h-6 text-orange-400" />
              </div>
              <div className="mt-4 space-y-4 flex-1 overflow-y-auto pr-1">
                {overflowAlerts.map((alert, i) => (
                  <NotificationBubble key={i} text={alert} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>
          </div>
          </div>
        </div>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
import { useState } from "react";
import { BarChart3 } from "lucide-react";
import LiquidEther from "@/components/LiquidEther";
import VariableProximity from "@/components/VariableProximity";
import { GooeyButton } from "@/components/GooeyButton";
import { DashboardPage } from "@/pages/DashboardPage";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <DashboardPage onBack={() => setShowDashboard(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <LiquidEther
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%", position: "fixed" }}
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pointer-events-none">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          <VariableProximity 
            text="Wihmsical AI"
            radius={180}
            maxFontSize={1.4}
            minFontSize={0.5}
          />
        </h1>
      </div>

      {/* Gooey Dashboard Button at Bottom */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <GooeyButton 
          label="Dashboard" 
          icon={BarChart3}
          onClick={() => setShowDashboard(true)}
        />
      </div>
    </div>
  );
};

export default MysticDashboard;

export default App;
