function LifeConnect() {
    return (
        <section
            id="connect"
            className="
        border-t
        border-neutral-900
        bg-neutral-950
        px-6
        py-24
        text-neutral-100
        md:px-10
        md:py-32
      "
        >
            <div className="mx-auto w-full max-w-6xl">
                <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
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
                            Connect
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
                            Find me
                            <br />
                            outside the code.
                        </h2>
                    </div>

                    <div>
                        <p
                            className="
                max-w-2xl
                text-lg
                leading-relaxed
                text-neutral-400
                md:text-xl
              "
                        >
                            Different platforms, different sides of life.
                            Professional work, everyday moments and everything
                            in between.
                        </p>

                        <div className="mt-12 border-t border-neutral-800">
                            <a
                                href="YOUR_LINKEDIN_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-neutral-800
                  py-6
                  transition-colors
                  duration-300
                  hover:bg-neutral-900
                "
                            >
                                <div className="flex items-center gap-5">
                                    <span className="text-2xl">💼</span>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            LinkedIn
                                        </h3>

                                        <p className="mt-1 text-sm text-neutral-500">
                                            Professional journey
                                        </p>
                                    </div>
                                </div>

                                <span
                                    className="
                    text-xl
                    text-neutral-600
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-yellow-500
                  "
                                >
                                    ↗
                                </span>
                            </a>

                            <a
                                href="YOUR_INSTAGRAM_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-neutral-800
                  py-6
                  transition-colors
                  duration-300
                  hover:bg-neutral-900
                "
                            >
                                <div className="flex items-center gap-5">
                                    <span className="text-2xl">📸</span>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Instagram
                                        </h3>

                                        <p className="mt-1 text-sm text-neutral-500">
                                            Life outside work
                                        </p>
                                    </div>
                                </div>

                                <span
                                    className="
                    text-xl
                    text-neutral-600
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-yellow-500
                  "
                                >
                                    ↗
                                </span>
                            </a>

                            <a
                                href="YOUR_SNAPCHAT_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-neutral-800
                  py-6
                  transition-colors
                  duration-300
                  hover:bg-neutral-900
                "
                            >
                                <div className="flex items-center gap-5">
                                    <span className="text-2xl">👻</span>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Snapchat
                                        </h3>

                                        <p className="mt-1 text-sm text-neutral-500">
                                            Everyday moments
                                        </p>
                                    </div>
                                </div>

                                <span
                                    className="
                    text-xl
                    text-neutral-600
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-yellow-500
                  "
                                >
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LifeConnect;