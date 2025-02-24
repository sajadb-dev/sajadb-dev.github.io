import { games } from './data.js';

export function load() {
    return {
        summaries: games.map((game) => ({
            title: game.title,
            decription: game.description,
            image: game.image,
            tag: game.tag,
            link: game.link,
            store: game.store
        }))
    };
}