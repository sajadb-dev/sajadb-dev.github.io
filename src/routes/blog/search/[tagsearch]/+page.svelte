<script lang="ts">
    let { data } = $props();
</script>

<div class="w-full min-h-[95dvh] py-32 sm:py-48 flex justify-center">
    <div class="max-w-[95dvw] sm:max-w-[75dvw] lg:max-w-[55dvw] h-full mx-4 flex flex-col items-center gap-16 sm:gap-28">
    <h1 class="text-4xl sm:text-7xl font-extrabold">Recent Blog Posts</h1>
    <ul class="w-full flex flex-col gap-8"> 
        {#each data.postlist as { slug, title, date, tag, image }}
            <li class="w-full container sm:h-64 flex box-border">
                <div class="w-full h-full flex flex-col sm:flex-row sm:gap-4 overflow-hidden rounded-lg border border-slate-300 font-paper drop-shadow-lg backdrop-blur-lg dark:backdrop-blur-sm">
                <img class="w-full sm:w-auto h-32 sm:h-full sm:aspect-square object-cover" 
                    src={`/blogassets/${image}`}
                    alt="">
                <div class="w-full h-full flex flex-col p-2 sm:p-4 sm:gap-4">
                    <a href="/blog/search/{tag}">
                        <span class="bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">#{tag}</span>
                    </a>
                    <a href="/blog/{slug}" class="h-24 sm:h-full my-1 text-2xl font-bold hover:underline">
                        <p class="line-clamp-4">{title}</p>
                    </a>
                    <p class="">{date}</p>
                </div>
            </div>
            </li>
        {/each}
    </ul>
    </div>
</div>