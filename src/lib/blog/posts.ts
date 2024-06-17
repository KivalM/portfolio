

export type Glob = {
    metadata: BlogPost;
    default: unknown;
};

export interface BlogPost {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    content: any;
    url: string;
}

// Get all posts and add metadata
function loadAllPosts() {
    let posts = import.meta.glob<Glob>('/src/content/**/*.md', { eager: true });
    // strip /src/content/ from file name
    console.log(posts)

    // remove readme.md from posts
    delete posts['/src/content/README.md']
    delete posts['/src/content/_templates/Blog Post.md']

    let blogposts = []
    for (const [key, value] of Object.entries(posts)) {

        if (value.metadata === undefined) {
            console.error(`Missing metadata in ${key} - Removing post from posts.`);
            // remove post from posts
            delete posts[key]
        } else {
            console.log(value.metadata)
            value.metadata.slug = key.replace('/src/content/', '').replace('.md', '').replace(' ', '-')
            value.metadata.date = new Date(value.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // make sure tags are unique and sorted
            value.metadata.tags = [...new Set(value.metadata.tags)].sort();

            // add a full url to the post
            value.metadata.url = `/blog/${value.metadata.slug}`

            // flatten default and metadata
            let post = { ...value.metadata }
            post.content = value.default

            blogposts.push(post)
        }


    }
    // return just an array of values
    console.log(blogposts)
    return blogposts
}

export const posts = loadAllPosts();