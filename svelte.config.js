import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import relativeImages from 'mdsvex-relative-images';
import rehypeRewrite from 'rehype-rewrite';


function findAndReplaceImgTags(node) {
	if (node.type === 'element' && node.tagName === 'img') {
		node.tagName = 'enhanced:img';
	}

	if (node.type == 'raw' && node.value?.startsWith("<script>")) {
		// append the enhanced attribute after the imports that have an image in them (png, jpg, jpeg, gif, svg, webp, avif, tiff, bmp, ico), if it already has an enhanced attribute, don't add it again
		// node.value = node.value.replace(".png", ".png?enhanced");
		let re = /import.*\.(png|jpg|jpeg|gif|svg|webp|avif|tiff|bmp|ico).*;/g;
		let matches = node.value.match(re);
		if (matches) {
			node.value = node.value.replace(re, (match) => {
				if (match.includes("?enhanced")) return match;
				return match.replace("\";", "?enhanced\";");
			});
		}
	}


	if (node.children) {
		node.children.forEach(child => findAndReplaceImgTags(child));
	}
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [
		remarkUnwrapImages,
		relativeImages,
	],
	rehypePlugins: [
		[rehypeRewrite, {
			rewrite: (node) => {
				findAndReplaceImgTags(node);
				return node;
			}
		}],
	]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
