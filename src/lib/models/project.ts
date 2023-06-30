export interface Project {
    id: string;
    name: string;
    description: string;
    image: string| null;
    url: string | null;
    github: string;
    tags: string[];
}

// Projects
// kivalm.com
// This website!
// Rust
// Yew
// WebAssembly
// HTML
// TailwindCSS
// Link
// Spotblock-rs
// (unmaintained) A spotify adblocker for linux written in rust
// Rust
// *nix
// SML
// (wip) A simple markup language written in rust, focused on simplicity
// Rust
// Markdown


export const projects: Project[] = [
    {
        id: 'kivalm.com',
        name: 'kivalm.com',
        description: 'This website!',

        url: 'https://kivalm.com',
        github: 'https://github.com/KivalM/website',
        tags: ['SvelteKit', 'TailwindCSS']
    },
    {
        id: 'spotblock-rs',
        name: 'Spotblock-rs',
        description: 'A spotify adblocker for linux written in rust',
        image: '/assets/images/projects/spotblock-rs.png',
        github: 'https://github.com/KivalM/spotblock-rs',
        tags: ['Rust', 'PipeWire', 'Spotify', 'Linux']
    },
    {
        id: 'shadows-of-redemption',
        name: 'Shadows of Redemption',
        description: 'A detective mystery visual novel',
        github: 'https://www.github.com/KivalM/shadows-of-redemption',
        tags: ['C++', 'Webview', 'Visual Novel', 'Game']
    },
];
        