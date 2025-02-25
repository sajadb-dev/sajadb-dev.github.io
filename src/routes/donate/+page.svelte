<script lang="ts">
    import Cryptobitcoin from "$lib/assets/Cryptobitcoin.svelte";
    import Gamepad from "$lib/assets/Gamepad.svelte";
    import Storefront from "$lib/assets/Storefront.svelte";
    import { Toaster, toast } from "svelte-sonner";
    
    let { data } = $props();

    function copyToClipboard(tag : any) {
        const address = data.Coins.find((coin) => coin.chain === tag)?.address;
        
        if (!address) {
            toast.error("Bitcoin address not found!");
            return;
        }
        navigator.clipboard.writeText(address)
            .then(() => {
                toast.success("Copied to clipboard!");
            })
            .catch(err => {
                toast.error("Failed to copy:", err);
            });
    }

</script>
<div class="w-full min-h-[95lvh] py-48 flex justify-center">
    <Toaster richColors theme="dark"  />
    <div class="min-w-[95dvw] sm:min-w-[90dvw] lg:min-w-[75dvw] h-full mx-4 flex flex-col items-center gap-16 sm:gap-20">
        <h1 class="text-4xl sm:text-7xl font-extrabold">Donate</h1>
        <div class="w-full">
            <ul class="h-full flex flex-col md:flex-row items-center justify-center gap-[5dvw]">
                <li class="w-1/4 min-w-80 h-full flex flex-col gap-4 p-8 rounded-lg border border-slate-300 drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
                    <div class="flex flex-col items-center text-center justify-center">
                        <Gamepad classnames="w-full h-28"/>
                        <h1 class="text-5xl font-bold font-nunito mx-auto">Games</h1>
                    </div> 
                    <p class="mx-auto">Support me by buying my games</p>
                    <a href="/games" class="bg-black dark:bg-slate-100 text-white dark:text-black bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center">Check Out The Games</a>
                </li>
                <li class="w-1/4 min-w-80 h-full flex flex-col gap-4 p-8 rounded-lg border border-slate-300 drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
                    <div class="flex flex-col items-center text-center justify-center">
                        <Storefront classnames="w-full h-28"/>
                    </div>
                    <h1 class="text-5xl font-bold font-nunito mx-auto">Shop</h1>
                    <p class="mx-auto">Support me through the Shop</p>
                    <a href="/shop" class="bg-black dark:bg-slate-100 dark:text-black text-white bg-gradient-to-r hover:from-teal-500 hover:to-lime-400 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center">Check Out The Shop</a>
                </li>
            </ul>
        </div>
        <div class="w-full flex justify-center">
            <div class="w-1/4 sm:w-full min-w-80 h-full flex flex-col gap-6 items-center p-8 rounded-lg border border-slate-300 drop-shadow-lg font-paper backdrop-blur-lg dark:backdrop-blur-sm">
                <Cryptobitcoin classnames="w-full h-28"/>
                <h1 class="text-5xl font-bold font-nunito mx-auto">Crypto</h1>
                <div class="flex flex-col gap-4 font-bold">
                <p class="mx-auto">Support me by sending me crypto</p>
                <p class="mx-auto">(click to copy)</p>
                </div>
                <ul class="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
                    <li class="w-full"><button class="w-full bg-doge text-white hover:bg-opacity-65 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center" onclick={() => copyToClipboard('doge')}>DOGE Address</button></li>
                    <li class="w-full"><button class="w-full bg-ronin text-white hover:bg-opacity-65 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center" onclick={() => copyToClipboard('ronin')}>RONIN Address</button></li>
                    <li class="w-full"><button class="w-full bg-bitcoin text-white hover:bg-opacity-65 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center" onclick={() => copyToClipboard('bitcoin')}>Bitcoin Address</button></li>
                </ul>
            </div>
        </div>
    </div>
</div>