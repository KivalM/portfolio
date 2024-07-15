import { posts } from "$lib/blog/Blog";
import type { EntryGenerator } from './$types';

export const prerender = true;

export const load = async ({ params }) => {
    console.log(posts);
    console.log(params);
    let post = posts.find(post => post.slug === params.slug);
    console.log(post);

    // 404 if post not found
    if (!post) {
        console.log(`Post not found`);
        return {
            status: 404,
            error: new Error(`Post not found`)
        };
    }

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

