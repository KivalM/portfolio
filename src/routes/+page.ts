import { projects } from '$lib/data/projects';
import { blog, } from '$lib/data/blogs';
import { links } from '$lib/data/links';

export const prerender = true;

export function load({ params }) {
    return {
        projects: projects.slice(0, 3),
        blog: blog.slice(0, 3),
        links: links,
    };

}