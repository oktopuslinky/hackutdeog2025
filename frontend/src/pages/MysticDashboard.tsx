import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, AlertTriangle, Droplet, Flame, TrendingUp, Home, RefreshCw } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { ShimmerText } from "@/components/ShimmerText";
import { NotificationBubble } from "@/components/NotificationBubble";
import { GlassButton } from "@/components/ui/glass-button";
import { OrbitalLoader } from "@/components/ui/orbital-loader";
import { getDashboardStats, DashboardStats } from "@/services/api";

interface MysticDashboardProps {
  onBack?: () => void;
}

export const MysticDashboard = ({ onBack }: MysticDashboardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [shimmerPosition, setShimmerPosition] = useState(0);
  const [dashboardData, setDashboardData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [selectedCauldron, setSelectedCauldron] = useState<string>("1");

  // Fetch dashboard data
  const fetchData = async (cauldronId: string) => {
    setIsLoading(true);
    try {
      console.log("Dashboard fetchData called with cauldron:", cauldronId);
      const data = await getDashboardStats(cauldronId);
      console.log("Dashboard data received:", data);
      setDashboardData(data);
      setLastUpdate(new Date());
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Test overflow endpoint directly
  const testOverflowEndpoint = async () => {
    console.log("Testing overflow endpoint directly...");
    try {
      const response = await fetch("http://localhost:5001/api/overflow-intervals");
      console.log("Direct test response:", response.status, response.statusText);
      const data = await response.json();
      console.log("📦 Direct test data:", data);
      alert(`Overflow test: ${response.status} - Found ${data?.intervals?.length || 0} intervals`);
    } catch (error) {
      console.error("Direct test error:", error);
      alert(`Overflow test failed: ${error}`);
    }
  };

  // Handle cauldron selection change
  const handleCauldronChange = (cauldronId: string) => {
    setSelectedCauldron(cauldronId);
    fetchData(cauldronId);
  };

  useEffect(() => {
    fetchData(selectedCauldron);
    // Auto-refresh every 30 seconds with current selection
    const interval = setInterval(() => fetchData(selectedCauldron), 30000);
    return () => clearInterval(interval);
  }, [selectedCauldron]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const fraudTickets = dashboardData?.fraudTickets || [
    "Loading cauldron data...",
    "Connecting to sensors...",
    "Initializing monitoring...",
    "Please wait...",
  ];

  const missingPotions = dashboardData?.missingPotions || [
    "Loading inventory data...",
    "Syncing with database...",
    "Fetching records...",
    "Please wait...",
  ];

  const overflowAlerts = dashboardData?.overflowAlerts || [
    "Loading alert system...",
    "Checking cauldron levels...",
    "Monitoring overflow...",
    "Please wait...",
  ];

  const graphData = dashboardData?.energyData || [
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
      className="min-h-[300vh] bg-gradient-to-b from-[#1B0F1F] via-[#3A1F3D] to-[#1B0F1F] relative overflow-x-hidden"
    >
      {/* Top Dashboard Bar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1B0F1F]/40 border-b border-[#9B4CC2]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#46E2A1]" />
                  <h1 className="text-2xl text-white tracking-wide">
                    Cauldron Control Center 🪄
                  </h1>
                </div>
                
                {/* Cauldron Selector */}
                <div className="relative">
                  <select
                    value={selectedCauldron}
                    onChange={(e) => handleCauldronChange(e.target.value)}
                    className="bg-[#1B0F1F]/60 border border-[#9B4CC2]/40 text-white px-4 py-2 rounded-lg text-sm font-medium tracking-wide cursor-pointer hover:border-[#E8C14B]/60 focus:outline-none focus:border-[#46E2A1]/60 transition-all backdrop-blur-sm"
                    disabled={isLoading}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num.toString()}>
                        Cauldron {num}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassButton 
                  size="sm"
                  contentClassName="flex items-center gap-2"
                  onClick={() => fetchData(selectedCauldron)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Refreshing...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      <span>Refresh</span>
                    </>
                  )}
                </GlassButton>
                <GlassButton 
                  size="sm"
                  contentClassName="flex items-center gap-2"
                  onClick={testOverflowEndpoint}
                >
                  <Flame className="w-4 h-4" />
                  <span>Test Overflow</span>
                </GlassButton>
                {onBack && (
                  <GlassButton 
                    size="sm"
                    contentClassName="flex items-center gap-2"
                    onClick={onBack}
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </GlassButton>
                )}
                <GlassButton 
                  size="sm"
                  contentClassName="flex items-center gap-2"
                  onClick={() => console.log('Settings clicked')}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Settings</span>
                </GlassButton>
                <GlassButton 
                  size="sm"
                  contentClassName="flex items-center gap-2"
                  onClick={() => console.log('Profile clicked')}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Profile</span>
                </GlassButton>
              </motion.div>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8C14B] to-transparent"
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

      {/* Main Content */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Main Dashboard Graph */}
          <motion.section
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FloatingParticles />
            <div className="relative bg-gradient-to-br from-[#5C2E7E]/30 to-[#3A1F3D]/20 backdrop-blur-xl border border-[#9B4CC2]/40 rounded-3xl p-10 shadow-2xl">
              <div className="absolute -top-5 -right-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-14 h-14 text-[#46E2A1]" />
                </motion.div>
              </div>

                  <div className="mb-10">
                    <ShimmerText>
                      {`Cauldron ${selectedCauldron} Energy Levels`}
                    </ShimmerText>
                    <p className="text-[#E8C14B]/60 text-sm mt-2 font-light tracking-widest">
                      Weekly arcane power levels for Cauldron {selectedCauldron}
                      {lastUpdate && (
                        <span className="ml-4 text-[#46E2A1]/50 text-xs">
                          Last updated: {lastUpdate.toLocaleTimeString()}
                        </span>
                      )}
                    </p>
                  </div>

              {/* Graph Container */}
              <div className="relative h-[500px] bg-[#1B0F1F]/50 rounded-2xl border border-[#9B4CC2]/20 p-8">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <OrbitalLoader message="Loading energy data..." />
                  </div>
                ) : (
                  <>
                    {/* Y-axis labels */}
                    <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-[#9B4CC2]/50">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    {/* Graph bars */}
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
                              <div className="absolute inset-0 bg-gradient-to-t from-[#46E2A1]/40 via-[#9B4CC2]/40 to-[#E8C14B]/60 rounded-t-lg blur-sm group-hover:blur-md transition-all" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#46E2A1]/80 via-[#9B4CC2]/70 to-[#E8C14B]/90 rounded-t-lg border border-[#46E2A1]/30" />

                              <motion.div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                              >
                                <div className="bg-[#1B0F1F]/90 border border-[#E8C14B]/50 rounded-lg px-3 py-1 text-[#E8C14B] text-xs font-semibold whitespace-nowrap">
                                  {data.energy}%
                                </div>
                              </motion.div>

                              <motion.div
                                className="absolute -top-2 left-1/2 -translate-x-1/2"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              >
                                <Sparkles className="w-4 h-4 text-[#E8C14B]" />
                              </motion.div>
                            </motion.div>

                            <span className="text-[#E8C14B]/70 text-sm tracking-wider">
                              {data.day}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="absolute left-8 right-0 top-6 bottom-16 pointer-events-none">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="absolute w-full border-t border-[#9B4CC2]/10"
                          style={{ top: `${i * 25}%` }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 flex items-center justify-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-t from-[#46E2A1] to-[#E8C14B] border border-[#46E2A1]/50" />
                  <span className="text-[#E8C14B]/70">Active Brewing Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-t from-[#9B4CC2] to-[#5C2E7E] border border-[#9B4CC2]/50" />
                  <span className="text-[#E8C14B]/70">Dormant Reserve</span>
                </div>
              </div>

              <motion.div
                className="absolute -right-8 top-1/4 text-3xl text-[#46E2A1]/20"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -left-8 bottom-1/4 text-2xl text-[#9B4CC2]/20"
                animate={{ rotate: [360, 0], y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                ⭐
              </motion.div>
            </div>
          </motion.section>

          {/* Three Boxes Side by Side */}
          <div className="grid grid-cols-3 gap-6">
            {/* Box 1: Tickets */}
            <motion.section
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FloatingParticles />
              <div className="relative bg-gradient-to-br from-[#5C2E7E]/20 to-[#1B0F1F]/40 backdrop-blur-xl border border-[#9B4CC2]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col">
                <div className="absolute -top-4 -right-4">
                  <AlertTriangle className="w-10 h-10 text-red-400 animate-pulse" />
                </div>

                <div className="mb-6">
                  <ShimmerText>Tickets</ShimmerText>
                </div>

                {/* Scrollable container */}
                <div className="space-y-3 overflow-y-auto max-h-96 pr-2 custom-scrollbar">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <OrbitalLoader message="Loading fraud tickets..." />
                    </div>
                  ) : (
                    fraudTickets.map((ticket, i) => (
                      <NotificationBubble key={i} text={ticket} delay={i * 0.1} />
                    ))
                  )}
                </div>

                <motion.div
                  className="absolute -left-6 top-1/2 w-8 h-8 text-[#9B4CC2]/30 text-2xl"
                  animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ✦
                </motion.div>
              </div>
            </motion.section>

            {/* Box 2: Missing Potions */}
            <motion.section
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <FloatingParticles />
              <div className="relative bg-gradient-to-br from-[#46E2A1]/10 to-[#1B0F1F]/40 backdrop-blur-xl border border-[#46E2A1]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col">
                <div className="absolute -top-4 -right-4">
                  <Droplet className="w-10 h-10 text-blue-400 animate-bounce" />
                </div>

                <div className="mb-6">
                  <ShimmerText>Missing Potions</ShimmerText>
                </div>

                {/* Scrollable container */}
                <div className="space-y-3 overflow-y-auto max-h-96 pr-2 custom-scrollbar">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <OrbitalLoader message="Loading potions..." />
                    </div>
                  ) : (
                    missingPotions.map((potion, i) => (
                      <NotificationBubble key={i} text={potion} delay={i * 0.1} />
                    ))
                  )}
                </div>

                <motion.div
                  className="absolute -right-6 top-1/3 w-8 h-8 text-[#46E2A1]/30 text-2xl"
                  animate={{ x: [-10, 10, -10], rotate: [0, -360] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  ✧
                </motion.div>
              </div>
            </motion.section>

            {/* Box 3: Overflow Alerts */}
            <motion.section
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FloatingParticles />
              <div className="relative bg-gradient-to-br from-[#E8C14B]/15 to-[#1B0F1F]/40 backdrop-blur-xl border border-[#E8C14B]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col">
                <div className="absolute -top-4 -right-4">
                  <Flame className="w-10 h-10 text-orange-400 animate-pulse" />
                </div>

                <div className="mb-6">
                  <ShimmerText>Overflow Alerts</ShimmerText>
                </div>

                {/* Scrollable container */}
                <div className="space-y-3 overflow-y-auto max-h-96 pr-2 custom-scrollbar">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <OrbitalLoader message="Loading overflow alerts..." />
                    </div>
                  ) : (
                    overflowAlerts.map((alert, i) => (
                      <NotificationBubble key={i} text={alert} delay={i * 0.1} />
                    ))
                  )}
                </div>

                <motion.div
                  className="absolute -left-6 bottom-1/4 w-8 h-8 text-[#E8C14B]/30 text-2xl"
                  animate={{ y: [-15, 15, -15], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✵
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1B0F1F]/80 to-transparent pointer-events-none" />
    </div>
  );
};

