import ModeToggle from "./ModeToggle";
import type { Mode } from "../types/mode";

interface NavbarProps {
    mode: Mode;
    onToggle: () => void;
}

function Navbar({ mode, onToggle }: NavbarProps) {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <div className="font-semibold">
                Sriram Mookkandi
            </div>

            <ModeToggle
                mode={mode}
                onToggle={onToggle}
            />
        </nav>
    );
}

export default Navbar;