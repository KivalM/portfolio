// src/routes/+page.server.ts
import { posts } from '$lib/blog/Blog';

export const prerender = true;

export const load = async ({ params }) => {
    return { posts: posts };
}