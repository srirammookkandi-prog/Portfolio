function Move() {
    return (
        <section
            id="move"
            className="
        border-t
        border-neutral-900
        bg-neutral-950
        px-6
        py-20
        text-neutral-100
        md:px-10
        md:py-32
      "
        >
            <div className="mx-auto w-full max-w-6xl">

                {/* Section heading */}
                <div className="max-w-3xl">
                    <p
                        className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-yellow-500
            "
                    >
                        Move
                    </p>

                    <h2
                        className="
              mt-5
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              md:text-7xl
            "
                    >
                        I keep moving.
                    </h2>

                    <p
                        className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-400
              md:text-xl
            "
                    >
                        Running, competing and pushing myself forward.
                        Movement keeps me disciplined, focused and curious
                        about what I can do next.
                    </p>
                </div>

                {/* Activities */}
                <div
                    className="
            mt-16
            grid
            gap-px
            overflow-hidden
            border
            border-neutral-800
            bg-neutral-800
            md:grid-cols-4
          "
                >
                    <div className="bg-neutral-950 p-6 md:p-8">
                        <p className="text-3xl">🏃</p>

                        <h3 className="mt-6 text-xl font-semibold">
                            Running
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                            Finding rhythm, building endurance and staying
                            consistent one run at a time.
                        </p>
                    </div>

                    <div className="bg-neutral-950 p-6 md:p-8">
                        <p className="text-3xl">🏅</p>

                        <h3 className="mt-6 text-xl font-semibold">
                            Marathons
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                            Long distances teach patience, preparation and
                            the value of showing up.
                        </p>
                    </div>

                    <div className="bg-neutral-950 p-6 md:p-8">
                        <p className="text-3xl">⚽</p>

                        <h3 className="mt-6 text-xl font-semibold">
                            Sports
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                            I enjoy sports for the competition, energy and
                            challenge of playing as a team.
                        </p>
                    </div>

                    <div className="bg-neutral-950 p-6 md:p-8">
                        <p className="text-3xl">♟️</p>

                        <h3 className="mt-6 text-xl font-semibold">
                            Chess
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                            A different kind of movement — thinking ahead,
                            adapting and making every move count.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Move;