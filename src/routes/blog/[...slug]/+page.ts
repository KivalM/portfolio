import { posts } from '$lib/blog/posts';

export const prerender = true;
export const load = async ({ params }) => {
    console.log(params)
    let post = posts.find(post => post.slug === params.slug);
    console.log(post)
    return post;
}