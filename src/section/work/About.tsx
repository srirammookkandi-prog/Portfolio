function About() {
    return (
        <section id="about"
            className="border-t border-neutral-200 px-6 py-10 md:px-10 md:py-32"
        >
            <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:gap-20">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                        About
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Building with curiosity.
                    </h2>
                </div>
                <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
                    <p>
                        I'm Sriram Mookkandi, a frontend developer who enjoys
                        building modern and responsive web applications.
                    </p>
                    <p>
                        My journey into web development started with a
                        background in engineering and evolved into a strong
                        interest in creating user-focused digital experiences.
                    </p>
                    <p>
                        I enjoy working with React, JavaScript and TypeScript,
                        turning ideas into clean interfaces and continuously
                        learning better ways to build for the web.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;