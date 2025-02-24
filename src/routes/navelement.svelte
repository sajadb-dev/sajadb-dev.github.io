<script>
    let {target = '', text = '', path = "", classnames = ''} = $props();
</script>

<li class="animated-background {classnames} my-auto text-black dark:text-white hover:drop-shadow-lg bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent hover:bg-clip-text"><a href={path} {target}>{text}</a></li>