import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			tag: post.tag,
			date: post.date,
			title: post.title,
			image: post.image,
			
		}))
	};
}