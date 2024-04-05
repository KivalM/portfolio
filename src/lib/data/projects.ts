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
            new Website("https://kivalm.com", "Live site")
        ]
    ),
    new Project("Shadows of Redemption",
        "A mystery puzzle visual novel where you must solve the mystery of the murder of a eccentric billionaire. Loosely based on the tabletop mystery game 'Sour Grapes of Wrath'",
        ["C++", "DALL-E"],
        ["projects/sor_start.png", "projects/sor_start.png", "projects/sor_start.png"],
        [
            new GitHub("KivalM/COMP315-Semester-Project", "SOR")
        ]
    ),
    new Project("MindMasters",
        "A CMS and e-learning platform focused on interactive lessons.",
        ["Supabase", "SvelteKit"],
        ["projects/mm.png"],
        [
            new Website(
                "https://mindmasters.co.za", ""
            )
        ]
    ),
    new Project("BrainF*ck JIT Compiler",
        "An application of Finite Automata to compile BrainF*ck via LLVM",
        ["Python", "Automata Theory"],
        ["projects/bg.jpg"],
        [
            new GitHub(
                "KivalM/314-Project", ""
            )
        ]
    ),
]