<script lang="ts">
  import Itchdotio from '$lib/assets/Itchdotio.svelte';
  import SteamLogo from '$lib/assets/SteamLogo.svelte';

    let { data } = $props();
</script>
<div class="w-full min-h-[95lvh] py-32 sm:py-48 flex justify-center">
    <div class="min-w-[95dvw] sm:min-w-[90dvw] lg:min-w-[75dvw] h-full mx-4 flex flex-col items-center gap-16 sm:gap-28">
    <h1 class="text-4xl sm:text-7xl font-extrabold">Games</h1>
    <ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.summaries as { title, tag, image, link, store }}
            <li class="w-full container flex box-border">
                <div class="w-full h-full flex flex-col overflow-hidden rounded-lg border border-slate-300 font-paper bg-slate-200 dark:bg-gray-950">
                <img class="w-full h-32 object-cover" 
                    src={`/gamesassets/${image}`}
                    alt="">
                <div class="w-full h-full flex flex-col p-2 sm:p-4 sm:gap-4">
                    <a href="/">
                        <span class="bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">#{tag}</span>
                    </a>
                    <div class=" h-30 text-2xl sm:text-4xl font-extrabold">
                        <p class="line-clamp-2">{title}</p>
                    </div>
                    {#if store === 'itch.io'}
                    <div class="flex justify-end m-4">
                        <a href={link} target="_blank" class="h-10 px-6 flex items-center bg-itch text-white font-bold rounded-md border border-slate-300 drop-shadow-lg gap-2 hover:bg-opacity-85"><Itchdotio classnames="h-full"/> Buy on itch.io</a>
                    </div>
                    {:else if store === 'steam'}
                    <div class="flex justify-end m-4">
                        <a href={link} target="_blank" class="h-10 px-6 flex items-center bg-steam text-white font-bold rounded-md border border-slate-300 drop-shadow-lg gap-2 hover:bg-opacity-85"><SteamLogo/> Buy on Steam</a>
                    </div>
                    {/if}
                </div>
            </div>
            
            </li>
        {/each}
    </ul>
    </div>
</div>