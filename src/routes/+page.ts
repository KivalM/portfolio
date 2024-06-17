import { projects } from '$lib/data/projects';
import { posts, } from '$lib/blog/posts';
import { links } from '$lib/data/links';

export const prerender = true;

export function load({ params }) {
    return {
        projects: projects.slice(0, 3),
        blog: posts.slice(0, 3),
        links: links,
    };

}