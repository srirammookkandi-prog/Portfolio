import type { Mode } from "../types/mode";

interface ModeToggleProps {
    mode: Mode;
    onToggle: () => void;
}

function ModeToggle({ mode, onToggle }: ModeToggleProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={`Switch to ${mode === "work" ? "life" : "work"} mode`}
        >
            {mode === "work" ? "☀️ WORK" : "🌙 LIFE"}
        </button>
    );
}

export default ModeToggle;