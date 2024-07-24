export type Glob = {
    metadata: BlogPost;
    default: unknown;
};


export interface BlogSeries {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    url: string;
    pin: boolean;
    posts: BlogPost[];
    repo: string | null;
}

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
    series_url: string | null;

    previous: string | null;
    next: string | null;
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
            value.metadata.slug = key.replace('/src/lib/blog/articles/', '').replace('.md', '').replace(' ', '-').toLowerCase()
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

    // sort posts by slug
    blogposts.sort((a, b) => {
        return a.slug.localeCompare(b.slug)
    })

    // group posts by series if they start with the same slug

    // create a map in type script
    let series: { [key: string]: BlogSeries } = {}
    let single_posts: { [key: string]: BlogPost } = {}

    let currentSeries = null
    for (let post of blogposts) {
        // get the name after all the slashes
        let pieces = post.slug.split('/');
        let filename = pieces[pieces.length - 1]
        let rest = pieces.slice(0, pieces.length - 1).join('/')

        // if the name starts with a number then it is part of a series
        if (filename.match(/^\d+/)) {
            if (currentSeries == rest) {
                post.series_url = series[currentSeries].url
                post.slug = series[currentSeries].slug + "/" + filename.slice(3, post.slug.length)
                post.url = series[currentSeries].url + "/" + filename.slice(3, post.slug.length)

                // update the date
                series[currentSeries].date = post.date

                // update the tags
                series[currentSeries].tags = [...new Set(series[currentSeries].tags.concat(post.tags))].sort();

                let length = series[currentSeries].posts.length
                if (length > 0) {
                    series[currentSeries].posts[length - 1].next = post.url
                    post.previous = series[currentSeries].posts[length - 1].url
                }


                series[currentSeries].posts.push(post)
            } else {
                currentSeries = rest;
                let posts: BlogPost[] = [];

                if (filename.startsWith('0.')) {
                    posts = []
                } else {
                    post.series_url = "/blog/" + rest
                    post.slug = rest + "/" + filename.slice(3, post.slug.length)
                    post.url = "/blog/" + rest + "/" + filename.slice(3, post.slug.length)
                    post.previous = null
                    post.next = null
                    posts.push(post)
                }

                series[currentSeries] = {
                    title: post.title,
                    description: post.description,
                    date: post.date,
                    tags: post.tags,
                    url: "/blog/" + rest,
                    slug: rest,
                    posts,
                    pin: post.pin,
                    repo: post.repo
                }
            }
        } else {
            single_posts[post.slug] = post
        }
    }


    let all_map: { [key: string]: BlogPost | BlogSeries } = { ...single_posts, ...series }

    // sort entries by date
    let all = new Map(Object.entries(all_map))
    all = new Map([...all.entries()].sort((a, b) => {
        return new Date(b[1].date).getTime() - new Date(a[1].date).getTime()
    }))

    // move pinned posts to the top
    let pinned = new Map()
    let unpinned = new Map()

    all.forEach((value, key) => {
        if (value.pin) {
            pinned.set(key, value)
        } else {
            unpinned.set(key, value)
        }
    })

    all_map = { ...Object.fromEntries(pinned), ...Object.fromEntries(unpinned) }

    // return just an array of values
    return all_map
}

export const posts = loadAllPosts();