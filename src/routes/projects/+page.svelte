<script lang="ts">
    import { onMount } from 'svelte';
    let username = 'sajadb-dev'; // Change to the desired GitHub username
    let repos: any[] = $state([]);
    let loading = true;
    let error = null;
    const image = "Front-end.jpg";

  onMount(async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) throw new Error('Failed to fetch repos');
      repos = await res.json();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  });
  $inspect(repos);
</script>

<div class="w-full min-h-[95lvh] py-32 sm:py-48 flex justify-center">
    <div class="min-w-[95dvw] sm:min-w-[90dvw] lg:min-w-[75dvw] h-full mx-4 flex flex-col items-center gap-16 sm:gap-28">
    <h1 class="text-4xl sm:text-7xl font-extrabold">Projects</h1>
    <ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each repos as repo}
            <li class="w-full container flex box-border">
                <div class="w-full h-full flex flex-col overflow-hidden rounded-lg border border-slate-300 font-paper bg-slate-200 dark:bg-gray-950">
                <img class="w-full h-32 object-cover" 
                    src={`/gamesassets/${image}`}
                    alt="">
                <div class="w-full h-full flex flex-col p-2 sm:p-4 sm:gap-4">
                    <a href="/">
                        <span class="bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">#{repo.topics[0]}</span>
                    </a>
                    <div class=" h-30 text-2xl sm:text-4xl font-extrabold">
                        <p class="line-clamp-2">{repo.name}</p>
                    </div>
                    <div>
                        <p class="line-clamp-2">
                            {repo.description}
                        </p>
                    </div>
                    <div class="flex justify-end m-4">
                        <a href={repo.html_url} target="_blank" aria-label="Visit repo Page" class="h-10 px-6 flex items-center bg-gray-500 text-white font-bold rounded-md border border-slate-300 drop-shadow-lg gap-2 hover:bg-opacity-85"> Go To Repo</a>
                    </div>
                </div>
            </div>
            </li>
        {/each}
    </ul>
    </div>
</div>