function Create() {
    return (
        <section
            id="create"
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
                {/* Section Header */}
                <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20">
                    <div>
                        <p
                            className="
                text-sm
                font-medium
                uppercase
                tracking-[0.3em]
                text-yellow-500
              "
                        >
                            Create
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
                            Making things
                            <br />
                            with my hands.
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p
                            className="
                max-w-2xl
                text-lg
                leading-relaxed
                text-neutral-400
                md:text-xl
              "
                        >
                            Outside of screens and code, I enjoy creating things
                            from scratch. Cooking, baking and origami give me a
                            different kind of satisfaction — making something
                            tangible from a simple idea.
                        </p>
                    </div>
                </div>

                {/* Creative Activities */}
                <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
                    {/* Cooking */}
                    <article className="group border-t border-neutral-800 pt-6">
                        <div className="flex items-start justify-between">
                            <span className="text-4xl">🍳</span>

                            <span
                                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-neutral-600
                "
                            >
                                01
                            </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold">
                            Cooking
                        </h3>

                        <p className="mt-4 leading-relaxed text-neutral-500">
                            Experimenting with ingredients, trying new recipes
                            and enjoying the process of turning simple things
                            into something worth sharing.
                        </p>

                        <div
                            className="
                mt-6
                h-px
                w-0
                bg-yellow-500
                transition-all
                duration-500
                group-hover:w-full
              "
                        />
                    </article>

                    {/* Baking */}
                    <article className="group border-t border-neutral-800 pt-6">
                        <div className="flex items-start justify-between">
                            <span className="text-4xl">🥐</span>

                            <span
                                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-neutral-600
                "
                            >
                                02
                            </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold">
                            Baking
                        </h3>

                        <p className="mt-4 leading-relaxed text-neutral-500">
                            I enjoy the patience and precision that baking
                            requires — following a process while still leaving
                            room for creativity.
                        </p>

                        <div
                            className="
                mt-6
                h-px
                w-0
                bg-yellow-500
                transition-all
                duration-500
                group-hover:w-full
              "
                        />
                    </article>

                    {/* Origami */}
                    <article className="group border-t border-neutral-800 pt-6">
                        <div className="flex items-start justify-between">
                            <span className="text-4xl">📄</span>

                            <span
                                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-neutral-600
                "
                            >
                                03
                            </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold">
                            Origami
                        </h3>

                        <p className="mt-4 leading-relaxed text-neutral-500">
                            Turning a simple sheet of paper into something
                            meaningful. It's a small reminder that creativity
                            often starts with very little.
                        </p>

                        <div
                            className="
                mt-6
                h-px
                w-0
                bg-yellow-500
                transition-all
                duration-500
                group-hover:w-full
              "
                        />
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Create;