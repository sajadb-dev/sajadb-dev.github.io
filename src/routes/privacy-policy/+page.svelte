<script lang="ts">
    import { marked } from "marked";
    import { onMount } from "svelte";

  let postcontent = $state();
  
  onMount(async () => {
		try {
			const response = await fetch('/legaldocs/privacy-policy.md'); // Use fetch instead of import()
			const text = await response.text();
			postcontent = marked(text); // Convert Markdown to HTML
		} catch (error) {
			console.error('Error loading markdown content:', error);
		}
	});
    
</script>

<div class="w-full min-h-[95lvh] py-48 flex flex-col items-center gap-12">
    <h1 class="text-4xl sm:text-7xl font-extrabold">Privacy Policy</h1>
    <div class="max-w-[90dvw] sm:max-w-[70dvw] lg:max-w-[50dvw] h-full flex flex-col overflow-hidden rounded-lg border border-slate-300 drop-shadow-md font-paper backdrop-blur-lg dark:backdrop-blur-sm">
        <div class="prose lg:prose-xl dark:prose-invert px-5 py-10">{@html postcontent}</div>
    </div>
</div>