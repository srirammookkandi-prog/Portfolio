import type { Project } from "../data/project";

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
    return (
        <article
            className={`group overflow-hidden rounded-2xl border border-neutral-200 bg-stone-50 transition-all duration-300 
                hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg ${featured ? "md:col-span-2" : null} `} >
            <div
                className={`overflow-hidden bg-neutral-100 ${featured ? "aspect-[2/1]" : "aspect-[16/9]"} `}>
                <img
                    src={project.image} alt={`${project.title} project preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                    {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className=" rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 " >
                            {technology}
                        </span>
                    ))}
                </div>
                <div className="mt-7 flex gap-6">

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 transition-opacity hover:opacity-60"
                    >
                        Live Demo →
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-neutral-700 transition-opacity hover:opacity-60"
                    >
                        GitHub →
                    </a>

                </div>
            </div>
        </article>
    );
}
export default ProjectCard;