<script lang="ts">
  	import ArrowLeftAlt from '$lib/assets/ArrowLeftAlt.svelte';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	

	let { data } = $props();
	const src = data.post.content;
	let postcontent = $state();

	onMount(async () => {
		try {
			const response = await fetch(src); // Use fetch instead of import()
			const text = await response.text();
			postcontent = marked(text); // Convert Markdown to HTML
		} catch (error) {
			console.error('Error loading markdown content:', error);
		}
	});


</script>
<div class="w-full min-h-[95lvh] py-48 flex flex-col justify-center items-center gap-4">
	<div class="min-w-[90dvw] sm:min-w-[70dvw] lg:min-w-[50dvw] h-10 flex justify-start items-start">
		<button onclick={() => window.history.back()} class="h-full aspect-square">
			<ArrowLeftAlt classnames="w-full h-full"/>
		</button>
	</div>
	<div class="max-w-[90dvw] sm:max-w-[70dvw] lg:max-w-[50dvw] h-full flex flex-col overflow-hidden rounded-lg border border-slate-300 drop-shadow-2xl font-paper backdrop-blur-lg dark:backdrop-blur-sm">
		<img src={`/blogassets/${data.post.image}`} alt="" class="w-full h-60 object-cover"/>
		<div class="mx-4 my-6 flex flex-col gap-6">
			<div class="flex flex-col gap-4">
				<h1 class="text-2xl md:text-5xl font-extrabold">{data.post.title}</h1>
				<div class="flex gap-2">
					<a href="/blog/search/{data.post.tag}">
						<span class="bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">#{data.post.tag}</span>
					</a>
					<span class="font-extrabold">.</span>
					<p>{data.post.date}</p>
				</div>
			</div>
			<div id="blogcontnt" class="w-full prose lg:prose-xl dark:prose-invert">{@html postcontent}</div>
		</div>
	</div>
</div>