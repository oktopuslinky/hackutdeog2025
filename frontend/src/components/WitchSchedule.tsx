import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Wand2, Clock, MapPin } from "lucide-react";
import { WitchScheduleEntry, WitchScheduleResponse } from "@/services/api";
import { ShimmerText } from "@/components/ShimmerText";
import { OrbitalLoader } from "@/components/ui/orbital-loader";

interface WitchScheduleProps {
  scheduleData: WitchScheduleResponse | null;
  isLoading: boolean;
}

export const WitchSchedule = memo(({ scheduleData, isLoading }: WitchScheduleProps) => {
  // Group schedule by witch number
  const scheduleByWitch = useMemo(() => {
    if (!scheduleData?.schedule) return {};
    
    const grouped: Record<number, WitchScheduleEntry[]> = {};
    scheduleData.schedule.forEach((entry) => {
      if (!grouped[entry.witch_number]) {
        grouped[entry.witch_number] = [];
      }
      grouped[entry.witch_number].push(entry);
    });
    
    // Sort each witch's schedule by time
    Object.values(grouped).forEach((entries) => {
      entries.sort((a, b) => a.time - b.time);
    });
    
    return grouped;
  }, [scheduleData]);

  // Format time in minutes to readable format
  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  // Format node name (cauldron_009 -> Cauldron 9)
  const formatNodeName = (node: string): string => {
    if (node === "market_001" || node === "market") {
      return "Market";
    }
    const match = node.match(/cauldron_(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      return `Cauldron ${num}`;
    }
    return node;
  };

  const witchNumbers = useMemo(() => {
    return Object.keys(scheduleByWitch)
      .map(Number)
      .sort((a, b) => a - b);
  }, [scheduleByWitch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <OrbitalLoader message="Loading witch schedule..." />
      </div>
    );
  }

  if (!scheduleData || scheduleData.status !== "success") {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px] text-white/60">
        <div className="text-center">
          <p className="text-lg mb-2">No schedule data available</p>
          <p className="text-sm">{scheduleData?.message || "Schedule will appear here once available"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Statistics */}
      {scheduleData.statistics && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1B0F1F]/60 border border-[#46E2A1]/30 rounded-xl p-4">
            <p className="text-[#46E2A1]/60 text-xs uppercase tracking-wider mb-1">Total Collected</p>
            <p className="text-white text-xl font-bold">
              {scheduleData.statistics.total_collected.toFixed(1)}
            </p>
          </div>
          <div className="bg-[#1B0F1F]/60 border border-[#9B4CC2]/30 rounded-xl p-4">
            <p className="text-[#9B4CC2]/60 text-xs uppercase tracking-wider mb-1">Initial Production</p>
            <p className="text-white text-xl font-bold">
              {scheduleData.statistics.total_initial_production.toFixed(1)}
            </p>
          </div>
          <div className="bg-[#1B0F1F]/60 border border-[#E8C14B]/30 rounded-xl p-4">
            <p className="text-[#E8C14B]/60 text-xs uppercase tracking-wider mb-1">Iterations</p>
            <p className="text-white text-xl font-bold">
              {scheduleData.statistics.iterations}
            </p>
          </div>
        </div>
      )}

      {/* Schedule by Witch */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {witchNumbers.map((witchNum) => {
          const entries = scheduleByWitch[witchNum] || [];
          if (entries.length === 0) return null;

          return (
            <motion.div
              key={witchNum}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#5C2E7E]/20 to-[#1B0F1F]/40 backdrop-blur-md border border-[#9B4CC2]/30 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9B4CC2] to-[#46E2A1] flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold">Witch {witchNum}</h3>
                <span className="text-[#9B4CC2]/60 text-sm">
                  {entries.length} {entries.length === 1 ? "stop" : "stops"}
                </span>
              </div>

              <div className="space-y-2">
                {entries.map((entry, idx) => {
                  const isMarket = entry.node === "market_001" || entry.node === "market";
                  const isLast = idx === entries.length - 1;
                  
                  return (
                    <div
                      key={`${entry.witch_number}-${entry.time}-${idx}`}
                      className="flex items-center gap-3 pl-2"
                    >
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isMarket ? "bg-[#E8C14B]" : "bg-[#46E2A1]"
                          }`}
                        />
                        {!isLast && (
                          <div className="w-0.5 h-8 bg-[#9B4CC2]/30 mt-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                          <MapPin
                            className={`w-4 h-4 ${
                              isMarket ? "text-[#E8C14B]" : "text-[#46E2A1]"
                            }`}
                          />
                          <span className="text-white font-medium">
                            {formatNodeName(entry.node)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#9B4CC2]/60" />
                          <span className="text-[#9B4CC2]/80 text-sm">
                            {formatTime(entry.time)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

WitchSchedule.displayName = 'WitchSchedule';

