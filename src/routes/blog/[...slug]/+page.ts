import { posts } from "$lib/blog/Blog";
import type { EntryGenerator } from './$types';

export const prerender = true;

export const load = async ({ params }) => {
    let post = posts[params.slug.toLowerCase()];
    console.log(post);
    // if post not found then look in series
    if (!post) {
        for (const [key, value] of Object.entries(posts)) {
            if ('posts' in value) {
                for (const subpost of value.posts) {
                    if (subpost.slug === params.slug.toLowerCase()) {
                        console.log(subpost);
                        post = subpost;
                    }
                }
            }
        }
    }


    if (!post)
        return {
            status: 404,
            error: new Error(`Post not found`)
        };
    return post;
}

export const entries: EntryGenerator = () => {
    let slugs = [];
    for (const [key, value] of Object.entries(posts)) {
        if ('posts' in value) {
            for (const post of value.posts) {
                slugs.push({ slug: post.slug });
            }
        }
        slugs.push({ slug: value.slug });
    }

    return slugs;
};

