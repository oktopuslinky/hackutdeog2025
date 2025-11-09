import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, AlertTriangle, Droplet, Flame, TrendingUp, Home, RefreshCw, Wand2 } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { ShimmerText } from "@/components/ShimmerText";
import { NotificationBubble } from "@/components/NotificationBubble";
import { GlassButton } from "@/components/ui/glass-button";
import { OrbitalLoader } from "@/components/ui/orbital-loader";
import { CauldronTimeSeriesChart } from "@/components/CauldronTimeSeriesChart";
import { WitchSchedule } from "@/components/WitchSchedule";
import { getDashboardStats, DashboardStats, fetchWitchSchedule, WitchScheduleResponse } from "@/services/api";

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
  const [witchSchedule, setWitchSchedule] = useState<WitchScheduleResponse | null>(null);
  const [isLoadingSchedule, setIsLoadingSchedule] = useState(false);

  // Fetch dashboard data - memoized with useCallback
  const fetchData = useCallback(async (cauldronId: string) => {
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
  }, []);

  // Fetch witch schedule - memoized with useCallback
  const fetchSchedule = useCallback(async () => {
    setIsLoadingSchedule(true);
    try {
      const schedule = await fetchWitchSchedule();
      setWitchSchedule(schedule);
    } catch (error) {
      console.error("Error fetching witch schedule:", error);
    } finally {
      setIsLoadingSchedule(false);
    }
  }, []);

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

  // Handle cauldron selection change - memoized
  const handleCauldronChange = useCallback((cauldronId: string) => {
    setSelectedCauldron(cauldronId);
    fetchData(cauldronId);
  }, [fetchData]);

  useEffect(() => {
    fetchData(selectedCauldron);
    fetchSchedule();
    // Auto-refresh every 2 minutes (120 seconds) instead of 30 seconds
    const interval = setInterval(() => fetchData(selectedCauldron), 120000);
    const scheduleInterval = setInterval(() => fetchSchedule(), 300000); // Refresh schedule every 5 minutes
    return () => {
      clearInterval(interval);
      clearInterval(scheduleInterval);
    };
  }, [selectedCauldron, fetchData, fetchSchedule]);

  useEffect(() => {
    // Reduce update frequency from 50ms to 100ms for better performance
    const interval = setInterval(() => {
      setShimmerPosition((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Memoize derived data to prevent unnecessary recalculations
  const fraudTickets = useMemo(() => 
    dashboardData?.fraudTickets || [
      "Loading cauldron data...",
      "Connecting to sensors...",
      "Initializing monitoring...",
      "Please wait...",
    ], [dashboardData?.fraudTickets]
  );

  const missingPotions = useMemo(() =>
    dashboardData?.missingPotions || [
      "Loading inventory data...",
      "Syncing with database...",
      "Fetching records...",
      "Please wait...",
    ], [dashboardData?.missingPotions]
  );

  const overflowAlerts = useMemo(() =>
    dashboardData?.overflowAlerts || [
      "Loading alert system...",
      "Checking cauldron levels...",
      "Monitoring overflow...",
      "Please wait...",
    ], [dashboardData?.overflowAlerts]
  );

  const timeSeriesData = useMemo(() =>
    dashboardData?.graphData || dashboardData?.timeSeriesData || [],
    [dashboardData?.graphData, dashboardData?.timeSeriesData]
  );

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] bg-gradient-to-b from-[#1B0F1F] via-[#3A1F3D] to-[#1B0F1F] relative overflow-x-hidden"
    >
      {/* Top Dashboard Bar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#1B0F1F]/40 border-b border-[#9B4CC2]/20"
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
            {/* Reduce backdrop-blur intensity for better performance */}
            <div className="relative bg-gradient-to-br from-[#5C2E7E]/30 to-[#3A1F3D]/20 backdrop-blur-md border border-[#9B4CC2]/40 rounded-3xl p-10 shadow-2xl">
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
                  {`Cauldron ${selectedCauldron} — Potion Level & Drain Probability`}
                </ShimmerText>
                <p className="text-[#E8C14B]/60 text-sm mt-2 font-light tracking-widest">
                  Real-time monitoring potion levels and drain probability for Cauldron {selectedCauldron}
                  {lastUpdate && (
                    <span className="ml-4 text-[#46E2A1]/50 text-xs">
                      Last updated: {lastUpdate.toLocaleTimeString()}
                    </span>
                  )}
                </p>
              </div>

              {/* Interactive Time Series Chart Container */}
              <div className="relative h-[500px] bg-[#1B0F1F]/50 rounded-2xl border border-[#9B4CC2]/20 p-8">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <OrbitalLoader message="Loading energy data..." />
                  </div>
                ) : timeSeriesData.length > 0 ? (
                  <CauldronTimeSeriesChart
                    data={timeSeriesData}
                    cauldronId={selectedCauldron}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white/60">
                    <div className="text-center">
                      <p className="text-lg mb-2">No time series data available</p>
                      <p className="text-sm">Data will appear here once available</p>
                    </div>
                  </div>
                )}
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

          {/* Witch Schedule Section */}
          <motion.section
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <FloatingParticles />
            <div className="relative bg-gradient-to-br from-[#5C2E7E]/30 to-[#3A1F3D]/20 backdrop-blur-md border border-[#9B4CC2]/40 rounded-3xl p-10 shadow-2xl">
              <div className="absolute -top-5 -left-5">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Wand2 className="w-14 h-14 text-[#9B4CC2]" />
                </motion.div>
              </div>

              <div className="mb-6">
                <ShimmerText>Witch Collection Schedule</ShimmerText>
                <p className="text-[#E8C14B]/60 text-sm mt-2 font-light tracking-widest">
                  Optimized route planning for potion collection across all cauldrons
                </p>
              </div>

              <WitchSchedule scheduleData={witchSchedule} isLoading={isLoadingSchedule} />
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
              <div className="relative bg-gradient-to-br from-[#5C2E7E]/20 to-[#1B0F1F]/40 backdrop-blur-md border border-[#9B4CC2]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col">
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
              <div className="relative bg-gradient-to-br from-[#46E2A1]/10 to-[#1B0F1F]/40 backdrop-blur-md border border-[#46E2A1]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col">
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
              <div className="relative bg-gradient-to-br from-[#E8C14B]/15 to-[#1B0F1F]/40 backdrop-blur-md border border-[#E8C14B]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col">
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
