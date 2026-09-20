import { projects } from "../../data/project";
import ProjectCard from "../../component/ProjectCard";

function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-neutral-200 px-6 py-10 md:px-10 md:py-32"
        >
            <div className="mx-auto w-full max-w-6xl">

                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                        Projects
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Selected work.
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                        A collection of applications I've built while developing
                        my frontend engineering skills.
                    </p>
                </div>
                <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            featured={project.featured}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;