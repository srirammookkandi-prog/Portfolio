import { Link, useLocation } from "react-router";

function Navbar() {
    const location = useLocation();
    const isLife = location.pathname === "/life";

    const workLinks = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];

    const lifeLinks = [
        { label: "About Me", href: "#about" },
        { label: "Interests", href: "#interests" },
        { label: "Hobbies", href: "#hobbies" },
        { label: "Explore", href: "#explore" },
        { label: "Connect", href: "#connect" },
    ];

    const links = isLife ? lifeLinks : workLinks;

    return (
        <nav
            className={` sticky top-0 z-50 flex items-center justify-between border-b px-6 py-5 backdrop-blur-md transition-colors duration-500 md:px-10
        ${isLife
                    ? "border-neutral-800 bg-neutral-950/80 text-neutral-100"
                    : "border-neutral-200 bg-stone-50/80 text-neutral-900"
                }
      `}
        >
            <a
                href="#home"
                className="shrink-0 text-lg font-semibold tracking-tight md:text-xl"
            >
                Sriram Mookkandi
            </a>
            <div className="hidden items-center gap-7 md:flex">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`
              text-sm
              font-medium
              transition-opacity
              duration-300
              hover:opacity-50
              ${isLife
                                ? "text-neutral-300"
                                : "text-neutral-600"
                            }
            `}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <Link
                to={isLife ? "/" : "/life"}
                className={`
          rounded-full
          border
          px-4
          py-2
          text-sm
          font-medium
          transition-all
          duration-300
          hover:-translate-y-0.5
          ${isLife
                        ? "border-amber-500 text-amber-500 hover:bg-neutral-900"
                        : "border-blue-600 text-blue-600 hover:bg-blue-50"
                    }
        `}
            >
                {isLife ? "☀️ WORK" : "🌙 LIFE"}
            </Link>
        </nav>
    );
}
export default Navbar;