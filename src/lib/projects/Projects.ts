import { GitHub, Website, type Link } from '$lib/data/Link';

const imageModules = import.meta.glob(
    '$lib/projects/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
    {
        eager: true,
        query: {
            enhanced: true
        }
    }
)

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

        let url = `/src/lib/projects/images/`;
        // replace images with the actual image paths
        for (let i = 0; i < images.length; i++) {
            // @ts-ignore
            images[i] = imageModules[url + images[i]].default;
        }
    }
}

export const projects: Project[] = [
    new Project("Descent to Demise",
        "A backrooms inspired survival horror game where you must escape a maze of rooms filled with monsters.",
        ["Unity", "C#", "Procedural generation"],
        ["d2d_monster.png", "d2d_map.png", "d2d_start.png",],
        [
            new GitHub("KivalM/Descent-to-Demise", "GitHub repository"),
        ],
        ["Ali Caunhye", "Pranav Ramcharan", "Yurvan Ramjan"]
        , "University"
    ),
    new Project("Portfolio",
        "This website",
        ["Svelte", "TypeScript"],
        ["website.png"],
        [
            new GitHub("KivalM/portfolio", "GitHub repository"),
            new Website("https://kivalm.com", "Live site")
        ]
    ),
    new Project("Shadows of Redemption",
        "A mystery puzzle visual novel where you must solve the mystery of the murder of a eccentric billionaire. Loosely based on the tabletop mystery game 'Sour Grapes of Wrath'",
        ["C++", "DALL-E"],
        ["sor_start.png", "sor_quiz.png", "sor_murder.png"],
        [
            new GitHub("KivalM/COMP315-Semester-Project", "SOR")
        ],
        ['Ali Caunhye'],
        "University"
    ),
    new Project("MindMasters",
        "A CMS and e-learning platform focused on interactive lessons.",
        ["Supabase", "SvelteKit"],
        ["mm.png"],
        [
            new Website(
                "https://mindmasters.co.za", ""
            )
        ],
    ),
    new Project("BrainF*ck JIT Compiler",
        "An application of Finite Automata to compile BrainF*ck via LLVM",
        ["Python", "Automata Theory"],
        ["bf.jpg"],
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
        ["bf.jpg"],
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
        ["evo_start.png", "evo_map.png"],
        [
            new GitHub(
                "KivalM/EvoChess", ""
            ), new Website(
                "https://kivalm.github.io/evochess", ""
            )
        ], ['Seevan Ponnan'],
    ),
]