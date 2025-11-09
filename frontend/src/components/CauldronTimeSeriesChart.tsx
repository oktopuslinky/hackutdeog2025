import React, { useMemo, memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface TimeSeriesData {
  time: string;
  potionLevel?: number;
  oilLevel?: number; // For backward compatibility
  probDown: number;
  probDownPercent?: number;
  timeFormatted?: string;
}

interface CauldronTimeSeriesChartProps {
  data: TimeSeriesData[];
  cauldronId: string;
}

export const CauldronTimeSeriesChart: React.FC<CauldronTimeSeriesChartProps> = memo(({
  data,
  cauldronId,
}) => {
  // Memoize chart data processing to avoid recalculation on every render
  // Limit to max 500 data points for better performance
  const chartData = useMemo(() => {
    let processedData = data.map((d) => {
      const potionLevel = d.potionLevel ?? d.oilLevel ?? 0;
      return {
        ...d,
        potionLevel,
        oilLevel: potionLevel, // For backward compatibility
        timeFormatted: d.timeFormatted || new Date(d.time).toLocaleTimeString([], {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        probDownPercent: d.probDownPercent ?? (d.probDown * 100), // Convert to percentage for display
      };
    });
    
    // If we have too many data points, sample them for better performance
    if (processedData.length > 500) {
      const step = Math.ceil(processedData.length / 500);
      processedData = processedData.filter((_, index) => index % step === 0);
    }
    
    return processedData;
  }, [data]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1B0F1F]/95 border border-[#9B4CC2]/50 rounded-lg p-3 shadow-xl backdrop-blur-sm">
          <p className="text-[#E8C14B] text-sm font-semibold mb-2">
            {payload[0]?.payload?.timeFormatted}
          </p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="text-white/90 text-xs"
              style={{ color: entry.color }}
            >
              {entry.name}:{" "}
              {entry.dataKey === "probDownPercent"
                ? `${entry.value.toFixed(1)}%`
                : entry.value.toFixed(2)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-white/60">
        No time series data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 20, right: 40, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#9B4CC2/20" />
        <XAxis
          dataKey="timeFormatted"
          stroke="#9B4CC2/60"
          tick={{ fill: "#ffffff", fontSize: 11 }}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis
          yAxisId="left"
          stroke="#46E2A1/60"
          tick={{ fill: "#46E2A1/70", fontSize: 11 }}
          label={{
            value: "Potion Level",
            angle: -90,
            position: "insideLeft",
            style: { fill: "#46E2A1", fontSize: 12 },
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#E8C14B/60"
          tick={{ fill: "#E8C14B/70", fontSize: 11 }}
          domain={[0, 100]}
          label={{
            value: "Drain Probability (%)",
            angle: 90,
            position: "insideRight",
            style: { fill: "#E8C14B", fontSize: 12 },
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="line"
          formatter={(value) => (
            <span className="text-white/80 text-sm">{value}</span>
          )}
        />
        <ReferenceLine
          yAxisId="right"
          y={50}
          stroke="#E8C14B/40"
          strokeDasharray="5 5"
          label={{ value: "50% Threshold", position: "right", fill: "#E8C14B/60", fontSize: 10 }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="potionLevel"
          stroke="#46E2A1"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5, fill: "#46E2A1" }}
          name="Potion Level"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="probDownPercent"
          stroke="#E8C14B"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
          activeDot={{ r: 5, fill: "#E8C14B" }}
          name="Drain Probability"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}, (prevProps, nextProps) => {
  // Only re-render if data or cauldronId changes
  // Return true if props are equal (skip re-render), false if different (re-render)
  if (prevProps.data.length !== nextProps.data.length) return false;
  if (prevProps.cauldronId !== nextProps.cauldronId) return false;
  // Deep comparison would be expensive, so we'll rely on reference equality
  // The parent component should memoize the data array
  return prevProps.data === nextProps.data;
});

CauldronTimeSeriesChart.displayName = 'CauldronTimeSeriesChart';
