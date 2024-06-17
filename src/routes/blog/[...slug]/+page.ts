import { posts } from '$lib/blog/posts';

export const prerender = true;
export const load = async ({ params }) => {
    let post = posts.find(post => post.slug === params.slug);
    return post;
}