import { useMemo } from "react";

const teamLinks = [
  { label: "Backend API", href: "http://localhost:8000/docs" },
  { label: "Repository", href: "https://github.com/your-org/hackutdeog2025" }
];

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app">
      <header className="hero">
        <h1>HackUTD OG 2025</h1>
        <p>React + Vite scaffold ready for rapid iteration.</p>
        <a className="cta" href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">
          Vite Docs
        </a>
      </header>

      <main className="content">
        <section>
          <h2>Getting Started</h2>
          <ol>
            <li>Install dependencies with <code>npm install</code> or <code>pnpm install</code>.</li>
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

      <footer className="footer">
        <p>&copy; {year} HackUTDE OG Team. Built with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;

