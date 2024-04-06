import { GitHub, Website, type Link } from "./links";

const projectImages = import.meta.glob('$lib/images/projects/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'run', fit: "cover" }
});
console.log(projectImages);

export class Project {
    constructor(
        public title: string,
        public description: string,
        public tags: string[],
        public images: any[],
        public links: Link[],
        public team: string[] = [],
        public category: string = "Personal",
    ) {

        let url = `/src/lib/images/`;
        // replace images with the actual image paths
        for (let i = 0; i < images.length; i++) {
            images[i] = projectImages[url + images[i]];
        }
    }
}

export const projects: Project[] = [
    new Project("Descent to Demise",
        "A backrooms inspired survival horror game where you must escape a maze of rooms filled with monsters.",
        ["Unity", "C#", "Procedural generation"],
        ["projects/d2d_monster.png", "projects/d2d_map.png", "projects/d2d_start.png",],
        [
            new GitHub("KivalM/Descent-to-Demise", "GitHub repository"),
        ],
        ["Ali Caunhye", "Pranav Ramcharan", "Yurvan Ramjan"]
        , "University"
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
        ["projects/sor_start.png", "projects/sor_quiz.png", "projects/sor_murder.png"],
        [
            new GitHub("KivalM/COMP315-Semester-Project", "SOR")
        ],
        ['Ali Caunhye'],
        "University"
    ),
    new Project("MindMasters",
        "A CMS and e-learning platform focused on interactive lessons.",
        ["Supabase", "SvelteKit"],
        ["projects/mm.png"],
        [
            new Website(
                "https://mindmasters.co.za", ""
            )
        ],
    ),
    new Project("BrainF*ck JIT Compiler",
        "An application of Finite Automata to compile BrainF*ck via LLVM",
        ["Python", "Automata Theory"],
        ["projects/bf.jpg"],
        [
            new GitHub(
                "KivalM/315-Semester-Project", ""
            )
        ],
        [],
        "University"
    ),
    new Project("CodeBusters",
        "We built a software system with Tauri, Rust and Svelte, and interfaced it with an LLM to provide analysis on Programming Code.",
        ["Rust", "Tauri", "LLMs"],
        ["projects/bf.jpg"],
        [
            new GitHub(
                "KivalM/301-Semester-Project", ""
            )
        ], ['Ali Caunhye'],
        "University"
    ),

    new Project("KML",
        "KML is a markup language for defining blog posts. It is designed to be easy to read, write and parse.",
        ["Rust", "Markup"],
        [],
        [
            new GitHub(
                "KivalM/kml", ""
            ),
        ]
    ), new Project("SpotBlock",
        "This was a simple application to disable the playing of advertisements in Spotify for Linux Desktop.",
        ["Rust", "Linux"],
        [],
        [
            new GitHub(
                "KivalM/spotblock-rs", ""
            ),
        ]
    ), new Project("EvoChess",
        "This was a project done for the UKZN hackathon hosted by BBD Software, where we took second place. We built a unique spin on chess where pieces evolve with takedowns.",
        ["Svelte", "Webassembly", "Chess"],
        ["projects/evo_start.png", "projects/evo_map.png"],
        [
            new GitHub(
                "KivalM/EvoChess", ""
            ), new Website(
                "https://kivalm.github.io/evochess", ""
            )
        ], ['Seevan Ponnan'],
    ),
]