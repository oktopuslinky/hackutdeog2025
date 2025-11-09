import { useMemo } from "react";
import LiquidEther from "@/components/LiquidEther";

const teamLinks = [
  { label: "Backend API", href: "http://localhost:8000/docs" },
  { label: "Repository", href: "https://github.com/your-org/hackutdeog2025" }
];

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

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

      <div className="app relative z-10 pointer-events-none">
        <header className="hero pointer-events-auto">
          <h1>HackUTD OG 2025</h1>
          <p>React + Vite scaffold ready for rapid iteration.</p>
          <a className="cta" href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">
            Vite Docs
          </a>
        </header>

        <main className="content pointer-events-auto">
          <section>
            <h2>Getting Started</h2>
            <ol>
              <li>
                Install dependencies with <code>npm install</code> or <code>pnpm install</code>.
              </li>
              <li>Run the dev server with <code>npm run dev</code>.</li>
              <li>Edit files in <code>src/</code> to build your UI.</li>
            </ol>
          </section>

          <section>
            <h2>Team Resources</h2>
            <ul>
              {teamLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="footer pointer-events-auto">
          <p>&copy; {year} HackUTDE OG Team. Built with React + Vite.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
