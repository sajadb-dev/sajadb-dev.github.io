import { posts } from "../../data.js";

export function load({ params }) {
    const postlist = posts.filter((post) => post.tag === params.tagsearch);
    return {
       postlist
    };
}