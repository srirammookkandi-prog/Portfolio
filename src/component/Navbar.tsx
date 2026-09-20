import { workLinks } from "../data/Navigation";
import {
    useAppDispatch,
    useAppSelector,
} from "../store/hook";
import {
    toggleMobileMenu,
    closeMobileMenu,
} from "../store/UIslice";
import { Link } from "react-router";



function Navbar() {
    const dispatch = useAppDispatch();
    const isMobileMenuOpen = useAppSelector(
        (state) => state.ui.isMobileMenuOpen
    );
    return (
        <>
            <nav
                className=" sticky top-0 z-50 flex items-center justify-between border-b border-neutral-200 bg-stone-50/80 px-6 py-5 text-neutral-900 backdrop-blur-md md:px-10 ">
                <a
                    href="#home"
                    className="shrink-0 text-lg font-semibold tracking-tight md:text-xl"
                >
                    Sriram Mookkandi
                </a>
                <div className="hidden items-center gap-7 md:flex">
                    {workLinks.map((link) => (
                        <a key={link.label}
                            href={link.href}
                            className=" text-sm font-medium text-neutral-600 transition-opacity duration-300 hover:opacity-50 ">
                            {link.label}
                        </a>
                    ))}
                </div>
                <Link
                    to="/life"
                    className="
    hidden
    rounded-full
    border
    border-blue-600
    px-4
    py-2
    text-sm
    font-medium
    text-blue-600
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-blue-50
    md:block
  "
                >
                    🌙 LIFE
                </Link>
                <button
                    type="button"
                    onClick={() => dispatch(toggleMobileMenu())}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                    className="
    rounded-md
    p-2
    text-neutral-900
    transition-colors
    hover:bg-neutral-100
    md:hidden
  "
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </nav>
            {isMobileMenuOpen && (
                <div
                    className="
      border-b
      border-neutral-200
      bg-stone-50
      px-6
      py-6
      md:hidden
    "
                >
                    <div className="flex flex-col gap-5">
                        {workLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => dispatch(closeMobileMenu())}
                                className="
            text-sm
            font-medium
            text-neutral-700
            transition-colors
            hover:text-blue-600
          "
                            >
                                {link.label}
                            </a>
                        ))}

                        <Link
                            to="/life"
                            onClick={() => dispatch(closeMobileMenu())}
                            className="
          w-fit
          rounded-full
          border
          border-blue-600
          px-4
          py-2
          text-sm
          font-medium
          text-blue-600
          transition-all
          duration-300
          hover:bg-blue-50
        "
                        >
                            🌙 LIFE
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;