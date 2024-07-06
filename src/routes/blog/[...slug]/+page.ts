import { posts } from "$lib/blog/Blog";
import type { EntryGenerator } from './$types';

export const prerender = true;

export const load = async ({ params }) => {
    let post = posts.find(post => post.slug === params.slug);
    return post;
}

export const entries: EntryGenerator = () => {
    return posts.map(post => ({
        slug: post.slug,
        type: 'page',
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        url: post.url,
        pin: post.pin
    }));
};

