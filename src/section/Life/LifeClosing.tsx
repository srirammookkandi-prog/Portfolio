import { Link } from "react-router";

function LifeClosing() {
    return (
        <section
            id="life-closing"
            className="
        border-t
        border-neutral-900
        bg-neutral-950
        px-6
        py-32
        text-neutral-100
        md:px-10
        md:py-48
      "
        >
            <div className="mx-auto w-full max-w-6xl">
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
                        Still becoming
                    </p>

                    <h2
                        className="
              mt-8
              text-6xl
              font-bold
              leading-[0.9]
              tracking-tight
              md:text-8xl
            "
                    >
                        Still curious.
                        <br />
                        Still moving.
                        <br />
                        Still becoming.
                    </h2>

                    <p
                        className="
              mt-10
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-400
              md:text-xl
            "
                    >
                        There is always something new to learn, somewhere
                        new to explore and another reason to keep moving
                        forward.
                    </p>
                </div>

                <div
                    className="
            mt-20
            flex
            flex-col
            gap-8
            border-t
            border-neutral-800
            pt-8
            md:flex-row
            md:items-end
            md:justify-between
          "
                >
                    <div>
                        <p className="text-sm text-neutral-500">
                            Sriram Mookkandi
                        </p>

                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-700">
                            Beyond the code.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-neutral-800
              px-5
              py-3
              text-sm
              font-medium
              text-neutral-300
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-yellow-500
              hover:text-yellow-500
            "
                    >
                        ☀️ Back to Work
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LifeClosing;