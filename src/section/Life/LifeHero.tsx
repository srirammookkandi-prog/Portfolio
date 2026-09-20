import { Link } from "react-router";

function LifeHero() {
    return (
        <section
            id="life-home"
            className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-neutral-950
        px-6
        py-20
        text-neutral-100
        md:px-10
      "
        >
            <div className="mx-auto w-full max-w-6xl">
                {/* Back to Work */}
                <Link
                    to="/"
                    className="
        absolute
        right-6
        top-6
        rounded-full
        border
        border-neutral-800
        px-4
        py-2
        text-sm
        font-medium
        text-neutral-300
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-yellow-500
        hover:text-yellow-500
        md:right-10
        md:top-8
    "
                >
                    ☀️ Back to Work
                </Link>

                {/* Hero content */}
                <div className="max-w-5xl">
                    <p
                        className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-yellow-500
            "
                    >
                        The Night Side
                    </p>

                    <h1
                        className="
              mt-6
              text-6xl
              font-bold
              leading-[0.9]
              tracking-tight
              md:text-8xl
            "
                    >
                        Beyond
                        <br />
                        the code.
                    </h1>

                    <p
                        className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-400
              md:text-xl
            "
                    >
                        A glimpse into the things that keep me moving,
                        creating, exploring, learning and growing outside
                        of work.
                    </p>
                </div>

                {/* Scroll indicator */}
                <div
                    className="
            absolute
            bottom-8
            left-6
            flex
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[0.2em]
            text-neutral-600
            md:left-10
          "
                >
                    <span className="h-px w-8 bg-neutral-700" />
                    Scroll to explore
                </div>
            </div>
        </section>
    );
}

export default LifeHero;