function WorkHero() {
    return (
        <section
            id="home"
            className="flex min-h-0 items-center px-6 py-12 md:min-h-[calc(100vh-81px)] md:px-10 md:py-20 "
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-4xl font-bold tracking-tight md:text-7xl">
                    Sriram Mookkandi
                </h2>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600 md:text-base">
                    Frontend Developer
                </p>
                <h1 className="mt- max-w-5xl text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
                    I build
                    <br />
                    digital experiences.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
                    I'm a frontend developer focused on building modern,
                    responsive and user-friendly web applications.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                    >
                        View Projects →
                    </a>
                    <a
                        href="/Sriram_Mookkandi.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WorkHero;