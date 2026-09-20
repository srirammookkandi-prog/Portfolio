import { experiences } from "../../data/Experience";
function Experience() {
    return (
        <section id="experience"
            className="border-t border-neutral-200 px-6 py-10 md:px-10 md:py-32" >
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                        Experience
                    </p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Where I've been building.
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                        My professional journey across engineering and software
                        development.
                    </p>
                </div>
                <div className="mt-12 md:mt-16">
                    {experiences.map((experience) => (
                        <article
                            key={`${experience.company}-${experience.role}`}
                            className=" relative border-l-2 border-blue-200 pl-6 md:pl-10 " >
                            <span
                                className=" absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-stone-50 " />
                            <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-600">
                                {experience.period}
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                                {experience.role}
                            </h3>
                            <p className="mt-2 text-lg font-medium text-neutral-700">
                                {experience.company}
                            </p>
                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
                                {experience.description}
                            </p>
                            <ul className="mt-6 space-y-3">
                                {experience.highlights.map((highlight) => (
                                    <li key={highlight} className="flex items-start gap-3 text-sm text-neutral-600 md:text-base"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Experience;