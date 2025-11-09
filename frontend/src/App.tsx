import { useState } from "react";
import { BarChart3 } from "lucide-react";
import LiquidEther from "@/components/LiquidEther";
import VariableProximity from "@/components/VariableProximity";
import { GlassButton } from "@/components/ui/glass-button";
import { MysticDashboard } from "@/pages/MysticDashboard";
import BroomCursor from "@/components/BroomCursor";
import ClickSpark from "@/components/ClickSpark";
import "@/components/broom-cursor.css";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return (
      <>
        <BroomCursor />
        <ClickSpark />
        <MysticDashboard onBack={() => setShowDashboard(false)} />
      </>
    );
  }

  return (
    <>
      <BroomCursor />
      <ClickSpark />
    <div className="relative min-h-screen text-white overflow-hidden" style={{ backgroundColor: '#1B0F1F' }}>
      <LiquidEther
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%", position: "fixed" }}
        colors={["#3A1F3D", "#9B4CC2", "#5C2E7E"]}
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
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8C14B] via-[#9B4CC2] to-[#46E2A1] drop-shadow-[0_0_30px_rgba(155,76,194,0.6)]">
          <VariableProximity 
            text="WhitchWatch"
            radius={120}
            maxFontSize={1.15}
            minFontSize={1}
          />
        </h1>
      </div>

      {/* Glass Dashboard Button at Bottom */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <GlassButton 
          size="default"
          contentClassName="flex items-center gap-2"
          onClick={() => setShowDashboard(true)}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Dashboard</span>
        </GlassButton>
      </div>
    </div>
    </>
  );
}

export default App;
