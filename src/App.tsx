import { useState } from "react";
import ModeToggle from "./component/ModeToggle";
import type { Mode } from "./types/mode";

function App() {
  const [mode, setMode] = useState<Mode>("work");

  const toggleMode = () => {
    setMode((currentMode) =>
      currentMode === "work" ? "life" : "work"
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500
  ${mode === "work"
          ? "bg-stone-50 text-neutral-900"
          : "bg-neutral-950 text-neutral-100"}
`}
    >
      <div className="fixed right-6 top-6 z-50">
        <ModeToggle mode={mode} onToggle={toggleMode} />
      </div>
      <h1>
        {mode === "work"
          ? "Sriram — Professional"
          : "Sriram — Life"}
      </h1>

    </div >
  );
}

export default App;