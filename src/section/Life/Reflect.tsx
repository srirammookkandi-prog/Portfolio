function Reflect() {
    return (
        <section
            id="reflect"
            className="
        border-t
        border-neutral-900
        bg-neutral-950
        px-6
        py-24
        text-neutral-100
        md:px-10
        md:py-40
      "
        >
            <div className="mx-auto w-full max-w-5xl text-center">
                {/* Label */}
                <p
                    className="
            text-sm
            font-medium
            uppercase
            tracking-[0.3em]
            text-yellow-500
          "
                >
                    Reflect
                </p>

                {/* Main heading */}
                <h2
                    className="
            mx-auto
            mt-8
            max-w-4xl
            text-5xl
            font-bold
            leading-[0.95]
            tracking-tight
            md:text-7xl
          "
                >
                    Some journeys
                    <br />
                    are not about distance.
                </h2>

                {/* Description */}
                <p
                    className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-400
            md:text-xl
          "
                >
                    There are moments when slowing down matters more than
                    moving forward. Visiting temples and spending time in
                    quiet places gives me space to reflect, reconnect and
                    appreciate the journey.
                </p>

                {/* Divider */}
                <div className="mx-auto mt-16 h-px w-20 bg-neutral-800" />

                {/* Reflection points */}
                <div
                    className="
            mx-auto
            mt-12
            grid
            max-w-3xl
            gap-10
            md:grid-cols-3
          "
                >
                    <div>
                        <span className="text-3xl">🛕</span>

                        <h3 className="mt-5 text-lg font-semibold">
                            Temples
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                            Finding peace in places filled with history,
                            devotion and stillness.
                        </p>
                    </div>

                    <div>
                        <span className="text-3xl">🧘</span>

                        <h3 className="mt-5 text-lg font-semibold">
                            Stillness
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                            Taking a step back from the noise and making space
                            to think.
                        </p>
                    </div>

                    <div>
                        <span className="text-3xl">🙏</span>

                        <h3 className="mt-5 text-lg font-semibold">
                            Gratitude
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                            Appreciating where I am, where I've been and the
                            people who make the journey meaningful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reflect;