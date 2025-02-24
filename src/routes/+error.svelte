<script lang="ts">
	import { page } from '$app/state';
    import Error404icon from '$lib/assets/Error404icon.svelte';
</script>
<div class="w-full h-[95dvh] flex flex-col pt-[25dvh]">
    <Error404icon classnames="w-full h-56"/>
    <h1 class="mx-auto text-9xl">.404 not found!</h1>
    <p class="mx-auto mt-12 font-nunito text-2xl">the page you are looking for was not found : <span class="text-extrabold">{page.error.message}</span> !</p>
</div>