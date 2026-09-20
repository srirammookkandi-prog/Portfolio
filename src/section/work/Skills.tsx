import { skillGroups, categoryStyles } from "../../data/Skill";

function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-neutral-200 px-6 py-10 md:px-10 md:py-32" >
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                        Skills
                    </p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Tools I use to build.
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                        A growing toolkit focused on building scalable,
                        responsive and maintainable frontend applications.
                    </p>
                </div>
                <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-2">
                    {skillGroups.map((group) => {

                        const styles = categoryStyles[
                            group.title as keyof typeof categoryStyles
                        ];

                        return (
                            <div
                                key={group.title}
                                className={` rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8 ${styles.card} `} >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`h-6 w-1 rounded-full ${styles.accent}`}
                                    />
                                    <h3 className="text-xl font-semibold text-neutral-900">
                                        {group.title}
                                    </h3>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`rounded-full border bg-white px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 ${styles.pill} `}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;