function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-neutral-200 px-6 py-16 md:px-10 md:py-32"
        >
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-4xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                        Contact
                    </p>
                    <h2 className="mt-5 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                        Let's build something
                        <br />
                        meaningful together.
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
                        I'm open to frontend development opportunities,
                        interesting projects and conversations about building
                        for the web.
                    </p>
                </div>
                <div className="mt-10">
                    <a
                        href="mailto:your-email@example.com"
                        className=" inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300
              hover:-translate-y-1 hover:bg-blue-700 "
                    >
                        Get In Touch →
                    </a>
                </div>

                <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-neutral-200 pt-8">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600"
                    >
                        Instagram ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;