<script lang="ts">
	import '../app.css';
	import Navelement from './navelement.svelte';
	import XLogo from "$lib/assets/xlogo.svelte";
	import Instagram from '$lib/assets/instagram.svelte';
	import SbLogo from '$lib/assets/SBLogo.svelte';
	import MenuList from '$lib/assets/MenuList.svelte';
	import CloseIcon from '$lib/assets/CloseIcon.svelte';
	import { page } from '$app/state';
  	import { base } from '$app/paths';

	let { children } = $props();
	let menuicon = $state();
	let closeicon = $state();
	let navbar = $state();

	const pageUrl = $derived(() => page.url);

	function onclick() {
    	if (menuicon) menuicon.classList.toggle('hidden');
    	if (closeicon) closeicon.classList.toggle('hidden');
    	if (navbar) navbar.classList.toggle('h-14');
	}
	$effect(() => {
    if (pageUrl()) {
		if (navbar) 
			if(!navbar.classList.contains('h-14')) onclick();
    }
  });

</script>

<nav class="h-14 w-9/12 fixed container px-2 lg:px-4 mt-6 center rounded-lg border border-slate-300 drop-shadow-md backdrop-blur-2xl z-30 hidden md:inline">
	<div class="mx-12 h-full flex flex-row justify-between">
		<ul class="h-full my-auto flex flex-row gap-[5vw] lg:gap-[6vw] font-base text-lg">
			<li class="w-6 h-full"><a href="{base}/" class="w-full h-full flex"><SbLogo classnames="my-auto fill-black dark:fill-white"/></a></li>
			<Navelement path="{base}/blog" text="Blog"/>
			<Navelement path="{base}/games" text="Games"/>
			<Navelement path="{base}/shop" text="Shop"/>
		</ul>
		<ul class="my-auto flex flex-row justify-center text-center items-center gap-[3vw] font-base text-md">
			<li class=" bg-rose-500 px-2 rounded-md hover:bg-opacity-85 text-white"><a href="{base}/donate">Donate</a></li>
			<li class="w-4 h-4"><a class="" href="https://www.instagram.com/sajadb.dev/"><Instagram classnames="fill-black dark:fill-white hover:fill-red-500"/></a></li>
			<li class="w-4 h-4"><a class="" href="https://x.com/sajadb_dev"><XLogo classnames="fill-black dark:fill-white hover:fill-blue-900"/></a></li>
		</ul>
	</div>
</nav>
<nav bind:this={navbar} id="mobile-nav" class="top-4 left-4 w-[90dvw] h-14 overflow-hidden fixed center rounded-lg border border-slate-400 drop-shadow-2xl font-paper backdrop-blur-2xl z-30 md:hidden">
    <div class=" w-full h-14 mx-2 px-4 flex flex-row justify-between items-center relative">
		<div class="w-6 h-14"><a href="/" class="w-full h-full flex"><SbLogo classnames="my-auto fill-black dark:fill-white"/></a></div>
		<ul class="flex justify-center items-center gap-6">
			<li class="w-4 h-4"><a class="" href="https://www.instagram.com/sajadb.dev/"><Instagram classnames="fill-black dark:fill-white hover:fill-red-500"/></a></li>
			<li class="w-4 h-4 "><a class="" href="https://x.com/sajadb_dev"><XLogo classnames="fill-black dark:fill-white hover:fill-blue-900"/></a></li>
			<li class="h-8 ml-3">
				<button type="button" class="w-8 h-full" {onclick}>
					<div class="" bind:this={menuicon}>
						<MenuList  classnames="w-full h-full cursor-pointer fill-black dark:fill-white"/>
					</div>
					<div class="hidden" bind:this={closeicon}>
						<CloseIcon classnames="w-full h-full cursor-pointer fill-black dark:fill-white"/>
					</div>
				</button>
			</li>
	</div>
	<div>
		<div class="mx-6 my-6 h-full flex flex-row justify-between">
			<ul class="h-full my-auto flex flex-col gap-[6vw] font-base text-lg">
				<Navelement path="{base}/blog" text="Blog"/>
				<Navelement path="{base}/games" text="Games"/>
				<Navelement path="{base}/shop" text="Shop"/>
				<Navelement path="{base}/donate" text="Donate" classnames="text-lg text-orange-600 dark:text-orange-400 font-bold "/>
			</ul>
		</div>
	</div>
</nav>

{@render children()}
<div id="footer" class="w-full flex flex-col py-6 px-[10dvw] gap-8 border-t border-slate-300 drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
	<div class="flex flex-col lg:flex-row m-8 md:m-12 gap-12">
		<div class="w-full grid grid-cols-2 sm:flex sm:flex-row  gap-14 justify-between">
			<div class="flex flex-col gap-12 ">
				<h1 class="text-2xl text-gray-500 underline underline-offset-[10px]">Navigation</h1>
				<ul class="w-20 flex flex-col gap-6 font-base text-lg">
					<Navelement path="{base}/blog" text="Blog"/>
					<Navelement path="{base}/games" text="Games"/>
					<Navelement path="{base}/shop" text="Shop"/>
					<Navelement path="{base}/donate" text="Donate" classnames="text-lg text-orange-600 dark:text-orange-400 font-bold "/>
				</ul>
			</div>
			<div class="flex flex-col gap-12 ">
				<h1 class="text-2xl text-gray-500 underline underline-offset-[10px]">Connect</h1>
				<ul class="w-20 flex flex-col gap-6 font-base text-lg">
					<Navelement path="https://www.instagram.com/sajadb.dev/" text="Instagram" target="_blank"/>
					<Navelement path="https://x.com/sajadb_dev" text="Twitter/X" target="_blank"/>
					<Navelement path="https://www.linkedin.com/in/sajad-baghdadi" text="LinkedIn" target="_blank"/>
					<Navelement path="https://github.com/sajadb-dev" text="Github" target="_blank"/>
				</ul>
			</div>
			<div class="flex flex-col gap-12">
				<h1 class="text-2xl text-gray-500 underline underline-offset-[10px]">Policies</h1>
				<ul class="w-36 flex flex-col gap-6 font-base text-lg">
					<Navelement path="{base}/privacy-policy" text="Privacy Policy"/>
					<Navelement path="{base}/terms-services" text="Terms of Services"/>
				</ul>
			</div>

		</div>
		<div class="w-full flex justify-center">
			<div class="w-full lg:w-[25dvw] flex flex-col gap-4">
				<h1 class="text-2xl font-bold text-gray-500 underline underline-offset-[10px]">Get in touch with me:</h1>
				<form class="flex flex-col ml-4 gap-2" method="post" action="https://formspree.io/f/mnqygebo">
					<div class="relative z-0 w-full mb-5 group">
						<input type="name" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
					</div>
					<div class="relative z-0 w-full mb-5 group">
						<input type="text" name="name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
					</div>
					<div class="relative z-0 w-full mb-5 group">
						<input type="text" name="message" id="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="floating_message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
					</div>
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
				  </form>
			</div>
		</div>
	</div>
	<div class="w-full flex gap-6 border-t pt-8 sm:p-8">
		<p>Website Created by SajadB.dev</p>
		<p>|</p>
		<p>© Copyright. All Rights Reserved.</p>
	</div>
</div>
