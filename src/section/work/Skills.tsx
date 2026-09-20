const skillGroups = [
    {
        title: "Core",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
        ],
    },
    {
        title: "Frontend",
        skills: [
            "React",
            "React Hooks",
            "React Router",
            "Redux Toolkit",
        ],
    },
    {
        title: "Styling",
        skills: [
            "Tailwind CSS",
            "Responsive Design",
        ],
    },
    {
        title: "APIs & Tools",
        skills: [
            "REST APIs",
            "Git",
            "GitHub",
            "Jest",
            "VS Code",
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-neutral-200 px-6 py-10 md:px-10 md:py-32"
        >
            <div className="mx-auto w-full max-w-6xl">

                {/* Heading */}
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

                {/* Skill groups */}
                <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-2">
                    {skillGroups.map((group) => {
                        const categoryStyles = {
                            Core: {
                                card: "border-blue-200 bg-blue-50/70",
                                accent: "bg-blue-600",
                                pill: "border-blue-200 bg-white text-blue-700 hover:border-blue-400",
                            },
                            Frontend: {
                                card: "border-violet-200 bg-violet-50/70",
                                accent: "bg-violet-600",
                                pill: "border-violet-200 bg-white text-violet-700 hover:border-violet-400",
                            },
                            Styling: {
                                card: "border-emerald-200 bg-emerald-50/70",
                                accent: "bg-emerald-600",
                                pill: "border-emerald-200 bg-white text-emerald-700 hover:border-emerald-400",
                            },
                            "APIs & Tools": {
                                card: "border-amber-200 bg-amber-50/70",
                                accent: "bg-amber-500",
                                pill: "border-amber-200 bg-white text-amber-700 hover:border-amber-400",
                            },
                        };

                        const styles = categoryStyles[
                            group.title as keyof typeof categoryStyles
                        ];

                        return (
                            <div
                                key={group.title}
                                className={`
          rounded-xl
          border
          p-5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-md
          md:p-8
          ${styles.card}
        `}
                            >
                                {/* Category heading */}
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`h-6 w-1 rounded-full ${styles.accent}`}
                                    />

                                    <h3 className="text-xl font-semibold text-neutral-900">
                                        {group.title}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`
                rounded-full
                border
                bg-white
                px-4
                py-2
                text-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                ${styles.pill}
              `}
                                        >
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