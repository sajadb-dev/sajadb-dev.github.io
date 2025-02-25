<script lang="ts">
    import Xlogo from "$lib/assets/xlogo.svelte";
    import Instagram from "$lib/assets/instagram.svelte";
    import Telegram from "$lib/assets/Telegram.svelte";
    import DevLogo from "$lib/assets/DevLogo.svelte";
    import Gamepad from "$lib/assets/Gamepad.svelte";
    import Storefront from "$lib/assets/Storefront.svelte";
  import { base } from "$app/paths";

    let y = $state(0);
	let mouse = $state();
	
	$effect(()=> {
		if(mouse) {
			if(y >= 25) {
			mouse.classList.add('moved-down');
		}
		else{
			mouse.classList.remove('moved-down');
		}
	}
	})
</script>
<div class="w-full h-[84lvh] relative md:pt-64 mb-20 flex flex-row overflow-hidden box-border" id="#section-1">
    <div id="lg-hero" class="mx-auto hidden md:inline">
        <p class="font-hurricane font-bold mx-auto text-8xl">I'm</p>
        <p class="mx-auto font-nunito font-bold text-9xl pl-16 bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">Sajad B.</p>
        <div class="font-dancin text-8xl pl-64 flex flex-row">
            <p class="text-6xl">a</p>
            <ul class="h-[6.75rem] mt-4 glow dark:glowdark overflow-hidden font-nunito font-bold ml-11 gap-5 flex flex-col">
                <li class="textflip mt-[-110px]">Game Dev</li>
                <li>3D Artist</li>
                <li>Coder</li>
            </ul>
        </div>
    </div>
    <div id="mobile-hero" class="mx-auto md:hidden flex flex-col justify-center text-center mt-28 gap-6">
        <p class="font-hurricane font-bold mx-auto text-6xl">I'm</p>
        <p class="mx-auto font-nunito font-bold text-7xl bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">Sajad B.</p>
        <div class="font-dancin flex flex-col gap-6">
            <p class="text-4xl w-full">a</p>
            <ul class="h-[4rem] text-6xl  mt-4 glow dark:glowdark overflow-hidden font-nunito font-bold gap-5 flex flex-col">
                <li class="textflip_mobile mt-[-80px]">Game Dev</li>
                <li>3D Artist</li>
                <li>Coder</li>
            </ul>
        </div>
    </div>
</div>
<div id="about" class="w-full flex flex-col relative">
    <div class="h-[71px] bg-teal-400 wave top"></div>
    <div class="w-full bg-teal-400">
        <div>
            <div id="section-2" class=" py-[7.5dvw] px-[10dvw] mx-auto items-center flex flex-col">
                <div class=" text-center font-nunito font-extrabold text-6xl text-slate-200 drop-shadow-lg">Join Me On My Journey!</div>
                <div class="mt-[4dvw] container flex box-content justify-center">
                    <div class="text-center text-slate-800 text-lg flex flex-col gap-16">
                        <p class="text-left sm:text-center">Hi, My name is Sajad, a passionate 3D artist and indie game developer dedicated to bringing immersive worlds to life.<br/>
                         With a strong eye for detail and a love for storytelling, I create visually stunning environments, characters,
                          and animations that enhance gameplay and player experiences.<br/>
                           Whether crafting realistic assets or experimenting with unique art styles,
                            I strive to push creative boundaries and deliver engaging, memorable games.</p>
                         <span class="text-slate-800 text-xl font-bold mb-4">Join me on my journey as an indie Dev!</span>
                    </div>
                </div>
            <div class="mt-[2dvw] flex">
                <ul class="w-full flex flex-col md:flex-row justify-center gap-4">
                    <li>
                        <a href="https://t.me/mygamedevbackpack" 
                            target="_blank"
                            class="w-48 flex justify-center text-white bg-[#1da1f2] hover:bg-[#1da1f2]/80 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#1da1f2]/55 gap-2">
                            <Telegram/>
                            <span>Join on Telegram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sajadb.dev/" 
                            target="_blank" 
                            class="w-48 flex justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm py-2.5 text-center items-center dark:focus:ring-[#1da1f2]/55 gap-2">
                            <Instagram classnames="w-4 h-4 fill-white"/>
                            <span>Follow on Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/sajadb_dev" 
                            target="_blank"
                            class="w-48 flex justify-center text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#1da1f2]/55 gap-2">
                            <Xlogo classnames="fill-white"/>
                            <span>Follow Me On <b>X</b></span>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    <div class="h-[71.3px] bg-teal-400 wave bottom">
    </div>
</div>
<div class="w-full flex py-12 sm:my-12 overflow-hidden">
    <div  class="w-9/12 m-auto">
        <ul class="h-full flex flex-col lg:flex-row items-center justify-center gap-[5dvw] lg:gap-[2dvw]">
            <li class="w-1/4 min-w-80 h-full flex flex-col p-8 rounded-lg border border-slate-300 drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
                <DevLogo classnames="w-full h-28"/>
                <h1 class="text-5xl font-bold font-nunito mx-auto">Blog</h1>
                <p class="mx-auto mt-8 mb-12">Check out the latest blog posts</p>
                <a href="{base}/blog" class="bg-black dark:bg-slate-100 text-white dark:text-black bg-gradient-to-r hover:from-slate-500 hover:to-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center">Check Out The Blogs</a>
            </li>
            <li class="w-1/4 min-w-80 h-full flex flex-col p-8 rounded-lg border border-slate-300 drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
                <Gamepad classnames="w-full h-28"/>
                <h1 class="text-5xl font-bold font-nunito mx-auto">Games</h1>
                <p class="mx-auto mt-8 mb-12">Check Out All My Games</p>
                <a href="{base}/games" class="bg-black dark:bg-slate-100 text-white dark:text-black bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center">Check Out The Games</a>
            </li>
            <li class="w-1/4 min-w-80 h-full flex flex-col p-8 rounded-lg border border-slate-300  drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
                <Storefront classnames="w-full h-28"/>
                <h1 class="text-5xl font-bold font-nunito mx-auto">Shop</h1>
                <p class="mx-auto mt-8 mb-12">Check out the Shop</p>
                <a href="{base}/shop" class="bg-black dark:bg-slate-100 text-white dark:text-black bg-gradient-to-r hover:from-teal-500 hover:to-lime-400 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center">Check Out The Shop</a>
            </li>
        </ul>
    </div>
</div>
<div bind:this={mouse} id="mouseicon" class="w-10 h-10 animate-bounce center dark:fill-white transition-transform fixed z-10 mouse-icon hidden sm:inline">
	<svg viewBox="0 0 24 24">
		<g id="Desktop_Mouse_2">
		  <g>
			<path d="M13.437,21.938H10.563a6.508,6.508,0,0,1-6.5-6.5V8.562a6.508,6.508,0,0,1,6.5-6.5h2.874a6.508,6.508,0,0,1,6.5,6.5v6.876A6.508,6.508,0,0,1,13.437,21.938ZM10.563,3.062a5.506,5.506,0,0,0-5.5,5.5v6.876a5.506,5.506,0,0,0,5.5,5.5h2.874a5.506,5.506,0,0,0,5.5-5.5V8.562a5.506,5.506,0,0,0-5.5-5.5Z"/>
			<path d="M11.5,6.541v4a.5.5,0,0,0,1,0v-4a.5.5,0,0,0-1,0Z"/>
		  </g>
		</g>
	  </svg>
</div>
<svelte:window bind:scrollY={y} />