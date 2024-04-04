import { GitHub, Website, type Link } from "./links";

export class Project {
    constructor(
        public title: string,
        public description: string,
        public tags: string[],
        public images: string[],
        public links: Link[],
    ) { }
}

export const projects: Project[] = [
    new Project("Descent to Demise",
        "A backrooms inspired survival horror game where you must escape a maze of rooms filled with monsters.",
        ["Unity", "C#", "Procedural generation"],
        ["projects/d2d_monster.png", "projects/d2d_map.png", "projects/d2d_start.png",],
        [
            new GitHub("KivalM/Descent-to-Demise", "GitHub repository"),
        ]
    ),
    new Project("Portfolio",
        "This website",
        ["Svelte", "TypeScript"],
        ["projects/website.png"],
        [
            new GitHub("KivalM/portfolio", "GitHub repository"),
        ]
    ),
    new Project("Shadows of Redemption",
        "Description 3",
        ["C++", "DALL-E"],
        ["projects/sor_start.png", "projects/sor_start.png", "projects/sor_start.png"],
        []
    ),
    new Project("Project 4",
        "Description 4",
        ["Tag1", "Tag2"],
        ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        []
    ),
]