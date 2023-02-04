<template>
    <h1 class="text-xl">Welcome to this demo application</h1>
    <nav class="mt-8" v-once>
        <ul class="flex flex-col gap-3 md:grid md:grid-cols-3">
            <li v-for="(item, index) in items" :key="index" class="bg-gray-800 rounded shadow-md">
                <router-link :to="item.to" class="flex flex-col p-4 card">
                    <h2 class="text-lg font-bold text-transparent">{{ item.title }}</h2>
                    <p class="mt-2">{{ item.description }}</p>
                </router-link>
            </li>
        </ul>
    </nav>
    <footer class="mx-auto mt-8 text-center">
        <p>
            Curious about Weweb? You can try the editor <a href="https://www.weweb.io/" class="externalLink">here</a>,
            are even maybe develop component for it! (<a class="externalLink" href="https://github.com/weweb-assets"
                >Component examples</a
            >)
        </p>
        <p class="mt-2">
            Want to stay in touch? Feel free to contact me on
            <a class="externalLink" href="https://twitter.com/purple_orwel">Twitter</a>
        </p>
    </footer>
</template>

<script>
export default {
    setup() {
        return {
            items: [
                {
                    title: "Reflow",
                    to: "reflow",
                    description:
                        "A demonstration about how some methods can cause Reflow and a feeling of lag, and how to avoid it",
                },
                {
                    title: "On Track",
                    to: "on-track",
                    description:
                        "A demonstration about how onTrack method can be usefull to find what is causing a component reredering",
                },
                {
                    title: "Vue memo",
                    to: "vue-memo",
                    description:
                        "A demonstration about the v-memo directive, and how it can help you not rerender unchanged component",
                },
                {
                    title: "Lazy ref",
                    to: "lazy-ref",
                    description:
                        'A demonstration of a usefull pattern to not trigger computed dependencies for nothing (make them "lazy")',
                },
                {
                    title: "Shared effect",
                    to: "shared-effect",
                    description:
                        "A demonstration of how share different effects (computed, watch, etc) between several components. Usefull when some of them are heavy to compute",
                },
            ],
        };
    },
};
</script>

<style scoped lang="postcss">
.card {
    background-image: linear-gradient(to right, white, white 50%, theme(colors.orange.500) 50%);
    background-size: 200% 100%;
    background-position: 0;
    background-clip: text;
    transition: all 0.3s ease-in-out;
}
.card:hover {
    background-position: -100%;
}
</style>
