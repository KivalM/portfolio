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
    pin: boolean;
    url: string;
    repo: string | null;
}

// Get all posts and add metadata
function loadAllPosts() {
    let posts = import.meta.glob<Glob>('/src/lib/blog/articles/**/*.md', { eager: true });
    // strip /src/content/ from file name
    // remove readme.md from posts
    delete posts['/src/lib/blog/articles/README.md']
    delete posts['/src/lib/blog/articles/_templates/Blog Post.md']

    let blogposts = []
    for (const [key, value] of Object.entries(posts)) {
        if (value.metadata === undefined) {
            // remove post from posts
            delete posts[key]
        } else {
            value.metadata.slug = key.replace('/src/lib/blog/articles/', '').replace('.md', '').replace(' ', '-')
            value.metadata.date = new Date(value.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // make sure tags are unique and sorted
            if (value.metadata.tags === undefined) {
                value.metadata.tags = []
            }

            // if tags is a string, then make it an array with 1 element
            if (typeof value.metadata.tags === 'string') {
                value.metadata.tags = [value.metadata.tags]
            }
            value.metadata.tags = [...new Set(value.metadata.tags)].sort();

            // add a full url to the post
            value.metadata.url = `/blog/${value.metadata.slug}`

            // flatten default and metadata
            let post = { ...value.metadata }
            post.content = value.default

            blogposts.push(post)
        }


    }

    // sort posts by date
    blogposts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    // move pinned posts to the top
    let pinned = blogposts.filter(post => post.pin === true)
    let unpinned = blogposts.filter(post => post.pin !== true)
    blogposts = pinned.concat(unpinned)



    // return just an array of values
    return blogposts
}

export const posts = loadAllPosts();