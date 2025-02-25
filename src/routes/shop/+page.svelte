<script lang="ts">
  import Storefront from "$lib/assets/Storefront.svelte";


</script>
<div class="w-full min-h-[95lvh] py-48 flex justify-center">
    <div class="min-w-[95dvw] sm:min-w-[90dvw] lg:min-w-[75dvw] h-full mx-4 flex flex-col items-center gap-16 sm:gap-28">
        <h1 class="text-5xl sm:text-7xl font-extrabold">Shop</h1>
        <div class="w-full h-full mt-12 sm:mt-1 flex flex-col justify-center items-center gap-6">
            <div class="w-full h-32 sm:h-44"><Storefront classnames="w-full h-full"/></div>
            <h1 class="text-4xl sm:text-6xl h-1/">.Closed!</h1>
            <p class="text-lg sm:text-2xl">Shop is Closed At the Moment !</p>
        </div>
    </div>
</div>