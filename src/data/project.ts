export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Shuggy - Food Ordering Application",
        description:
            "A responsive food ordering application inspired by modern food delivery platforms, with restaurant discovery, search, menus and cart functionality.",
        technologies: [
            "React",
            "JavaScript",
            "Redux Toolkit",
            "React Router",
            "Tailwind CSS",
            "REST API",
        ],
        image: "/projects/Shuggy.png",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
    },

    {
        id: 2,
        title: "E-Commerce Application",
        description:
            "A modern e-commerce application focused on product discovery, filtering, cart management and a responsive shopping experience.",
        technologies: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Tailwind CSS",
        ],
        image: "/projects/ecommerce.png",
        liveUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Admin Dashboard",
        description:
            "A responsive dashboard interface for visualizing data, managing information and presenting important metrics through a clean interface.",
        technologies: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Tailwind CSS",
        ],
        image: "/projects/admin-dashboard.png",
        liveUrl: "#",
        githubUrl: "#",
    },
];