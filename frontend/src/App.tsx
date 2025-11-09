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
}

export default App;
