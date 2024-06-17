// src/routes/+page.server.ts
import { posts } from '$lib/blog/posts';

export const load = async ({ params }) => {
    return { posts: posts };
}